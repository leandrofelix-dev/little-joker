const MessageEmbed = require("discord.js").MessageEmbed;
const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
      return msg.reply("não existe nenhuma música sendo reproduzida");
    }
    queue.dispatcher.resume();

  const resume_embed = new MessageEmbed()
  .setColor("#9999ff")
  .setTitle(`▶ Resume`)
  .setDescription(`A musica voltou à reprodução.`)

  msg.channel.send(resume_embed);
  };
  
  module.exports = {
    name: "resume",
    help: "Continua a reprodução de música atual",
    execute,
  };