/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = async (client, message, args) => {
    let messageUser = message.member;
    let taggedUser = message.mentions.members.first();

        let antwortenOhne = [
          `*${messageUser} hält energisch ein Messer in der Hand :knife:*`,
          `*${messageUser} hält energisch ein Messer in der Hand und beobachtet jemanden :eyes:*`
        ]

        let antwortenTagged = [
            `*${messageUser} wirft ${taggedUser} mit einem Messer ab! :knife:*`,
            `*${messageUser} wirft ${taggedUser} mit einem Messer ab! :knife:*`,
            `*${messageUser} wirft ${taggedUser} mit einem Messer ab! :knife:*`,
            `*${messageUser} wirft ${taggedUser} mit einem Messer ab und nagelt ${taggedUser} damit an die Wand! :knife:*`
        ]
        let antwortenSelf = [
            `*${messageUser} sticht sich selbst mit einem Messer ab :knife:*`,
            `*${messageUser} lässt wirft ein Messer hoch und trifft sich selbst damit :knife:*`
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
    name: 'knife',
    usage: '!knife <@User>',
    description: 'Wirf mit Messern nach Leuten. Hehe'
}
