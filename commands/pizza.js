/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = async (client, message, args) => {
    let messageUser = message.member;
    let taggedUser = message.mentions.members.first();
    if(!taggedUser) {
        message.delete();
        return message.channel.send(`*${messageUser} frisst Pizza, gibt aber niemandem ein Stück davon ab! :pizza:*`)
    }
    try {
        let antworten = [
            `*${messageUser} gibt ${taggedUser} ein Stück Pizza :pizza:*`,
            `*${messageUser} gibt ${taggedUser} ein Stück Pizza :pizza:*`,
            `*${messageUser} brät ${taggedUser} eine mit einem Stück Pizza drüber :pizza:*`
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        message.delete();
        message.channel.send(antworten[randomNumber]);
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'pizza',
    usage: '!pizza <@User>',
    description: 'Verschenkt Pizza an einen User'
}