export interface AppPackage {
  name: string;
  version: string;
  description: string;
}

export interface ICommand {
  command: string;
  alias: string;
  arguments: string;
  description: string;
  action(...opts: any[]): void | Promise<void>;
}
