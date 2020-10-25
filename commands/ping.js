/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = async (client, message, args) => {
    try {
        const m = await message.channel.send("Pinging... :ping_pong:");
        m.edit(`Ping: \`${m.createdTimestamp - message.createdTimestamp}ms\``);
    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }

}

module.exports.help = {
    name: 'ping',
    usage: '!ping',
    description: 'Misst den Ping und gibt diesen zurück'
}