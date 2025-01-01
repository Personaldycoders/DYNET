require('./config')
const Config = require("./config")
process.on("uncaughtException", console.error);
const { default: makeWASocket, prepareWAMessageMedia, PHONENUMBER_MCC, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, generateWAMessageFromContent, generateWAMessageContent, jidDecode, proto, getContentType, getAggregateVotesInPollMessage, downloadContentFromMessage, fetchLatestWaWebVersion, InteractiveMessage } = require("@whiskeysockets/baileys");
const fs = require("fs");
const pino = require("pino");
const os = require("os")
const chalk = require("chalk")
const spinnies = new (require('spinnies'))();
const axios = require("axios")
const lolcatjs = require('lolcatjs')
const path = require('path')
const Spinnies = require('spinnies');
const yargs = require('yargs/yargs')
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const fetch = require("node-fetch")
const FileType = require('file-type')
const _ = require('lodash')
const CFonts = require('cfonts')
const { Boom } = require("@hapi/boom");
const PhoneNumber = require("awesome-phonenumber");
const readline = require("readline");
const { sleep, serialize, smsg, color, getBuffer } = require("./lib/myfunc")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')

var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`database/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    settings: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)


var logoOptions = {
  font: 'tiny',
  align: 'center',
  colors: ['system'],
};

var whatsappOptions = {
  colors: ['yellow'],
  font: 'console',
  align: 'center',
};

function createTmpFolder() {
const folderName = "tmp";
const folderPath = path.join(__dirname, folderName);
if (!fs.existsSync(folderPath)) {
fs.mkdirSync(folderPath);
lolcatjs.fromString(`Folder '${folderName}' Berhasil di tambahkan.`);
} else {
lolcatjs.fromString(`Folder '${folderName}' sudah ada.`);
}
}
createTmpFolder();

const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
return new Promise((resolve) => {
rl.question(text, resolve)
})
};

const listcolor = ['cyan', 'magenta', 'green', 'yellow', 'blue'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];
const yangBacaHomo = [`
⣿⣿⣷⡁⢆⠈⠕⢕⢂⢕⢂⢕⢂⢔⢂⢕⢄⠂⣂⠂⠆⢂⢕⢂⢕⢂⢕⢂⢕⢂
⣿⣿⣿⡷⠊⡢⡹⣦⡑⢂⢕⢂⢕⢂⢕⢂⠕⠔⠌⠝⠛⠶⠶⢶⣦⣄⢂⢕⢂⢕
⣿⣿⠏⣠⣾⣦⡐⢌⢿⣷⣦⣅⡑⠕⠡⠐⢿⠿⣛⠟⠛⠛⠛⠛⠡⢷⡈⢂⢕⢂
⠟⣡⣾⣿⣿⣿⣿⣦⣑⠝⢿⣿⣿⣿⣿⣿⡵⢁⣤⣶⣶⣿⢿⢿⢿⡟⢻⣤⢑⢂
⣾⣿⣿⡿⢟⣛⣻⣿⣿⣿⣦⣬⣙⣻⣿⣿⣷⣿⣿⢟⢝⢕⢕⢕⢕⢽⣿⣿⣷⣔
⣿⣿⠵⠚⠉⢀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⢕⢕⢕⢕⢕⣽⣿⣿⣿⣿
⢷⣂⣠⣴⣾⡿⡿⡻⡻⣿⣿⣴⣿⣿⣿⣿⣿⣿⣷⣵⣵⣵⣷⣿⣿⣿⣿⣿⣿⡿
⢌⠻⣿⡿⡫⡪⡪⡪⡪⣺⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
⠣⡁⠹⡪⡪⡪⡪⣪⣾⣿⣿⣿⣿⠋⠐⢉⢍⢄⢌⠻⣿⣿⣿⣿⣿⣿⣿⣿⠏⠈
⡣⡘⢄⠙⣾⣾⣾⣿⣿⣿⣿⣿⣿⡀⢐⢕⢕⢕⢕⢕⡘⣿⣿⣿⣿⣿⣿⠏⠠⠈
⠌⢊⢂⢣⠹⣿⣿⣿⣿⣿⣿⣿⣿⣧⢐⢕⢕⢕⢕⢕⢅⣿⣿⣿⣿⡿⢋⢜⠠⠈
⠄⠁⠕⢝⡢⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣕⣑⣑⣑⣵⣿⣿⣿⡿⢋⢔⢕⣿⠠⠈
⠨⡂⡀⢑⢕⡅⠂⠄⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⢔⢕⢕⣿⣿⠠⠈
⠄⠪⣂⠁⢕⠆⠄⠂⠄⠁⡀⠂⡀⠄⢈⠉⢍⢛⢛⢛⢋⢔⢕⢕⢕⣽⣿⣿⠠⠈
`, `
⣿⡇⠘⡇⢀⣶⣶⠄⠈⣾⡟⢂⣿⣿⣿⣿⣿⣿⡿⢉⢾⢃⣿⣿⡟⣸⢸⣿⣿⣸
⣿⢸⣦⢧⢸⣿⣿⢱⠄⠄⣇⣼⣿⣿⣿⣿⣿⢟⣼⣿⡯⠸⣿⢳⢱⡏⣼⣿⢇⣿
⡏⣾⢽⣼⢸⣿⣿⡘⣆⢀⠛⣿⣿⣿⣿⡿⣫⣾⣿⣿⢇⣿⠂⢌⡾⡇⣿⡿⢸⣿
⢧⣿⠄⢹⢸⣿⣿⣷⣭⢸⡄⣿⣿⣿⢋⣵⣿⣿⡿⠟⡨⡡⠄⣾⣿⡆⣭⡇⣿⣿
⣼⡏⡀⠄⢀⢿⣿⣿⡟⣾⡇⣿⡿⣡⢁⣿⣿⣫⡶⢃⡵⣡⣿⣮⡻⡇⣿⢸⣮⢿
⣿⡇⣧⢠⠸⡎⡍⡭⢾⡏⣧⢋⢾⠏⣼⣿⣿⠿⣵⣾⣕⠿⣿⣿⣷⢡⠏⣾⣿⣿
⣿⠁⣿⠈⠄⠄⢃⢹⡀⠸⢸⢿⠸⢰⢻⢿⣟⢁⣀⠄⠄⠉⠒⢝⢿⠸⣴⣿⣿⣿
⡍⠇⣿⣷⢰⢰⢸⠄⡃⡆⠈⠈⡀⡌⠠⠸⠃⣿⣏⡳⢷⢄⡀⠄⠄⠰⣿⣿⣿⣿
⡇⠄⠸⣿⢸⣿⣶⡄⣇⠃⡇⡄⡇⠁⠃⠄⠈⢊⠻⠿⣿⣿⣿⣦⠄⠘⣿⣿⣿⣿
⡇⠄⠄⢻⣸⣿⣿⠏⡙⢸⣇⣡⢰⢀⠄⠄⠄⠈⡁⢱⢈⢿⣿⡿⡄⣰⣶⣿⣿⣿
⡇⠄⠄⠄⢻⣿⡿⢰⡇⠆⠲⠶⣝⠾⠸⢴⢠⠄⠇⢸⢸⠄⡶⡜⣽⣿⣿⣿⣿⢏
⠁⠄⠄⠄⠄⢿⡇⠧⢣⣸⣦⣄⣀⠁⠓⢸⣄⠸⢀⠄⡀⡀⡪⣽⣿⣿⢿⣿⢟⣬
⠄⠄⠄⠄⠄⠈⢧⠯⢸⣿⣿⣿⡿⠰⣷⠄⣿⣇⡿⠄⡀⠦⣰⣿⡿⣱⣿⡏⢾⣫
⠄⠄⠄⠄⠄⠄⠈⣌⢌⢿⣿⣿⠇⠼⢃⢠⢇⣻⣧⣿⡡⣸⣿⠿⢁⡟⢁⣳⣿⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠳⢝⣒⣒⠰⣘⣴⡧⠿⣿⣛⡯⣱⡿⣫⢎⣪⣎⣿⣧⢻⠿
`, `
⣿⣯⣿⣟⣟⡼⣿⡼⡿⣷⣿⣿⣿⠽⡟⢋⣿⣿⠘⣼⣷⡟⠻⡿⣷⡼⣝⡿⡾⣿
⣿⣿⣿⣿⢁⣵⡇⡟⠀⣿⣿⣿⠇⠀⡇⣴⣿⣿⣧⣿⣿⡇⠀⢣⣿⣷⣀⡏⢻⣿
⣿⣿⠿⣿⣿⣿⠷⠁⠀⠛⠛⠋⠀⠂⠹⠿⠿⠿⠿⠿⠉⠁⠀⠘⠛⠛⠛⠃⢸⣯
⣿⡇⠀⣄⣀⣀⣈⣁⠈⠉⠃⠀⠀⠀⠀⠀⠀⠀⠀⠠⠎⠈⠀⣀⣁⣀⣀⡠⠈⠉
⣿⣯⣽⡿⢟⡿⠿⠛⠛⠿⣶⣄⠀⠀⠀⠀⠀⠀⠈⢠⣴⣾⠛⠛⠿⠻⠛⠿⣷⣶
⣿⣿⣿⠀⠀⠀⣿⡿⣶⣿⣫⠉⠀⠀⠀⠀⠀⠀⠀⠈⠰⣿⠿⠾⣿⡇⠀⠀⢺⣿
⣿⣿⠻⡀⠀⠀⠙⠏⠒⡻⠃⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠐⡓⢚⠟⠁⠀⠀⡾⢫
⣿⣿⠀⠀⡀⠀⠀⡈⣉⡀⡠⣐⣅⣽⣺⣿⣯⡡⣴⣴⣔⣠⣀⣀⡀⢀⡀⡀⠀⣸
⣿⣿⣷⣿⣟⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⢾⣷⣿
⣿⣿⣟⠫⡾⠟⠫⢾⠯⡻⢟⡽⢶⢿⣿⣿⡛⠕⠎⠻⠝⠪⢖⠝⠟⢫⠾⠜⢿⣿
⣿⣿⣿⠉⠀⠀⠀⠀⠈⠀⠀⠀⠀⣰⣋⣀⣈⣢⠀⠀⠀⠀⠀⠀⠀⠀⠀⣐⢸⣿
⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿
⣿⣿⣿⣿⣦⡔⠀⠀⠀⠀⠀⠀⢻⣿⡿⣿⣿⢽⣿⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿
⣿⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠘⠛⢅⣙⣙⠿⠉⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⣅⠀⠓⠀⠀⣀⣠⣴⣺⣿⣿⣿⣿⣿⣿⣿⣿
`, `
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣠⣤⣶⣶⣶⣤⣄⣀⣀⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⣀⣤⣤⣶⣿⣿⣿⣿⣿⣿⣿⣟⢿⣿⣿⣿⣶⣤⡀⠄
⠄⠄⠄⠄⠄⠄⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣜⠿⠿⣿⣿⣧⢓
⠄⠄⠄⠄⠄⡠⢛⣿⣿⣿⡟⣿⣿⣽⣋⠻⢻⣿⣿⣿⣿⡻⣧⡠⣭⣭⣿⡧
⠄⠄⠄⠄⠄⢠⣿⡟⣿⢻⠃⣻⣨⣻⠿⡀⣝⡿⣿⣿⣷⣜⣜⢿⣝⡿⡻⢔
⠄⠄⠄⠄⠄⢸⡟⣷⢿⢈⣚⣓⡡⣻⣿⣶⣬⣛⣓⣉⡻⢿⣎⠢⠻⣴⡾⠫
⠄⠄⠄⠄⠄⢸⠃⢹⡼⢸⣿⣿⣿⣦⣹⣿⣿⣿⠿⠿⠿⠷⣎⡼⠆⣿⠵⣫
⠄⠄⠄⠄⠄⠈⠄⠸⡟⡜⣩⡄⠄⣿⣿⣿⣿⣶⢀⢀⣿⣷⣿⣿⡐⡇⡄⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠁⢶⢻⣧⣖⣿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣇⡟⣇⣷⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣆⣤⣽⣿⡿⠿⠿⣿⣿⣦⣴⡇⣿⢨⣾⣿⢹⢸
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⠊⡛⢿⣿⣿⣿⣿⡿⣫⢱⢺⡇⡏⣿⣿⣸⡼
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⡿⠄⣿⣷⣾⡍⣭⣶⣿⣿⡌⣼⣹⢱⠹⣿⣇⣧
⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⠁⣤⣭⣭⡌⢁⣼⣿⣿⣿⢹⡇⣭⣤⣶⣤⡝⡼
⠄⣀⠤⡀⠄⠄⠄⠄⠄⡏⣈⡻⡿⠃⢀⣾⣿⣿⣿⡿⡼⠁⣿⣿⣿⡿⢷⢸
⢰⣷⡧⡢⠄⠄⠄⠄⠠⢠⡛⠿⠄⠠⠬⠿⣿⠭⠭⢱⣇⣀⣭⡅⠶⣾⣷⣶
⠈⢿⣿⣧⠄⠄⠄⠄⢀⡛⠿⠄⠄⠄⠄⢠⠃⠄⠄⡜⠄⠄⣤⢀⣶⣮⡍⣴
⠄⠈⣿⣿⡀⠄⠄⠄⢩⣝⠃⠄⠄⢀⡄⡎⠄⠄⠄⠇⠄⠄⠅⣴⣶⣶⠄⣶
`, `
⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹
⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀
⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀
⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀
⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀
⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰
⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
`, `
⠄⣾⣿⡇⢸⣿⣿⣿⠄⠈⣿⣿⣿⣿⠈⣿⡇⢹⣿⣿⣿⡇⡇⢸⣿⣿⡇⣿⣿⣿
⢠⣿⣿⡇⢸⣿⣿⣿⡇⠄⢹⣿⣿⣿⡀⣿⣧⢸⣿⣿⣿⠁⡇⢸⣿⣿⠁⣿⣿⣿
⢸⣿⣿⡇⠸⣿⣿⣿⣿⡄⠈⢿⣿⣿⡇⢸⣿⡀⣿⣿⡿⠸⡇⣸⣿⣿⠄⣿⣿⣿
⢸⣿⡿⠷⠄⠿⠿⠿⠟⠓⠰⠘⠿⣿⣿⡈⣿⡇⢹⡟⠰⠦⠁⠈⠉⠋⠄⠻⢿⣿
⢨⡑⠶⡏⠛⠐⠋⠓⠲⠶⣭⣤⣴⣦⣭⣥⣮⣾⣬⣴⡮⠝⠒⠂⠂⠘⠉⠿⠖⣬
⠈⠉⠄⡀⠄⣀⣀⣀⣀⠈⢛⣿⣿⣿⣿⣿⣿⣿⣿⣟⠁⣀⣤⣤⣠⡀⠄⡀⠈⠁
⠄⠠⣾⡀⣾⣿⣧⣼⣿⡿⢠⣿⣿⣿⣿⣿⣿⣿⣿⣧⣼⣿⣧⣼⣿⣿⢀⣿⡇⠄
⡀⠄⠻⣷⡘⢿⣿⣿⡿⢣⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣜⢿⣿⣿⡿⢃⣾⠟⢁⠈
⢃⢻⣶⣬⣿⣶⣬⣥⣶⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣷⣾⣾⢣
⡄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠘
⣿⡐⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢠⢃
⣿⣷⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⠆⣼
⣿⣿⣷⡀⠄⠈⠛⢿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⠿⠋⠠⠂⢀⣾⣿
⣿⣿⣿⣧⠄⠄⢵⢠⣈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⡁⢰⠏⠄⠄⣼⣿⣿
⢻⣿⣿⣿⡄⢢⠨⠄⣯⠄⠄⣌⣉⠛⠻⠟⠛⢋⣉⣤⠄⢸⡇⣨⣤⠄⢸⣿⣿⣿
`];
const imageAscii = yangBacaHomo[Math.floor(Math.random() * yangBacaHomo.length)];

async function dycoders() {
const { version, isLatest } = await fetchLatestBaileysVersion();
const resolveMsgBuffer = new NodeCache();
const { state, saveCreds } = await useMultiFileAuthState("./database/dycoders");

const dy = makeWASocket({
isLatest: true,  // Set the correct value for isLatest
keepAliveIntervalMs: 50000,
printQRInTerminal: true,
logger: pino({ level: "silent" }),
auth: state, // Ensure state is correctly initialized
browser: ["Ubuntu", "Chrome", "20.0.04"],
generateHighQualityLinkPreview: true,
resolveMsgBuffer: true,
});
  if (state && !dy.authState.creds.registered) {
        console.log(chalk.black(chalk.redBright(`Pesan Dari Dycoders\n\nEnter Mobile Number Example: 62`)))
        let phoneNumber = await question(`${chalk.bgBlack('- Number')}: `);
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
        if (!Object.keys(PHONENUMBER_MCC).some(v => String(phoneNumber).startsWith(v))) {
            spinnies.fail('start', { text: 'Invalid number, start with country code (Example: 62xxx)' });
            process.exit(0);
        }
            try {
                let code = await dy.requestPairingCode(phoneNumber);
                code = code.match(/.{1,4}/g)?.join("-") || code;
                console.log(chalk.black(chalk.bgGreen('NU UH NIH KODE NYA')), ' : ' + chalk.black(chalk.white(code)));
            } catch (error) {
                console.error('Error requesting pairing code:', error);
            }
    }


    
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });
store.bind(dy.ev);

dy.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
} else return jid;
};

dy.ev.on("messages.upsert", async (chatUpdate) => {
 try {
const mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!dy.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
if (mek.key.id.startsWith('dycoders.xyz')) return;
const m = smsg(dy, mek, store)
require("./dycoders.js")(dy, m, chatUpdate, store)
 } catch (err) {
 console.log(err)
 }
});
// Setting
dy.ev.on("contacts.update", (update) => {
for (let contact of update) {
let id = dy.decodeJid(contact.id);
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
}
});

dy.getName = (jid, withoutContact = false) => {
id = dy.decodeJid(jid);
withoutContact = dy.withoutContact || withoutContact;
let v;
if (id.endsWith("@g.us"))
return new Promise(async (resolve) => {
v = store.contacts[id] || {};
if (!(v.name || v.subject)) v = dy.groupMetadata(id) || {};
resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
});
else
v =
id === "0@s.whatsapp.net"
? {
id,
name: "WhatsApp",
}
: id === dy.decodeJid(dy.user.id)
? dy.user
: store.contacts[id] || {};
return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
};

dy.public = true //true = public jika false = self

dy.serializeM = (m) => smsg(dy, m, store)

dy.ev.on('connection.update', async (update) => {
const {
connection,
lastDisconnect
} = update
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Verifikasi Again`); dy.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); dycoders(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); dycoders(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); dy.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Verifikasi Again And Run.`); dy.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); dycoders(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); dycoders(); }
else dy.end(`Unknown DisconnectReason: ${reason}|${connection}`)
} else if (update.connection == "open" || update.receivedPendingNotifications == "true") {
lolcatjs.fromString('Connect, Welcome tod')
lolcatjs.fromString(`${imageAscii}`)
lolcatjs.fromString(`CONNECTED !!!\n\nBot Dengan:\nUser id : ${dy.user.id}\nName : ${dy.user.name}\n\nTerhubung !!!`)
}
})

dy.downloadAndSaveMediaMessage = async (
      message,
      filename,
      attachExtension = true,
    ) => {
      let quoted = message.msg ? message.msg : message;
      let mime = (message.msg || message).mimetype || "";
      let messageType = message.mtype
        ? message.mtype.replace(/Message/gi, "")
        : mime.split("/")[0];
      const stream = await downloadContentFromMessage(quoted, messageType);
      let buffer = Buffer.from([]);
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      let type = await FileType.fromBuffer(buffer);
      trueFileName = attachExtension ? filename + "." + type.ext : filename;
      // S A V E  T O  F I L E
      await fs.writeFileSync(trueFileName, buffer);
      return trueFileName;
    };

    dy.sendImage = async (jid, path, caption = '', quoted = '', options) => {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await dy.sendMessage(jid, {
      image: buffer,
      caption: caption,
      ...options
    }, {
      quoted
    })
  }
    
dy.ev.on("creds.update", saveCreds);
dy.getFile = async (PATH, returnAsFilename) => {
let res, filename
const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
const type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './tmp/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data,
deleteFile() {
return filename && fs.promises.unlink(filename)
}
}
}

dy.sendReact = async (jid, emoticon, keys = {}) => {
let reactionMessage = {
react: {
text: emoticon,
key: keys,
},
};
return await dy.sendMessage(jid, reactionMessage);
};

async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Hi, i'm dycoders.xyz"
        }
}
dy.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                dy.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })
    
dy.parseMention = (text = '') => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

dy.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 

dy.sendtext = async(chatId, text = '', quoted = '', opts = {}) => {
return dy.sendMessage(chatId, { text: text, mentions: await dy.parseMention(text), ...opts}, {quoted:quoted})
};
    
dy.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await dy.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '', mimetype = type.mime, convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

let message = {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}
let m
try {
m = await dy.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
console.error(e)
m = null
} finally {
if (!m) m = await dy.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
return m
}
}
dy.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await dy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
dy.cMod = (jid, copy, text = '', sender = dy.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === dy.user.id

return proto.WebMessageInfo.fromObject(copy)
}
dy.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await dy.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '', mimetype = type.mime, convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

let message = {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}
let m
try {
m = await dy.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
console.error(e)
m = null
} finally {
if (!m) m = await dy.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
return m
}
}
dy.profilePicture = async (jid, type = 'preview', timeoutMs) => {
    var _a;
    jid = (0, jidNormalizedUser)(jid);
    const result = await dy.query({
        tag: 'iq',
        attrs: {
            target: jid,
            to: S_WHATSAPP_NET,
            type: 'get',
            xmlns: 'w:profile:picture'
        },
        content: [{
            tag: 'picture',
            attrs: {
                type,
                query: 'url'
            }
        }]
    }, timeoutMs);
    const child = (0, getBinaryNodeChild)(result, 'picture');
    return (_a = child === null || child === void 0 ? void 0 : child.attrs) === null || _a === void 0 ? void 0 : _a.url;
    };
dy.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
//const path = require('path');

dy.sendTextWithMentions = async (jid, text, quoted, options = {}) => dy.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    
dy.reply = (jid, text = '', quoted, options) => {
        return Buffer.isBuffer(text) ? dy.sendFile(jid, text, 'file', '', quoted, false, options) : dy.sendMessage(jid, { ...options, text, mentions: dy.parseMention(text) }, { quoted, ...options, mentions: dy.parseMention(text) })
}

dy.sendProgress = async (jid, text, quoted) => {
  const emoticons = ['↻', '↺', '⟳', '⟲'];
  const replyMessage = await dy.reply(jid, Func.Styles('w a i t i n g . . ') + emoticons[0], quoted);  
  for (let i = 1; i < emoticons.length; i++) {
    await Func.delay(1000);
    dy.relayMessage(jid, {
      protocolMessage: {
        key: replyMessage.key,
        type: 14,
        editedMessage: {
          conversation: Func.Styles('w a i t i n g . . ') + emoticons[i]
        }
      }
    }, {});
  }
  // Send the final message after loading
  await Func.delay(1000);
  dy.relayMessage(jid, {
    protocolMessage: {
      key: replyMessage.key,
      type: 14,
      editedMessage: {
        conversation: text
      }
    }
  }, {});
};

dy.sendList = async (jid, title, footer, btn, options = {}) => {
                let msg = generateWAMessageFromContent(jid, {
                    viewOnceMessage: {
                        message: {
                            "messageContextInfo": {
                                "deviceListMetadata": {},
                                "deviceListMetadataVersion": 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.create({
                                ...options,
                                body: proto.Message.InteractiveMessage.Body.create({ text: title }),
                                footer: proto.Message.InteractiveMessage.Footer.create({ text: footer || "Powered By dycoders " }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                    buttons: [
                                        {
                                            "name": "single_select",
                                            "buttonParamsJson": JSON.stringify(btn)
                                        },
                                    ]
                                })
                            })
                        }
                    }
                }, {})
                return await dy.relayMessage(msg.key.remoteJid, msg.message, {
                    messageId: msg.key.id
                })
            }
 
dy.sendCata = async (jid, title, footer, m, options = {}) => {
let etc = generateWAMessageFromContent(jid, { viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": footer,
      ...(await prepareWAMessageMedia({ image: `${thumbnail}` }, { upload: dy.waUploadToServer })),
      "hasMediaAttachment": true
    },
    "body": {
      "text": title
    },
    "shopStorefrontMessage": {
      "id": "1",
      "surface": "UNKNOWN_SURFACE",
      "messageVersion": 0
    }
  }
}
}
})

dy.relayMessage(m.chat, etc, {})}

dy.sendUrlPanel = async (jid, title, footer , title1, btn, m, options = {}) => {
let msg = generateWAMessageFromContent(jid, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363303267333730@newsletter',
			newsletterName: 'Powered By dycoders.xyz', 
			serverMessageId: -1
		},
 businessMessageForwardInfo: { businessOwnerJid: dy.decodeJid(dy.user.id) },
 externalAdReply: { 
 title: 'dycoders.xyz', 
 thumbnailUrl: `${global.thumbnailpanel}`, 
 sourceUrl: '',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: title
 }),
  body: proto.Message.InteractiveMessage.Body.create({
 text: title1
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: footer
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: title,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${global.thumbnailpanel}` }}, { upload: dy.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
{
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Link Login\",\"url\":\"${domain}\",\"merchant_url\":\"${domain}\"}`
},
]
 })
 })
 }
 }
}, {})

