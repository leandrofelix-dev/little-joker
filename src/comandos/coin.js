const Discord = require("discord.js");
const execute = (bot, msg, args) => {
  const MessageEmbed = require("discord.js").MessageEmbed;
    let coin = Math.floor(Math.random() * 2);

    if(coin == 1){
      result = "cara"
    } else if (coin == 0){
      result = "coroa"
    }

    const coin_embed = new Discord.MessageEmbed()
    .setColor('#9999ff')
    .setAuthor(`JOGANDO A MOEDA 🍀`,'','')
    .setTitle(`Saiu ` + result + "!" + " 👌");
    msg.channel.send(coin_embed);

  };
  
  module.exports = {
    name: "moeda",
    help: "Rola uma moeda de cara ou coroa.",
    execute,
  };
