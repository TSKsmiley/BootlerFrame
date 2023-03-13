import { Client } from "discord.js";
import type * as djs from "discord.js";
import { Command } from "./Command";

export class CustomClient extends Client{
    commands: Map<string, Command>
    constructor(options: djs.ClientOptions){
        super(options);
        this.commands = new Map<string, Command>;
    }
}