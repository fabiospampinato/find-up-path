# Find Up Path

Find the path of the first file matching a given name, walking the filesystem upwards.

## Install

```sh
npm install --save find-up-path
```

## Usage

```ts
import findUpPath from 'find-up-path';

const packagePath = findUpPath ( 'package.json' ); // => '/path/to/package.json' | undefined
```

## License

MIT © Fabio Spampinato
