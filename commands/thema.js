const Discord = require('discord.js');

/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = (client, message, args) => {
    if (message.channel.topic.startsWith('AKTIV:')) {
        let txtEmbed = new Discord.MessageEmbed()
            .setDescription('Es ist gerade ein Thema zum Diskutieren am laufen! Checke die Channel Beschreibung!')
            .setThumbnail(client.user.displayAvatarURL())
            .setColor('585858')
        return message.channel.send(txtEmbed);
    }
    let thema = '';
    for (let i = 0; i < args.length; i++) {
        thema = thema + args[i] + ' ';
    }
    let themenKanal = message.guild.channels.cache.findKey(c => c.id === '864914449906794556')
    if (!themenKanal) return message.delete();
    try {
        let txtEmbed = new Discord.MessageEmbed()
            .setDescription(`Alles klar! Das neue Thema zum diskutieren lautet: ${thema}. 2 Stunden laufen ab... JETZT!`)
            .setThumbnail(client.user.displayAvatarURL())
            .setColor('585858')
        message.channel.setTopic(`AKTIV: ` + thema)
            .then(newChannel => message.channel.send(txtEmbed))
            .catch(console.error);
        setTimeout(() => {
            let vorbeiEmbed = new Discord.MessageEmbed()
                .setDescription(`Thema zum diskutieren vorbei! Jetzt kann mit !thema ein neues Thema zum diskutieren gewählt werden!`)
                .setThumbnail(client.user.displayAvatarURL())
                .setColor('585858')
            message.channel.send(vorbeiEmbed);
            message.channel.setTopic('FREI. Starte ein neues Thema mit !thema')
        }, 7200000);
    }
    catch (err) {
        console.log(err);
    }

}

module.exports.help = {
    name: 'thema',
    usage: '!thema [Thema zum diskutieren in kurzen Worten]',
    description: 'Wähle ein Thema aus zum diskutieren! Das Thema läuft dann 2 Stunden lang bis es automatisch zurückgesetzt wird. Während der Zeit kann kein anderes Thema ausgesucht werden!'
}