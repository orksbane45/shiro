const fs = require('fs');
const settings = require('../settings.json');
module.exports = message => {
  if (!message.guild) return;
  let client = message.client;
  if (message.author.bot) return;
    // messager.run(client, message); // messager
  if (!message.content.startsWith(settings.prefix)) return;
  let command = message.content.split(' ')[0].slice(settings.prefix.length);
  console.log('Guild :'+message.guild.name+"("+message.guild.id+") Channel : "+message.channel.name+"("+message.channel.id+") user :"+message.author.tag+"("+message.author.id+") Message("+message.id+") : "+message.content);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    if (message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('ADMINISTRATOR') || message.author.id == 327176843709120512) return cmd.run(client, message, params, perms);
      let rawdata = fs.readFileSync('blacklist.json', 'utf8');
      let blackList = JSON.parse(rawdata);
      if (blackList[""+message.channel.id+""] && blackList[""+message.channel.id+""].length >= 1) {
        function sleep(ms){
          return new Promise(resolve=>{
              setTimeout(resolve,ms)
          })
        }
        function blCommand(){
          message.channel.send('Commande désactivée dans ce channel (Faites s!bl pour gérer les commandes)').then( async (msg)=>{
            await sleep(5000);
            msg.delete();
          })
        }
        if (blackList[""+message.channel.id+""].filter(s => s.includes(cmd.help.name)) == cmd.help.name || blackList[""+message.channel.id+""].filter(s => s.includes("all")) == "all") {
          return blCommand();
        }
      }
 
    cmd.run(client, message, params, perms);
  }
 
};
