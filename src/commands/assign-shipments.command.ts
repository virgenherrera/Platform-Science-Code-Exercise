import { ICommand } from '../interfaces';
import { ProcessService } from '../services';

export class AssignShipments implements ICommand {
  command = 'assign-shipment';
  alias = 'as';
  arguments = '<addressesFile> <driversFile> <assignmentDestiny>';
  description =
    'Assigns shipment destinations to drivers in a way that maximizes the total SS over the set of drivers.';

  async action(
    addressesFileArg: string,
    driversFileArg: string,
    assignmentDestinyArg: string,
  ): Promise<void> {
    const processService = new ProcessService(
      addressesFileArg,
      driversFileArg,
      assignmentDestinyArg,
    );

    await processService.exec();
  }
}
