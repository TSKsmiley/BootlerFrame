# Getting started
if you want to skipt the setup part scroll to the bottom to see available scripts a
### installing dependencies
if you don't already have yarn install it with:
```bash 
npm install --global yarn
```

now install dependecies
```bash 
yarn install
```
### setting up the enviroment variables
copy the ```example.env``` file and name it ``.env`` and put in your token and id

### creating a command
first create a copy of the ``!template.ts`` file located in ``src/commands/`` and call it something of your chosing. Set the name and description, and fill in your code.

**example:** (do note the example code is already implemented)
```ts
...

export default {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction:ChatInputCommandInteraction) {
		await interaction.reply('Pong!');
	},
} as Command
```

add your command to the ``commands.ts`` file located in ``src/``
**example:**
```ts
import ping from "./commands/ping";


export const Commands: Command[] = [ping]
```
the last step before actually running the bot, tell discord what commands we have

### Updating discord (/) commands

```bash
yarn run deploy
```
if you want to make guild specific commands you have to edit the ``deploy-commands.ts`` file located in ``src/``

### running the bot
starting the bot can be done in two ways with or without nodemon

starts the bot with nodemon
```bash
yarn run watch
```
starts the bot normaly 
```bash
yarn run start
```
# notes
if you are getting erros you souldn't be getting try restarting the TS language server: 
<kbd>F1</kbd> &rarr; ``>Typescript: Restart TS server``
# yarn Commands / Scripts

starts the bot with nodemon
```bash
yarn run watch
```
starts the bot
```bash
yarn run start normally
```
this command updates the slashcommands on the discord side
```bash
yarn run deploy
```
if you have the eslint extention (vscode) you probably wont need this:
```bash
yarn run lint
```
