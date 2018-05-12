const Discord = require('discord.js');
const client = new Discord.Client();
// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDQyNTExMTI4Njg2MzYyNjM0.DdDUTg.7AOzWf-btfOft64wnLcQib9RkjQ';

//BOT PLAYING GAME
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('in the Mob Arena', { type: 'PLAYING' });
});
// MUSIC

// WELCOME FEATURE
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'lobby');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

// MODERATION
client.on('message', message => {
    message.edit(message.content.replace(/asshole/gi, "[I'm stupid because I swear]"))
       .then(msg => console.log(`Updated the content of a message from ${msg.author}`))
       .catch(console.error);
});

// FROM HERE ON IS ALL MSG COMMAND TRIGGERS
client.on('message', msg => {
  if (msg.content === '!status') {
    msg.reply('***BOT IS ONLINE***');
  }
});

client.on('message', msg => {
  if (msg.content === '!Status') {
    msg.reply('***BOT IS ONLINE***');
  }
});

client.on('message', msg => {
  if (msg.content === '!STATUS') {
    msg.reply('***BOT IS ONLINE***');
  }
});

client.on('message', msg => {
  if (msg.content === '!test') {
    msg.reply('this is a test message.');
  }
});

client.on('message', msg => {
  if (msg.content === '!Test') {
    msg.reply('this is a test message.');
  }
});

client.on('message', msg => {
  if (msg.content === '!TEST') {
    msg.reply('this is a test message.');
  }
});

client.on('message', msg => {
  if (msg.content === '!invite') {
    msg.reply('use this code to invite new members: https://discord.gg/Vd99axf');
  }
});

client.on('message', msg => {
  if (msg.content === '!Invite') {
    msg.reply('use this code to invite new members: https://discord.gg/Vd99axf');
  }
});

client.on('message', msg => {
  if (msg.content === '!INVITE') {
    msg.reply('use this code to invite new members: https://discord.gg/Vd99axf');
  }
});

client.on('message', msg => {
  if (msg.content === '!help') {
    msg.reply('*!help* ***!invite*** *!status* ***!version***');
  }
});

client.on('message', msg => {
  if (msg.content === '!Help') {
    msg.reply('*!help* ***!invite*** *!status* ***!version***');
  }
});

client.on('message', msg => {
  if (msg.content === '!HELP') {
    msg.reply('*!help* ***!invite*** *!status* ***!version***');
  }
});

client.on('message', msg => {
  if (msg.content === '!staffhelp') {
    msg.reply('!ban, !kick, !mute, !purge, !notify, !lock');
  }
});
// `!ban @<user>: bans the mentioned user;
//!kick @<user>: kicks the mentioned user;
//!mute @<user>: mutes the mentioned user;
//!purge <amount> [optional: @user]: deletes the given amount of messages, min 2 max 100, if user is specified it will delete messages only of that user
//!notify @<user>: sends a DM (direct message) to the mentioned user
//!lock: locks the channel, not allowing users to message in there. For releasing a channel type {prefix}lock <release/unlock>.`

client.login('NDQyNTExMTI4Njg2MzYyNjM0.DdCuzQ.NgPg4kyPmK-HDvozN9UnxLQxpOs');