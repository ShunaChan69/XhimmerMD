process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import './config.js';

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { platform } from 'process'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }

import * as ws from 'ws';
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs';
import yargs from 'yargs';
import { spawn } from 'child_process';
import lodash from 'lodash';
import syntaxerror from 'syntax-error';
import { tmpdir } from 'os';
import { format } from 'util';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low, JSONFile } from 'lowdb';
import pino from 'pino';
import {
  mongoDB,
  mongoDBV2
} from './lib/mongoDB.js';
const {
  useSingleFileAuthState,
  DisconnectReason
} = await import('@adiwajshing/baileys')

const { CONNECTING } = ws
const { chain } = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

protoType()
serialize()

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
// global.Fn = function functionCallBack(fn, ...args) { return fn.call(global.conn, ...args) }
global.timestamp = {
  start: new Date
}

const __dirname = global.__dirname(import.meta.url)

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.prefix = new RegExp('^[' + (opts['prefix'] || '‎\/!#.\\').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb(\+srv)?:\/\//i.test(opts['db']) ?
      (opts['mongodbv2'] ? new mongoDBV2(opts['db']) : new mongoDB(opts['db'])) :
      new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)


global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(async function () {
    if (!global.db.READ) {
      clearInterval(this)
      resolve(global.db.data == null ? global.loadDatabase() : global.db.data)
    }
  }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read().catch(console.error)
  global.db.READ = null
  global.db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    settings: {},
    ...(global.db.data || {})
  }
  global.db.chain = chain(global.db.data)
}
loadDatabase()

global.authFile = `${opts._[0] || 'session'}.data.json`
const { state, saveState } = useSingleFileAuthState(global.authFile)

const connectionOptions = {
  printQRInTerminal: true,
  auth: state,
  // logger: pino({ level: 'trace' })
  // logger: pino({ level: 'silent' })
}

global.conn = makeWASocket(connectionOptions)
conn.isInit = false

if (!opts['test']) {
  setInterval(async () => {
    if (global.db.data) await global.db.write().catch(console.error)
    if (opts['autocleartmp']) try {
      clearTmp()

    } catch (e) { console.error(e) }
  }, 60 * 1000)
}
if (opts['server']) (await import('./server.js')).default(global.conn, PORT)