await dy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}

dy.sendUrl = async (jid, title, footer , title1, btn, m, options = {}) => {
let msg = generateWAMessageFromContent(jid, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363267533195844@newsletter',
			newsletterName: 'Powered By dycoders.xyz', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: dy.decodeJid(dy.user.id) },
 externalAdReply: { 
 title: 'dycoders.xyz', 
 thumbnailUrl: `${global.thumbnail}`, 
 sourceUrl: '',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: title
 }),
  body: proto.Message.InteractiveMessage.Body.create({
 text: title1
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: footer
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: title,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${global.thumbnail}` }}, { upload: dy.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
{
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Url Instagram\",\"url\":\"${url}\",\"merchant_url\":\"${url}\"}`
},
]
 })
 })
 }
 }
}, {})

await dy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}

dy.sendView = async (jid, headerTitle, bodyMessage, footer, urlView, quoted, options = {}) => {
            await dy.relayMessage(jid, {
                    viewOnceMessage: {
                      message: {
                        interactiveMessage: {
                          header: {
                            title: headerTitle,
                            subtitle: "Subtitle message",
                            hasMediaAttachment: false
                          },
                          body: {
                            text: bodyMessage
                          },
                          footer: {
                            text: footer
                          },
                          nativeFlowMessage: {
                            buttons: [{
                              name: "open_webview",
                              buttonParamsJson: `{\"link\":{\"in_app_webview\":true,\"url\":\"${urlView}\",\"success_url\":\"https://dinorunner.com/success\",\"cancel_url\":\"${urlView}\"}}`
                            }],
                           messageParamsJson: ""
                          }
                        }
                      }
                    }
               }, { quoted, ephemeralExpiration: 86400 })}

