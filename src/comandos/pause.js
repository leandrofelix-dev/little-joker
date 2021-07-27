const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("não existe nenhuma música sendo reproduzida.");
  }
  queue.dispatcher.pause();

  const pause_embed = new MessageEmbed()
  .setColor("#9999ff")
  .setTitle(`⏸ Pause`)
  .setDescription(`A musica atual está pausada.`)

  msg.channel.send(pause_embed);
};

module.exports = {
  name: "pause",
  help: "Pausa a reprodução de música atual",
  execute,
};