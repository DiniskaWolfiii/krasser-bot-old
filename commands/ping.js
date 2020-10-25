/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = async (client, message, args) => {
    const m = await message.channel.send("Pinging... :ping_pong:");
    m.edit(`Ping: \`${m.createdTimestamp - message.createdTimestamp}ms\``);
}

module.exports.help = {
    name: 'ping',
    usage: '!ping',
    description: 'Gibt den Ping vom Bot zurück.'
}