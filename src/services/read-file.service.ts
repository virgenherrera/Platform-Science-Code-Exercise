import { readFileSync } from 'fs';
import { join, resolve } from 'path';

export class ReadFileService {
  rows: string[];

  constructor(public readonly fileRelativePath: string) {
    this.setRowsFromFile(process.cwd(), fileRelativePath);
  }

  private setRowsFromFile(...paths: string[]) {
    const path = resolve(join(...paths));
    const stringFileContent = readFileSync(path, {
      encoding: 'utf8',
      flag: 'r',
    });

    this.rows = stringFileContent.split(/\r?\n/).filter((v) => !!v);
  }
}
