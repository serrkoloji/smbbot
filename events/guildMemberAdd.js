module.exports = member => {
    let username = member.user.username;
    member.send('Sunucuya Hoş Geldin! :heart:');
    member.guild.defaultChannel.send('');
};
