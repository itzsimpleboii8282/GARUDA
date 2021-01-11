module.exports = {
    name: 'info',
    description: 'Gives the details of the bot',
    async execute(message, args, bot, Discord, prefix) {
        const detembed = new Discord.MessageEmbed()
        .setColor("#D441EE")
        .setTitle("GARUDA")
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .addFields(
            { name: "Invite the bot", value: "https://bit.ly/GARUDA_bot" },
            { name: "Join the support Server" , value: "NA"}
        )
        .setTimestamp()
        .setDescription("GARUDA is an multipurpose discord bot created by <@451693463742840842>")
        .setImage(bot.user.displayAvatarURL())
        .setFooter(`Requested by ${message.author.username}`);
        message.channel.send(detembed);
    }
}
