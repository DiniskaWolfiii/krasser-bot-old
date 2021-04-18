/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
 module.exports.run = async (client, message, args) => {
     if (args[0] === '@everyone') return;
    let messageUser = message.member;
    let taggedUser = message.mentions.members.first();

    let antwortenOhne = [
        `*${messageUser} hat das Verlangen jemanden zu eine zu löffeln :spoon:*`,
        `*${messageUser} hält energisch einen Löffel in der Hand :spoon:*`,
        `*${messageUser} hält einen Löffel in der Hand :spoon:*`,
        `*${messageUser} hält energisch einen Löffel in der Hand :spoon:*`
    ]
    let antwortenSelf = [
        `*${messageUser} löffelt sich selbst :spoon:*`,
        `*${messageUser} löffelt sich selbst eine :spoon:*`,
        `*${messageUser} hebt einen Löffel :spoon:*`
    ]
    let antwortenTagged = [
        `*${messageUser} löffelt ${taggedUser} eine :spoon:*`,
        `*${messageUser} löffelt ${taggedUser} eine :spoon:*`,
        `*${messageUser} löffelt ${taggedUser} eine :spoon:*`,
        `*Beim Versuch ${taggedUser} eine zu löffeln, erreicht der Löffel 1.000 Grad und ${messageUser} verbrennt sich die Hände :spoon:*`
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
    name: 'spoon',
    usage: '!spoon <@User>',
    description: 'Löffel ein paar Leuten eine :)'
}