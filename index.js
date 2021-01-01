require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.mentions.users.size > 0) {
    if (msg.mentions.users.first().id == bot.user.id) {
      msg.channel.send("message received.")
      console.log(msg.content);
      if (msg.content === "ping") {
        msg.channel.send("pong");
      }
    }
    console.log(msg.mentions.users.first().id);
    console.log(bot.user.id);
  }
  
  // if (msg.content === 'ping') {
  //   msg.reply('pong');
  //   msg.channel.send('pong');

  // } else if (msg.content.startsWith('!kick')) {
  //   if (msg.mentions.users.size) {
  //     const taggedUser = msg.mentions.users.first();
  //     msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
  //   } else {
  //     msg.reply('Please tag a valid user!');
  //   }
  // }
});
