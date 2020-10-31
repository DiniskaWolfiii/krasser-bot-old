/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = async (client, message, args) => {
    let messageUser = message.member;
    let taggedUser = message.mentions.members.first();
    try {
        message.delete();
        if(taggedUser) return message.channel.send(`*${messageUser} wünscht ${taggedUser} einen Guten Morgen!*`)
        else message.channel.send(`*${messageUser} wünscht allen einen guten Morgen!*`)
    }

    catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'goodmorning',
    usage: '!goodmorning <@User>',
    description: 'Wünsche allen einen Guten Morgen!'
}