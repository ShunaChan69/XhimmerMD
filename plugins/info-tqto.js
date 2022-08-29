import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  let tqtod = `─────━•〔 𝘽𝙄𝙂 𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊 〕•━─────\n\n◐ *Adiwajshing*\nhttps://github.com/adiwajshing\n\n◐ *Fokus Id*\nhttps://github.com/Fokusdotid\n\n◐ *AmirulDev*\nhttps://github.com/amiruldev20\n\n◐ *Aiinne*\nhttps://github.com/Aiinne\n\n◐ *The.sad.boy01*\nhttps://github.com/kangsad01\n\n◐ *Kanna*\nhttps://github.com/Kannachann\n\n◐ *Nurutomo*\nhttps://github.com/Narutomo\n\n◐ *Bochilgaming*\nhttps://github.com/BochilGaming\n\n◐ *FangzXD*\nhttps://github.com/Fangzbotz2007\n\n◐ *DaveKgw*\nhttps://github.com/davekgw\n\n◐ *Vinz Cyx*\nhttps://github.com/ShionMDv\n\n◐ *Ahmad*\nhttps://github.com/Dzox13524\n\n◐ *Dan semua pemakai bot ini*\n\nThankYou ya kalian😄\n_© Creator by Vinz~_`
  
 await conn.sendButton(m.chat, tqtod, wm, intro, [['🧸 Owner','.owner']], m, {
contextInfo: { externalAdReply :{mediaUrl: '', mediaType: 2, description: 'anu', title: bottime, body: 'Follow Instagram Developer', previewType: 0, thumbnail: fs.readFileSync('./thumbnail.jpg'), sourceUrl: 'https://www.instagram.com/_alv.stn'}}})
}


handler.help = ['tqto']
handler.tags = ['info','main']
handler.command = /^(tqto|thanksto)$/i
handler.private = false

export default handler
