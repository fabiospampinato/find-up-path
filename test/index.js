
/* IMPORT */

import {describe} from 'fava';
import path from 'node:path';
import process from 'node:process';
import findUpPath from '../dist/index.js';

/* MAIN */

describe ( 'Find Up Path', it => {

  it ( 'can find a file path from the cwd', t => {

    const resultPath = findUpPath ( 'package.json' );
    const packagePath = path.join ( process.cwd (), 'package.json' );

    t.is ( resultPath, packagePath );

  });

  it ( 'can find a file from a custom folder', t => {

    const resultPath = findUpPath ( 'package.json', path.resolve ( './test' ) );
    const packagePath = path.join ( process.cwd (), 'package.json' );

    t.is ( resultPath, packagePath );

  });

  it ( 'does not throw if the file cannot be found', t => {

    const resultPath = findUpPath ( 'asdasdasd.jsonc' );

    t.is ( resultPath, undefined );

  });

});
