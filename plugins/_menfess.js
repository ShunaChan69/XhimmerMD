export async function before(m, { conn, isOwner }) {
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys) return 
  
if (/(MENFESSIN)!/i.test(m.quoted.text)) {
        if (!m.text) return m.reply('Harap gunakan teks untuk membalas pesan rahasia!')
        m.react('💌')
        let med = (["https://telegra.ph/file/d81248e85aa7b3dde35b2.jpg", "https://telegra.ph/file/d81248e85aa7b3dde35b2.jpg"]).getRandom()
        let { data } = await conn.getFile(med)
        conn.reply(m.quoted.mentionedJid[0], `*MENFESSIN!*\n\nBalasan pesan menfess\n\nPesan : ${m.text}\n\n_Gesek pesan ini kekanan untuk mengirim balasan!_`, 0, {
            ephemeralExpiration: 86400,
            contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply :{
                  showAdAttribution: true,
                  title: 'MENFESSIN',
                  body: 'Follow instagram developer bot ツ',
                  thumbnail: data,
                  sourceUrl: 'https://instagram.com/rasel.ganz'
                }
            } 
        })
    }
}
