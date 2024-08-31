let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `https://storage.itsrose.life/vn-database/motivasi.mp3`, "oy.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(motivasi)$/i;
handler.command = new RegExp();

export default handler;