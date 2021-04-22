
/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = async (client, message, args) => {
    let text = '';
    try {
        for(var i = 0; i < args.length; i++) {
text = text + args[i] + ' ';
    }
message.delete();
message.channel.send(text);
}
    catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'say',
    usage: '!say <Text>',
    description: 'Wiederholt was du sagst.'
}
