import { Command } from 'commander';
import * as Commands from './commands';
import { AppPackage, ICommand } from './interfaces';
import { readJsonFile } from './utils';

const vFlags = ['-v', '--version'];
const appPackage = readJsonFile<AppPackage>('package.json');
const program = new Command();
const availableCommands = [];

program
  .name(appPackage.name)
  .version(appPackage.version, vFlags.join(', '))
  .description(appPackage.description);

Object.keys(Commands).forEach((key) => {
  const command: ICommand = new Commands[key]();

  availableCommands.push(command.command, command.alias);

  program
    .command(command.command)
    .alias(command.alias)
    .arguments(command.arguments)
    .description(command.description)
    .action(command.action);
});

// if none or invalid option was received
const [, , firstArg = null] = process.argv;
if (['-h', '--help', ...vFlags, ...availableCommands].indexOf(firstArg) < 0) {
  console.warn(appPackage.name + ' Exception');

  if (firstArg) {
    console.warn(`${'\n\t'}unknown command received: "${firstArg}"${'\n'}`);
  }

  program.outputHelp();
  process.exit();
}

program.parse(process.argv);
