exports.run = function(client, message, args) {
  if (message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('ADMINISTRATOR') || message.author.id == 302837596600664065) {
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
}else {
message.reply(" <:TBstop:500713271532453890> Vous n'avez pas les bonnes permissions !");
     };
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clear'],
  permLevel: 0
};

exports.help = {
  name: 'purge',
  description: 'Efface les messages du channel.',
  usage: 'purge <nombre>',
  aliase: ['clear']
};
