  
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
        let antwortenTagged = [
            `*${messageUser} gibt ${taggedUser} einen Euro*`,
            `*${messageUser} gibt ${taggedUser} sieben Yen*`,
            `*${messageUser} gibt ${taggedUser} kein Geld. GEH ARBEITEN*`,
            `*${messageUser} gibt ${taggedUser} 1,24 Yen*`
        ]

        let antwortenOhne = [
            `*${messageUser} hat Gehalt bekommen und gibt eine Runde Alkohol aus!*`,
            `*${messageUser} hat kein Geld*`,
            `*${messageUser}'s Kontostand ist gerade Roter als Antonia mit Sonnenbrand*`,
            `*${messageUser} zeigt seinen fuenf Euro Schein*`
        ]
        let randomNumber = Math.floor(Math.random()*antwortenOhne.length);
        message.delete();
        if(taggedUser) return message.channel.send(antwortenTagged[randomNumber])
        else message.channel.send(antwortenOhne[randomNumber])
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'geld',
    usage: '!gelda <@User>',
    description: 'Gib Leuten Geld :)'
}
