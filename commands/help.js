// Eventuell ben�tigte Packages HIER REQUIEREN da sonst IntelliSense nicht funktioniert.
/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = async (client, message, args) => {
    
    try {
        if (!args[0]) {
            message.channel.send('**Alle Commands.**\nSchreib "!help <command>" fuer Hilfe zu einem bestimmten Command\n\n[Argumente] müssen angegeben werden, während <Argumente> optional sind.');
            message.channel.send('**Commands:**\n\n' + client.commands.map(cmd => cmd.help.name).join(', '));
        } else {
            let commandExist = false;
            let alleCommands = client.commands.map(cmd => cmd.help.name);
            for (var i = 0; i < alleCommands.length; i++) {
                if (args[0].toLowerCase() === alleCommands[i]) commandExist = true;
            }
            if (!commandExist) return message.channel.send('Command Existiert nicht! Hast du dich vielleicht vertippt?')
            let krasserCommand;
            try {
                krasserCommand = client.commands.find(cmd => cmd.help.name === args[0].toLowerCase());
            } catch (err) { message.channel.send(err, {code: "ERROR"});}
            message.channel.send(`**Name:** ${krasserCommand.help.name}\n\n**Usage:** ${krasserCommand.help.usage}\n\n**Beschreibung:** ${krasserCommand.help.description}`)
            .catch((err) => {
                message.channel.send(err, {code: "ERROR"})
            });
        }        
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

    
}

module.exports.help = {
    name: 'help',
    usage: '!help <command>',
    description: 'Zeigt entweder die komplette Hilfeseite an, oder gibt die Informationen zu den jeweiligen Command.'
}