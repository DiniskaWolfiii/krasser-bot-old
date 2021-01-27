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
            `*${messageUser} yeeted sich selbst weg*`,
            `*${messageUser} yeeted sich selbst aus dem Raum*`,
            `*${messageUser} hat das Verlangen jemanden weg zu yeeten*`
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        return message.channel.send(antworten[randomNumber]);
    }
    try {
        let antworten = [
            `*${messageUser} yeeted ${taggedUser} aus dem Channel*`,
            `*${messageUser} yeeted ${taggedUser} aus dem Channel*`,
            `*${messageUser} yeeted ${taggedUser} aus dem Channel*`,
            `*${messageUser} yeeted ${taggedUser} durch den Channel. WEEEEEEEEEEE*`,
            `*${messageUser} versucht ${taggedUser} wegzuyeeten... ${taggedUser} ist aber zu dick und kann nicht geyeeted werden*`,
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        message.delete();
        message.channel.send(antworten[randomNumber]);
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'yeet',
    usage: '!yeet <@User>',
    description: 'Yeete Leute ausm Raum'
}
