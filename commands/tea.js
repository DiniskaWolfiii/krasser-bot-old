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
            `*${messageUser} gibt ${taggedUser} eine Tasse Tee*`,
            `*${messageUser} gibt ${taggedUser} eine Tasse English Breakfast Tee*`,
            `*${messageUser} gibt ${taggedUser} eine Tasse Earl Grey Tee*`,
            `*${messageUser} gibt ${taggedUser} eine Tasse Hibiscus Tee*`,
            `*${messageUser} gibt ${taggedUser} eine Tasse Emperor's Clouds & Mist Tee*`,
            `*${messageUser} gibt ${taggedUser} eine Tasse Mint Citrus Tee*`,
            `*${messageUser} gibt ${taggedUser} eine Tasse Mint Blend Tee*`,
            `*${messageUser} gibt ${taggedUser} eine Tasse Youthberry Tee*`,
            `*${messageUser} gibt ${taggedUser} eine Tasse Jasmine Pearls Tee*`,
            `*${messageUser} gibt ${taggedUser} eine Tasse Chai*`,
            `*${messageUser} gibt ${taggedUser} eine Tasse Chai Tea Latte*`,
        ]

        let antwortenOhne = [
            `*${messageUser} trinkt eine Tasse Tee*`,
            `*${messageUser} trinkt eine Tasse English Breakfast Tee*`,
            `*${messageUser} trinkt eine Tasse Earl Grey Tee*`,
            `*${messageUser} trinkt eine Tasse Hibiscus Tee*`,
            `*${messageUser} trinkt eine Tasse Emperor's Clouds & Mist Tee*`,
            `*${messageUser} trinkt eine Tasse Mint Citrus Tee*`,
            `*${messageUser} trinkt eine Tasse Mint Blend Tee*`,
            `*${messageUser} trinkt eine Tasse Youthberry Tee*`,
            `*${messageUser} trinkt eine Tasse Jasmine Pearls Tee*`,
            `*${messageUser} trinkt eine Tasse Chai*`,
            `*${messageUser} trinkt eine Tasse Chai Tea Latte*`,
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
    name: 'tea',
    usage: '!tea <@User>',
    description: 'Gib Leuten eine Tasse Tee :)'
}