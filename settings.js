//═══════════════════════════════════════════════════════//
// ᴛʜɪs ʙᴏᴛ ᴄᴏᴅᴇʀ ᴏɴʟʏ ᴀʙᴜ
// ʏᴏᴜ ʀᴇ ᴇᴅɪᴛɪɴɢ ᴏʀ ᴄᴏᴘʏɪɴɢ
// ʏᴏᴜ ᴄʀᴇᴅɪᴛ ʀᴇᴍᴏᴠᴇ ʙᴜᴛ
// ᴊᴇsᴛ sᴜᴘᴘᴏʀᴛ ᴍᴇ
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['916238054812']
global.premium = ['916238054812']
global.ownernomer = '916238054812'
global.ownername = 'VipeR 𝙼𝙳'
global.botname = 'VipeR-Md'
global.footer = '𝛻𝛪𝛲𝛯𝑅 𝑆𝛯𝑅.'
global.ig = 'https://github.com/viper-1617'
global.region = 'India, NorthEast, Mizoram'
global.sc = 'https://github.com/Afx-Abu/ABU-MD'
global.myweb = 'https://youtu.be/'
global.packname = 'VipeR Bot'
global.author = 'VipeR'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'ᴅᴏɴᴇ',
    admin: 'ᴛʜɪs ғᴇᴀᴛᴜʀsɪs ᴏɴʟʏ ғᴏʀ ᴀᴅᴍɪɴ !',
    botAdmin: 'ɢɪᴠᴇ ᴀᴅᴍɪɴ ʙᴏᴛ ᴍᴜsᴛ!',
    owner: 'ᴛʜɪs ᴏɴʟʏ ᴡᴏʀᴋ ғᴏʀ ᴏᴡɴᴇʀ !',
    group: 'ᴛʜɪs ᴏɴʟʏ ᴡᴏʀᴋ ғᴏʀ ɢʀᴏᴜᴘ !',
    private: 'ᴏɴʟʏ ᴘʀɪᴠɪᴛᴇ ᴜsᴇ !',
    bot: 'ᴛʜɪs ᴏɴʟʏ Work ғᴏʀ ʙᴏᴛ !',
    wait: 'ʟᴏᴀᴅɪɴɢ...',
    error: 'ɴᴏᴛ ᴠᴇʀғɪᴅᴇ ᴀᴘɪ ᴋᴇʏ !',
    endLimit: 'ʏᴏᴜʀ Daily ʟɪᴍɪᴛᴇ ʀᴇᴀᴄʜ',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.ownernomer = process.env.OWNER_NUMBER || '916238054812'
global.packname = process.env.PACKNAME ||'𝛻𝛪𝛲𝛯𝑅 𝑆𝛯𝑅'
global.author = process.env.AUTHOR ||'VipeR/MD'
global.botname = process.env.BOT_NAME ||'VipeR-MD'
global.myweb = process.env.INSTA_LINK ||'https://instagram.com/'
global.footer = process.env.FOOTER_CAPTION ||'VipeR/MD'
global.myweb = process.env.GIT_LINK ||'https://github.com/viper-1617/ABU-MD'
global.name = 'ABU MULTI-DEVICE'
global.myweb = 'https://instagram.com/_adaxxh'
global.sc = 'https://github.com/viper-1617/ABU-MD'
global.session = process.env.SESSION_ID|| ''
global.wm = process.env.WATERMARK|| '𝛻𝛪𝛲𝛯𝑅 𝑆𝛯𝑅'
global.owner_name = process.env.OWNER_NAME || '𝛻𝛪𝛲𝛯𝑅 𝑆𝛯𝑅'
global.logsmsg = convertToBool(process.env.LOGS)|| false

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}

global.thumb = fs.readFileSync('logo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
