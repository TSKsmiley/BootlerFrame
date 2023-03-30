import { CustomClient as Client } from "./lib/CustomClient";

import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";

import * as dotenv from "dotenv"
import { buildCommands } from "./Commands";
dotenv.config();

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

buildCommands(client);

ready(client);
interactionCreate(client);

void client.login(process.env.BOT_TOKEN); 
