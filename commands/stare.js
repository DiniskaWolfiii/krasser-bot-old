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
            `*${messageUser} starrt jemand hier an :eyes:*`,
            `*${messageUser} starrt jemand hier an :eyes:*`,
            `*${messageUser} hat das Verlangen jemanden anzustarren :eyes:*`
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        return message.channel.send(antworten[randomNumber]);
    }
    try {
        let antworten = [
            `*${messageUser} starrt ${taggedUser} an :eyes:*`,
            `*${messageUser} starrt ${taggedUser} an :eyes:*`,
            `*${messageUser} starrt ${taggedUser} an :eyes:*`,
            `*${messageUser} starrt ${taggedUser} an und stirbt dadurch :eyes:*`,
            `*${messageUser} macht ein Starr Wettbewerb mit ${taggedUser} :eyes:... ${taggedUser} verliert und stirbt*`,
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        message.delete();
        message.channel.send(antworten[randomNumber]);
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'stare',
    usage: '!stare <@User>',
    description: 'Starre andere Leute an :eyes:'
}
