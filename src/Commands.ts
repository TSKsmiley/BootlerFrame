import { CustomClient as Client } from "./lib/CustomClient";
import { Command } from "./lib/Command";

import ping from "./commands/ping";


export const Commands: Command[] = [ping]

export function buildCommands(client: Client ): void {
    for(const command of Commands){
        client.commands.set(command.data.name,command);
    }
}