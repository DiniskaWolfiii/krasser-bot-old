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
        `*${messageUser}'s Worte: "Fuck-off..."*`,
        `*${messageUser}'s Worte: "Fuck-off..."*`,
        `*${messageUser} hat keinen Bock mehr und wirft alles hin... Just Fuck off...*`,
        `*${messageUser} will einfach nicht mehr und schmeißt alles hin. FUCK-OFF!*`,
    ]
    let antwortenSelf = [
        `*${messageUser}'s Worte: "Fuck-off..."*`,
        `*${messageUser}'s Worte: "Fuck-off..."*`,
        `*${messageUser} hat keinen Bock mehr und wirft alles hin... Just Fuck off...*`,
        `*${messageUser} will einfach nicht mehr und schmeißt alles hin. FUCK-OFF!*`,
    ]
    let antwortenTagged = [
        `*${messageUser} ist angepisst von ${taggedUser}... Fuck-Off...*`,
        `*${messageUser} ist angepisst von ${taggedUser}... Fuck-Off...*`,
        `*${messageUser} ist angepisst von ${taggedUser}... Fuck-Off...*`,
        `*${messageUser} ist angepisst von ${taggedUser}... Fuck-Off...*`,
        `*${messageUser} ist angepisst von ${taggedUser}... Fuck-Off...*`,
        `*${messageUser} ist angepisst von ${taggedUser}... Fuck-Off...*`
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
    name: 'fuckoff',
    usage: '!fuckoff <@User>',
    description: 'Just Fuck off...'
}
