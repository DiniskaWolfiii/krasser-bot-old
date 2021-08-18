const hastebin = require('hastebin-save');
/**
 *
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports.run = async (client, message, args) => {
    
    const {ownerID} = require('./../botconfig.json');
    const argsEval = message.content.split(" ").slice(1); 
    if(message.author.id !== ownerID) return message.reply('sorry, aber du darfst diesen Command nicht ausführen! :(');
    
    try {
        const code = argsEval.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
        let fertigerEval = clean(evaled);

        if (fertigerEval.length < 2000) {
            message.channel.send(fertigerEval, {
                code: "xl"
            });
        } else {
            hastebin.upload(fertigerEval, link => {
                message.channel.send('https://hastebin.com/' + link)
            })
        }
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }

}

module.exports.help = {
    name: 'eval',
    usage: '!eval',
    description: 'Evaluiert den JS Code'
}

function clean(text) { // kopiert von stackoverflow. kein plan was der code macht. YIKES
    if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}