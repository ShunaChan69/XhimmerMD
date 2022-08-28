import PhoneNumber from 'awesome-phonenumber'
const isNumber = x => typeof x === 'number' && !isNaN(x)

async function handler(m, { conn, text, command, usedPrefix }) {
  if (!text) throw `${set.sb} *Contoh* : ${usedPrefix + command} 628xxx|hi`
  let [num, pesan] = text.split`|`
  let who 
  try { 
    who = PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('e164').split`+`[1] + '@s.whatsapp.net'
  } catch {
    throw `Harap gunakan nomor${num ? ' yang valid' : ''} dan awali dengan kode negara!`
  }
  if (!pesan) throw `Gunakan teks untuk mengirim pesan\n\n${set.sb} *Contoh* : 628xxx|halo\n\nSimbol *|* sebagai tanda spasi!`
  if (who == m.sender) throw 'Kirim menfess ke diri sendiri?\ngokil:v'
  let whoName = await conn.getName(who)
  let med = (["https://telegra.ph/file/620bcc109157b23a656f3.jpg", "https://telegra.ph/file/3eb3c21b4d19626332284.jpg"]).getRandom()
  let { data } = await conn.getFile(med)
  let sen = await conn.reply(who, `*MENFESSIN!*\n\nHalo *${whoName}* ada pesan kecil dari seseorang yang tidak ingin disebut namanya 😇\n\nPesan : `+ pesan + `\n\n_Gesek pesan ini kekanan untuk mengirim balasan!_`, 0, {      
    ephemeralExpiration: 86400,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply :{
        showAdAttribution: true,
        title: 'MENFESSIN',
        body: 'Follow instagram developer bot ツ',
        thumbnail: data,
        sourceUrl: 'https://instagram.com/_alv.stn'
      }
    } 
  })                               
  if (sen) m.reply(`Sukses mengirim pesan rahasia ke @${parseInt(who)}`, m.chat, { mentions: [who] })
  else throw 'Harap gunakan nomor yang valid!'
}
handler.help = ['menfess']
handler.tags = ['main']
handler.command = /^(menfess|mnfs)$/i
handler.text = true
handler.desc = ['Mengirim pesan rahasia kepada seseorang!\n\nPenggunaan : #menfess 628xxx|halo\nAlias : #mnfs 628xxx|halo\n\nsimbol *|* sebagai tanda spasi!']
export default handler

//esm kalo cjs module.exports = handler