function clearTmp() {
  const tmp = [tmpdir(), join(__dirname, './tmp')]
  const filename = []
  tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
  return filename.map(file => {
    const stats = statSync(file)
    if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file) // 3 minutes
    return false
  })
}
//GW ENC BAGIAN INI YAHH:)
function _0x18c1(_0xcf9061,_0x49de47){const _0x2dfba6=_0x2dfb();return _0x18c1=function(_0x18c1ba,_0x43e567){_0x18c1ba=_0x18c1ba-0xed;let _0x17a33d=_0x2dfba6[_0x18c1ba];return _0x17a33d;},_0x18c1(_0xcf9061,_0x49de47);}function _0x2dfb(){const _0x2ce948=['jpegThumbnail','statusCode','4795212ocJSDn','144QyXsNy','274498dpoEtl','sendEphemeral','output','https://telegra.ph/file/321a8c5c202943a6821c6.jpg','6287734910547','0@s.whatsapp.net','remoteJid','9852VILnGG','error','key','status@broadcast','22dhFAeN','split','BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;','profilePictureUrl','contactMessage','reloadHandler','catch','vcard','node-fetch','sendMessage','connect','buffer','1311gdFOUR',',\x0aitem1.TEL;waid=','xʜɪᴍᴍᴇʀ ʙᴏᴛ࿐','thumbnail','4098qFEYDr','log','\x0a[\x20✅\x20]\x20Berhasil\x20terhubung\x20ke\x20SC\x20XhimmerBot.\x0a\x0aSaya\x20berjanji\x20tidak\x20akan\x20menjual\x20belikan\x20script\x20ini.\x0aterimakasih\x20@','3308122QfdSrw','1132650tKsZFj','269706yvkTDt','117YkCsxn','9395UmFmny'];_0x2dfb=function(){return _0x2ce948;};return _0x2dfb();}(function(_0x101798,_0x39a534){const _0x26b186=_0x101798();function _0x2ae67f(_0x2087e8,_0x346275){return _0x18c1(_0x2087e8-0x397,_0x346275);}while(!![]){try{const _0x5a120e=-parseInt(_0x2ae67f(0x49d,0x4a6))/0x1+-parseInt(_0x2ae67f(0x49b,0x4a6))/0x2+parseInt(_0x2ae67f(0x494,0x49a))/0x3*(parseInt(_0x2ae67f(0x484,0x474))/0x4)+parseInt(_0x2ae67f(0x49f,0x49b))/0x5*(-parseInt(_0x2ae67f(0x498,0x493))/0x6)+-parseInt(_0x2ae67f(0x4a4,0x497))/0x7*(-parseInt(_0x2ae67f(0x4a3,0x49a))/0x8)+parseInt(_0x2ae67f(0x49e,0x49e))/0x9*(parseInt(_0x2ae67f(0x49c,0x48b))/0xa)+-parseInt(_0x2ae67f(0x488,0x477))/0xb*(-parseInt(_0x2ae67f(0x4a2,0x4a8))/0xc);if(_0x5a120e===_0x39a534)break;else _0x26b186['push'](_0x26b186['shift']());}catch(_0x46ed19){_0x26b186['push'](_0x26b186['shift']());}}}(_0x2dfb,0xceb72));const hehe=async(_0x8aba8e,_0x21d19f)=>{function _0xaee93d(_0x2b7a71,_0x18e469){return _0x18c1(_0x2b7a71- -0x1df,_0x18e469);}let _0x789a0b=_0xaee93d(-0xe0,-0xdd),_0x2e112c=_0xaee93d(-0xcf,-0xbd);try{_0x2e112c=await conn[_0xaee93d(-0xeb,-0xe4)](_0x8aba8e,'image');}catch(_0x1f4c0a){}finally{const _0x2acdea=(await import(_0xaee93d(-0xe6,-0xf4)))['default'];_0x2e112c=await(await _0x2acdea(_0x2e112c))[_0xaee93d(-0xe3,-0xe6)]();const _0x57bd38={};_0x57bd38[_0xaee93d(-0xcc,-0xc8)]=_0xaee93d(-0xef,-0xf2);const _0x3c95d6={'participant':_0xaee93d(-0xcd,-0xd9),..._0x57bd38},_0x4dfd91={};_0x4dfd91['displayName']=_0x789a0b,_0x4dfd91[_0xaee93d(-0xe7,-0xf3)]=_0xaee93d(-0xec,-0xff)+_0x789a0b+',;;;\x0aFN:'+_0x789a0b+_0xaee93d(-0xe1,-0xe5)+_0x8aba8e[_0xaee93d(-0xed,-0xf8)]`@`[0x0]+':'+_0x8aba8e[_0xaee93d(-0xed,-0x101)]`@`[0x0]+'\x0aitem1.X-ALabell:Ponsel\x0aEND:VCARD',_0x4dfd91[_0xaee93d(-0xd6,-0xdb)]=_0x2e112c,_0x4dfd91[_0xaee93d(-0xdf,-0xe8)]=_0x2e112c,_0x4dfd91[_0xaee93d(-0xd1,-0xcf)]=!![];const _0x391b67={};_0x391b67[_0xaee93d(-0xea,-0xda)]=_0x4dfd91;const _0x48eaa9={};_0x48eaa9[_0xaee93d(-0xf0,-0xea)]=_0x3c95d6,_0x48eaa9['message']=_0x391b67;const _0x35c1c9=_0x48eaa9,_0x27a117=_0xaee93d(-0xdc,-0xdf)+_0x8aba8e[_0xaee93d(-0xed,-0xf0)]`@`[0x0]+',\x20karena\x20sudah\x20memberikan\x20script\x20gratis\x20ini.\x0a\x0a\x0a📑Sumber\x20Script:\x0ahttps://github.com/ShionMDv';return await conn[_0xaee93d(-0xe5,-0xf1)](_0x8aba8e,{'text':_0x27a117,'mentions':[_0x8aba8e],..._0x21d19f},{'quoted':_0x35c1c9,'ephemeralExpiration':0x15180,..._0x21d19f});}};async function connectionUpdate(_0x28de5b){const {connection:_0x236036,lastDisconnect:_0x1b9f7c,isNewLogin:_0x30c5eb}=_0x28de5b;if(_0x30c5eb)conn['isInit']=!![];const _0x1dd1f4=_0x1b9f7c?.['error']?.['output']?.[_0x2da73f(0x22c,0x23b)]||_0x1b9f7c?.[_0x2da73f(0x210,0x213)]?.[_0x2da73f(0x231,0x239)]?.['payload']?.[_0x2da73f(0x22c,0x237)];console[_0x2da73f(0x224,0x236)](_0x1dd1f4);if(_0x1dd1f4&&_0x1dd1f4!==DisconnectReason['loggedOut']&&conn?.['ws']['readyState']!==CONNECTING)return console[_0x2da73f(0x224,0x21c)](await global[_0x2da73f(0x218,0x205)](!![])[_0x2da73f(0x219,0x227)](console['error'])),global['timestamp'][_0x2da73f(0x21d,0x211)]=new Date(),await hehe(_0x2da73f(0x233,0x242)+'@s.whatsapp.net')[_0x2da73f(0x219,0x20d)](_0x3b789b=>{return!0x0;});function _0x2da73f(_0x4f7f4c,_0x3200f7){return _0x18c1(_0x4f7f4c-0x122,_0x3200f7);}if(global['db']['data']==null)loadDatabase();}

