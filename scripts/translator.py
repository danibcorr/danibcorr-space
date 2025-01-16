# Librerias
import os
import re
from typing import List, Optional

from deep_translator import GoogleTranslator
from tqdm import tqdm

# Rutas de entrada y salida
DOCS_PATH = "docs"
BLOG_PATH = "blog"
OUTPUT_PATH = "i18n/en/docusaurus-plugin-content-docs/current"
OUTPUT_BLOG_PATH = "i18n/en/docusaurus-plugin-content-blog"

# Carpetas específicas a traducir dentro de `docs`
TRANSLATABLE_FOLDERS = ["machine-learning-wiki", "otros"]


def split_text(text: str, max_length: int = 4000) -> List[str]:
    """
    Divide un texto largo en fragmentos más pequeños para evitar
    exceder el límite de caracteres del traductor.

    Args:
        text (str): El texto a dividir.
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
            chunks.append(current_chunk)
            current_chunk = line + "\n"

    if current_chunk:
        chunks.append(current_chunk)

    return chunks


def translate_markdown(file_path: str, output_path: str) -> None:
    """
    Traduce un archivo Markdown del español al inglés y guarda el resultado en la ubicación especificada.

    Args:
        file_path (str): Ruta del archivo Markdown de entrada.
        output_path (str): Ruta del archivo traducido de salida.
    """
    # Crea la carpeta de salida si no existe
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    # Lee el contenido del archivo original
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()

    # Extrae el frontmatter y el cuerpo del contenido
    frontmatter_match = re.match(r"^(---[\s\S]*?---)([\s\S]*)", content)
    if frontmatter_match:
        frontmatter, body = frontmatter_match.groups()
    else:
        frontmatter, body = "", content

    # Divide el cuerpo en fragmentos para la traducción
    translator = GoogleTranslator(source="es", target="en")
    translated_body = ""
    for chunk in split_text(body):
        translated_body += translator.translate(chunk)

    # Escribe el archivo traducido
    with open(output_path, "w", encoding="utf-8") as output_file:
        output_file.write(f"{frontmatter}\n{translated_body}")


def translate_folder(
    input_path: str, 
    output_path: str, 
    folders_to_include: Optional[List[str]] = None
) -> None:
    """
    Traduce todos los archivos Markdown de una carpeta y sus subcarpetas.

    Args:
        input_path (str): Ruta de la carpeta de entrada.
        output_path (str): Ruta de la carpeta de salida.
        folders_to_include (Optional[List[str]]): Lista de carpetas específicas a traducir.
    """
    # Recopila todos los archivos Markdown a traducir
    files_to_translate = []
    for root, dirs, files in os.walk(input_path):
        # Filtra las carpetas si es necesario
        relative_root = os.path.relpath(root, input_path)
        if folders_to_include and relative_root not in folders_to_include and relative_root != ".":
            continue

        for file in files:
            if file.endswith(".md"):
                input_file_path = os.path.join(root, file)
                relative_path = os.path.relpath(input_file_path, input_path)
                output_file_path = os.path.join(output_path, relative_path)
                files_to_translate.append((input_file_path, output_file_path))

    # Traduce los archivos con una barra de progreso
    for input_file_path, output_file_path in tqdm(
        files_to_translate, desc="Translating files", unit="file"
    ):
        translate_markdown(input_file_path, output_file_path)


if __name__ == "__main__":
    print("Starting translation process...")

    # Traduce las carpetas especificadas en `docs`
    for folder in TRANSLATABLE_FOLDERS:
        input_folder_path = os.path.join(DOCS_PATH, folder)
        output_folder_path = os.path.join(OUTPUT_PATH, folder)
        translate_folder(input_folder_path, output_folder_path)

    # Traduce la carpeta `blog`
    translate_folder(BLOG_PATH, OUTPUT_BLOG_PATH)

    print("Translation process completed!")
