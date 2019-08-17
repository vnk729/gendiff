install:
	npm install

start:
	npx babel-node src/bin/gendiff.js

lint:
	npx eslint .

test:
	npm test

watch:
	npm test -- --watch

publish:
	npm publish --dry-run
