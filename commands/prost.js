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
        if(taggedUser) return message.channel.send(`*${messageUser} stoßt mit ${taggedUser} auf ein Bier an :beers:*`)
        else message.channel.send(`${messageUser} hat niemandem zum anstoßen und stoßt daher mit sich selber an... Sad Life...`)
    }

    catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'prost',
    usage: '!prost <@User>',
    description: 'Stoße mit einem anderen User an!'
}