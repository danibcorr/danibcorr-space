# Permite indicar que los targets que definimos son comandos
.PHONY: translate run check-outdated update build all

# Definimos el target por defecto del Makefile
.DEFAULT_GOAL := all

translate:
	@echo "Traducir en inglés el contenido de la Wiki..."
	poetry run python ./scripts/translator_2.py

run:
	@echo "Testear la Wiki localmente..."
	npm run start

check-outdated:
	@echo "Comprobar dependencias..."
	npm outdated

update:
	@echo "Actualizar dependencias..."
	npm update

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
