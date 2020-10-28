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
        if(taggedUser) return message.channel.send(`*${messageUser} tanzt mit ${taggedUser}*`)
        else message.channel.send(`*${messageUser} tanzt alleine rum... Das sieht merkwürdig aus...*`)
    }

    catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'dance',
    usage: '!dance <@User>',
    description: 'Tanze mit anderen Leuten'
}