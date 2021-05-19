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
    if(!taggedUser) {
        message.delete();
        let antworten = [
          `*${messageUser} hat das verlangen jemanden zu klatschen :clap:*`,
          `*${messageUser} hebt die Hand und hat das Verlangen jemanden zu klatschen*`
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        return message.channel.send(antworten[randomNumber]);
    }
    try {
        let antworten = [
            `*${messageUser} klatscht ${taggedUser}*`,
            `*${messageUser} klatscht ${taggedUser}*`,
            `*${messageUser} klatscht ${taggedUser}*`,
            `*${messageUser} klatscht ${taggedUser}*`,
            `*${messageUser} klatscht ${taggedUser}*`,
            `*${messageUser} klatscht ${taggedUser} auf den Ass*`
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        message.delete();
        message.channel.send(antworten[randomNumber]);
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'slap',
    usage: '!slap <@User>',
    description: 'Klatsche einem Typen'
}
