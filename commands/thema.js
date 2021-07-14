/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = (client, message, args) => {
    if (message.channel.topic.startsWith('AKTIV:')) return message.channel.send('Es ist gerade ein Thema am laufen! Check die Channel Beschreibung!');
    let thema = '';
    for (let i = 0; i < args.length; i++) {
        thema = thema + args[i] + ' ';
    }
    let themenKanal = message.guild.channels.cache.findKey(c=>c.id==='864914449906794556')
    if(!themenKanal) return message.delete();
    try {
        message.channel.setTopic(`AKTIV: ` + thema)
            .then(newChannel => message.channel.send(`Alles klar! Neues Thema zum diskutieren lautet: ${thema}. 2 Stunden laufen JETZT!`))
            .catch(console.error);
        setTimeout(() => {
            message.channel.send('Thema zum diskutieren vorbei! Jetzt kann ein neues Thema mit !thema ausgesucht werden');
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