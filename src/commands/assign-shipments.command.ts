import { ICommand } from '../interfaces';
import { getFileAsLines } from '../utils';

export class AssignShipments implements ICommand {
  command = 'assign-shipment';
  alias = 'as';
  arguments = '<destinationsFile> <driversFile>';

  description =
    'Assigns shipment destinations to drivers in a way that maximizes the total SS over the set of drivers.';

  async action(
    destinationsFileArg: string,
    driversFileArg: string,
  ): Promise<void> {
    const destinations = getFileAsLines(process.cwd(), destinationsFileArg);
    const drivers = getFileAsLines(process.cwd(), driversFileArg);

    console.log({ drivers, destinations });
  }
}
