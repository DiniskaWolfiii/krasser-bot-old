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
        `*${messageUser} hat das Verlangen jemanden zu essen :eyes:*`,
        `*${messageUser} hat das Verlangen jemanden zu essen und schaut dabei jemand im Raum an :eyes:*`
    ]
    let antwortenSelf = [
        `*${messageUser} isst sich selbst :eyes:*`,
        `*${messageUser} isst sich selbst :eyes:*`,
        `*${messageUser} isst sich selbst :eyes:*`,
        `*${messageUser} isst sich selbst... Zählt das jetzt als Kannibalismus??*`
    ]
    let antwortenTagged = [
        `*${messageUser} isst ${taggedUser} :eyes:*`,
        `*${messageUser} isst ${taggedUser} :eyes:*`,
        `*${messageUser} isst ${taggedUser} :eyes:*`,
        `*Beim Versuch ${taggedUser} zu essen, stolpert ${messageUser} und bricht sich die Zähne :eyes:*`
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
    name: 'eat',
    usage: '!eat <@User>',
    description: 'Esse ein paar deiner Mitmenschen :devil:'
}
