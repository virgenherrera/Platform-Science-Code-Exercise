import { ICommand } from '../interfaces';

export class AssignShipments implements ICommand {
  command = 'assign-shipment';
  alias = 'as';
  arguments = '<destinationsFile> <driversFile>';

  description =
    'Assigns shipment destinations to drivers in a way that maximizes the total SS over the set of drivers.';

  action(destinationsFileArg: string, driversFileArg: string): void {
    console.log({ destinationsFileArg, driversFileArg });
  }
}
