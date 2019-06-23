const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let embed = new discord.RichEmbed()
  .setTitle("PieCord Invitation")
  .setDescription(`I can't use invite links.\nHere's an OAuth2 link instead! Click [here](https://discordapp.com/oauth2/authorize?client_id=548622504659255297&scope=bot&permissions=842279998) to invite me!`)
  .setColor("GREEN")
  .setFooter(`Invite Command`)
  .setTimestamp()
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "invite"
}
