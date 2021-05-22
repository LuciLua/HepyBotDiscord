const Discord = require('discord.js');

module.exports = {
    name: "about",
    description: "Description about this bot",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle(`About`)
        .setDescription(`Ei, @everyone! \nEu sou o Hepy, construido para ser um bot esperto e bem bonitão.`)
        .setImage(url='https://pbs.twimg.com/profile_images/488685909932396544/ypLfMzlH.png')
    
        .setFooter('Hepy', client.user.displayAvatarURL())

        message.channel.send(embed);

    }
}