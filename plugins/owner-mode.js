import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `_🎐Pilih Mode bot ya Master...\n`,wm + '\n\n' + botdate, thumbdoc, ['SELF','.self'], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'MODE BOT XHIMMER',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['mode']
handler.tags = ['owner']
handler.command = /^(mode)$/i

handler.admin = true
handler.group = true

export default handler
