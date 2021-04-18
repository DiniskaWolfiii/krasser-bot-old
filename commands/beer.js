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
          `*${messageUser} trinkt ein Bier :beer:*`,
          `*${messageUser} trinkt ein Bier :beer:*`,
          `*${messageUser} trinkt ein Bier :beer:*`,
          `*${messageUser} trinkt ein Bier :beer:*`,
          `*${messageUser} trinkt ein Radler :beer:*`
        ]
        let antwortenTagged = [
            `*${messageUser} gibt ${taggedUser} ein Bier :beer:*`,
            `*${messageUser} gibt ${taggedUser} ein Bier :beer:*`,
            `*${messageUser} gibt ${taggedUser} ein Bier :beer:*`,
            `*${messageUser} gibt ${taggedUser} ein Bier :beer:*`,
            `*${messageUser} gibt ${taggedUser} ein Radler :beer:*`
        ]
        let antwortenSelf = [
            `*${messageUser} gibt sich selber ein Bier... Nun gut... Wenn du niemand anderen hast :shrug: Prost! :beers:*`,
            `*${messageUser} holt eine Dose Bier aus dem Mini-Kühlschrank*`
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
    name: 'beer',
    usage: '!beer <@User>',
    description: 'Gib Leuten ein Bier :)'
}