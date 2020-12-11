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
            `*${messageUser} bringt ${taggedUser} um :skull:*`,
            `*${messageUser} bringt ${taggedUser} um :skull:*`,
            `*${messageUser} bringt ${taggedUser} um :skull:*`,
            `*${messageUser} bringt ${taggedUser} um :skull:*`,
            `*${messageUser} bringt ${taggedUser} um :skull:*`,
            `*${messageUser} zwingt ${taggedUser} ein Gift zu trinken :skull:*`,
            `*${messageUser} zwingt ${taggedUser} ein Gift zu trinken :skull:*`,
            `*${messageUser} zwingt ${taggedUser} ein Gift zu trinken, überlebt es aber. ÄTSCH :stuck_out_tongue:*`
        ]

        let antwortenOhne = [
            `*${messageUser} hat das Verlangen jemanden umzubringen :skull:*`,
            `*${messageUser} hat das Verlangen jemanden umzubringen :skull:*`,
            `*${messageUser} hat das Verlangen jemanden umzubringen :skull:*`,
            `*${messageUser} zückt ein Messer und schaut dabei jemand in diesem Raum an :eyes::skull:*`
        ]
        message.delete();
        if(taggedUser) {
            let randomNumber = Math.floor(Math.random()*antwortenTagged.length);
            message.channel.send(antwortenTagged[randomNumber])
        }
        else  {
            let randomNumber = Math.floor(Math.random()*antwortenOhne.length);
            message.channel.send(antwortenOhne[randomNumber])
        }
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'kill',
    usage: '!kill <@User>',
    description: 'Bringe jemand um :skull:'
}