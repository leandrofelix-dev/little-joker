
const Discord = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

bot.queues = new Map();

const commandFiles = fs
.readdirSync(path.join(__dirname,"/comandos"))
  .filter((filename) => filename.endsWith(".js"));
  
  for(var filename of commandFiles){
  const comando = require(`./comandos/${filename}`);
  
  bot.commands.set(comando.name,comando);
}

bot.login(process.env.TOKEN);

bot.on("ready", () =>{ //INICIAR O BOT
  console.log(`Pronto, bot conectado como ${bot.user.username}`);
  bot.user.setActivity('Dados 🎲', { type: 'PLAYING' });
});

bot.on("guildMemberAdd", async (member) => {

  let guild = client.guilds.cache.get("602263557912133632"); //ID do server
  let channel = client.channels.cache.get("618256735135596564"); //ID do canal

  if(guild != member.guild){
    return console.log('Membro de um servidor diferente');
  }
  else{
    let wellcome_embed = new Discord.MessageEmbed()
    .setColor('#9999ff')
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle(`**Boas-vindas!**`)
    .setDescription(`${member.user}, seja bem vindo(a) à ${guild.name}! Atualmente, estamos com ${member.guild.memberCount} membros!`)
    .addField('Canais')
    .setThumbnail(member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .setFooter('ID do usuário: ' +member.user.id)
    .setTimestamp();

    await channel.send(wellcome_embed);

}}); 

bot.on("message", (msg) => {
  if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

  const args = msg.content.slice(process.env.PREFIX.length).split(" ");
  const command = args.shift();
  
  try {
    bot.commands.get(command).execute(bot, msg, args);
  } catch (e) {
    console.error(e);
    return msg.reply("Hummm... Eu não conheço esse comando!");
  }
});

