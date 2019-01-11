const Discord = require('discord.js');
exports.run = (client, message) => {

 

    let args = message.content.split(" ").slice(1);
    message.delete()
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`${args.join(" ")}`)
    message.channel.send(embed)

    
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'say',
      description: 'Le bot redit ce que vous ditez !',
      usage: 'say [message]',
      aliase: ['Aucun aliase n\'est disponible pour cette commandes.']
    }
