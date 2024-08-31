let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/99eb580744df0a0f2407a.jpg'
let sewa = `
  _*❏ B U G M E N U*_
╭────◉
│▧ crash 
│▧ virtex1
│▧ virtex2
│▧ virtex3
│▧ virtex4
│▧ virtex6
│▧ virtex8
│▧ virtex10
╰────◉
Gunakan Fitur Virtex Mengrim Menggunakan Wa bot 
╭────◉ 
│▧ bannedwa
│▧ bannedwa1
│▧ unbannedwa
│▧ unbannedwa1
│▧ unbannedwa2
│▧ unbannedwa3
╰────◉
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['menubug']
handler.tags = ['main', 'vynaamenu']
handler.command = /^(menubug)$/i

export default handler
