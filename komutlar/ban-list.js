const croxy = require("croxy-api")
const Discord = require("discord.js")
const client = new Discord.Client();



exports.run = async function(client,message,args) {

	let guild = message.guild
    let modlog = guild.channels.find('name', 'mod-log');

	message.guild.fetchBans()
	  .then(banned => {
	    let list = banned.map(user => user.tag+" - "+user.id).join('\n');

	    // Make sure if the list is too long to fit in one message, you cut it off appropriately.
	    if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;

	    guild.channels.get(modlog.id).send(`**${banned.size} Kullanıcı Banlı:**\n${list}`)
	  })
	  .catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban-list',
  description: 'Ban Listesini Görüntüler',
  usage: 'ban-list'
};