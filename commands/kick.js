const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
  if (message.member.hasPermission('KICK_MEMBERS') || message.member.hasPermission('ADMINISTRATOR') || message.author.id == 302837596600664065) {
  
  
  
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply("<:TBstop:500713271532453890> Vous devez mentionner quelqu'un pour le kick.").catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply("<:TBstop:500713271532453890> Je ne peut pas kick cet utilisateur.");
  message.guild.member(user).kick();

    
    message.channel.send(`**${user}** ban avec succes !`);
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'Kick un utilisateur.',
  usage: 'kick [mention]',
  aliase: ['Aucun aliase n\'est disponible pour cette commandes.']
};
