const Discord = require('discord.js');
const agree = "✅"
const disagree = "❌"

module.exports.run = async (client, message) => {


  //const msgs = await message.channel.awaitMessages(msg => msg.content.includes("Hi"), {time: 5000});

      let args = message.content.split(" ").slice(1);
      message.delete()

    let msg = await message.channel.send(`‗‗‗‗‗‗‗‗\n\n**Vote par** : ${message.author.tag}\n**Question** : ${args.join(" ")}\n**Temps** : 2H\n‗‗‗‗‗‗‗‗`);
    await msg.react(agree);
    await msg.react(disagree);

 const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 7200000});
  message.channel.send(`‗‗‗‗‗‗‗‗\n\n**Vote fini !**  \n __résultat :__\n\n${agree}:  ${reactions.get(agree).count-1}\n${disagree}:  ${reactions.get(disagree).count-1}\n‗‗‗‗‗‗‗‗`);






}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'vote',
  description: 'false',
  usage: 'vote [question]'
};
