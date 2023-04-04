import { readFileSync } from 'fs';
import { join, resolve } from 'path';

export function getFileAsLines(...paths: string[]): string[] {
  const path = resolve(join(...paths));
  const stringFileContent = readFileSync(path, {
    encoding: 'utf8',
    flag: 'r',
  });

  return stringFileContent.split(/\r?\n/).filter((v) => !!v);
}
