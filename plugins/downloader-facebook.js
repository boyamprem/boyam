import api from 'api-dylux';

const handler = async (m, { args, conn, text }) => {
  if (!args[0]) {
    throw '*Contoh* : .fb https://www.facebook.com/xxxxxxx';
  }

  try {
    const response = await api.fbdl(args[0]);
    conn.sendMessage(m.chat, {
      react: {
        text: '💤',
        key: m.key,
      }
    });
    conn.sendFile(m.chat, response.videoUrl, 'fb.mp4', response.title, m);
  } catch (error) {
    console.log(error);
    m.reply('Sepertinya ada masalah dalam mengunduh video.');
  }
};

handler.help = ['facebook ⧼url⧽'];
handler.tags = ['downloader'];
handler.command = /^(facebook|fb(dl|downloader)?)$/i;
export default handler;