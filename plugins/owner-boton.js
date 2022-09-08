let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐ Menolak Mokad🗿* ')
}


handler.tags = ['owner']
handler.command = /^(boton)$/i

handler.group = true
handler.admin = true

export default handler
