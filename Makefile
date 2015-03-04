CURRENT_DIRECTORY := $(shell pwd)

.PHONY: install
install:
	@cd application ; npm install 

.PHONY: start
start:
	@fig run --rm web nodejs index.js

.PHONY: stop
stop:
	@fig stop

.PHONY: restart
restart:
	@fig stop web 
	@fig start web
	@fig logs

.PHONY: status
status:
	@fig ps

.PHONY: log
log:
	@fig logs

.PHONY: clean
clean:
	@fig rm --force

.PHONY: cli
cli:
	@fig run --rm web bash


