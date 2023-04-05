import { AssignSsService } from './assign-ss.service';
import { ParseAssignmentsService } from './parse-assignments.service';
import { ReadFileService } from './read-file.service';
import { WriteAssignmentsService } from './write-assignments.service';

export class ProcessService {
  constructor(
    private addressesFileArg: string,
    private driversFileArg: string,
    private assignmentDestinyArg: string,
  ) {}

  async exec(): Promise<void> {
    const { rows: addresses } = new ReadFileService(this.addressesFileArg);
    const { rows: drivers } = new ReadFileService(this.driversFileArg);
    const { sortedAssignments } = new AssignSsService(addresses, drivers);
    const { parsedAssignments } = new ParseAssignmentsService(
      sortedAssignments,
    );
    const writeAssignmentsService = new WriteAssignmentsService(
      this.assignmentDestinyArg,
      parsedAssignments,
    );

    await writeAssignmentsService.writeFile();
  }
}
