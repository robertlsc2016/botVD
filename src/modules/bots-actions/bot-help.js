const { prefixBot } = require("../../settings/necessary-settings");
const {
  genericSendMessageOrchestrator,
} = require("../generic-sendMessage-orchestrator.module");

module.exports.bothelp = async function ({ from: from }) {
  await genericSendMessageOrchestrator({
    from: from,
    type: "text",
    msg: `Minhas funcionalidades atuais são:\n1. Posso baixar videos de Tiktok, Instagram, Facebook, Twitter e X(Ex-Twitter) basta enviar a URL do vídeo\n2. Posso jogar cara ou coroa, basta digita exatamente: '${prefixBot} cara ou coroa' (sem as aspas, obviamente)\n3. Posso transformar imagem em sticker, basta manda a imagem com a descrição '${prefixBot} sticker'\n4. Posso marcar alguém aleatoriamente do grupo, basta digitar '${prefixBot} quem é'`,
  });
};
