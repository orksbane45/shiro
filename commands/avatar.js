const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let user2 = message.author;

      const avatar2 = new Discord.RichEmbed()

      .setColor('RANDOM')
      .setTitle(`Avatar de ${user2.username}`, `${user2.avatarURL}`)
      .setThumbnail(`${user2.avatarURL}`)
      


  if (message.mentions.users.size < 1) return message.channel.send(avatar2)



      const avatar = new Discord.RichEmbed()

      .setColor('RANDOM')
      .setTitle(`Avatar de ${user.username}`, `${user.avatarURL}`)
      .setThumbnail(`${user.avatarURL}`)
      

      message.channel.send(avatar)
  
    };

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['pp', 'pdp'],
      permLevel: 0
    };

    exports.help = {
      name: 'avatar',
      description: 'Fait apparaître votre avatar ou celui de la personne mentionnée',
      usage: 'avatar [mention]',
      aliase: ['pp , pdp']
    };
