const Discord = require("discord.js");
const execute = (bot, msg, args) => {
  const MessageEmbed = require("discord.js").MessageEmbed;
    let dado = Math.floor(Math.random() * 5)+1;
    const dice_embed = new Discord.MessageEmbed()
    .setColor('#9999ff')
    .setAuthor(`ROLANDO OS DADOS 🎲`,'','')
    .setTitle(`Saiu o número ` + dado + ` 👌`);
    msg.channel.send(dice_embed);

  };
  
  module.exports = {
    name: "dado",
    help: "Rola um dado normal de 1 a 6.",
    execute,
  };
