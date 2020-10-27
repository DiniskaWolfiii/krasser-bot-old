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
            `*${messageUser} gibt ${taggedUser} einen Latte Macchiato*`,
            `*${messageUser} gibt ${taggedUser} einen Java Chip Frappucino*`,
            `*${messageUser} gibt ${taggedUser} einen Pumpkin Pie Latte*`,
            `*${messageUser} gibt ${taggedUser} einen Espresso*`,
            `*${messageUser} gibt ${taggedUser} einen Vanille Chocolate*`,
            `*${messageUser} gibt ${taggedUser} einen Kaffee*`,
            `*${messageUser} gibt ${taggedUser} einen White Chocolate Macchiato*`,
            `*${messageUser} gibt ${taggedUser} einen Caffè Latte*`,
            `*${messageUser} gibt ${taggedUser} einen Cappuccino*`,
            `*${messageUser} gibt ${taggedUser} einen Caramel Macchiato*`,
            `*${messageUser} gibt ${taggedUser} einen Caffè Mocha*`,
            `*${messageUser} gibt ${taggedUser} einen Caffè Americano*`
        ]

        let antwortenOhne = [
            `*${messageUser} trinkt einen Latte Macchiato*`,
            `*${messageUser} trinkt einen Java Chip Frappucino*`,
            `*${messageUser} trinkt einen Pumpkin Pie Latte*`,
            `*${messageUser} trinkt einen Espresso*`,
            `*${messageUser} trinkt einen Vanille Chocolate*`,
            `*${messageUser} trinkt einen Kaffee*`,
            `*${messageUser} trinkt einen White Chocolate Macchiato*`,
            `*${messageUser} trinkt einen Caffè Latte*`,
            `*${messageUser} trinkt einen Cappuccino*`,
            `*${messageUser} trinkt einen Caramel Macchiato*`,
            `*${messageUser} trinkt einen Caffè Mocha*`,
            `*${messageUser} trinkt einen Caffè Americano*`
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
    name: 'coffee',
    usage: '!coffee <@User>',
    description: 'Gib Leuten eine Tasse Kaffee :)'
}