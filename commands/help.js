const settings = require('../settings.json');
const Discord = require("discord.js");

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

  const msg = new Discord.RichEmbed()

  .setColor('RANDOM')
  .setAuthor('Liste des commandes :')
  
  .setDescription("Utilise la commande `-help <commande>` pour plus d'informations.`")
  .setTimestamp()

              message.channel.send(msg);

  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);

      const msg2 = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`**Commande :** ${command.help.name}`)
      .addField("Description", command.help.description)
      .addField("Utilisation", command.help.usage)
      .addField("Aliases", command.help.aliase)
      .setThumbnail("https://cdn.discordapp.com/attachments/489448852882063360/500970511304753172/info.png")
      
  message.channel.send(msg2)
    }
      
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Affiche la liste des commandes du bot !',
  usage: 'help [command]',
  aliase: ['h , halp']
};
