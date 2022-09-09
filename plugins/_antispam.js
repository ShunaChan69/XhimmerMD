export async function all(m, { isBotAdmin }) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                global.db.data.users[m.sender].banned = true
            	m.reply('*Kamu di banned karena spam!*\n\n*Laporkan masalah ini ke wa.me/6287734910547*')
            }
            if (this.spam[m.sender].count > 20) {
            	m.reply('*Mampus!!*\n*Kamu terkena bug dari bot karna spamnya kelewatan!!*\n\n')
                for(let i = 0; i < 20; i++){
                  conn.sendMessage(m.sender, {document: {url: 'https://telegra.ph/file/d08c4666be56174b6373e.jpg'}, filename:`Pagi bang.pdf`, mimetype: 'application/pdf',}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": `heloo`, "jpegThumbnail": {url: 'https://telegra.ph/file/d08c4666be56174b6373e.jpg'}}}}})
                }
            delete this.spam
            }
        this.spam[m.sender].count = 0
        this.spam[m.sender].lastspam = m.messageTimestamp
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}
