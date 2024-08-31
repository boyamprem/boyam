import fetch from "node-fetch"

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `• *Example :* ${usedPrefix + command} stepmoms`
  let dann = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${global.lolkey}&query=${text}`)
  let res = await dann.json()

  let resultText = ''
  for (let i = 0; i < res.result.length; i++) {
    let result = res.result[i]
    let hasil = `• Title: *${result.title}*\n• Views: *${result.views}*\n• Duration: *${result.duration}*\n• Uploader: *${result.uploader}*\n\n• Link: *${result.link}*\n`
    resultText += hasil + '\n'
  }

  let thumb = res.result[0].thumbnail
  let name = m.sender
  let fkonn = {
    key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '6285863907468@s.whatsapp.net' } : {})
    },
    message: {
      contactMessage: {
        displayName: await conn.getName(name),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    }
  }
  
  await conn.reply(m.chat, wait, fkonn)

  conn.sendMessage(m.chat, {
    text: resultText,
    contextInfo: {
      externalAdReply: {
        title: `© 2024 Vynaa MD`,
        body: wm,
        thumbnailUrl: thumbnail,
        sourceUrl: link.web,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
}

handler.command = handler.help = ['xnxxsearch']
handler.tags = ['internet']
handler.premium = true

export default handler