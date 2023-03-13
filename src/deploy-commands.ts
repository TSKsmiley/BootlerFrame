/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { REST, RESTPostAPIChatInputApplicationCommandsJSONBody, Routes } from "discord.js"; 
import { Commands } from "./commands";


import * as dotenv from "dotenv"
dotenv.config()


const commands: RESTPostAPIChatInputApplicationCommandsJSONBody[] = [];


main();

function main(): void{
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const command of Commands) {
        commands.push(command.data.toJSON());
    }

    if (process.env.BOT_TOKEN == undefined) return console.log("Check .env (BOT_TOKEN)");

    // Construct and prepare an instance of the REST module
    const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

    // and deploy your commands!
    void (async () => {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);

            // The put method is used to fully refresh all commands in the guild with the current set
            if (process.env.BOT_ID == undefined) return console.log("Check .env (BOT_TOKEN)");


            await rest.put(
                Routes.applicationCommands(process.env.BOT_ID),
                { body: commands },
            );

            console.log(`Successfully reloaded application (/) commands.`);
        } catch (error) {
            // And of course, make sure you catch and log any errors!
            console.error(error);
        }
    })();
}
