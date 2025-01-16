from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from tqdm import tqdm
import os
import re
from typing import List, Optional

# Modelo y tokenizador de Helsinki-NLP
MODEL_NAME = "Helsinki-NLP/opus-mt-es-en"
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSeq2SeqLM.from_pretrained(MODEL_NAME).cuda()  # Cargar en GPU

# Rutas de entrada y salida
DOCS_PATH = "docs"
BLOG_PATH = "blog"
OUTPUT_PATH = "i18n/en/docusaurus-plugin-content-docs/current"
OUTPUT_BLOG_PATH = "i18n/en/docusaurus-plugin-content-blog"

TRANSLATABLE_FOLDERS = ["machine-learning-wiki", "otros"]

def split_text(text: str, max_length: int = 400) -> List[str]:
    """
    Divide un texto largo en fragmentos más pequeños para evitar
    exceder el límite de tokens del modelo.

    Args:
        text (str): Texto a dividir.
        max_length (int): Longitud máxima permitida para cada fragmento.

    Returns:
        List[str]: Lista de fragmentos de texto.
    """
    lines = text.split("\n")
    chunks = []
    current_chunk = ""

    for line in lines:
        if len(current_chunk) + len(line) + 1 <= max_length:
            current_chunk += line + "\n"
        else:
            chunks.append(current_chunk.strip())
            current_chunk = line + "\n"

    if current_chunk:
        chunks.append(current_chunk.strip())

    return chunks

def translate_text(text: str) -> str:
    """
    Traduce texto del español al inglés usando el modelo.

    Args:
        text (str): Texto en español.

    Returns:
        str: Texto traducido al inglés.
    """
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True).to("cuda")
    outputs = model.generate(**inputs, max_length=512)
    return tokenizer.batch_decode(outputs, skip_special_tokens=True)[0]

def preserve_markdown_structure(content: str) -> List[dict]:
    """
    Identifica bloques traducibles y no traducibles en un archivo Markdown.

    Args:
        content (str): Contenido del archivo Markdown.

    Returns:
        List[dict]: Lista con bloques de contenido clasificados como traducibles o no.
    """
    patterns = [
        (r"(```[\s\S]*?```)", "code"),  # Bloques de código
        (r"(<img[\s\S]*?>)", "html"),  # Etiquetas HTML
        (r"(!?\[.*?\]\(.*?\))", "link"),  # Imágenes y enlaces
        (r"(\$\$[\s\S]*?\$\$|\$.*?\$)", "math"),  # Fórmulas matemáticas
        (r"({require\(.*?\)})", "require"),  # Requiere de Docusaurus
    ]

    blocks = []
    last_index = 0

    # Identificar y clasificar bloques no traducibles
    for pattern, block_type in patterns:
        for match in re.finditer(pattern, content):
            start, end = match.span()
            if last_index < start:
                blocks.append({"type": "text", "content": content[last_index:start]})
            blocks.append({"type": block_type, "content": content[start:end]})
            last_index = end

    # Agregar cualquier texto restante como traducible
    if last_index < len(content):
        blocks.append({"type": "text", "content": content[last_index:]})

    return blocks

def translate_markdown(file_path: str, output_path: str) -> None:
    """
    Traduce un archivo Markdown del español al inglés.

    Args:
        file_path (str): Ruta del archivo Markdown de entrada.
        output_path (str): Ruta del archivo traducido de salida.
    """
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()

    # Separar frontmatter y cuerpo
    frontmatter_match = re.match(r"^(---[\s\S]*?---)([\s\S]*)", content)
    if frontmatter_match:
        frontmatter, body = frontmatter_match.groups()
    else:
        frontmatter, body = "", content

    # Procesar el cuerpo preservando el formato Markdown
    blocks = preserve_markdown_structure(body)
    translated_body = ""

    for block in blocks:
        if block["type"] == "text":
            for chunk in split_text(block["content"]):
                translated_body += translate_text(chunk) + "\n"
        else:
            translated_body += block["content"] + "\n"

    with open(output_path, "w", encoding="utf-8") as output_file:
        output_file.write(f"{frontmatter}\n{translated_body}")

def translate_folder(
    input_path: str,
    output_path: str,
    folders_to_include: Optional[List[str]] = None
) -> None:
    """
    Traduce todos los archivos Markdown en una carpeta.

    Args:
        input_path (str): Ruta de la carpeta de entrada.
        output_path (str): Ruta de la carpeta de salida.
        folders_to_include (Optional[List[str]]): Carpetas específicas a incluir.
    """
    files_to_translate = []
    for root, dirs, files in os.walk(input_path):
        relative_root = os.path.relpath(root, input_path)
        if folders_to_include and relative_root not in folders_to_include and relative_root != ".":
            continue

        for file in files:
            if file.endswith(".md"):
                input_file_path = os.path.join(root, file)
                relative_path = os.path.relpath(input_file_path, input_path)
                output_file_path = os.path.join(output_path, relative_path)
                files_to_translate.append((input_file_path, output_file_path))

    for input_file_path, output_file_path in tqdm(files_to_translate, desc="Translating files", unit="file"):
        translate_markdown(input_file_path, output_file_path)

if __name__ == "__main__":
    print("Starting translation...")

    for folder in TRANSLATABLE_FOLDERS:
        input_folder_path = os.path.join(DOCS_PATH, folder)
        output_folder_path = os.path.join(OUTPUT_PATH, folder)
        translate_folder(input_folder_path, output_folder_path)

    translate_folder(BLOG_PATH, OUTPUT_BLOG_PATH)

    print("Translation completed!")
