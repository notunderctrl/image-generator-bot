module.exports = {
  data: {
    name: 'ping',
    description: 'Pong!',
  },

  run: ({ interaction, client }) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};
