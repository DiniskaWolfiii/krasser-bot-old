  
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
            `*${messageUser} zeigt einen fuenf Euro Schein*`
        ]
        let antwortenSelf = [
            `*${messageUser} hat 1 Cent auf der Straße gefunden*`,
            `*${messageUser} hat 23 Euro auf der Straße gefunden*`,
            `*${messageUser} gibt sich selbst Geld*`,
            `*${messageUser} schließt einen Sparbuch ab mit 0% Effektivzins*`,
            `*${messageUser} gibt sich selbst Geld*`,
            `*${messageUser} gibt sich selbst Geld*`,
        ]
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
    name: 'geld',
    usage: '!gelda <@User>',
    description: 'Gib Leuten Geld :)'
}
