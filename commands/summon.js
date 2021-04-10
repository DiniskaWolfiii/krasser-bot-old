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
            `*${messageUser} ruft ${taggedUser} von den Toten zurück*`,
            `*${messageUser} ruft ${taggedUser} von den Toten zurück*`,
            `*${messageUser} ruft ${taggedUser} von den Toten zurück*`,
            `*${messageUser} macht ein Ritual und ruft ${taggedUser}*`
        ]

        let antwortenOhne = [
            `*${messageUser} tanz weird rum...*`,
            `*${messageUser} will jemand von den Toten zurückrufen...*`,
            `*${messageUser} versucht jemand zu Rufen...*`,
            `*${messageUser} versucht jemand vom Jenseits zurückzurufen, aber die Astralischen Kräfte sind zu mächtig und erlauben das nicht...*`
        ]
        let antwortenSelf = [
            `*${messageUser} ersteht von den Toten auf!*`,
            `*${messageUser} erscheint!*`
        ]
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
    name: 'summon',
    usage: '!summon <@User>',
    description: 'Rufe den User von den Toten zurück'
}
