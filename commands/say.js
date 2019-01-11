const Discord = require('discord.js');
exports.run = (client, message, args) => {
 if (message.author.id == 302837596600664065) {
   
message.delete()
    const msg = new Discord.RichEmbed()
   
   .setColor("RANDOM")
   .setImage("https://cdn.discordapp.com/attachments/529094343806550036/533404554851778571/Kanna.png")
   
    message.channel.send(msg);

 }
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ["ljp"],
      permLevel: 0
    };

    exports.help = {
      name: 'leçonjp',
      description: 'Lance',
      usage: 'leçonjp <image> <message>',
      aliase: ['ljp']
    }
