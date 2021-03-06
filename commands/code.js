const code = require("../json/redeem/codes.json").codes

module.exports.run = (bot, message, args, discord) => {
  let msg = args.join(" ")
  if (codes.includes(msg)) {
    let em = new discord.RichEmbed()
    .setTitle(`${bot.user.displayName} Code Redemption`)
    .setDescription(`Correct Code! Use this invite to go to the PieCord Base discord where you'll get the Yay role, and more!`)
    .addField(`[Invite](https://discord.gg/txgh6jW "Click to go to the PieCord Base!")`)
    .setAuthor(`${bot.user.avatarURL} ${bot.user.username}`)
    .setColor(`BLUE`)
    .setTimestamp()
    message.channel.send({embed: em}).then(m => m.delete(5500))
  } else {
    message.channel.send("Sorry, incorrect code.")
  }
}

module.exports.help = {
  name: "redeem"
}
