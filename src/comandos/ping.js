const Discord = require('discord.js')
const MessageEmbed = require("discord.js").MessageEmbed;
const execute = (bot, msg, args) => {

    const ping_embed = new Discord.MessageEmbed()
    .setColor('#9999ff')
    .setAuthor('🏓Pong!')
    .setDescription(`A latencia atual é de **${Date.now() - msg.createdTimestamp}ms**. A latência da API é de **${Math.round(bot.ws.ping)}ms**.`)
    .setColor("#9999ff")
    msg.channel.send(ping_embed);
  };
  
  module.exports = {
    name: "ping",
    help: "Mostra o ping da aplicação.",
    execute,
  };