const { SlashCommandBuilder } = require('@discordjs/builders');

const commandList = [
    {
        data: new SlashCommandBuilder()
            .setName('blackjack')
            .setDescription('Play a game of Blackjack (aka 21)')
            .addStringOption(option =>
                option.setName('bet')
                    .setDescription('The amount to bet. Use `m` for max and `a` for all in')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('mode')
                    .setDescription('Toggle hard mode (default: Easy Mode)')
                    .setRequired(false)),
        async execute(interaction) {
            const bet = interaction.options.getString('bet');
            const mode = interaction.options.getString('mode');
            await interaction.reply(`Blackjack: Bet = ${bet}, Mode = ${mode || 'Easy'}`);
        },
        async executeMessage(message, bet, mode) {
            await message.reply(`Blackjack: Bet = ${bet}, Mode = ${mode || 'Easy'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('coinflip')
            .setDescription('Flip a coin!')
            .addStringOption(option =>
                option.setName('prediction')
                    .setDescription('Choose whether you think the coin will be heads or tails')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('bet')
                    .setDescription('The amount to bet. Use `m` for max and `a` for all in')
                    .setRequired(true)),
        async execute(interaction) {
            const prediction = interaction.options.getString('prediction');
            const bet = interaction.options.getString('bet');
            await interaction.reply(`Coinflip: Prediction = ${prediction}, Bet = ${bet}`);
        },
        async executeMessage(message, prediction, bet) {
            await message.reply(`Coinflip: Prediction = ${prediction}, Bet = ${bet}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('connectfour')
            .setDescription('Play a game of Connect 4 with a friend (or foe!!!!)'),
        async execute(interaction) {
            await interaction.reply('Connect 4: Game started!');
        },
        async executeMessage(message) {
            await message.reply('Connect 4: Game started!');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('crash')
            .setDescription('The game starts with a x1 multiplier which goes up every few seconds.')
            .addStringOption(option =>
                option.setName('bet')
                    .setDescription('The amount to bet. Use `m` for max and `a` for all in')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('mode')
                    .setDescription('Toggle hard mode (default: Easy Mode)')
                    .setRequired(false)),
        async execute(interaction) {
            const bet = interaction.options.getString('bet');
            const mode = interaction.options.getString('mode');
            await interaction.reply(`Crash: Bet = ${bet}, Mode = ${mode || 'Easy'}`);
        },
        async executeMessage(message, bet, mode) {
            await message.reply(`Crash: Bet = ${bet}, Mode = ${mode || 'Easy'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('findthelady')
            .setDescription('The aim of the game is simple - Find the lady  among the kings!')
            .addStringOption(option =>
                option.setName('bet')
                    .setDescription('The amount to bet. Use `m` for max and `a` for all in')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('mode')
                    .setDescription('Toggle hard mode (default: Easy Mode)')
                    .setRequired(false)),
        async execute(interaction) {
            const bet = interaction.options.getString('bet');
            const mode = interaction.options.getString('mode');
            await interaction.reply(`Find the Lady: Bet = ${bet}, Mode = ${mode || 'Easy'}`);
        },
        async executeMessage(message, bet, mode) {
            await message.reply(`Find the Lady: Bet = ${bet}, Mode = ${mode || 'Easy'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('gamble')
            .setDescription('For the indecisive gambler - play one of the games in the bot, chosen at random!')
            .addStringOption(option =>
                option.setName('bet')
                    .setDescription('The amount to bet. Use `m` for max and `a` for all in')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('mode')
                    .setDescription('Toggle hard mode (default: Easy Mode)')
                    .setRequired(false)),
        async execute(interaction) {
            const bet = interaction.options.getString('bet');
            const mode = interaction.options.getString('mode');
            await interaction.reply(`Gamble: Bet = ${bet}, Mode = ${mode || 'Easy'}`);
        },
        async executeMessage(message, bet, mode) {
            await message.reply(`Gamble: Bet = ${bet}, Mode = ${mode || 'Easy'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('higherorlower')
            .setDescription('Play a game of higher or lower. Guess the next card drawn to keep playing!'),
        async execute(interaction) {
            await interaction.reply('Higher or Lower: Game started!');
        },
        async executeMessage(message) {
            await message.reply('Higher or Lower: Game started!');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('poker')
            .setDescription('Play a game of Texas Hold\'em Bonus versus the dealer!')
            .addStringOption(option =>
                option.setName('ante')
                    .setDescription('The amount to bet. Use `m` for max and `a` for all in')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('bonus')
                    .setDescription('The amount to bet on the bonus hand. Use `m` for max and `a` for all in')
                    .setRequired(false)),
        async execute(interaction) {
            const ante = interaction.options.getString('ante');
            const bonus = interaction.options.getString('bonus');
            await interaction.reply(`Poker: Ante = ${ante}, Bonus = ${bonus || 'None'}`);
        },
        async executeMessage(message, ante, bonus) {
            await message.reply(`Poker: Ante = ${ante}, Bonus = ${bonus || 'None'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('race')
            .setDescription('Race turtles, dogs, horses or DINOSAURS!!!')
            .addStringOption(option =>
                option.setName('racer-type')
                    .setDescription('The type of racer to use')
                    .setRequired(true))
            .addNumberOption(option =>
                option.setName('prediction')
                    .setDescription('Which racer you think will win')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('bet')
                    .setDescription('The amount to bet. Use `m` for max and `a` for all in')
                    .setRequired(true)),
        async execute(interaction) {
            const racerType = interaction.options.getString('racer-type');
            const prediction = interaction.options.getNumber('prediction');
            const bet = interaction.options.getString('bet');
            await interaction.reply(`Race: Type = ${racerType}, Prediction = ${prediction}, Bet = ${bet}`);
        },
        async executeMessage(message, racerType, prediction, bet) {
            await message.reply(`Race: Type = ${racerType}, Prediction = ${prediction}, Bet = ${bet}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('roll')
            .setDescription('Roll a dice and bet on the result!')
            .addStringOption(option =>
                option.setName('dice-type')
                    .setDescription('The type of dice to roll')
                    .setRequired(true))
            .addNumberOption(option =>
                option.setName('prediction')
                    .setDescription('What number will the dice land on?')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('bet')
                    .setDescription('The amount to bet. Use `m` for max and `a` for all in')
                    .setRequired(true)),
        async execute(interaction) {
            const diceType = interaction.options.getString('dice-type');
            const prediction = interaction.options.getNumber('prediction');
            const bet = interaction.options.getString('bet');
            await interaction.reply(`Roll: Dice = ${diceType}, Prediction = ${prediction}, Bet = ${bet}`);
        },
        async executeMessage(message, diceType, prediction, bet) {
            await message.reply(`Roll: Dice = ${diceType}, Prediction = ${prediction}, Bet = ${bet}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('roulette')
            .setDescription('Play a game of roulette!')
            .addStringOption(option =>
                option.setName('prediction')
                    .setDescription('What roulette bet you\'d like to place (e.g. black, red, green, 0, 1-10 etc.)')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('bet')
                    .setDescription('The amount to bet. Use `m` for max and `a` for all in')
                    .setRequired(true)),
        async execute(interaction) {
            const prediction = interaction.options.getString('prediction');
            const bet = interaction.options.getString('bet');
            await interaction.reply(`Roulette: Prediction = ${prediction}, Bet = ${bet}`);
        },
        async executeMessage(message, prediction, bet) {
            await message.reply(`Roulette: Prediction = ${prediction}, Bet = ${bet}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('rockpaperscissors')
            .setDescription('Play a game of rock paper scissors against the bot!')
            .addStringOption(option =>
                option.setName('selection')
                    .setDescription('Your choice of Rock, Paper or Scissors')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('bet')
                    .setDescription('The amount to bet. Use `m` for max and `a` for all in')
                    .setRequired(true)),
        async execute(interaction) {
            const selection = interaction.options.getString('selection');
            const bet = interaction.options.getString('bet');
            await interaction.reply(`Rock Paper Scissors: Selection = ${selection}, Bet = ${bet}`);
        },
        async executeMessage(message, selection, bet) {
            await message.reply(`Rock Paper Scissors: Selection = ${selection}, Bet = ${bet}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('sevens')
            .setDescription('Play a game of sevens!')
            .addStringOption(option =>
                option.setName('prediction')
                    .setDescription('What do you think it will land on?')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('bet')
                    .setDescription('The amount to bet. Use `m` for max and `a` for all in')
                    .setRequired(true)),
        async execute(interaction) {
            const prediction = interaction.options.getString('prediction');
            const bet = interaction.options.getString('bet');
            await interaction.reply(`Sevens: Prediction = ${prediction}, Bet = ${bet}`);
        },
        async executeMessage(message, prediction, bet) {
            await message.reply(`Sevens: Prediction = ${prediction}, Bet = ${bet}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('slots')
            .setDescription('Try your luck in the slots!')
            .addStringOption(option =>
                option.setName('bet')
                    .setDescription('The amount to bet. Use `m` for max and `a` for all in')
                    .setRequired(true)),
        async execute(interaction) {
            const bet = interaction.options.getString('bet');
            await interaction.reply(`Slots: Bet = ${bet}`);
        },
        async executeMessage(message, bet) {
            await message.reply(`Slots: Bet = ${bet}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('tictactoe')
            .setDescription('Play a game of tic-tac-toe with a friend (or foe!!!!)'),
        async execute(interaction) {
            await interaction.reply('Tic Tac Toe: Game started!');
        },
        async executeMessage(message) {
            await message.reply('Tic Tac Toe: Game started!');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('boosts')
            .setDescription('View or activate your boosts!')
            .addSubcommand(subcommand =>
                subcommand
                    .setName('show')
                    .setDescription('View your boosts'))
            .addSubcommand(subcommand =>
                subcommand
                    .setName('use')
                    .setDescription('Activate a boost')
                    .addStringOption(option =>
                        option.setName('boost')
                            .setDescription('Select the boost you want to activate')
                            .setRequired(true))
                    .addStringOption(option =>
                        option.setName('amount')
                            .setDescription('Enter the number of boosts to activate')
                            .setRequired(false))),
        async execute(interaction) {
            if (interaction.options.getSubcommand() === 'show') {
                await interaction.reply('Boosts: Showing boosts');
            } else if (interaction.options.getSubcommand() === 'use') {
                const boost = interaction.options.getString('boost');
                const amount = interaction.options.getString('amount');
                await interaction.reply(`Boosts: Using boost ${boost}, Amount = ${amount || 1}`);
            }
        },
        async executeMessage(message) {
            await message.reply('Boosts command is only available as a slash command.');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('buy')
            .setDescription('Buy items from the shop(s) in the bot')
            .addSubcommand(subcommand =>
                subcommand
                    .setName('item')
                    .setDescription('Buy an item')
                    .addStringOption(option =>
                        option.setName('item_id')
                            .setDescription('The item to buy')
                            .setRequired(true))
                    .addStringOption(option =>
                        option.setName('amount')
                            .setDescription('The amount to buy - use \'a\' to buy all')
                            .setRequired(true)))
            .addSubcommand(subcommand =>
                subcommand
                    .setName('unit')
                    .setDescription('Buy a unit')
                    .addStringOption(option =>
                        option.setName('unit_id')
                            .setDescription('The unit to buy')
                            .setRequired(true))
                    .addStringOption(option =>
                        option.setName('amount')
                            .setDescription('The amount to buy - use \'a\' to buy all')
                            .setRequired(true)))
            .addSubcommand(subcommand =>
                subcommand
                    .setName('loot')
                    .setDescription('Buy loot')
                    .addStringOption(option =>
                        option.setName('amount')
                            .setDescription('The amount to buy - use \'a\' to buy all')
                            .setRequired(true)))
            .addSubcommand(subcommand =>
                subcommand
                    .setName('lotto')
                    .setDescription('Buy lotto tickets')
                    .addStringOption(option =>
                        option.setName('amount')
                            .setDescription('The amount to buy - use \'a\' to buy all')
                            .setRequired(true)))
            .addSubcommand(subcommand =>
                subcommand
                    .setName('boost')
                    .setDescription('Buy a boost')
                    .addStringOption(option =>
                        option.setName('boost_id')
                            .setDescription('The boost to buy')
                            .setRequired(true))
                    .addStringOption(option =>
                        option.setName('amount')
                            .setDescription('The amount to buy - use \'a\' to buy all')
                            .setRequired(true))),
        async execute(interaction) {
            const subCommand = interaction.options.getSubcommand();
            let itemId, amount;

            switch (subCommand) {
                case 'item':
                    itemId = interaction.options.getString('item_id');
                    amount = interaction.options.getString('amount');
                    await interaction.reply(`Buy Item: Item ID = ${itemId}, Amount = ${amount}`);
                    break;
                case 'unit':
                    itemId = interaction.options.getString('unit_id');
                    amount = interaction.options.getString('amount');
                    await interaction.reply(`Buy Unit: Unit ID = ${itemId}, Amount = ${amount}`);
                    break;
                case 'loot':
                    amount = interaction.options.getString('amount');
                    await interaction.reply(`Buy Loot: Amount = ${amount}`);
                    break;
                case 'lotto':
                    amount = interaction.options.getString('amount');
                    await interaction.reply(`Buy Lotto: Amount = ${amount}`);
                    break;
                case 'boost':
                    itemId = interaction.options.getString('boost_id');
                    amount = interaction.options.getString('amount');
                    await interaction.reply(`Buy Boost: Boost ID = ${itemId}, Amount = ${amount}`);
                    break;
            }
        },
        async executeMessage(message) {
            await message.reply('Buy command is only available as a slash command.');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('cooldowns')
            .setDescription('Lists any active cooldowns you currently have')
            .addStringOption(option =>
                option.setName('detailed')
                    .setDescription('Show exact expiry times for cooldowns')
                    .setRequired(false)),
        async execute(interaction) {
            const detailed = interaction.options.getString('detailed');
            await interaction.reply(`Cooldowns: Detailed = ${detailed || 'No'}`);
        },
        async executeMessage(message, detailed) {
            await message.reply(`Cooldowns: Detailed = ${detailed || 'No'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('daily')
            .setDescription('Collect your daily ration of cash.'),
        async execute(interaction) {
            await interaction.reply('Daily: Collected daily ration');
        },
        async executeMessage(message) {
            await message.reply('Daily: Collected daily ration');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('gift')
            .setDescription('Send up to five free gifts every 12 hours!')
            .addMentionableOption(option =>
                option.setName('recipient')
                    .setDescription('The user to receive the free gift')
                    .setRequired(false)),
        async execute(interaction) {
            const recipient = interaction.options.getMentionable('recipient');
            await interaction.reply(`Gift: Recipient = ${recipient || 'None'}`);
        },
        async executeMessage(message, recipient) {
            await message.reply(`Gift: Recipient = ${recipient || 'None'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('goals')
            .setDescription('List your daily goals!'),
        async execute(interaction) {
            await interaction.reply('Goals: Listing daily goals');
        },
        async executeMessage(message) {
            await message.reply('Goals: Listing daily goals');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('leaderboard')
            .setDescription('Show the leaderboard for a game!')
            .addSubcommandGroup(group =>
                group
                    .setName('player')
                    .setDescription('Player leaderboards')
                    .addSubcommand(subcommand =>
                        subcommand
                            .setName('leaderboard')
                            .setDescription('The leaderboard to choose')
                            .addStringOption(option =>
                                option.setName('leaderboard')
                                    .setDescription('The leaderboard to choose')
                                    .setRequired(true))
                            .addStringOption(option =>
                                option.setName('global')
                                    .setDescription('Whether to show global scores')
                                    .setRequired(false))))
            .addSubcommandGroup(group =>
                group
                    .setName('game')
                    .setDescription('Game leaderboards')
                    .addSubcommand(subcommand =>
                        subcommand
                            .setName('leaderboard')
                            .setDescription('The leaderboard to choose')
                            .addStringOption(option =>
                                option.setName('leaderboard')
                                    .setDescription('The leaderboard to choose')
                                    .setRequired(true))
                            .addStringOption(option =>
                                option.setName('global')
                                    .setDescription('Whether to show global scores')
                                    .setRequired(false))))
            .addSubcommandGroup(group =>
                group
                    .setName('item')
                    .setDescription('Item leaderboards')
                    .addSubcommand(subcommand =>
                        subcommand
                            .setName('leaderboard')
                            .setDescription('The leaderboard to choose')
                            .addStringOption(option =>
                                option.setName('leaderboard')
                                    .setDescription('The leaderboard to choose')
                                    .setRequired(true))
                            .addStringOption(option =>
                                option.setName('global')
                                    .setDescription('Whether to show global scores')
                                    .setRequired(false))))
            .addSubcommandGroup(group =>
                group
                    .setName('mining')
                    .setDescription('Mining leaderboards')
                    .addSubcommand(subcommand =>
                        subcommand
                            .setName('leaderboard')
                            .setDescription('The leaderboard to choose')
                            .addStringOption(option =>
                                option.setName('leaderboard')
                                    .setDescription('The leaderboard to choose')
                                    .setRequired(false))
                            .addStringOption(option =>
                                option.setName('global')
                                    .setDescription('Whether to show global scores')
                                    .setRequired(false)))),
        async execute(interaction) {
            const subCommandGroup = interaction.options.getSubcommandGroup();
            const leaderboard = interaction.options.getString('leaderboard');
            const global = interaction.options.getString('global');

            await interaction.reply(`Leaderboard: Type = ${subCommandGroup}, Leaderboard = ${leaderboard || 'Default'}, Global = ${global || 'No'}`);

        },
        async executeMessage(message) {
            await message.reply('Leaderboard command is only available as a slash command.');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('lookup')
            .setDescription('Show the stats for a given player')
            .addMentionableOption(option =>
                option.setName('user')
                    .setDescription('The user to look up')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('page')
                    .setDescription('The sub-page to show')
                    .setRequired(false)),
        async execute(interaction) {
            const user = interaction.options.getMentionable('user');
            const page = interaction.options.getString('page');
            await interaction.reply(`Lookup: User = ${user}, Page = ${page || 'Default'}`);
        },
        async executeMessage(message, user, page) {
            await message.reply(`Lookup: User = ${user}, Page = ${page || 'Default'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('lotto')
            .setDescription('Participate in the weekly lottery!')
            .addStringOption(option =>
                option.setName('tickets_to_buy')
                    .setDescription('The number of tickets to buy. Use \'m\' to buy max')
                    .setRequired(false)),
        async execute(interaction) {
            const ticketsToBuy = interaction.options.getString('tickets_to_buy');
            await interaction.reply(`Lotto: Tickets to buy = ${ticketsToBuy || 'Default'}`);
        },
        async executeMessage(message, ticketsToBuy) {
            await message.reply(`Lotto: Tickets to buy = ${ticketsToBuy || 'Default'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('monthly')
            .setDescription('Collect your monthly ration of cash.'),
        async execute(interaction) {
            await interaction.reply('Monthly: Collected monthly ration');
        },
        async executeMessage(message) {
            await message.reply('Monthly: Collected monthly ration');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('overtime')
            .setDescription('Put in some extra time at work.'),
        async execute(interaction) {
            await interaction.reply('Overtime: Collected overtime wages');
        },
        async executeMessage(message) {
            await message.reply('Overtime: Collected overtime wages');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('prestige')
            .setDescription('Prestige your mine to get some  and increase your prestige count!')
            .addStringOption(option =>
                option.setName('type')
                    .setDescription('The type of prestige')
                    .setRequired(true)),
        async execute(interaction) {
            const type = interaction.options.getString('type');
            await interaction.reply(`Prestige: Type = ${type}`);
        },
        async executeMessage(message) {
            await message.reply('Prestige command is only available as a slash command.');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('profile')
            .setDescription('Show your player stats')
            .addStringOption(option =>
                option.setName('page')
                    .setDescription('The sub-page to show')
                    .setRequired(false)),
        async execute(interaction) {
            const page = interaction.options.getString('page');
            await interaction.reply(`Profile: Page = ${page || 'Default'}`);
        },
        async executeMessage(message, page) {
            await message.reply(`Profile: Page = ${page || 'Default'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('sell')
            .setDescription('Sell items from the shop(s) in the bot')
            .addStringOption(option =>
                option.setName('item_id')
                    .setDescription('The item to sell')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('amount')
                    .setDescription('The amount to sell - use \'a\' to sell all')
                    .setRequired(true)),
        async execute(interaction) {
            const itemId = interaction.options.getString('item_id');
            const amount = interaction.options.getString('amount');
            await interaction.reply(`Sell: Item ID = ${itemId}, Amount = ${amount}`);
        },
        async executeMessage(message, itemId, amount) {
            await message.reply(`Sell: Item ID = ${itemId}, Amount = ${amount}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('send')
            .setDescription('Send money to a friend!')
            .addMentionableOption(option =>
                option.setName('recipient')
                    .setDescription('The player recieving the cash')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('amount')
                    .setDescription('The amount to send - use \'m\' to send max')
                    .setRequired(true)),
        async execute(interaction) {
            const recipient = interaction.options.getMentionable('recipient');
            const amount = interaction.options.getString('amount');
            await interaction.reply(`Send: Recipient = ${recipient}, Amount = ${amount}`);
        },
        async executeMessage(message, recipient, amount) {
            await message.reply(`Send: Recipient = ${recipient}, Amount = ${amount}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('shop')
            .setDescription('Buy and sell items in the shop.')
            .addStringOption(option =>
                option.setName('shop_type')
                    .setDescription('The type of shop to show')
                    .setRequired(true))
            .addStringOption(option =>
                option.setName('page')
                    .setDescription('The page to show')
                    .setRequired(false)),
        async execute(interaction) {
            const shopType = interaction.options.getString('shop_type');
            const page = interaction.options.getString('page');
            await interaction.reply(`Shop: Type = ${shopType}, Page = ${page || 'Default'}`);
        },
        async executeMessage(message, shopType, page) {
            await message.reply(`Shop: Type = ${shopType}, Page = ${page || 'Default'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('spin')
            .setDescription('Spin the wheel of fortune to win a random item!'),
        async execute(interaction) {
            await interaction.reply('Spin: Spinning the wheel');
        },
        async executeMessage(message) {
            await message.reply('Spin: Spinning the wheel');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('vote')
            .setDescription('Show the the site voting instructions and your current cooldowns for voting.')
            .addStringOption(option =>
                option.setName('detailed')
                    .setDescription('Show exact expiry times for cooldowns')
                    .setRequired(false)),
        async execute(interaction) {
            const detailed = interaction.options.getString('detailed');
            await interaction.reply(`Vote: Detailed = ${detailed || 'No'}`);
        },
        async executeMessage(message, detailed) {
            await message.reply(`Vote: Detailed = ${detailed || 'No'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('weekly')
            .setDescription('Collect your weekly ration of cash.'),
        async execute(interaction) {
            await interaction.reply('Weekly: Collected weekly ration');
        },
        async executeMessage(message) {
            await message.reply('Weekly: Collected weekly ration');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('work')
            .setDescription('Collect your hard earned wages at work.'),
        async execute(interaction) {
            await interaction.reply('Work: Collected work wages');
        },
        async executeMessage(message) {
            await message.reply('Work: Collected work wages');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('yearly')
            .setDescription('Collect your yearly ration of cash.'),
        async execute(interaction) {
            await interaction.reply('Yearly: Collected yearly ration');
        },
        async executeMessage(message) {
            await message.reply('Yearly: Collected yearly ration');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('craft')
            .setDescription('Craft packs to use when buying new units or research!')
            .addStringOption(option =>
                option.setName('type')
                    .setDescription('The type of pack to craft leave blank to see menu')
                    .setRequired(false))
            .addStringOption(option =>
                option.setName('amount')
                    .setDescription('The amount to craft - Use \'m\' for max')
                    .setRequired(false)),
        async execute(interaction) {
            const type = interaction.options.getString('type');
            const amount = interaction.options.getString('amount');
            await interaction.reply(`Craft: Type = ${type || 'Menu'}, Amount = ${amount || 'Default'}`);
        },
        async executeMessage(message, amount, type) {
            await message.reply(`Craft: Type = ${type || 'Menu'}, Amount = ${amount || 'Default'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('dig')
            .setDescription('Dig in the mines to collect coal, ores and unprocessed materials (UM)!'),
        async execute(interaction) {
            await interaction.reply('Dig: Digging in the mines');
        },
        async executeMessage(message) {
            await message.reply('Dig: Digging in the mines');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('inventory')
            .setDescription('Shows your mining inventory'),
        async execute(interaction) {
            await interaction.reply('Inventory: Showing mining inventory');
        },
        async executeMessage(message) {
            await message.reply('Inventory: Showing mining inventory');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('mine')
            .setDescription('Shows the information about your mine and the mine shop.'),
        async execute(interaction) {
            await interaction.reply('Mine: Showing mine information');
        },
        async executeMessage(message) {
            await message.reply('Mine: Showing mine information');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('process')
            .setDescription('Process all your unprocessed materials (UM) to find diamonds, emeralds, lapis and redstone!'),
        async execute(interaction) {
            await interaction.reply('Process: Processing materials');
        },
        async executeMessage(message) {
            await message.reply('Process: Processing materials');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('start_mine')
            .setDescription('Start your mining career!'),
        async execute(interaction) {
            await interaction.reply('Start Mine: Starting mining career');
        },
        async executeMessage(message) {
            await message.reply('Start Mine: Starting mining career');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('upgrade')
            .setDescription('Upgrade your mining units')
            .addSubcommand(subcommand =>
                subcommand
                    .setName('miner')
                    .setDescription('Upgrade a miner')
                    .addStringOption(option =>
                        option.setName('upgrade_id')
                            .setDescription('The upgrade to buy')
                            .setRequired(false))
                    .addStringOption(option =>
                        option.setName('amount')
                            .setDescription('The amount to buy - does not support `max` or `all` must be a number')
                            .setRequired(false))),
        async execute(interaction) {
            if (interaction.options.getSubcommand() === 'miner') {
                const upgradeId = interaction.options.getString('upgrade_id');
                const amount = interaction.options.getString('amount');
                await interaction.reply(`Upgrade Miner: Upgrade ID = ${upgradeId || 'Default'}, Amount = ${amount || 'Default'}`);
            }
        },
        async executeMessage(message) {
            await message.reply('Upgrade command is only available as a slash command.');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('delete_my_data')
            .setDescription('The command used to clear all of your data from the bot.'),
        async execute(interaction) {
            await interaction.reply('Delete My Data: Clearing data');
        },
        async executeMessage(message) {
            await message.reply('Delete My Data: Clearing data');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('donate')
            .setDescription('Shares a link to donate to the bot'),
        async execute(interaction) {
            await interaction.reply('Donate: Sharing donation link');
        },
        async executeMessage(message) {
            await message.reply('Donate: Sharing donation link');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('help')
            .setDescription('Show the help for all the commands available in the bot')
            .addStringOption(option =>
                option.setName('command_name')
                    .setDescription('The command to look up. Start typing to search for a command')
                    .setRequired(false)),
        async execute(interaction) {
            const commandName = interaction.options.getString('command_name');
            await interaction.reply(`Help: Showing help for ${commandName || 'all commands'}`);
        },
        async executeMessage(message, commandName) {
            await message.reply(`Help: Showing help for ${commandName || 'all commands'}`);
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('invite')
            .setDescription('Shares the details of how to add the bot'),
        async execute(interaction) {
            await interaction.reply('Invite: Sharing invite details');
        },
        async executeMessage(message) {
            await message.reply('Invite: Sharing invite details');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('stats')
            .setDescription('Shows a selection of bot stats including ping, player count, guild count etc.'),
        async execute(interaction) {
            await interaction.reply('Stats: Showing bot stats');
        },
        async executeMessage(message) {
            await message.reply('Stats: Showing bot stats');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('support')
            .setDescription('Shares a link to the support server'),
        async execute(interaction) {
            await interaction.reply('Support: Sharing support server link');
        },
        async executeMessage(message) {
            await message.reply('Support: Sharing support server link');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('config')
            .setDescription('Setup the config for your guild')
            .addSubcommand(subcommand =>
                subcommand
                    .setName('show')
                    .setDescription('Show the current guild config'))
            .addSubcommand(subcommand =>
                subcommand
                    .setName('channel')
                    .setDescription('Set the channels to use')
                    .addStringOption(option =>
                        option.setName('channel1')
                            .setDescription('A channel to use. Leave blank to allow in all channels')
                            .setRequired(false))
                    .addStringOption(option =>
                        option.setName('channel2')
                            .setDescription('An additional channel to use (optional)')
                            .setRequired(false))
                    .addStringOption(option =>
                        option.setName('channel3')
                            .setDescription('An additional channel to use (optional)')
                            .setRequired(false))
                    .addStringOption(option =>
                        option.setName('channel4')
                            .setDescription('An additional channel to use (optional)')
                            .setRequired(false))
                    .addStringOption(option =>
                        option.setName('channel5')
                            .setDescription('An additional channel to use (optional)')
                            .setRequired(false)))
            .addSubcommandGroup(group =>
                group
                    .setName('admin_ids')
                    .setDescription('Manage admin IDs')
                    .addSubcommand(subcommand =>
                        subcommand
                            .setName('add')
                            .setDescription('Add an admin ID')
                            .addMentionableOption(option =>
                                option.setName('user')
                                    .setDescription('Add an admin ID')
                                    .setRequired(true)))
                    .addSubcommand(subcommand =>
                        subcommand
                            .setName('delete')
                            .setDescription('Delete an admin ID')
                            .addMentionableOption(option =>
                                option.setName('user')
                                    .setDescription('Add an admin ID')
                                    .setRequired(true))))
            .addSubcommand(subcommand =>
                subcommand
                    .setName('cashmoji')
                    .setDescription('Set the cash emoji')
                    .addStringOption(option =>
                        option.setName('emoji')
                            .setDescription('The emoji to set')
                            .setRequired(true)))
            .addSubcommand(subcommand =>
                subcommand
                    .setName('cash_name')
                    .setDescription('Set the cash name')
                    .addStringOption(option =>
                        option.setName('name')
                            .setDescription('The name to set')
                            .setRequired(true)))
            .addSubcommand(subcommand =>
                subcommand
                    .setName('cryptomoji')
                    .setDescription('Set the crypto emoji')
                    .addStringOption(option =>
                        option.setName('emoji')
                            .setDescription('The emoji to set')
                            .setRequired(true)))
            .addSubcommand(subcommand =>
                subcommand
                    .setName('crypto_name')
                    .setDescription('Set the crypto name')
                    .addStringOption(option =>
                        option.setName('name')
                            .setDescription('The name to set')
                            .setRequired(true)))
            .addSubcommand(subcommand =>
                subcommand
                    .setName('disable_update_messages')
                    .setDescription('Enable or disable update messages')
                    .addBooleanOption(option =>
                        option.setName('enabled')
                            .setDescription('Whether the update messages are enabled')
                            .setRequired(true))),
        async execute(interaction) {
            const subCommand = interaction.options.getSubcommand();

            switch (subCommand) {
                case 'show':
                    await interaction.reply('Config: Showing guild config');
                    break;
                case 'channel':
                    const channel1 = interaction.options.getString('channel1');
                    const channel2 = interaction.options.getString('channel2');
                    const channel3 = interaction.options.getString('channel3');
                    const channel4 = interaction.options.getString('channel4');
                    const channel5 = interaction.options.getString('channel5');
                    await interaction.reply(`Config Channel: Channel1 = ${channel1 || 'None'}, Channel2 = ${channel2 || 'None'}, Channel3 = ${channel3 || 'None'}, Channel4 = ${channel4 || 'None'}, Channel5 = ${channel5 || 'None'}`);
                    break;
                case 'cashmoji':
                    const cashmoji = interaction.options.getString('emoji');
                    await interaction.reply(`Config Cashmoji: Emoji = ${cashmoji}`);
                    break;
                case 'cash_name':
                    const cashName = interaction.options.getString('name');
                    await interaction.reply(`Config Cash Name: Name = ${cashName}`);
                    break;
                case 'cryptomoji':
                    const cryptomoji = interaction.options.getString('emoji');
                    await interaction.reply(`Config Crypto Emoji: Emoji = ${cryptomoji}`);
                    break;
                case 'crypto_name':
                    const cryptoName = interaction.options.getString('name');
                    await interaction.reply(`Config Crypto Name: Name = ${cryptoName}`);
                    break;
                case 'disable_update_messages':
                    const enabled = interaction.options.getBoolean('enabled');
                    await interaction.reply(`Config Disable Update Messages: Enabled = ${enabled}`);
                    break;
                default:
                    if (interaction.options.getSubcommandGroup() === 'admin_ids') {
                        const user = interaction.options.getMentionable('user');
                        if (subCommand === 'add') {
                            await interaction.reply(`Config Admin IDs: Adding user ${user}`);
                        } else if (subCommand === 'delete') {
                            await interaction.reply(`Config Admin IDs: Deleting user ${user}`);
                        }
                    }
                    break;
            }
        },
        async executeMessage(message) {
            await message.reply('Config command is only available as a slash command.');
        },
    },
    {
        data: new SlashCommandBuilder()
            .setName('updates')
            .setDescription('Shows the latest updates for the bot'),
        async execute(interaction) {
            await interaction.reply('Updates: Showing latest updates');
        },
        async executeMessage(message) {
            await message.reply('Updates: Showing latest updates');
        },
    },
];

module.exports = commandList;
