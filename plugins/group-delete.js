let handler = async (m, { conn, usedPrefix, isAdmin, isBotAdmin }) => {
    if (!isAdmin) return m.reply("Delete pesan member hanya tersedia untuk admin only")
    if (!isBotAdmin) return m.reply("Bot tidak dapat menghapus pesan member, karena bot bukan admin grup!!")
    
    try {
    let key = m.quoted ? m.quoted.vM.key : m.key
    conn.sendMessage(m.chat, {
        delete: key
    })
    } catch {
    m.reply("Tidak dapat memproses command")
    }
}
handler.help = ['delm']
handler.tags = ['group']
handler.command = /^delm$/i
export default handler
