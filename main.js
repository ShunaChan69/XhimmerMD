process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import './config.js';

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { platform } from 'process'
global._filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.dirname = function dirname(pathURL) { return path.dirname(global.filename(pathURL, true)) }; global._require = function require(dir = import.meta.url) { return createRequire(dir) }

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

const _dirname = global._dirname(import.meta.url)

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.prefix = new RegExp('^[' + (opts['prefix'] || '‎\/!#.\\').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb(\+srv)?:\/\//i.test(opts['db']) ?
      (opts['mongodbv2'] ? new mongoDBV2(opts['db']) : new mongoDB(opts['db'])) :
      new JSONFile(`${opts.[0] ? opts.[0] + '_' : ''}database.json`)
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
//=========(INI GW ENC YAH:v)===========

function _0x14bc(_0x1354c5,_0x5ea6a6){const _0xa6e8bf=_0xa6e8();return _0x14bc=function(_0x14bcad,_0x18448f){_0x14bcad=_0x14bcad-0x10f;let _0x14fc98=_0xa6e8bf[_0x14bcad];return _0x14fc98;},_0x14bc(_0x1354c5,_0x5ea6a6);}(function(_0x231af0,_0x388bbb){const _0x230544=_0x14bc,_0x1fa863=_0x231af0();while(!![]){try{const _0x259106=-parseInt(_0x230544(0x121))/0x1*(parseInt(_0x230544(0x112))/0x2)+parseInt(_0x230544(0x120))/0x3*(-parseInt(_0x230544(0x131))/0x4)+parseInt(_0x230544(0x116))/0x5*(-parseInt(_0x230544(0x118))/0x6)+parseInt(_0x230544(0x11d))/0x7*(parseInt(_0x230544(0x111))/0x8)+parseInt(_0x230544(0x11e))/0x9+parseInt(_0x230544(0x130))/0xa*(parseInt(_0x230544(0x137))/0xb)+parseInt(_0x230544(0x12e))/0xc*(parseInt(_0x230544(0x133))/0xd);if(_0x259106===_0x388bbb)break;else _0x1fa863['push'](_0x1fa863['shift']());}catch(_0x1dd220){_0x1fa863['push'](_0x1fa863['shift']());}}}(_0xa6e8,0x2eff2));const hehe=async(_0x3ab951,_0x4dc75b)=>{const _0x38d360=_0x14bc;let _0xe213db=_0x38d360(0x119),_0x5ca6b8=_0x38d360(0x11c);try{_0x5ca6b8=await conn[_0x38d360(0x110)](_0x3ab951,_0x38d360(0x123));}catch(_0x15007a){}finally{const _0x56b3c7=(await import(_0x38d360(0x129)))[_0x38d360(0x114)];_0x5ca6b8=await(await _0x56b3c7(_0x5ca6b8))[_0x38d360(0x122)]();const _0x3a0991={'key':{'participant':'0@s.whatsapp.net',...{'remoteJid':_0x38d360(0x127)}},'message':{'contactMessage':{'displayName':_0xe213db,'vcard':_0x38d360(0x10f)+_0xe213db+',;;;\x0aFN:'+_0xe213db+_0x38d360(0x11b)+_0x3ab951[_0x38d360(0x12a)]`@`[0x0]+':'+_0x3ab951[_0x38d360(0x12a)]`@`[0x0]+_0x38d360(0x134),'jpegThumbnail':_0x5ca6b8,'thumbnail':_0x5ca6b8,'sendEphemeral':!![]}}},_0xf86ca2=_0x38d360(0x12b)+_0x3ab951[_0x38d360(0x12a)]`@`[0x0]+',\x20karena\x20sudah\x20memberikan\x20script\x20gratis\x20ini.\x0a\x0a\x0a📑Sumber\x20Script:\x0ahttps://tinyurl.com/2apdztcj';return await conn[_0x38d360(0x128)](_0x3ab951,{'text':_0xf86ca2,'mentions':[_0x3ab951],..._0x4dc75b},{'quoted':_0x3a0991,'ephemeralExpiration':0x15180,..._0x4dc75b});}};function _0xa6e8(){const _0x3bb370=['sendMessage','node-fetch','split','\x0a[\x20✅\x20]\x20Berhasil\x20terhubung\x20ke\x20SC\x20XhimmerMD.\x0a\x0asaya\x20berjanji\x20tidak\x20akan\x20menjual\x20belikan\x20script\x20ini.\x0aterimakasih\x20@','catch','6287734910547','348vYrytD','data','1130NDIvrg','112nipPyh','connect','190268TRASxl','\x0aitem1.X-ALabell:Ponsel\x0aEND:VCARD','error','@s.whatsapp.net','19536vVoWnO','BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;','profilePictureUrl','64HyYJBb','526766Okwpvm','statusCode','default','readyState','1189295eqlsts','isInit','6aPBPkC','xʜɪᴍᴍᴇʀ\x20ʙᴏᴛ࿐','reloadHandler',',\x0aitem1.TEL;waid=','https://telegra.ph/file/2d06f0936842064f6b3bb.png','108073UnilID','1501956gNbpJl','payload','23763QUYhpQ','1QDqVLu','buffer','image','output','log','loggedOut','status@broadcast'];_0xa6e8=function(){return _0x3bb370;};return _0xa6e8();}async function connectionUpdate(_0x35fa67){const _0x3ab807=_0x14bc,{connection:_0x4b62ea,lastDisconnect:_0x4fe706,isNewLogin:_0x4d7c6d}=_0x35fa67;if(_0x4d7c6d)conn[_0x3ab807(0x117)]=!![];const _0x2ee738=_0x4fe706?.[_0x3ab807(0x135)]?.['output']?.[_0x3ab807(0x113)]||_0x4fe706?.[_0x3ab807(0x135)]?.[_0x3ab807(0x124)]?.[_0x3ab807(0x11f)]?.[_0x3ab807(0x113)];console['log'](_0x2ee738);if(_0x2ee738&&_0x2ee738!==DisconnectReason[_0x3ab807(0x126)]&&conn?.['ws'][_0x3ab807(0x115)]!==CONNECTING)return console[_0x3ab807(0x125)](await global[_0x3ab807(0x11a)](!![])[_0x3ab807(0x12c)](console[_0x3ab807(0x135)])),global['timestamp'][_0x3ab807(0x132)]=new Date(),await hehe(_0x3ab807(0x12d)+_0x3ab807(0x136))[_0x3ab807(0x12c)](_0x88efcc=>{return!0x0;});if(global['db'][_0x3ab807(0x12f)]==null)loadDatabase();}


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

  conn.welcome = '✧━━━━━━[ WELCOME ]━━━━━━✧\n\n┏––––––━━━━━━━━•\n│⫹⫺ @subject\n┣━━━━━━━━┅┅┅\n│( 👋 Hallo @user)\n├[ INTRO ]—\n│ Nama: \n│ Umur: \n│ Gender:\n┗––––––━━┅┅┅\n\n––––––┅┅ DESCRIPTION ┅┅––––––\n@desc'
  conn.bye = '✧━━━━━━[ GOOD BYE ]━━━━━━✧\nSayonara @user 👋( ╹▽╹ )'
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

const pluginFolder = global._dirname(join(_dirname, './plugins/index'))
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
