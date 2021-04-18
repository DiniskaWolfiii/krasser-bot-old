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
          `*${messageUser} stoßt auf ein Bier an :beers:*`,
          `*${messageUser} stoßt auf ein Bier an :beers:*`,
          `*${messageUser} stoßt auf ein Bier an :beers:*`,
          `*${messageUser} stoßt auf ein Bier an :beers:*`,
          `*${messageUser} stoßt auf ein Radler an :beers:*`
        ]
        let antwortenTagged = [
            `*${messageUser} stoßt mit ${taggedUser} auf ein Bier an :beers:*`,
            `*${messageUser} stoßt mit ${taggedUser} auf ein Bier an :beers:*`,
            `*${messageUser} stoßt mit ${taggedUser} auf ein Bier an :beers:*`,
            `*${messageUser} stoßt mit ${taggedUser} auf ein Bier an :beers:*`,
            `*${messageUser} stoßt mit ${taggedUser} auf ein Bier an :beers:*`,
            `*${messageUser} stoßt mit ${taggedUser} auf ein Radler an :beers:*`,
        ]
        let antwortenSelf = [
            `*${messageUser} stoßt mit sich selber an... :beers:*`,
            `*${messageUser} hat niemanden zum Antoßen... :beers:*`,
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
    name: 'prost',
    usage: '!prost <@User>',
    description: 'Stoße mit einem anderen User an!'
}