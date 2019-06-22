module.exports.run = (bot, message, args, discord) => {
  message.channel.send(`My creators are <@${process.env.oid}> and <@203283964771696640>.`)
}

module.exports.help = {
  name: "creators"
}
