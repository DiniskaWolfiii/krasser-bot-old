const Discord = require('discord.js');
const {prefix, token, ownerID } = require('./botconfig.json');
const shelljs = require('shelljs');
const fs  = require('fs');

const client = new Discord.Client();

client.commands = new Discord.Collection();

fs.readdir('./commands', (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => split('.').pop() === 'js');
    if(jsfiles.length <= 0) {
        console.log('Keine Commands zum laden...');
        return;
    }
    console.log(`Loading ${jsfiles.length} commands`);

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i+1}: ${f} loaded!`);
        client.commands.set(props.help.name, props);
    })
});

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    let cmd = client.commands.get(command);
    if(cmd) cmd.run(client, message, args);

    if(command === 'pull') {
        if(message.author.id !== ownerID) return message.reply('DU BIST NICHT WOLFIII. HALTS MAUL! :c');

        message.channel.send(':bulb: Pulling...')
        .then(msg => {
            shelljs.cd('/home/wolfiii/bots/krasser-bot')
            shelljs.exec('git pull origin master')
            msg.edit(':bulb: Pulled!');
        })
    } else if(command === 'reboot') {
        if(message.author.id !== ownerID) return message.reply('DU BIST NICHT WOLFIII. HALTS MAUL! :c');

        message.channel.send(':zzz: Good Night!')
        .then(msg => {
            client.destroy();
            shelljs.exec('pm2 restart krasser-bot');
        })
        
    }
});

client.login(token);