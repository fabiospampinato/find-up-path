
/* IMPORT */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

/* MAIN */

const findUpPath = ( fileName: string, folderPath: string = process.cwd (), maxDepth: number = 25 ): string | undefined => {

  let filePath = path.normalize ( path.join ( folderPath, fileName ) );
  let depth = 1;

  while ( true ) {

    if ( depth > maxDepth ) return;

    if ( fs.existsSync ( filePath ) ) return filePath;

    folderPath = path.resolve ( folderPath, '..' );

    const filePathNext = path.normalize ( path.join ( folderPath, fileName ) );

    if ( filePathNext === filePath ) return;

    filePath = filePathNext;
    depth += 1;

  }

};

/* EXPORT */

export default findUpPath;
