const config = require('../json/config.json')
const prefix = process.env.prefix

module.exports.run = (bot, message, args, discord) => {
  if (!config.owners.includes(message.author.id)) return message.channel.send("Nope!")
  if (message.channel.id == "592308975949840393") {
      message.channel.bulkDelete(100).catch(console.error)
      message.channel.send("Successfully cleared the logs.").then(m => m.delete(5000))
    } else {
        console.log("Failed to clear logs. :-(")
    }
}

module.exports.help = {
  name: "clearlogs",
  usage: "!clearlogs",
  information: "Clears the bot logs"
}
