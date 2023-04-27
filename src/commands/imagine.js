const { ApplicationCommandOptionType } = require('discord.js');
const { default: Replicate } = require('replicate');
const { REPLICATE_API_KEY } = require('../../config.json');

const replicate = new Replicate({
  auth: REPLICATE_API_KEY,
});
const model =
  'stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478';

module.exports = {
  run: async ({ interaction }) => {
    const input = {
      prompt: interaction.options.getString('prompt'),
    };

    await interaction.deferReply();

    const output = await replicate.run(model, { input });

    await interaction.editReply(output[0]);
  },

  data: {
    name: 'imagine',
    description: 'Generate an image from a prompt.',
    options: [
      {
        name: 'prompt',
        description: 'Enter your prompt',
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],
  },
};
