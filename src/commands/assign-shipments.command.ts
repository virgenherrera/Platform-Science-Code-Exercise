import { ICommand } from '../interfaces';
import { AssignSsService, ReadFileService } from '../services';

export class AssignShipments implements ICommand {
  command = 'assign-shipment';
  alias = 'as';
  arguments = '<destinationsFile> <driversFile>';
  description =
    'Assigns shipment destinations to drivers in a way that maximizes the total SS over the set of drivers.';

  action(destinationsFileArg: string, driversFileArg: string): void {
    const { rows: addresses } = new ReadFileService(destinationsFileArg);
    const { rows: drivers } = new ReadFileService(driversFileArg);

    const { assignments } = new AssignSsService(addresses, drivers);

    console.log(assignments.map((v) => v.ss).join(','));
  }
}
