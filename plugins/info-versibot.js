let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     Version
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', ' *V6 Jarang Update, Mau kuliah😩* ', 'status@broadcast')
}
handler.help = ['cekversi']
handler.tags = ['info']
handler.command = /^(cekversi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
 
