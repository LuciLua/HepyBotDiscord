const Discord = require('discord.js');

module.exports = {
    name: "search",
    description: "Description about this bot",
    
    async run (client, message, args) {
        
        const embed = new Discord.MessageEmbed()
        .setTitle(`Search result`)
        .setDescription(`Ei, @everyone! \nEu sou o ${client.user}, construido para ser um bot esperto e bem bonitão.
        numero aleatorio: ${(Math.random()*10).toFixed(0)}
        `)

        .setColor('#F66922')
        .setFooter('Hepy', client.user.displayAvatarURL());
        
        message.channel.send(embed);

        var members = {
            "user": {},
            "nick": "NOT API SUPPORT",
            "roles": [],
            "joined_at": "2015-04-26T06:26:56.936000+00:00",
            "deaf": false,
            "mute": false
          }

        const embed2 = new Discord.MessageEmbed()
        .setTitle(`Search result 2`)
        .setDescription(`Olá
        ${members.nick}`)
        .setColor('#F66922')
        .setFooter('Hepy', client.user.displayAvatarURL());

        setTimeout(function(){
            message.channel.send(embed2), 
            console.log('teste')
        }, 1500) 
        


    }
}