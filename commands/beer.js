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
        if(taggedUser) return message.channel.send(`*${messageUser} gibt ${taggedUser} ein Krug Bier* :beers:`)
        else message.channel.send(`*${messageUser} hält einen Krug Bier in der Hand*`)
    }

    catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'beer',
    usage: '!beer <@User>',
    description: 'Gib Leuten ein Bier :)'
}