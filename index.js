const Discord = require('discord.js');
const {prefix, token, ownerID } = require('./botconfig.json');
const shelljs = require('shelljs');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

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
        .then(shelljs.exec('pm2 restart krasser-bot'))
        
    }
});

client.login(token);