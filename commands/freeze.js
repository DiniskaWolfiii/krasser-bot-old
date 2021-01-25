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
        let antworten = [
          `*${messageUser} friert :cold_face:*`,
          `*${messageUser} will jemand einfrieren :snowflake:*`
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        return message.channel.send(antworten[randomNumber]);
    }
    try {
        let antworten = [
            `*${messageUser} friert ${taggedUser} ein :snowflake:*`,
            `*${messageUser} friert ${taggedUser} ein :snowflake:*`,
            `*${messageUser} friert ${taggedUser} ein :snowflake:*`,
            `*${messageUser} friert ${taggedUser} ein und yeetet ${taggedUser} in ein Gletscher :snowflake:*`,
        ]
        let randomNumber = Math.floor(Math.random()*antworten.length);
        message.delete();
        message.channel.send(antworten[randomNumber]);
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'freeze',
    usage: '!freeze <@User>',
    description: 'Friere andere Leute ein :cold_face:'
}
