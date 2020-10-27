const Discord = require('discord.js');
const {prefix, token, ownerID } = require('./botconfig.json');
const shelljs = require('shelljs');
const fs  = require('fs');

const client = new Discord.Client();

client.commands = new Discord.Collection();

fs.readdir('./commands', (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split('.').pop() === 'js');
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
});

client.on('guildMemberAdd', newMember => {
    let newUser = newMember.user.username;
    let welcomeMessages = [
        `WOOOP WOOOOP BICHTES! Die Party kann steigen! ${newUser} is hier!`,
        `Ach nur ${newUser} ist es, niemand wichtiges.`,
        `Macht den Landeplatz für ${newUser} frei, denn ${newUser} landet in T-10, 9, 8........ Zu langsam... JETZT!!! :rocket:`
    ]

    let randomNumber = Math.floor(Math.random()*welcomeMessages.length);

    if(newMember.guild.id !== '565879649175994368') return;
    let welcomeEmbed = new Discord.MessageEmbed()
    .setColor('#00FF00')
    .setThumbnail(newMember.user.displayAvatarURL())
    .setTitle('Neuer Krasser Dude ist dazu gekommen!')
    .setDescription(welcomeMessages[randomNumber]);

    let krasserChannel = newMember.guild.channels.cache.find(c=>c.id==='692636574831214623');
    krasserChannel.send(welcomeEmbed);

    newMember.roles.add(['693595225129484289', '692482666469261403', '692482394455933008', '692435890454397059', '692409031482015785'], "Auto Role Join")
})

client.on('guildMemberRemove', oldMember => {
    const userName = oldMember.user.username;
    let byeMessages = [
        `${userName} hat diesen Server verlassen :(`,
        `Die Treulose Tomate ${userName} hat uns verlassen! DIE SAU`,
        `${userName} hat sich aus dem Server GEYEETED`
    ]
    let randomNumber = Math.floor(Math.random()*byeMessages.length);

    if(oldMember.guild.id !== '565879649175994368') return;
    let byeEmbed = new Discord.MessageEmbed()
    .setColor('#00FF00')
    .setThumbnail(oldMember.user.displayAvatarURL())
    .setTitle('Neuer Krasser Dude ist dazu gekommen!')
    .setDescription(byeMessages[randomNumber]);

    let krasserChannel = oldMember.guild.channels.cache.find(c=>c.id==='692636574831214623');
    krasserChannel.send(byeEmbed);
})

client.login(token);