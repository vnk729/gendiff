install:
	npm install

start:
	npx babel-node src/bin/gendiff.js

lint:
	npx eslint .

publich:
	npm publish --dry-run
