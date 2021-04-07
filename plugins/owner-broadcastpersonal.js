let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net') && !v.read_only && v.message).map(v => v.jid)
  for (let id of groups) conn.sendMessage(id, text + (/broadcast/im.test(text) ? '' : ('\n' + readMore + '\n[ _*BROADCAST*_ ]')), m.mtype, m.msg.contextInfo ? {
    contextInfo: m.msg.contextInfo
  } : {})
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} chat_`, m)
}
handler.help = ['bcpc'].map(v => v + ' *text*')
handler.tags = ['owner']
handler.command = /^(bcpc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

