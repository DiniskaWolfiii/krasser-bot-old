/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = async (client, message, args) => {
    if(args[0] === '@everyone') return;
    let messageUser = message.member;
    let taggedUser = message.mentions.members.first();
    try {
        message.delete();
        if(taggedUser) return message.channel.send(`*${messageUser} wünscht ${taggedUser} einen Gute Nacht! :zzz:*`)
        else message.channel.send(`*${messageUser} wünscht allen eine gute Nacht! :zzz:*`)
    }

    catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'night',
    usage: '!night <@User>',
    description: 'Wünsche allen eine Gute Nacht!'
}