let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `STATS`,
	rows: [
	    {title: "📊Test Speed", rowId: '.testspeed', description: '╰►Test Speed xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	    {title: "📉Stats Server", rowId: '.statserver', description: '╰►Status server BOT' },
	    {title: "💻Bot Info", rowId: '.botinfo', description: '╰►Info Server BOT' },
	{title: "👤Nama Creator", rowId: '.nameown', description: '╰►Developer xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "💰Donasi", rowId: '.donasi', description: '╰►Support Vinz Agar BOT on 24 Jam untuk menemani kamu' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "📖Rules", rowId: '.rules', description: '╰►S&K xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	    {title: "⛔No Menu", rowId: '', description: '╰►No menu' },
	    {title: "📑Event", rowId: '.event', description: '╰►Event Dari Kami' },
	{title: "⚡Speed", rowId: '.speed', description: '╰►Speed xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "💵Sewa BOT", rowId: '.sewa', description: '╰►Sewa xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐ untuk jadi assisten Mu' },
	{title: "🗣️Request Fitur", rowId: '.request', description: '╰►Request Fitur xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "🌏Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "🧰Version Bot", rowId: '.cekversi', description: '╰►Versi xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "🤖Sapa Bot", rowId: '.salken', description: '╰►Menyapa xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	]
    },{
    title: `✃ INFO BOT`,
	rows: [
	    {title: "🧰Version Bot", rowId: '.cekversi', description: '╰►Versi xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	    {title: "🌏Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "🤖Sapa Bot", rowId: '.salken', description: '╰►Menyapa xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "⚡Speed Bot", rowId: '.speed', description: '╰►Speed xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "📊Status Bot", rowId: '.botstats', description: '╰►Sistem xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "📮C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler
