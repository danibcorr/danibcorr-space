# Permite indicar que los targets que definimos son comandos
.PHONY: build

# Definimos el target por defecto del Makefile
.DEFAULT_GOAL := all

run:
	@echo "Testear la Wiki localmente..."
	npm run serve

build:
	@echo "Limpiando cache de yarn..."
	yarn cache clean
	@echo "Instalando las dependencias de yarn..."
	yarn install
	@echo "Construyendo la documentación..."
	yarn build

all: build run
