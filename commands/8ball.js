/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = async (client, message, args) => {
//    try {

        if(!args || args.length === 0) return message.channel.send("Es fehlen Argumente! Versuche ``!8ball Liebt er mich?``")

        const Discord = require('discord.js');
        let antworten = [
            'Ja',
            'Nein',
            'Versuchs morgen wieder',
            'Möglicherweise',
            'Ja, aber mache es hardcore betrunken :beers:',
            'Meine Quellen sagen Nein, sie sagen aber auch das Hillary gewinnen würde',
            'Tu was Jesus gemacht hat, sterb mit einem Alter von 33',
            'Zweifelhaft',
            'Auf jeden Fall',
            'HELL YESSS, GIRLLLL. GO FOR IT',
            'Wenn du den morgigen Tag noch erleben möchtest, TU ES NICHT',
            'Ohne Zweifel',
            'Keine Ahnung',
            'Du musst schon hart verzweifelt sein wenn du einer KUGEL solch eine Frage stellt, hm?',
            'Frag später nicht nochmal nach',
            'Frag doch einfach nochmaaaaal',
            'Halts Maul, du Nutte',
            'Es ist Montag, lass mich inruhe',
            ':zzz:'
        ]

        let randomNumber = Math.floor(Math.random()*antworten.length);

        let alleArgs = "";

        for (let i = 0; i < args.length; i++) {
            alleArgs = alleArgs + args[i] + " ";
            
        }

        message.delete();
        let krassesEmbed = new Discord.MessageEmbed()
        .setColor('#636363')
        .setTitle(':8ball: 8Ball')
        .setThumbnail('https://cdn.pixabay.com/photo/2015/09/05/07/17/pool-ball-923833_960_720.png')
        .addField('Frage', alleArgs)
        .addField('Antwort', antworten[randomNumber])
        .setFooter('Question by ' + message.member.user.username, message.member.user.displayAvatarURL())

        message.channel.send(krassesEmbed);
/*    } catch (error) {
        message.channel.send("```js\n" + error + "\n```");
    }*/

}

module.exports.help = {
    name: '8ball',
    usage: '!8ball [Frage]',
    description: 'Lass dir die Fragen des Lebens beantworten'
}