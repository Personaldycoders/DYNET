/*
   * Base Simpel
   * Created By DYCODERS.XYZ
*/
const functionn = require('./lib/functions')

global.rowner = [["6285719898124", "dycoders.xyz", true], ["6285719898124", "dycoders.xyz", true]];
global.botname = "DY_NET"
global.ownername = "DYCODERS.XYZ"
global.owner = "6285719898124"
global.idch = "120363303267333730@newsletter"


global.dycoders = '>.'
global.dyganteng = '->.'
global.hiasan = '> .'
global.hiasanB = '╭─ •'
global.hiasanA = '╰──── •'
global.mt = '> '
global.mtB = `> `
global.mtA = `> `
//Thumbnail 
global.thumbnail = 'https://telegra.ph/file/662564e95a8fe4c21cb33.jpg'
global.saluran = 'https://whatsapp.com/channel/0029VagpRL811ulLEm4TnO0h'
global.github = 'dycoders.xyz'

//Sticker
global.packname = 'by'
global.author = 'DYCODERS.XYZ'
global.tag = `© 2024 | DY_NET`
//Plek
global.foter = 'DYCODERS.XYZ'
global.Tasistent = `DYCODERS`
global.copyright = `© DYCODERS`
global.email = 'xx@gmail.com' // kalo mau buypanel work, gunakan email yang terdaftar di saweria.co
global.autoswview = true


//Mess
global.mess = {
owner: `Only Owner, Cannot be Used by Users`,
wait: `sabar...`,
success: `Successfully sent to target`,
group: `Feature Only Used For Groups !`,
Badmin: `Features can be used after the bot becomes an admin !`,
limit: `Your limit has run out, please wait tomorrow to reset the limit`,
premium: `Only Users Premium`,
}

global.Func = functionn
global.Scraper = {
    Ai: require('./lib/scrape/Ai'),
    Generate: require('./lib/scrape/Generate'),
    Anime: require('./lib/scrape/Anime'),
    Samehadaku: require('./lib/scrape/Samehadaku'),
    Download: require('./lib/scrape/Download'),
    Tools: require('./lib/scrape/Tools'),
    Search: require('./lib/scrape/Search'),
    Emi: require('./lib/scrape/emi'),
    Spotify: require('./lib/scrape/Spotify'),
    Uploader: require('./lib/scrape/uploader'),
    Stalk: require('./lib/scrape/Stalk'),
    Internet: require('./lib/scrape/Internet'),
    Islam: require('./lib/scrape/Islam.js'),
    Convert: require('./lib/scrape/converter'),
    Otakudesu: require('./lib/scrape/otakudesu'),
    Prodia: require('./lib/scrape/Prodia'),
    islamai: require('./lib/islamai'),
    Meganei: require('./lib/scrape/Meganei'),
    Vn: require('./lib/scrape/Voice.js'),
   
};

global.media = {
    openAi: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    geminiPro: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    bing: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    bard: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    bc: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    gpt: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    tqto: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    dystopia: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
    hercai: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg"
}
global.randomThumb = [
  "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
  "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
  "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
  "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg"
];
//SETTINGS DO (DIGITAL OCEAN)
global.token_do = ''


//apikey
global.skizo = "dycoders"
//SETTINGS PANEL
global.domain = ""
global.apikey = ""
global.capikey = ""
global.eggnya = "15"
global.locnya = "1"

//DEPOSIT QRIS ORDER KOUTA SET AMOUNT
global.qris = "https://files.catbox.moe/eariuo.jpg"
//QRIS DI ATAS GNTI SAMA QRIS KAMU DAN UNTUK UKURAN BISA LIAT LINK NYA AGAR TAU KALAU BEDA UKURAN GK BISA WAK


global.ApiOrkut = "260324417341448542126400OKCTxxxxxxxx"
global.Merchantid = "OK21xxxc"

//DAFTAR HARGA PANEL BISA LU GANTI MISAL 1000=1K

global.panel1gb = "1000" //1k
global.panel2gb = "2000" //2k
global.panel3gb = "3000" //3k
global.panel4gb = "4000" //4k
global.panel5gb = "5000" //5k
global.panel6gb = "6000" //6k
global.panel7gb = "7000" //7k
global.panelunli = "9000" //9k
global.ptpanel = "20000" //20k
global.ownerpanel = "30000" //30k
global.adminpanel = "12000" //12k
global.hargareseller = ""


//batas harga
global.linkptpanel = ""
global.linkownerpanel = ""
global.linkgrupadminpanel = ""
global.linkreseller = ""

//ZONE ID && APIKEY SUBDOMAIN CLOUDFLARE

global.zone = ""
global.apikeysubdo = ""
global.subdomain = ""



//DATABASE 
global.limitawal = 10
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo
//Welcome
global.wlcm = []
global.wlcmm = []

//Database game 
global.family100 = {};
global.suit = {};
global.tictactoe = {};
global.tebakbendera = {};
global.caklontong = {};
global.tebakgambar2 = {};
global.gamewaktu = 60 // Game waktu
global.bmin = 1000 // Balance minimal 
global.bmax = 10000 // Balance maksimal


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
