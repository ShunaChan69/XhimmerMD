import fs from 'fs'
import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.)([.|] *?)([0-9])$/i

let handler = async function (m, { text, usedPrefix, command }) {

let info = `❏ 📮 Script xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐\n│• Script :\n│↳ Di GH Gua Ada Ntol\n│• Node_Modules:\n│↳ https://semawur.com/mwuPPdYT\n│↳ Ato tekan npm  i/yarn install di termux\n│• Base : \n│↳ github.com/bochilgaming/games-wabot-md/\n┗──────────═┅═──────────\n\n📍 N o t e : \n• BOT FREE FOR ALL!\n• Jangan Lupa kasih star, follow & kasih credit\n• Dilarang menjual Script Ini!\n• Jika menemukan bug di script, harap lapor owner\n• Github xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐: https://github.com/ShionMDv Jangan, lupa follow github\n• Bot ini free untuk digunakan di grup ini, kalo mau memasukan Bot ke grup lain minta izin owner dulu dgn cara BERDONASI:v`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

let buttonMessage= {
'document':{'url':'https://www.google.com'},
'mimetype':global.ddocx,
'fileName':'━━━━▢ 𝐈𝐧𝐟𝐨 𝐒𝐜𝐫𝐢𝐩𝐭 ▢━━━━',
'fileLength':9999999999999,
'pageCount':999,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐',
'body':global.titlebot,
'thumbnail':await(await fetch(mwife)).buffer(),
'sourceUrl':'https://www.instagram.com/_alv.stn'}},
'caption':info,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'👾 Menu'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'Sapa Bot👋🏻'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

handler.customPrefix = /^(.script|.sc)$/i
handler.command = new RegExp

export default handler
