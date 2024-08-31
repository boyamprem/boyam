import fetch from 'node-fetch';
import { uploadImage } from '../lib/uploadImage.js';

const handler = async (m, { conn, usedPrefix, command }) => {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/^image/.test(mime) && !/webp/.test(mime)) {
      const img = await q.download();
      const out = await uploadImage(img);
      m.reply(wait);
      if (command === 'hd') {
        try {
          const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini-v2?url=${out}&apikey=tyan`);
          if (!api.ok) throw new Error('Gagal mengambil gambar dari API');
          const image = await api.json();
          const { url } = image;
          conn.sendFile(m.chat, url, null, '_*❤️ Semoga suka...*_', m);
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      } else if (command === 'hdr') {       
        try {
          const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini?url=${out}&apikey=tyan`);
          if (!api.ok) throw new Error('Gagal mengambil gambar dari API');
          const response = await api.text();
          let image;
          try {
            image = JSON.parse(response);
          } catch (error) {
            console.error(`parse: ${error}`);
            throw new Error('Gagal parsing respons dari API');
          }
          const { url } = image; 
          conn.sendFile(m.chat, url, null, '_*❤️ Semoga suka...*_', m);
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      } else if (command === '4k') {
        try {
          const api = await fetch(`https://api.botcahx.eu.org/api/tools/remini-v3?url=${out}&resolusi=4&apikey=tyan`);
          if (!api.ok) throw new Error('Gagal mengambil gambar dari API');
          const image = await api.json();
          const url = image.url;
          conn.sendFile(m.chat, url, null, '_*❤️ Semoga suka...*_', m);
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      } else if (command === 'removebg' || command === 'nobg') {
        try {
          const api = await fetch(`https://api.botcahx.eu.org/api/tools/removebg?url=${out}&apikey=tyan`);
          if (!api.ok) throw new Error('Gagal mengambil gambar dari API');
          const image = await api.json();
          const url = image.url.result;
          conn.sendFile(m.chat, url, null, '_*❤️ Semoga suka...*_', m);
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      }
    } else {
      m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim.`);
    }
  } catch (e) {
    console.error(e);
    throw `❗ *terjadi kesalahan*`;
  }
};

handler.command = handler.help = ['zzz', 'hdz', 'hdrz','removebgz','nobgz'];
handler.tags = ['tools'];
handler.premium = false;
handler.limit = false;

export default handler;