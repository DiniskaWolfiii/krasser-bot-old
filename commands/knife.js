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
        let antworten = [
          `*${messageUser} hält energisch ein Messer in der Hand*`,
          `*${messageUser} hält energisch ein Messer in der Hand und beobachtet jemanden :eyes:*`
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        return message.channel.send(antworten[randomNumber]);
    }
    try {
        let antworten = [
            `*${messageUser} wirft ${taggedUser} mit einem Messer ab!*`,
            `*${messageUser} wirft ${taggedUser} mit einem Messer ab!*`,
            `*${messageUser} wirft ${taggedUser} mit einem Messer ab!*`,
            `*${messageUser} wirft ${taggedUser} mit einem Messer ab und nagelt ${taggedUser} damit an die Wand!*`
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        message.delete();
        message.channel.send(antworten[randomNumber]);
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'knife',
    usage: '!knife <@User>',
    description: 'Wirf mit Messern nach Leuten. Hehe'
}
