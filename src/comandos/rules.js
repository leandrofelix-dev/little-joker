const Discord = require("discord.js");
const execute = (bot, msg, args) => {
  const MessageEmbed = require("discord.js").MessageEmbed;
  const rules_embed = new Discord.MessageEmbed()
  .setColor("#9999ff")
  .setTitle(`Regras`)
  .setAuthor(
    `${msg.member.guild.name}`,
    `https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`,
    ``)
    .setDescription(`
    - 01: Proibido floodar, fazer spam ou qualquer coisa que polua os canais de texto do servidor; \n
    - 02: Proibido qualquer tipo de material ofensivo ou obsceno como links, imagens, mensagens, emojis, pornografia, gore, racismo, sexismo... entre outros. \n
    - 03: Proibido a divulgação de outros servidores Discord;Membros autorizados poderão enviar convites de servidores que são donos ou administram no chat especifico do servidor, desde que não abusem, claro; \n
    - 04: Somente é permitido fazer brincadeiras, zoeiras e xingamentos direcionados a quem você possui intimidade, lembrando que se não aguenta a zoeira nem comece; \n
    - 05: Caso algum membro se sinta incomodado com alguém, fale para o infrator parar, caso ele desrespeite o aviso, a staf deverá ser comunicada e o infrator será punido de acordo com as regras; \n
    - 06: Não incomode os administradores com coisas desnecessárias, é chato; \n
    - 07: Proibido divulgar links, imagens e mensagens que contenham informações pessoais de outra pessoa, como links de redes sociais, fotos pessoais, localização, número de telefone, nome, idade, entre outras sem autorização da mesma; \n
    - 08: É proibido provocar ou reagir a tretas em público; \n
    - 09: Não será admitido perturbações e reclamações a/sobre Staff de qualquer natureza em público, caso queira fazer uma reclamação, chame no PV o Staff com cargo superior; \n
    - 10: Proibido atrapalhar as conversas nos canais de voz, como ficar entrando e saindo repetidamente, usar bots de música e áudios; \n
    - 11: Assédio é extremamente proibido, seja ele de qualquer tipo, sendo punido com ban permanente sem chance de reversão; \n
    - 12: Seja educado(a), respeito é bom e de graça, use e abuse dele! \n
    - 13: Qualquer membro que desrespeitar as regras poderá sofrer punições dependendo do nível de gravidade: \n
    # Leve - Receberá um aviso da Staff
    # Médio - Mute temporário
    # Grave - Ban temporário 
    # Ultra- Ban permanente \n \n
    (NerdoxTV, mestre do server).
    `);

  msg.channel.send(rules_embed);
};

module.exports = {
  name: "regras",
  help: "Mostra as regras do servidor.",
  execute,
};