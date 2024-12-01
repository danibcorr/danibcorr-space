# Permite indicar que los targets que definimos son comandos
.PHONY: build translate run

# Definimos el target por defecto del Makefile
.DEFAULT_GOAL := all

translate:
	@echo "Traducir en inglés el contenido de la Wiki..."
	poetry run python ./scripts/translator_2.py

run:
	@echo "Testear la Wiki localmente..."
	npm run serve

build:
	@echo "Limpiando cache de yarn..."
	yarn cache clean
	@echo "Instalando las dependencias de yarn..."
	yarn install
	@echo "Creando los ficheros de configuración para la traducción..."
	npm run write-translations
	@echo "Construyendo la documentación..."
	yarn build

all: build run
