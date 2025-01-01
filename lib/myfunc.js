const { proto, delay, getContentType } = require('@whiskeysockets/baileys')
const axios = require('axios');
const { sizeFormatter } = require('human-readable');
const fs = require("fs");

// exports serialize
exports.serialize = (ptz, m) => {
m.isGroup = m.key.remoteJid.endsWith('@g.us')
try{
const berak = Object.keys(m.message)[0]
m.type = berak
} catch {
m.type = null
}
try{
const context = m.message[m.type].contextInfo.quotedMessage
if(context["ephemeralMessage"]){
m.quotedMsg = context.ephemeralMessage.message
}else{
m.quotedMsg = context
}
m.isQuotedMsg = true
m.quotedMsg.sender = m.message[m.type].contextInfo.participant
m.quotedMsg.fromMe = m.quotedMsg.sender === ramz.user.id.split(':')[0]+'@s.whatsapp.net' ? true : false
m.quotedMsg.type = Object.keys(m.quotedMsg)[0]
let ane = m.quotedMsg
m.quotedMsg.chats = (ane.type === 'conversation' && ane.conversation) ? ane.conversation : (ane.type == 'imageMessage') && ane.imageMessage.caption ? ane.imageMessage.caption : (ane.type == 'documentMessage') && ane.documentMessage.caption ? ane.documentMessage.caption : (ane.type == 'videoMessage') && ane.videoMessage.caption ? ane.videoMessage.caption : (ane.type == 'extendedTextMessage') && ane.extendedTextMessage.text ? ane.extendedTextMessage.text : (ane.type == 'buttonsMessage') && ane.buttonsMessage.contentText ? ane.buttonsMessage.contentText : ""
m.quotedMsg.id = m.message[m.type].contextInfo.stanzaId
}catch{
m.quotedMsg = null
m.isQuotedMsg = false
}

try{
const mention = m.message[m.type].contextInfo.mentionedJid
m.mentioned = mention
}catch{
m.mentioned = []
}
    
if (m.isGroup){
m.sender = m.participant
}else{
m.sender = m.key.remoteJid
}
if (m.key.fromMe){
m.sender = ptz.user.id.split(':')[0]+'@s.whatsapp.net'
}

m.from = m.key.remoteJid
m.now = m.messageTimestamp
m.fromMe = m.key.fromMe

return m
}

exports.jsonformat = (string) => {
  return JSON.stringify(string, null, 2)
}

exports.generateProfilePicture = async (buffer) => {
	const jimp = await Jimp.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
	}
}

exports.randomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

exports.color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)

}
exports.getGroupAdmins = (participants) => {
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins || []
     }
exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}


exports.toRupiah = function(x){
x = x.toString()
var pattern = /(-?\d+)(\d{3})/
while (pattern.test(x))
x = x.replace(pattern, "$1.$2")
return x
}

exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

exports.bytesToSize = (bytes, decimals = 2) => {
if (bytes === 0) return '0 Bytes';
const k = 1024;
const dm = decimals < 0 ? 0 : decimals;
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const i = Math.floor(Math.log(bytes) / Math.log(k));
return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

exports.checkBandwidth = async () => {
let ind = 0;
let out = 0;
for (let i of await require("node-os-utils").netstat.stats()) {
ind += parseInt(i.inputBytes);
out += parseInt(i.outputBytes);
}
return {
download: exports.bytesToSize(ind),
upload: exports.bytesToSize(out),
};
};

exports.randomNumber = (min, max = null) => {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}

exports.formatSize = (bytes) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return '0 Bytes';
const i = Math.floor(Math.log(bytes) / Math.log(1024));
return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
};

exports.getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};

exports.getBuffer = async (url, options) => {
try {
options = options || {};
const res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
});
return res.data;
} catch (err) {
return err;
}
};

exports.isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
};

exports.jsonformat = (string) => {
return JSON.stringify(string, null, 2);
};

exports.nganuin = async (url, options) => {
try {
options = options || {};
const res = await axios({
method: 'GET',
url: url,
headers: {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
},
...options
});
return res.data;
} catch (err) {
return err;
}
};

