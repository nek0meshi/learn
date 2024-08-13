.PHONY: up
up:
	docker compose up

.PHONY: down
down:
	docker compose down

.PHONY: sh
sh:
	docker compose exec backend bash

# https://hub.docker.com/_/composer
.PHONY: composer
composer:
	docker run --rm -v $(PWD)/backend:/app composer:latest install

# https://hub.docker.com/_/composer
.PHONY: composer-sh
composer-sh:
	docker run --rm -it -v $(PWD)/backend:/app composer:latest sh
