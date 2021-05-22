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
        `*${messageUser} hat das Verlangen jemanden hier im Raum auf Corona zu testen :test_tube:*`,
        `*${messageUser} hält einen Corona-Test in der Hand :test_tube:*`
    ]
    let antwortenSelf = [
        `*${messageUser} testet sich selbst auf Corona... ${messageUser} ist negativ!*`,
        `*${messageUser} testet sich selbst auf Corona... ${messageUser} ist negativ!*`,
        `*${messageUser} testet sich selbst auf Corona... ${messageUser} ist negativ!*`,
        `*${messageUser} testet sich selbst auf Corona... ${messageUser} ist negativ!*`,
        `*${messageUser} testet sich selbst auf Corona... ${messageUser} ist negativ!*`,
        `*${messageUser} testet sich selbst auf Corona... ${messageUser} ist positiv!!! :bell:*`,
        `*${messageUser} testet sich selbst auf Corona... ${messageUser} ist positiv!!! :bell:*`,
        `*${messageUser} manipuliert den Corona-Test. Er zeigt Negativ an.*`
    ]
    let antwortenTagged = [
        `*${messageUser} testet ${taggedUser} auf Corona... Der Test zeigt Negativ an!*`,
        `*${messageUser} testet ${taggedUser} auf Corona... Der Test zeigt Negativ an!*`,
        `*${messageUser} testet ${taggedUser} auf Corona... Der Test zeigt Negativ an!*`,
        `*${messageUser} testet ${taggedUser} auf Corona... Der Test zeigt Negativ an!*`,
        `*${messageUser} testet ${taggedUser} auf Corona... Der Test zeigt Negativ an!*`,
        `*${messageUser} testet ${taggedUser} auf Corona... Der Test zeigt Positiv an!!! :bell:*`,
        `*${messageUser} testet ${taggedUser} auf Corona... Der Test zeigt Positiv an!!! :bell:*`,
        `*${taggedUser} manipuliert den Corona-Test von ${messageUser}... Er zeigt Negativ an.*`
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
    name: 'corona',
    usage: '!corona <@User>',
    description: 'Mach einen Coronatest und bewerte ob jemand Corona hat...'
}