exports.pickRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`;
};

exports.runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.shorturl = async function shorturl(longUrl) {
try {
const data = { url: longUrl };
const response = await axios.post('https://shrtrl.vercel.app/', data);
return response.data.data.shortUrl;
} catch (error) {
return error;
}
};

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}
exports.newin = async (image, ukur1 = 100, ukur2 = 100) => {
	return new Promise(async(resolve, reject) => {
		try {
			const read = await Jimp.read(image);
			const result = await read.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
			resolve(result)
		} catch (e) {
			reject(e)
		}
	})
}




exports.formatp = sizeFormatter({
std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`
});

exports.smsg = (ptz, m, store) => {
  if (!m) return m
  let M = proto.WebMessageInfo
  if (m.key) {
    m.id = m.key.id
    m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
    m.chat = m.key.remoteJid
    m.fromMe = m.key.fromMe
    m.isGroup = m.chat.endsWith('@g.us')
    m.sender = m.fromMe ? (ptz.user.id.split(":")[0] + '@s.whatsapp.net' || ptz.user.id) : (m.key.participant || m.key.remoteJid)
    if (m.isGroup) m.participant = ptz.decodeJid(m.key.participant) || ''
  }
  if (m.message) {
    m.mtype = getContentType(m.message)
    m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
    m.body = m.message.conversation || m?.msg?.caption || m?.msg?.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
    let quoted = m.quoted = m?.msg?.contextInfo ? m.msg.contextInfo.quotedMessage : null
    m.mentionedJid = m?.msg?.contextInfo ? m.msg.contextInfo.mentionedJid : []
    if (m.quoted) {
      let type = Object.keys(m.quoted)[0]
      m.quoted = m.quoted[type]
      if (['productMessage'].includes(type)) {
        type = Object.keys(m.quoted)[0]
        m.quoted = m.quoted[type]
      }
      if (typeof m.quoted === 'string') m.quoted = {
        text: m.quoted
      }
      m.quoted.mtype = type
      m.quoted.id = m.msg.contextInfo.stanzaId
      m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
      m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
      m.quoted.sender = ptz.decodeJid(m.msg.contextInfo.participant)
      m.quoted.fromMe = m.quoted.sender === ptz.decodeJid(ptz.user.id)
      m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
      m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
      m.getQuotedObj = m.getQuotedMessage = async () => {
        if (!m.quoted.id) return false
        let q = await store.loadMessage(m.chat, m.quoted.id, conn)
        return exports.smsg(conn, q, store)
      }
      let vM = m.quoted.fakeObj = M.fromObject({
        key: {
          remoteJid: m.quoted.chat,
          fromMe: m.quoted.fromMe,
          id: m.quoted.id
        },
        message: quoted,
        ...(m.isGroup ? {
          participant: m.quoted.sender
        } : {})
      })

      /**
       * 
       * @returns 
       */
      m.quoted.delete = () => ptz.sendMessage(m.quoted.chat, {
        delete: vM.key
      })

      /**
       * 
       * @param {*} jid 
       * @param {*} forceForward 
       * @param {*} options 
       * @returns 
       */
      m.quoted.copyNForward = (jid, forceForward = false, options = {}) => ptz.copyNForward(jid, vM, forceForward, options)

      /**
       *
       * @returns
       */
      m.quoted.download = () => ptz.downloadMediaMessage(m.quoted)
    }
  }
  if (m?.msg?.url) m.download = () => ptz.downloadMediaMessage(m.msg)
  m.text = m?.msg?.text || m?.msg?.caption || m.message.conversation || m?.msg?.contentText || m?.msg?.selectedDisplayText || m?.msg?.title || ''
  /**
   * Reply to this message
   * @param {String|Object} text 
   * @param {String|false} chatId 
   * @param {Object} options 
   */
  m.reply = (text, options) => {
  // Memastikan bahwa 'text' memiliki nilai string, jika tidak, beri nilai default
  text = text || '';

  ptz.sendMessage(m.chat, {
    text,
    mentions: [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net'),
    ...options
  }, {
    quoted: m
  });
}

  /**
   * Copy this message
   */
  m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))

  /**
   * 
   * @param {*} jid 
   * @param {*} forceForward 
   * @param {*} options 
   * @returns 
   */
  m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => ptz.copyNForward(jid, m, forceForward, options)

  return m
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})