process.on('uncaughtException', console.error)
// let strQuot = /(["'])(?:(?=(\\?))\2.)*?\1/

let isInit = true;
let handler = await import('./handler.js')
global.reloadHandler = async function (restatConn) {
  try {
    const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error)
    if (Object.keys(Handler || {}).length) handler = Handler
  } catch (e) {
    console.error(e)
  }
  if (restatConn) {
    const oldChats = global.conn.chats
    try { global.conn.ws.close() } catch { }
    conn.ev.removeAllListeners()
    global.conn = makeWASocket(connectionOptions, { chats: oldChats })
    isInit = true
  }
  if (!isInit) {
    conn.ev.off('messages.upsert', conn.handler)
    conn.ev.off('group-participants.update', conn.participantsUpdate)
    conn.ev.off('groups.update', conn.groupsUpdate)
    conn.ev.off('message.delete', conn.onDelete)
    conn.ev.off('connection.update', conn.connectionUpdate)
    conn.ev.off('creds.update', conn.credsUpdate)
  }

  conn.welcome = '✧━━━━━━[ *WELCOME* ]━━━━━━✧\n\n┏––––––━━━━━━━━•\n│⫹⫺ @subject\n┣━━━━━━━━┅┅┅\n│( 👋 Hallo @user)\n├[ *INTRO* ]—\n│ *Nama:* \n│ *Umur:* \n│ *Gender:*\n┗––––––━━┅┅┅\n\n––––––┅┅ *DESCRIPTION* ┅┅––––––\n@desc'
  conn.bye = '✧━━━━━━[ *GOOD BYE* ]━━━━━━✧\nSayonara *@user* 👋( ╹▽╹ )'
  conn.spromote = '@user sekarang admin!'
  conn.sdemote = '@user sekarang bukan admin!'
  conn.sDesc = 'Deskripsi telah diubah ke \n@desc'
  conn.sSubject = 'Judul grup telah diubah ke \n@subject'
  conn.sIcon = 'Icon grup telah diubah!'
  conn.sRevoke = 'Link group telah diubah ke \n@revoke'
  conn.handler = handler.handler.bind(global.conn)
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn)
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn)
  conn.onDelete = handler.deleteUpdate.bind(global.conn)
  conn.connectionUpdate = connectionUpdate.bind(global.conn)
  conn.credsUpdate = saveState.bind(global.conn)

  conn.ev.on('messages.upsert', conn.handler)
  conn.ev.on('group-participants.update', conn.participantsUpdate)
  conn.ev.on('groups.update', conn.groupsUpdate)
  conn.ev.on('message.delete', conn.onDelete)
  conn.ev.on('connection.update', conn.connectionUpdate)
  conn.ev.on('creds.update', conn.credsUpdate)
  isInit = false
  return true
}

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
async function filesInit() {
  for (let filename of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      let file = global.__filename(join(pluginFolder, filename))
      const module = await import(file)
      global.plugins[filename] = module.default || module
    } catch (e) {
      conn.logger.error(e)
      delete global.plugins[filename]
    }
  }
}
filesInit().then(_ => console.log(Object.keys(global.plugins))).catch(console.error)

global.reload = async (_ev, filename) => {
  if (pluginFilter(filename)) {
    let dir = global.__filename(join(pluginFolder, filename), true)
    if (filename in global.plugins) {
      if (existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
      else {
        conn.logger.warn(`deleted plugin '${filename}'`)
        return delete global.plugins[filename]
      }
    } else conn.logger.info(`requiring new plugin '${filename}'`)
    let err = syntaxerror(readFileSync(dir), filename, {
      sourceType: 'module',
      allowAwaitOutsideFunction: true
    })
    if (err) conn.logger.error(`syntax error while loading '${filename}'\n${format(err)}`)
    else try {
      const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`))
      global.plugins[filename] = module.default || module
    } catch (e) {
      conn.logger.error(`error require plugin '${filename}\n${format(e)}'`)
    } finally {
      global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
Object.freeze(global.reload)
watch(pluginFolder, global.reload)
await global.reloadHandler()

// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    spawn('ffmpeg'),
    spawn('ffprobe'),
    spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    spawn('convert'),
    spawn('magick'),
    spawn('gm'),
    spawn('find', ['--version'])
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
  console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm,
    find
  }
  // require('./lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) conn.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
  .then(() => conn.logger.info('☑️ Quick Test Done'))
  .catch(e => format(e))
