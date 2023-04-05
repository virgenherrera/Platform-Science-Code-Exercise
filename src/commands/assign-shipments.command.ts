import { ICommand } from '../interfaces';
import {
  AssignSsService,
  FilterAssignmentsService,
  ReadFileService,
} from '../services';

export class AssignShipments implements ICommand {
  command = 'assign-shipment';
  alias = 'as';
  arguments = '<destinationsFile> <driversFile>';
  description =
    'Assigns shipment destinations to drivers in a way that maximizes the total SS over the set of drivers.';

  action(destinationsFileArg: string, driversFileArg: string): void {
    const { rows: addresses } = new ReadFileService(destinationsFileArg);
    const { rows: drivers } = new ReadFileService(driversFileArg);
    const { sortedAssignments } = new AssignSsService(addresses, drivers);
    const { assignments } = new FilterAssignmentsService(sortedAssignments);

    console.log(assignments);
  }
}
