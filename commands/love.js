/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = async (client, message, args) => {
    if(args[0] === '@everyone') return;
    if(args[0] === '@everyone') return;
    let messageUser = message.member;
    let taggedUser = message.mentions.members.first();
    try {
        message.delete();
        if(taggedUser) return message.channel.send(`*${messageUser} hat ${taggedUser} ganz dolle Lieb* :heart:`)
        else message.channel.send(`Richtige Einstellung ${messageUser}! Erstmal sich selber lieben! :heart:`)
    }

    catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'love',
    usage: '!love <@User>',
    description: 'Hab andere Menschen Lieb'
}