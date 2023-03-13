import { ChatInputCommandInteraction, } from "discord.js";
import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from "src/lib/Command";


export default {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction:ChatInputCommandInteraction) {
		await interaction.reply('Pong!');
	},
} as Command