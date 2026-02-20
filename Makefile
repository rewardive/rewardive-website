.PHONY: dev build start lint install clean

## Install dependencies
install:
	npm install

## Start the development server
dev:
	npm run dev

## Build for production
build:
	npm run build

## Start the production server (requires build first)
start:
	npm run start

## Run lint checks
lint:
	npm run lint

## Build and immediately start (production preview)
preview: build start

## Remove build artifacts and node_modules
clean:
	rm -rf .next
	rm -rf node_modules

## Reinstall from scratch (clean + install)
reset: clean install
