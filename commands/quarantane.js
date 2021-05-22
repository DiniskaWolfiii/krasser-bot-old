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
        `*${messageUser} will jemand in Quarantäne schicken... :eyes:*`,
        `*${messageUser} hat Angst und schiebt gleich jemand in Quarantäne...*`
    ]
    let antwortenSelf = [
        `*${messageUser} hat kein Bock mehr und beantragt Quarantäne für 2 Jahre...*`,
        `*${messageUser} schiebt sich selbst in Quarantäne... Bis in 14 Tagen!*`,
        `*${messageUser} befindet sich ab sofort in Quarantäne... Die geht noch... Hat niemand dokumentiert... Also von neu. 14 Tage!*`,
        `*${messageUser} geht in Quarantäne*`
    ]
    let antwortenTagged = [
        `*${messageUser} schiebt ${taggedUser} in Quarantäne! 14 Tage ab jetzt*`,
        `*${messageUser} schiebt ${taggedUser} in Quarantäne!*`,
        `*${messageUser} schiebt ${taggedUser} in Quarantäne!*`,
        `*${messageUser} schiebt ${taggedUser} in Quarantäne, trotz eines Negativen Testes!*`,
        `*${messageUser} yeeted ${taggedUser} in Quarantäne! Bis in 14 Tagen!*`,
        `*${taggedUser} wird von ${messageUser} in Quarantäne geschoben. Bis in 14 Tagen!*`
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
    name: 'quarantane',
    usage: '!quarantane <@User>',
    description: 'Schiebe jemand in Quarantäne!'
}
