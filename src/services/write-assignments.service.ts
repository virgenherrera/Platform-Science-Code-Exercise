import { WriteStream, createWriteStream } from 'fs';
import { mkdir } from 'fs/promises';
import { join, parse, resolve } from 'path';
import { Assignment } from '../models';

export class WriteAssignmentsService {
  private destinyPath: string;
  private writeStream: WriteStream;

  constructor(
    private readonly destiny: string,
    private readonly assignments: Assignment[],
  ) {}

  async writeFile() {
    this.destinyPath = resolve(join(process.cwd(), this.destiny));
    await this.ensurePath(this.destinyPath);

    this.writeStream = createWriteStream(this.destinyPath, {
      encoding: 'utf8',
    });

    this.assignments.forEach(this.writeLine.bind(this));
  }

  private async ensurePath(destinyPath) {
    const { dir } = parse(destinyPath);

    await mkdir(dir, { recursive: true });
  }

  private writeLine({ address, driver, ss }: Assignment, idx: number): void {
    const pre = idx > 0 ? '' : 'Address, Driver, SS\n';
    const line = `${pre}${address}, ${driver}, ${ss},` + '\n';

    this.writeStream.write(line);
  }
}
