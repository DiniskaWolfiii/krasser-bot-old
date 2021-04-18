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
        let antwortenTagged = [
            `*${messageUser} gibt ${taggedUser} eine Heisse Schokolade*`,
            `*${messageUser} gibt ${taggedUser} einen White Hot Chocolate*`,
            `*${messageUser} gibt ${taggedUser} einen Hazelnut Chocolate*`,
            `*${messageUser} gibt ${taggedUser} einen Caramel Chocolate*`
        ]

        let antwortenOhne = [
            `*${messageUser} trinkt eine Heisse Schokolade*`,
            `*${messageUser} trinkt einen White Hot Chocolate*`,
            `*${messageUser} trinkt einen Hazelnut Chocolate*`,
            `*${messageUser} trinkt einen Caramel Chocolate*`
        ]
        let randomNumber = Math.floor(Math.random()*antwortenOhne.length);
        message.delete();
        if(taggedUser) return message.channel.send(antwortenTagged[randomNumber])
        else message.channel.send(antwortenOhne[randomNumber])
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'kaba',
    usage: '!kaba <@User>',
    description: 'Gib Leuten eine Tasse Heisse Schokolade :)'
}