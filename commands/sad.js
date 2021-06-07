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

    let antwortenOhne = [
        `*${messageUser} ist grad traurig :(*`,
        `*${messageUser} ist grad traurig :(*`,
        `*${messageUser} hat grad schlechte Laune... Mag jemand helfen? :,(*`
    ]
    let antwortenSelf = [
        `*${messageUser} ist grad traurig :(*`,
        `*${messageUser} ist grad traurig :(*`,
        `*${messageUser} hat grad schlechte Laune... Mag jemand helfen? :,(*`
    ]
    let antwortenTagged = [
        `*${messageUser} trauert mit ${taggedUser} :(*`,
        `*${messageUser} trauert mit ${taggedUser} :(*`,
        `*${messageUser} trauert mit ${taggedUser} :(*`,
        `*${messageUser} weint mit ${taggedUser} :,(*`,
        `*${messageUser} weint mit ${taggedUser} :,(*`
    ]
    try {
        message.delete();
        if (taggedUser) {
            if (taggedUser.id === messageUser.id) {
                let randomNumber = Math.floor(Math.random() * antwortenSelf.length);
                message.channel.send(antwortenSelf[randomNumber])
            } else {
            let randomNumber = Math.floor(Math.random() * antwortenTagged.length);
            message.channel.send(antwortenTagged[randomNumber])
            }
        } else {
            let randomNumber = Math.floor(Math.random() * antwortenOhne.length);
            message.channel.send(antwortenOhne[randomNumber])
        }
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'sad',
    usage: '!sad <@User>',
    description: 'Trauere mit anderen Leuten!'
}
