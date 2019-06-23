module.exports = (bot, guild, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle("PieCord's Final Message.")
  .setDescription("Aw, sorry you weren't satisfied with me... Please tell my creator what's wrong by saying `!contact msg`, . Thanks!")
  .setAuthor(bot.user.username)
  .setTimestamp()
  .setColor("RED")
  bot.users.get(guild.ownerID).send({ embed })
}
