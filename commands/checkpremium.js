const fs = require('fs')
const config = require('../json/config.json')

module.exports.run = (bot, message, args, discord) => {
    function notfree() {
    let ga = bot.guilds.get('545020748197003264')
    let member = message.author
    if (message.member == message.guild.owner) {
    if (ga.members.get(member.id).roles.find('name','Yay')) {
        
            let em = new discord.RichEmbed()
            .setTitle(":money_mouth: Hulkbot Premium :money_mouth:")
            .setDescription(`:moneybag: Your premium status is active! Thanks for donating! :moneybag:`)
            .setThumbnail(bot.user.avatarURL)
            .setColor("GREEN")
            .setTimestamp()
            message.channel.send(em)
    } else {
        let em = new discord.RichEmbed()
        .setTitle(":money_mouth: Hulkbot Premium :money_mouth:")
        .setDescription(`:thumbsdown: Your premium status is unactive. You can get this by asking kieran.) :thumbsdown:`)
        .setThumbnail(bot.user.avatarURL)
        .setColor("RED")
        .setTimestamp()
        message.channel.send(em)
    }
  } else {
      let em = new discord.RichEmbed()
      .setTitle("Failure! :face_palm:")
      .setDescription("You need to be the owner of this guild to use this command.")
      .setThumbnail(bot.user.avatarURL)
      .setColor("RED")
      .setTimestamp()
      
    message.channel.send({embed: em})
  }
    }
    if (bot.guilds.size >= 150 && !bot.guilds.size <= 155 ) {
        let em = new discord.RichEmbed()
        .setTitle("Premium Check")
        .setDescription("PREMIUM IS ALLWAYS FREE!  ENJOY! :smile:")
        .setTimestamp()
        .setFooter()
        message.channel.send({embed: em})
    } else {
        notfree()
    }
}

module.exports.help = {
    name: "checkpremium"
}
