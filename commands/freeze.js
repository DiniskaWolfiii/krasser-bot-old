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
          `*${messageUser} friert :cold_face:*`,
          `*${messageUser} will jemand einfrieren :snowflake:*`
        ]
        let antwortenTagged = [
            `*${messageUser} friert ${taggedUser} ein :snowflake:*`,
            `*${messageUser} friert ${taggedUser} ein :snowflake:*`,
            `*${messageUser} friert ${taggedUser} ein :snowflake:*`,
            `*${messageUser} friert ${taggedUser} ein und yeetet ${taggedUser} in ein Gletscher :snowflake:*`,
        ]
        let antwortenSelf = [
            `*${messageUser} friert sich selbst ein :snowflake:*`,
            `*${messageUser} steht auf Kälte und friert sich selbst ein :snowflake:*`
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
    name: 'freeze',
    usage: '!freeze <@User>',
    description: 'Friere andere Leute ein :cold_face:'
}
