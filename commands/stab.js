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
          `*${messageUser} hat das Verlangen jemand abzustechen :knife:*`,
          `*${messageUser} hebt ein Messer hervor :knife:*`
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        return message.channel.send(antworten[randomNumber]);
    }
    try {
        let antworten = [
            `*${messageUser} sticht ${taggedUser} ab :knife:*`,
            `*${messageUser} sticht ${taggedUser} ab :knife:*`,
            `*${messageUser} sticht ${taggedUser} ab :knife:*`,
            `*${messageUser} sticht ${taggedUser} ab :knife:*`
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        message.delete();
        message.channel.send(antworten[randomNumber]);
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'stab',
    usage: '!stab <@User>',
    description: 'Stech jemand ab :knife:'
}
