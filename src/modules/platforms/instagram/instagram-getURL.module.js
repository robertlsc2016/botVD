const instagramGetUrl = require("instagram-url-direct");
const logger = require("../../../logger");
const {
  genericSendMessageOrchestrator,
} = require("../../generic-sendMessage-orchestrator.module");

module.exports.getInstagramURL = async function ({ url: rawURL, index = 0 }) {
  try {
    const { results_number, url_list } = await instagramGetUrl(rawURL);

    if (index < 0) {
      throw new Error(`A posição do carrossel não pode ser menor que 1`);
    }

    if (index > results_number) {
      throw new Error(
        `Esse post possui ${url_list.length} posts no carrossel. Selecione o post nesse intervalo`
      );
    }

    return url_list[index];
  } catch (error) {
    throw new Error(error.message);
  }
};
