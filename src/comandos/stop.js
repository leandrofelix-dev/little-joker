
const MessageEmbed = require("discord.js").MessageEmbed;
const execute = (bot, msg, args) => {
    const s = args.join(" ");
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
      return msg.reply("não existe nenhuma música sendo reproduzida");
    }
    queue.songs = [];
    bot.queues.set(msg.guild.id, queue);
    queue.dispatcher.end();

  };
  
  module.exports = {
    name: "stop",
    help: "Para a reprodução de músicas no servidor",
    execute,
  };