const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
  let hour = message.guild.createdAt.getHours()
  let min = message.guild.createdAt.getMinutes()
  let days = message.author.createdAt.getDate()
  let months = 1 + message.author.createdAt.getMonth()
  let years = message.author.createdAt.getFullYear()
  let hours = message.author.createdAt.getHours()
  let mins = message.author.createdAt.getMinutes()
  
    let serverembed = new Discord.RichEmbed()
    
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .addField("Nom du serveur", message.guild.name)
    .addField("ID du serveur", message.guild.id)
    .addField("Date de création du serveur", `${day}/${month}/${year} à ${hour}:${min}`)
    .addField("Membres", message.guild.memberCount)
    .addField('Channels' , message.guild.channels.size)
    .addField("Fondateur", message.guild.owner)
    .addField("Rôles", message.guild.roles.size)
    .addField("Régions du serveur", message.guild.region)
    .addField('Status des membres', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** En ligne\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Inactif\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Ne pas déranger\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Déconnecté/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)

    message.channel.send(serverembed);
}

 exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ["si"],
        permLevel: 0
      };

      exports.help = {
        name: 'serveurinfo',
        description: 'Affiche les informations du serveurs !',
        usage: 'serveurinfo',
        aliase: ["si"]
      }
