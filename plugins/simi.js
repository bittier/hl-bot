let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')

let handler  = async (m, { conn, args, usedPrefix, command }) => {
	if (!args || !args[0]) return conn.reply(m.chat, `Format salah!\n\n*Contoh* : _${usedPrefix + command} apa kabar simi_`, m)
	let text = args.join` `
	fetch("https://simsumi.herokuapp.com/api?text=" + encodeURIComponent(text))
  .then(res => res.json())
  .then(batch => {
    conn.updatePresence(m.chat, Presence.composing) 
    conn.reply(m.chat, `${batch.success}`, m)
  }) .catch(() => { conn.reply(m.chat, `_Fitur simi sedang error ! Maaf :(_`, m) })
}
handler.help = ['simi','s (simi)'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^(simi|s)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 500
module.exports = handler