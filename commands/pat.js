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
        let antwortenTagged = [
            `*${messageUser} patted ${taggedUser}*`,
            `*${messageUser} patted ${taggedUser}*`,
            `*${messageUser} patted ${taggedUser}*`,
            `*${messageUser} patted ${taggedUser} zu Tode*`
        ]

        let antwortenOhne = [
            `*${messageUser} will gepatted werden*`,
            `*${messageUser} hat das Verlangen gestreichelt zu werden*`,
            `*${messageUser} will gepatted werdeb*`,
            `*${messageUser} braucht jemand der ihn/sie patted*`
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
    name: 'pat',
    usage: '!pat <@User>',
    description: 'Streichel einen User'
}