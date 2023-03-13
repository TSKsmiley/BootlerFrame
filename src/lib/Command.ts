import { type SlashCommandBuilder } from '@discordjs/builders';
import type * as djs from "discord.js";


export interface Command extends djs.ChatInputApplicationCommandData {
    data: SlashCommandBuilder;
    execute(interaction: djs.ChatInputCommandInteraction): Promise<void>;
}