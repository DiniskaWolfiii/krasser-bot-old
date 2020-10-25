/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = async (client, message, args) => {
    const {ownerID} = require('./../botconfig.json');
    const shelljs = reuqire('shelljs');

    if(message.author.id !== ownerID) return message.reply('DU BIST NICHT WOLFIII. HALTS MAUL! :c');

    message.channel.send(':zzz: Good Night!')
    .then(msg => {
        client.destroy();
        shelljs.exec('pm2 restart krasser-bot');
    })

}

module.exports.help = {
    name: 'ping',
    usage: '!ping',
    description: 'Gibt den Ping vom Bot zurück.'
}