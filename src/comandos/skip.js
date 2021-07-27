const MessageEmbed = require("discord.js").MessageEmbed;
const playSong = require("./play").playSong;

const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);
  if (!queue) {
    return msg.reply("não existe nenhuma música sendo reproduzida");
  }
  const skip_embed = new MessageEmbed()
  .setColor("#9999ff")
  .setTitle(`⏯ Próxima`)
  .setDescription(`Tocando a próxima música da lista.`)
  msg.channel.send(skip_embed);

  queue.songs.shift();
  bot.queues.set(msg.guild.id, queue);
  playSong(bot, msg, queue.songs[0]);

};

module.exports = {
  name: "skip",
  help: "Pula para a próxima música",
  execute,
};