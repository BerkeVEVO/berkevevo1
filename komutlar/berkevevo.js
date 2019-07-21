const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**BERKEVEVO**")
        .setImage("https://cdn.discordapp.com/attachments/602474532804100106/602568431555969034/berkevevo2.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/602474532804100106/602568431555969034/berkevevo2.png")
        .setColor(0x00AE86)
        .addField("Lakabı", "Am Avcısı", true)
        .addField("Yetenekleri", `
        *Siktimmi amına koyar.
   *Korkunç derecede büyük bir yarrağı var.
   `, true)
   .addField("Berke", `Buyur güzellik.`, true)
   .addField("Selam", "Tnşlm mı gzlm.")


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'berkevevo',
  description: 'Berke Hakkında Bilgi Verir',
  usage: 'berkevevo'
};
