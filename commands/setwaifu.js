
const Discord = require('discord.js');



exports.run = function(client, message, args) {
  

  
    let embed1 = new Discord.RichEmbed()
    .setTitle(`Character`)
    .setDescription(`A waifu/husbando appeared!\rTry guessing their name with w.claim <name> to claim them!\r\rHints:\rThis character's initials are 'J.'\rUse \`w.lookup <name>\` if you can't remember the full name.\r\r(If the image is missing, click here.)`)
    .setColor("#ff5000")
    .setImage("https://cdn.myanimelist.net/images/characters/12/248121.jpg")
    message.channel.send(embed1);
  
   
}

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ["sw"],
      permLevel: 0
    };

    exports.help = {
      name: 'setwaifu',
      description: 'Fait spawn une waifu',
      usage: 'setwaifu'
    }
