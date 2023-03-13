import { ChatInputCommandInteraction } from "discord.js";
import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from "src/lib/Command";

export default {
	data: new SlashCommandBuilder()
		.setName('NAME')
		.setDescription('DESC'),
	async execute(interaction:ChatInputCommandInteraction) {
        // Code
	},
} as Command