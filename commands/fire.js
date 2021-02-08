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
        `*${messageUser} hält einen Feuerball in der Hand, und hat keine Angst diesen einzusetzen :fire:*`
    ]
    let antwortenSelf = [
        `*${messageUser} zündet sich selbst an :fire:*`,
        `*${messageUser} zündet sich selbst an... :fire: You good bro?*`,
        `*${messageUser} zündet sich selbst an :fire:*`,
        `*${messageUser} zündet sich selbst an :fire:*`
    ]
    let antwortenTagged = [
        `*${messageUser} zündet ${taggedUser} an :fire:*`,
        `*${messageUser} zündet ${taggedUser} an :fire:*`,
        `*${messageUser} zündet ${taggedUser} an :fire:*`,
        `*Beim Versuch ${taggedUser} anzuzünden, stolpert ${messageUser} und setzt ausversehen den Channel in Brand :fire:*`
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
    name: 'fire',
    usage: '!fire <@User>',
    description: 'Zündet einen User an'
}