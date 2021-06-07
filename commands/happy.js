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
        `*${messageUser} ist total happy!*`,
        `*${messageUser} ist absolut mega super duper happy!`,
        `*${messageUser} ist total happy!*`,
        `*${messageUser} ist mega gut gelaunt! Weiter so!*`,
    ]
    let antwortenSelf = [
        `*${messageUser} hat niemand der gute Laune will und gibt sich selber gute Laune!*`,
        `*${messageUser} hat niemand der gute Laune will und gibt sich selber gute Laune!*`
    ]
    let antwortenTagged = [
        `*${messageUser} verteilt gute Laune an ${taggedUser}!*`,
        `*${messageUser} verteilt gute Laune an ${taggedUser}!*`,
        `*${messageUser} verteilt gute Laune an ${taggedUser}!*`,
        `*${messageUser} verteilt gute Laune an ${taggedUser}!*`,
        `*${messageUser} verteilt gute Laune an ${taggedUser}!*`,
        `*${messageUser} verteilt gute Laune an ${taggedUser}!*`
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
    name: 'happy',
    usage: '!happy <@User>',
    description: 'Zeig deine Glücklichkeit!'
}
