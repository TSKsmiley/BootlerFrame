import { Client } from "discord.js";

export default (client: Client): void => {
    client.on("ready", () => {

        if (!client.user || !client.application) return; // guard
        
        console.log(`onReady: loggged in as ${client.user.username}`);
    });
}; 