dy.sendUrl = async (jid, title, footer , title1, btn, m, options = {}) => {
let msg = generateWAMessageFromContent(jid, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363267533195844@newsletter',
			newsletterName: 'Powered By dycoders.xyz', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: dy.decodeJid(dy.user.id) },
 externalAdReply: { 
 title: 'dycoders.xyz', 
 thumbnailUrl: `${global.thumbnail}`, 
 sourceUrl: '',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: title
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: footer
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: title1,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${global.thumbnail}` }}, { upload: dy.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
{
 "name": "cta_url",
 "buttonParamsJson": `{\"display_text\":\"Url Instagram\",\"url\":\"${url}\",\"merchant_url\":\"${url}\"}`
},
]
 })
 })
 }
 }
}, {})

await dy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}

dy.sendListImg = async (jid, title, footer, title1, btn, m, options = {}) => {
let msg = generateWAMessageFromContent(jid, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363303267333730@newsletter',
			newsletterName: 'Powered By 𝐕𝐞𝐬𝐭𝐢𝐚-𝟕', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: dy.decodeJid(dy.user.id) },
 externalAdReply: { 
 title: '𝐕𝐞𝐬𝐭𝐢𝐚-𝟕', 
 thumbnailUrl: `${global.thumbnail}`, 
 sourceUrl: '',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: title
 }),
  body: proto.Message.InteractiveMessage.Body.create({
 text: title1
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: footer
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: title,
 subtitle: "",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${global.thumbnail}` }}, { upload: dy.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(btn)
              },

 ],
 })
 })
 }
 }
}, {})

await dy.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
    
dy.ev.on('group-participants.update', async (anu) => {
    if (!wlcm.includes(anu.id)) return
    console.log(anu)
    try {
      let metadata = await dy.groupMetadata(anu.id)
      let participants = anu.participants
      for (let num of participants) {
        // Get Profile Picture User
        try {
          ppuser = await dy.profilePictureUrl(num, 'image')
        } catch {
          ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        // Get Profile Picture Group
        try {
          ppgroup = await dy.profilePictureUrl(anu.id, 'image')
        } catch {
          ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        if (anu.action == 'add') {
          let wel = `Hii @${num.split("@")[0]},\nWelcome To ${metadata.subject}`
          dy.sendMessage(anu.id, {
            document: fs.readFileSync('./package.json'),
            thumbnailUrl: ppuser,
            mimetype: 'application/pdf',
            fileLength: 99999,
            pageCount: '100',
            fileName: `dy_net`,
            caption: wel,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: `© Welcome Message`,
                body: `${botname}`,
                thumbnailUrl: ppuser,
                sourceUrl: '',
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          })
        } else if (anu.action == 'remove') {
          let txtLeft = `GoodBye @${num.split("@")[0]} 👋\nLeaving From ${metadata.subject}`
          dy.sendMessage(anu.id, {
            document: fs.readFileSync('./package.json'),
            thumbnailUrl: ppuser,
            mimetype: 'application/pdf',
            fileLength: 99999,
            pageCount: '100',
            fileName: `dy_net`,
            caption: txtLeft,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: `© GoodBye Message`,
                body: `${botname}`,
                thumbnailUrl: ppuser,
                sourceUrl: '',
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          })
        } else if (anu.action == 'promote') {
          let a = `Congratulations @${num.split("@")[0]}, on being promoted to admin of this group ${metadata.subject} 🎉`
          dy.sendMessage(anu.id, {
            document: fs.readFileSync('./package.json'),
            thumbnailUrl: ppuser,
            mimetype: 'application/pdf',
            fileLength: 99999,
            pageCount: '100',
            fileName: `dy_net`,
            caption: a,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: `Promoted In ${metadata.subject}`,
                body: `${botname}`,
                thumbnailUrl: ppuser,
                sourceUrl: '',
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          })
        } else if (anu.action == 'demote') {
          let a = `Congratulations @${num.split("@")[0]}, on being demote to admin of this group ${metadata.subject} 🎉`
          dy.sendMessage(anu.id, {
            document: fs.readFileSync('./package.json'),
            thumbnailUrl: ppuser,
            mimetype: 'application/pdf',
            fileLength: 99999,
            pageCount: '100',
            fileName: `dy_net`,
            caption: a,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: `Demoted In ${metadata.subject}`,
                body: `${botname}`,
                thumbnailUrl: ppuser,
                sourceUrl: '',
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          })
        }
      }
    } catch (err) {
      console.log(err)
    }
  })
    
    
    
dy.downloadAndSaveMediaMessagee = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    // save to file
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
  }

dy.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await dy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
dy.sendText = (jid, text, quoted = '', options) => dy.sendMessage(jid, { text: text, ...options }, { quoted })
return dy;
}

dycoders();

//batas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
