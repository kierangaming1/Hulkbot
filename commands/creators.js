module.exports.run = (bot, message, args, discord) => {
  message.channel.send(`My creators are <@${process.env.oid}> and <@324924213410660355>.`)
}

module.exports.help = {
  name: "creators"
}
