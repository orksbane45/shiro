const Discord = require('discord.js');
const mysql = require('mysql');
exports.run = function(client, message, args) {
  let day = message.guild.joinedAt.getDate()
  let month = 1 + message.guild.joinedAt.getMonth()
  let year = message.guild.joinedAt.getFullYear()
  let hour = message.guild.joinedAt.getHours()
  let min = message.guild.joinedAt.getMinutes()
  let days = message.author.createdAt.getDate()
  let months = 1 + message.author.createdAt.getMonth()
  let years = message.author.createdAt.getFullYear()
  let hours = message.author.createdAt.getHours()
  let mins = message.author.createdAt.getMinutes()

  
    const msg = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`Profile de **${message.author.username}**`)
      .setThumbnail(`${message.author.avatarURL}`)
      .addField('Pseudonyme', `${message.author.username}`)
      .addField('Création du compte' , `${days}/${months}/${years} à ${hours}:${mins}`)
      .addField("Date d'arrivée", `${day}/${month}/${year} à ${hour}:${min}`)
      .addField('Status', `${message.author.presence.status}`)
      .setTimestamp()
    message.channel.send(msg)
  
};

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'profile',
    description: 'Affiche votre profile',
    usage: 'profile',
    aliase: ['Aucun aliase n\'est disponible pour cette commandes.']
  }
