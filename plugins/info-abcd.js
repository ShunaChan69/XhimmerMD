import fs from 'fs'
import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.)([.|] *?)([0-9])$/i

let handler = async function (m, { text, usedPrefix, command }) {

let info = `โ ๐ฎ Script xสษชแดแดแดส สแดแดเฟ\nโโข Script :\nโโณ Link Di Bawah!\nโโข Node_Modules:\nโโณ https://semawur.com/mwuPPdYT\nโโณ Ato tekan npm  i/yarn install di termux\nโโข Base : \nโโณ github.com/bochilgaming/games-wabot-md/\nโโโโโโโโโโโโโโโโโโโโโโโโ\n\n๐ N o t e : \nโข Free atau tidaknya terserah owner!\nโข Jangan Lupa kasih star, follow & kasih credit\nโข Dilarang menjual Script Ini!\nโข Jika menemukan bug di script, harap lapor owner\nโข Github xสษชแดแดแดส สแดแดเฟ: https://github.com/ShionMDv/XhimmerMD Jangan, lupa follow github\nโข Bot ini free untuk digunakan di grup ini, kalo mau memasukan Bot ke grup lain minta izin owner dulu dgn cara BERDONASI:v`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

let buttonMessage= {
'document':{'url':'https://www.google.com'},
'mimetype':global.ddocx,
'fileName':'โโโโโข ๐๐ง๐๐จ ๐๐๐ซ๐ข๐ฉ๐ญ โขโโโโ',
'fileLength':9999999999999,
'pageCount':999,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':'xสษชแดแดแดส สแดแดเฟ',
'body':global.titlebot,
'thumbnail':await(await fetch(mwife)).buffer(),
'sourceUrl':'https://www.instagram.com/_alv.stn'}},
'caption':info,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'Sapa Bot'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

handler.customPrefix = /^(.script|.sc)$/i
handler.command = new RegExp

export default handler
