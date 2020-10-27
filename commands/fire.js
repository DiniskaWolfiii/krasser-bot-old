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
        let antworten = [
            `*${messageUser} zündet ${taggedUser} an :fire:*`,
            `*Beim Versuch, ${taggedUser} anzuzünden, stolpert ${messageUser} und setzt ausversehen den Channel in Brand*`
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        message.delete();
        message.channel.send(antworten[randomNumber]);
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'fire',
    usage: '!fire [@User]',
    description: 'Zündet einen User an'
}