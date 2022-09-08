let handler = async (m, { conn }) => {
let info = `
*${htki} VIRUS ${htka}*
          
 🔥BY VINZ🔥
          
                  
–––––– *INFO!* ––––––
*📮Virus Ini Hanya Virus Ringan! Virus Berat Hanya Bisa Dipakai Owner!*
`
const sections = [
   {
    title: `✃ VIRTEX`,
	rows: [
	    {title: "Virtex 1", rowId: '.virtex1', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	    {title: "Virtex 2", rowId: '.virtex2', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 3", rowId: '.virtex3', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 4", rowId: '.virtex4', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 5", rowId: '.virtex5', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 6", rowId: '.virtex6', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
    {title: "Virtex 7", rowId: '.virtex7', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 8", rowId: '.virtex8', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 9", rowId: '.virtex9', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 10", rowId: '.virtex10', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 11", rowId: '.virtex11', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 12", rowId: '.virtex12', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 13", rowId: '.virtex13', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 14", rowId: '.virtex14', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
    {title: "Virtex 15", rowId: '.virtex15', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 16", rowId: '.virtex16', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 17", rowId: '.virtex17', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 18", rowId: '.virtex18', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	{title: "Virtex 19", rowId: '.virtex19', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
    {title: "Virtex 20", rowId: '.virtex20', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },

	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "Download WhatsApp Imune", rowId: '.waantivirus', description: 'Download WhatsApp Kebal' },
	    {title: "Virus Troli", rowId: '.virustroli', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	    {title: "Virus Power", rowId: '.powerlist', description: 'xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐' },
	    ]
        }, {
    title: `✃ BUY`,
	rows: [
	    {title: "💸Upgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "👺xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['virtex']
handler.tags = ['virus']
handler.command = /^virtex$/i
handler.premium = false

export default handler
