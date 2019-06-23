const pak = require('../package.json')

module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle('PieCord Status')
  .setColor(`RANDOM`)
  .setDescription(`Bot Status: Online
  Bot Version: ${pak.version}
  Bot Servercount: ${bot.guilds.size}
  Bot Usercount: ${bot.users.size}
  Bot Channelcount: ${bot.channels.size}
  Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
  Discord.js Version 11.3.1
  Node Version 8.9.4
  PieCord Website: [Website](https://piecord.ml)`)
  .setFooter(`PieCord Status`)
  .setTimestamp()  
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "stats"
}
