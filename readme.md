# Find Up Path

Find the path of the first file matching a given name, walking the filesystem upwards.

## Install

```sh
npm install find-up-path
```

## Usage

```ts
import findUpPath from 'find-up-path';

// Let's find the path of the nearest `package.json` file

const packagePath = findUpPath ( 'package.json' ); // => '/path/to/package.json' | undefined
```

## License

MIT © Fabio Spampinato
