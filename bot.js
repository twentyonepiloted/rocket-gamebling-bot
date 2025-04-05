const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
// const { clientId, guildId, token } = require('./config.json'); // Remove this line
const commandList = require('./commands');
require('dotenv').config(); // Add this line to load environment variables

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
    ],
});

client.commands = new Discord.Collection();

for (const command of commandList) {
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log('Bot is ready!');
    // Register slash commands
    const rest = new REST({ version: '9' }).setToken(process.env.TOKEN); // Use process.env.TOKEN

    (async () => {
        try {
            console.log('Started refreshing application (/) commands.');

            await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), // Use process.env.CLIENT_ID and process.env.GUILD_ID
                { body: commandList.map(command => command.data.toJSON()) },
            );

            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    const prefix = '@Rocket Gambling Bot'; // Adjust the prefix as needed

    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (commandName === 'blackjack' || commandName === 'bj') {
            const bet = args[0];
            const mode = args[1];
            client.commands.get('blackjack').executeMessage(message, bet, mode);
        } else if (commandName === 'coinflip' || commandName === 'cf') {
            const prediction = args[0];
            const bet = args[1];
            client.commands.get('coinflip').executeMessage(message, prediction, bet);
        } else if (commandName === 'connectfour' || commandName === 'c4' || commandName === 'connect4') {
            client.commands.get('connectfour').executeMessage(message);
        } else if (commandName === 'crash' || commandName === 'cr') {
            const bet = args[0];
            const mode = args[1];
            client.commands.get('crash').executeMessage(message, bet, mode);
        } else if (commandName === 'findthelady' || commandName === 'ftl') {
            const bet = args[0];
            const mode = args[1];
            client.commands.get('findthelady').executeMessage(message, bet, mode);
        } else if (commandName === 'gamble' || commandName === 'g' || commandName === 'play') {
            const bet = args[0];
            const mode = args[1];
            client.commands.get('gamble').executeMessage(message, bet, mode);
        } else if (commandName === 'higherorlower' || commandName === 'hol') {
            client.commands.get('higherorlower').executeMessage(message);
        } else if (commandName === 'poker' || commandName === 'pkr') {
            const ante = args[0];
            const bonus = args[1];
            client.commands.get('poker').executeMessage(message, ante, bonus);
        } else if (commandName === 'race' || commandName === 'r') {
            const racerType = args[0];
            const prediction = args[1];
            const bet = args[2];
            client.commands.get('race').executeMessage(message, racerType, prediction, bet);
        } else if (commandName === 'rollDice' || commandName === 'roll' || commandName === 'ro' || commandName === 'rd' || commandName === 'dr' || commandName === 'diceRoll' || commandName === 'dice') {
            const diceType = args[0];
            const prediction = args[1];
            const bet = args[2];
            client.commands.get('roll').executeMessage(message, diceType, prediction, bet);
        } else if (commandName === 'roulette' || commandName === 'rou') {
            const prediction = args[0];
            const bet = args[1];
            client.commands.get('roulette').executeMessage(message, prediction, bet);
        } else if (commandName === 'rockPaperScissors' || commandName === 'rps') {
            const selection = args[0];
            const bet = args[1];
            client.commands.get('rockpaperscissors').executeMessage(message, selection, bet);
        } else if (commandName === 'sevens' || commandName === 'sv') {
            const prediction = args[0];
            const bet = args[1];
            client.commands.get('sevens').executeMessage(message, prediction, bet);
        } else if (commandName === 'slots' || commandName === 'sl' || commandName === 'slot') {
            const bet = args[0];
            client.commands.get('slots').executeMessage(message, bet);
        } else if (commandName === 'tictactoe' || commandName === 'ttt') {
            client.commands.get('tictactoe').executeMessage(message);
        } else if (commandName === 'cooldowns' || commandName === 'cd' || commandName === 'c') {
            const detailed = args[0];
            client.commands.get('cooldowns').executeMessage(message, detailed);
        } else if (commandName === 'daily') {
            client.commands.get('daily').executeMessage(message);
        } else if (commandName === 'gift' || commandName === 'gifts') {
            const recipient = args[0];
            client.commands.get('gift').executeMessage(message, recipient);
        } else if (commandName === 'goals' || commandName === 'tasks' || commandName === 't') {
            client.commands.get('goals').executeMessage(message);
        } else if (commandName === 'lookup' || commandName === 'find') {
            const user = args[0];
            const page = args[1];
            client.commands.get('lookup').executeMessage(message, user, page);
        } else if (commandName === 'lotto' || commandName === 'lottery' || commandName === 'ticket' || commandName === 'tickets') {
            const ticketsToBuy = args[0];
            client.commands.get('lotto').executeMessage(message, ticketsToBuy);
        } else if (commandName === 'monthly' || commandName === 'patron') {
            client.commands.get('monthly').executeMessage(message);
        } else if (commandName === 'overtime' || commandName === 'ot') {
            client.commands.get('overtime').executeMessage(message);
        } else if (commandName === 'prestige') {
            client.commands.get('prestige').executeMessage(message);
        } else if (commandName === 'profile' || commandName === 'me' || commandName === 'bal' || commandName === 'balance' || commandName === 'my') {
            const page = args[0];
            client.commands.get('profile').executeMessage(message, page);
        } else if (commandName === 'sell' || commandName === 's') {
            const itemId = args[0];
            const amount = args[1];
            client.commands.get('sell').executeMessage(message, itemId, amount);
        } else if (commandName === 'send' || commandName === 'transfer' || commandName === 'give') {
            const recipient = args[0];
            const amount = args[1];
            client.commands.get('send').executeMessage(message, recipient, amount);
        } else if (commandName === 'shop' || commandName === 's') {
            const shopType = args[0];
            const page = args[1];
            client.commands.get('shop').executeMessage(message, shopType, page);
        } else if (commandName === 'spin' || commandName === 'randomItem') {
            client.commands.get('spin').executeMessage(message);
        } else if (commandName === 'vote' || commandName === 'v') {
            const detailed = args[0];
            client.commands.get('vote').executeMessage(message, detailed);
        } else if (commandName === 'weekly' || commandName === 'supporter') {
            client.commands.get('weekly').executeMessage(message);
        } else if (commandName === 'work' || commandName === 'wk' || commandName === 'w') {
            client.commands.get('work').executeMessage(message);
        } else if (commandName === 'yearly' || commandName === 'godlike') {
            client.commands.get('yearly').executeMessage(message);
        } else if (commandName === 'craft' || commandName === 'cft') {
            const amount = args[0];
            const type = args[1];
            client.commands.get('craft').executeMessage(message, amount, type);
        } else if (commandName === 'dig' || commandName === 'd') {
            client.commands.get('dig').executeMessage(message);
        } else if (commandName === 'inventory' || commandName === 'inv' || commandName === 'i') {
            client.commands.get('inventory').executeMessage(message);
        } else if (commandName === 'mine' || commandName === 'm') {
            client.commands.get('mine').executeMessage(message);
        } else if (commandName === 'process' || commandName === 'p' || commandName === 'pr') {
            client.commands.get('process').executeMessage(message);
        } else if (commandName === 'startMine' || commandName === 'start') {
            client.commands.get('start_mine').executeMessage(message);
        } else if (commandName === 'deleteMyData') {
            client.commands.get('delete_my_data').executeMessage(message);
        } else if (commandName === 'donate') {
            client.commands.get('donate').executeMessage(message);
        } else if (commandName === 'help' || commandName === 'h' || commandName === 'wtf') {
            const commandNameArg = args[0];
            client.commands.get('help').executeMessage(message, commandNameArg);
        } else if (commandName === 'invite') {
            client.commands.get('invite').executeMessage(message);
        } else if (commandName === 'stats' || commandName === 'ping' || commandName === 'status' || commandName === 'about' || commandName === 'info' || commandName === 'owner') {
            client.commands.get('stats').executeMessage(message);
        } else if (commandName === 'support') {
            client.commands.get('support').executeMessage(message);
        } else if (commandName === 'updates' || commandName === 'announcements' || commandName === 'announce') {
            client.commands.get('updates').executeMessage(message);
        }
    }
});

client.login(process.env.TOKEN); // Use process.env.TOKEN
