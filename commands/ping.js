exports.run = (client, message) => {
  message.channel.sendMessage('Ping?')
    .then(msg => {


        if (msg.createdTimestamp - message.createdTimestamp < 200)
      msg.edit('<:TBgoodping:500711838799888384> : ' + (msg.createdTimestamp - message.createdTimestamp) + 'ms');

  if (msg.createdTimestamp - message.createdTimestamp >= 200)
      msg.edit('<:TBbadping:500711761012326421> : ' + (msg.createdTimestamp - message.createdTimestamp) + 'ms');


    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Affiche le ping du bot !',
  usage: 'ping',
  aliase: ['Aucun aliase n\'est disponible pour cette commandes.']
};
