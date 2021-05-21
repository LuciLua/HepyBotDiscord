const Discord = require('discord.js');

module.exports = {
    name: "global",
    description: "Description about this bot",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle(`Worldwide`)
        .setDescription(`Info about API`)
        .setFooter('Thanks for using TestBot111', client.user.displayAvatarURL())

        message.channel.send(embed);

    }
}