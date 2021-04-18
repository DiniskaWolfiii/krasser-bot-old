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
            `*${messageUser} hält energisch eine Gabel in der Hand*`
        ]
        let antwortenTagged = [
            `*${messageUser} pickst ${taggedUser} mit einer Gabel. Haha, du wurdest aufgegabelt!*`,
            `*${messageUser} pickst ${taggedUser} mit einer Gabel. Haha, du wurdest aufgegabelt!*`,
            `*${messageUser} pickst ${taggedUser} mit einer Gabel. Haha, du wurdest aufgegabelt!*`,
            `*${messageUser} wirft Gabeln nach ${taggedUser} und gabelt ${taggedUser} damit an die Wand.*`
        ]
        let antwortenSelf = [
            `*${messageUser} pickst sich selbst mit einer Gabel...*`,
            `*${messageUser} hat Hunger und pickst sich selbst mit einer Gabel... Kann jemand helfen? Das sieht mir nicht ganz natürlich aus...*`
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
    name: 'gabel',
    usage: '!gabel <@User>',
    description: 'Steche Leute mit einer Gabel ab'
}