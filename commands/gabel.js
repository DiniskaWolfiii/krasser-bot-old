/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = async (client, message, args) => {
    let messageUser = message.member;
    let taggedUser = message.mentions.members.first();
    if(!taggedUser) {
        message.delete();
        return message.channel.send(`*${messageUser} hält energisch eine Gabel in der Hand*`)
    }
    try {
        let antworten = [
            `*${messageUser} pickst ${taggedUser} mit einer Gabel. Haha, du wurdest aufgegabelt!*`,
            `*${messageUser} pickst ${taggedUser} mit einer Gabel. Haha, du wurdest aufgegabelt!*`,
            `*${messageUser} pickst ${taggedUser} mit einer Gabel. Haha, du wurdest aufgegabelt!*`,
            `*${messageUser} wirft Gabeln nach ${taggedUser} und gabelt ${taggedUser} damit an die Wand.*`
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        message.delete();
        message.channel.send(antworten[randomNumber]);
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'gabel',
    usage: '!gabel <@User>',
    description: 'Steche Leute mit einer Gabel ab'
}