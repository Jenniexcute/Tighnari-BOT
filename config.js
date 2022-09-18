import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import fetch from 'node-fetch'

/*⫘⫘⫘⫘ WAKTU ⫘⫘⫘⫘⫘*/
global.wibh = moment.tz('Asia/Jakarta').format('HH')
global.wibm = moment.tz('Asia/Jakarta').format('mm')
global.wibs = moment.tz('Asia/Jakarta').format('ss')
global.wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
global.wktuwib = `${global.wibh} H ${global.wibm} M ${global.wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*⫘⫘⫘⫘⫘ MEDIA SOSIAL ⫘⫘⫘⫘*/
// Kalau gapunya di biarin aja!, atau ga di kasih tanda '-'

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sig = 'https://instagram.com/lionsuzunee' //Instagram mu
global.sgh = 'https://github.com/LionSuzune' //Github mu
global.swb = 'https://fangzbot.websites.co.in'
global.sfb = 'https://www.facebook.com/'
global.syt = 'https://www.youtube.com/'
global.syt = 'https://chat.whatsapp.com/BpuUbEx8niML0pmEqkbp8L' //YT Mu
global.sgc = 'https://chat.whatsapp.com/GObfv1nqaVLDSJSNh0eDJ4' //Group WhatsApp mu
global.sdc = 'https://chat.whatsapp.com/LdVST4O2wcX2xvpWZNZH3F' //Discord Mu
global.snh = 'https://nhentai.net/g/365296/' //Make ini aja gausah di ganti.

/*⫘⫘⫘⫘ALL PAYMENT⫘⫘⫘⫘⫘*/
global.pdana = '0887433094409' //Dana
global.povo = '0887433094409' //Ovo
global.pgopay = '0887433094409' //Gopay
global.ppulsa = '085795586847' //Pulsa 
global.ppulsa2 = '0887433094409' //Pulsa, Kalau nomor cuma 1, yg ini kasih tanda -
global.psaweria = 'https://saweria.co/FangzBot' //Saweria
global.donate = '〔 Dᴏɴᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕\n\n››╭─〘 *Donasi* 〙\n╭╡📮: Donasi ngab jangan make bot doang.│\n┝‷✧ *Ovo:* 0887433094409\n│┝‷✧ *Dana:* 0887433094409\n│┝‷✧ *Gopay:* 0887433094409\n│╰───···─────\n│⁺◛˖ Ingin Donasi? Chat nomor owner\n╰──────────···───╮'

/*⫘⫘⫘⫘ GLOBAL NOMOR ⫘⫘⫘⫘⫘*/
global.nomorbot = '6288289252040' //Nomor Bot mu
global.nomorown = '62887433094409' //Nomormu
global.namebot = 'Tighnari BOT' //Nama bot mu
global.nameown = 'Uzui Michelle' //Nama mu

/*⫘⫘⫘⫘GLOBAL FUNCTION⫘⫘⫘⫘⫘*/
//KALAU MAGER EDIT, MENDING GAUSAH DI APA² IN. SAMA AJA//
global.swo = 'https://wa.me/62887433094409' //Nomor mu
global.linksc = 'github.com/IkawaTeam' //Gausah di ganti, biar ga eror
global.danied = '✘ 𝗘𝗥𝗢𝗥 𝟰𝟬𝟰' //Gausah di apa² in
global.botclick = '𝍤 CLICK HERE' //Bebas, Kalau gw saranin mending gausah di ganti.
global.after = 'Bot by IkawaTeam'
global.author = '                © Tighnari BOT By Uzui Michelle' //Wm author
global.acguest = 'Kamu akan Menggunakan akun guest dari Uzui Michelle\n\nClick Button di bawah.'
global.botintro = 'Hallo, Kenalin saya Tighnari BOT Saya akan membantu Anda kapan pun & Dimana pun, Saya asisten bot WhatsApp yang di buat oleh *Uzui Michelle* Saya di rilis pada tanggal\n🗓 ️_16/04/2022_'
global.sc = 'https://telegra.ph/file/b8cd007d544d1f8d91f2a.jpg'
global.sallam = '😇 Waalaikumsalam'
global.thumbBanned = 'https://telegra.ph/file/359af5737ea0e6715343d.jpg' 
global.thumbWarn = 'https://telegra.ph/file/e1b386c2f774a3d2efd5c.jpg' 
global.speed = 'https://telegra.ph/file/922d66d500e0371162125.jpg' 
global.ow = 'https://telegra.ph/file/bb7caab60631cda5bbf5a.jpg'  
global.intro = 'https://telegra.ph/file/8d0643831da883a50cf95.jpg' 
global.donsi = 'https://telegra.ph/file/6ed82663a6677b99b0341.jpg'  
global.assalam = 'https://telegra.ph/file/b4329f1fea1d1b3afffea.jpg' 
global.collab = 'https://telegra.ph/file/3d07d7189ef860f5f6fa8.jpg' 
global.dand = 'https://telegra.ph/file/d8fcc1bfab175baae446b.jpg' 
global.thumbEnable = 'https://telegra.ph/file/8b3efaa41a79e263db180.jpg' 
global.runtime = 'https://telegra.ph/file/922d66d500e0371162125.jpg' 
global.serialimg = 'https://telegra.ph/file/1a2f9d8b9a140afa054a3.jpg' 
global.jlimit = 'https://telegra.ph/file/9720338b5b86a32f7c43d.jpg'  
global.thumbDidyou = 'https://telegra.ph/file/bda83d5f54b19f7be6380.jpg' 
global.verify = 'https://telegra.ph/file/f76b9e1139d300fd87398.jpg' 
global.thumbLevelup = 'https://telegra.ph/file/a37438a989b89261442ff.jpg' 
global.thumbEror = 'https://telegra.ph/file/1142ccc8392cbb369742b.jpg' 
global.thumbnailCuaca = 'https://telegra.ph/file/b6835723ada52c85aafcd.jpg' 
global.guest = 'https://telegra.ph/file/21cd3cfa4c25b388330bf.jpg' 
global.thumbmenfes = 'https://telegra.ph/file/2c0fbcf7227a4f3762e64.jpg' 
/*⫘⫘⫘⫘ STAFF ⫘⫘⫘⫘⫘*/
global.owner = [
  ['6288289252040'], //Owner1
  ['6285795586847'], //Owner2
  ['62887433094409'], //Owner3
  ['62887433094499', 'Uzui Michelle ! 🥶', true] //Ini buat kamu!
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Jangan di isi, Tambahin dari bot nya ketik .addprem @Fangz 15


/*⫘⫘⫘⫘ APIKEY ⫘⫘⫘⫘⫘*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  bsbt: 'https://bsbt-api-rest.herokuapp.com', 
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Papah-Chan',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://api.neoxr.my.id' : '5VC9rvNx',
  'https://rest-beni.herokuapp.com' : 'benniismaelapikey',
  'https://melcanz.com' : 'manHkmst',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Fa2GhFnr',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://hardianto.xyz': 'hardianto',
  'https://zenzapis.xyz' : 'f9fccfcff1',
  'https://hardianto-chan.herokuapp.com' : 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
}
// FREE APIKEY, WAJIB SUBSCRIBE:V
// kalau mau ganti apikey mu sendiri terserah

/*⫘⫘⫘⫘ WATERMAK ⫘⫘⫘⫘⫘*/
//GANTI JANGAN NGASAL.
global.wm = '                「 赤 Tighnari BOT ⁩இ 」' //Wm
global.wm2 = '➳༻❀Uzui Michelle❁ུ۪۪.;:୭̥.' //Name Wm
global.wm3 = '赤 Tighnari BOT'
global.hiasan = '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦'
global.botdate = `🗓️️ 𝗗𝗮𝘁𝗲: ${week} ${date}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = 'Tighnari BOT BY Uzui Michelle' //Ganti serah lu

/*⫘⫘⫘⫘ LOGO ⫘⫘⫘⫘⫘*/
// INI JUGA GANTI SETERAH MU
global.thumb = 'https://telegra.ph/file/35dad6a2e49f91d04ccb5.jpg' //Thumbnail nya
global.thumb2 = 'https://telegra.ph/file/532b39bd41cc8c819a43a.jpg' //Thumbnail 2
global.thumbbc = 'https://telegra.ph/file/b2d93ab46026d577ec889.jpg' //Image Bcgcb
global.giflogo = 'https://telegra.ph/file/ccb33bd564035b81b49e9.jpg' //Bebas
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.thumbnailUrl = [
'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg','https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg','https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg','https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
'https://telegra.ph/file/55e5af5f33fbd57104187.jpg','https://telegra.ph/file/af236598456b95884bd15.jpg',
'https://telegra.ph/file/de92ed4a729887ffc974c.jpg','https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg']

/*Thumbnail*/
global.hoppai = ['https://telegra.ph/file/f34d76df4a2065af1a5ba.jpg',
'https://telegra.ph/file/05c1b22ee83bcd7723b4d.jpg',
'https://telegra.ph/file/1d886f66a44871205335f.jpg',
'https://telegra.ph/file/54d19a9094dc509370bf9.jpg',
'https://telegra.ph/file/e649475bcde78a9977ee5.jpg',
'https://telegra.ph/file/32ba20b6139b129c559c8.jpg',
'https://telegra.ph/file/948434cda49e4af5d9f11.jpg',
'https://telegra.ph/file/6f353c68533283fe79871.jpg',
'https://telegra.ph/file/de268ca9b01101acf2b8a.jpg',
'https://telegra.ph/file/fc6c5b2ae9a20c4256e7f.jpg',
'https://telegra.ph/file/efb70bb0988640f841742.jpg',
'https://telegra.ph/file/77d03fff530a2bcff3bf7.jpg',
'https://telegra.ph/file/6e4623464a659dd8d902b.jpg',
'https://telegra.ph/file/685aa39f0cb0f2c4fd85b.jpg',
'https://telegra.ph/file/10454b9ad693e1eefea58.jpg',
'https://telegra.ph/file/7de8ce5c290c3d8be0856.jpg',
'https://telegra.ph/file/8d7c4eadb7a4722747074.jpg',
'https://telegra.ph/file/ccc5f8eaac0f30919ef6c.jpg',
'https://telegra.ph/file/95f4b43439d7888f15ea5.jpg',
'https://telegra.ph/file/9c2a750db555bd2fad1f3.jpg',
'https://telegra.ph/file/efc5f7e637744fd6bfec2.jpg',
'https://telegra.ph/file/3a5231aade245665633bd.jpg',
'https://telegra.ph/file/2ecfc76feb26ec1eab99b.jpg',
'https://telegra.ph/file/dabb70983b4e833d98344.jpg',
'https://telegra.ph/file/75193a893e38fc580afe6.jpg',
'https://telegra.ph/file/217aa0f4ec76273808aa4.jpg',
'https://telegra.ph/file/8a35d3446b97ae22c7b23.jpg',
'https://telegra.ph/file/092df720701575a7ceaaa.jpg',
'https://telegra.ph/file/a65184a676cd648de34c3.jpg',
'https://telegra.ph/file/180e28807e78419d45537.jpg',
'https://telegra.ph/file/140eff27be983e0cd6781.jpg',
'https://telegra.ph/file/1581b791e16d0029e16b5.jpg',
'https://telegra.ph/file/6a4b36372b4f265bae3bc.jpg',
'https://telegra.ph/file/093caff422f194f00bc6c.jpg',
'https://telegra.ph/file/2294b7ab49eca8a8046b2.jpg',
'https://telegra.ph/file/869224d1c417e8b5c8ff1.jpg',
'https://telegra.ph/file/a78443f0ee887f46808d7.jpg',
'https://telegra.ph/file/1889878933264d16c58bf.jpg',
'https://telegra.ph/file/735aeb47d9c4aa87aaaf3.jpg',
'https://telegra.ph/file/fcf861516db09dda164e0.jpg',
'https://telegra.ph/file/355d96d7e06d109435f67.jpg']
global.hyuri = ['https://telegra.ph/file/5d908f4a17515a15c6202.jpg']
global.hLokun = ['https://telegra.ph/file/8902f4fc550727a62e99f.jpg',
'https://telegra.ph/file/6a6a40e924c16a8f0de03.jpg',
'https://telegra.ph/file/b035d3038a0b124f1d846.jpg',
'https://telegra.ph/file/9d475f7852bf6f6193c80.jpg']
global.hloli = ['https://telegra.ph/file/872c360a7104d86752650.jpg',
'https://telegra.ph/file/f6bbb53620374257bfa51.jpg',
'https://telegra.ph/file/9b76375f3869440818d57.jpg',
'https://telegra.ph/file/a78443f0ee887f46808d7.jpg']
global.hneko = ['https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg',
'https://telegra.ph/file/f9c4d97477b647cf57a2b.jpg',
'https://telegra.ph/file/b6905b77e6c7732592a13.jpg',
'https://telegra.ph/file/9f82c432d0ba4cfffda9a.png',
'https://telegra.ph/file/484083949d4bfd763b8cf.jpg']
global.hbunny = ['https://telegra.ph/file/2b71a8d46d29351479fbc.jpg',
'https://telegra.ph/file/ae610571b62b5ab876e9c.jpg',
'https://telegra.ph/file/cc8255d5b989eef587af2.jpg',
'https://telegra.ph/file/30d2e7375996abd9cfee3.jpg',
'https://telegra.ph/file/78980c90c44a95a1d30fa.jpg',
'https://telegra.ph/file/2ac5d8ccf23e73eaa5bfa.jpg']
global.hbeach = ['https://telegra.ph/file/14ae0ba2da77d74e6b80c.jpg',
'https://telegra.ph/file/b6905b77e6c7732592a13.jpg',
'https://telegra.ph/file/9da45a352eb4c40e5d641.jpg',
'https://telegra.ph/file/59e78846ee365975ee6e3.jpg',
'https://telegra.ph/file/1bf7dee46b83eb4c41d7d.jpg',
'https://telegra.ph/file/0525a7929f819cb8278f3.jpg']
global.hwaifu = ['https://i.pinimg.com/originals/57/ba/5a/57ba5a5e3cd139bd0afa01587cf5ae39.jpg'
'https://i.pinimg.com/originals/e6/b6/65/e6b665ec792306e8ee7691c6ca629c87.jpg'
'https://i.pinimg.com/originals/e4/c9/18/e4c91896b6512476619a2a5ff0156ef4.jpg'
'https://i.pinimg.com/originals/99/11/6c/99116c4e605dcd365047aefaf657d07a.jpg'
'https://i.pinimg.com/originals/d8/36/b3/d836b3f6317fa41e20718bd65955c459.jpg'
'https://i.pinimg.com/originals/e6/16/2e/e6162eaa33df5d11ad840cfb2df5afa6.jpg'
'https://i.pinimg.com/originals/51/e6/cf/51e6cfb9cf00774eaeb11b98abb42138.jpg'
'https://i.pinimg.com/originals/44/94/d2/4494d2fe6ad927cb5d44750d1d2ced01.jpg'
'https://i.pinimg.com/originals/ad/98/4c/ad984c58aafd15c9c3cc2b089b1d9976.jpg'
'https://i.pinimg.com/originals/41/b1/4c/41b14c8ad1407d2784b56b49ae52897e.jpg'
'https://i.pinimg.com/originals/8b/79/67/8b79677d849dbd18b35ef64b8874b8d9.jpg'
'https://i.pinimg.com/originals/9e/07/50/9e0750dbeee01273ab0506df12806204.jpg'
'https://i.pinimg.com/originals/bd/b1/9b/bdb19bc91c70c4ec37c4f4345f5c883e.jpg'
'https://i.pinimg.com/originals/74/9a/91/749a914b1248b527061d480a1c78937c.jpg'
'https://i.pinimg.com/originals/5d/8c/e7/5d8ce764b1998e325b3399e967fae8cb.jpg'
'https://i.pinimg.com/originals/24/db/15/24db15e0f78739cf289364e0adfe62a9.jpg'
'https://i.pinimg.com/originals/e3/f0/de/e3f0de3a9269860bcf5ff9c781e904fb.jpg'
'https://i.pinimg.com/originals/82/7a/1c/827a1c3cfa78eed31abdc3b9ab992aae.jpg'
'https://i.pinimg.com/originals/c1/75/5a/c1755a37149f68d7a4aebcdea71dc329.jpg'
'https://i.pinimg.com/originals/4e/39/a8/4e39a8f7632e2bdd8251454ffae1cff9.jpg'
'https://i.pinimg.com/originals/a0/b5/6f/a0b56f0b6b717a2e636512b042041d54.jpg'
'https://i.pinimg.com/originals/9d/5e/2b/9d5e2b499fc99a5145b94bcb7f54f137.jpg'
'https://i.pinimg.com/originals/62/1e/8d/621e8d04ddeed443240eb06932b7d5f9.jpg
'https://i.pinimg.com/originals/ca/e3/bd/cae3bdc28c73a8f519859614d33e1b5e.jpg'
'https://i.pinimg.com/originals/e8/a0/18/e8a018121a37ed30df547945fc4e89f8.jpg'
'https://i.pinimg.com/originals/81/55/e4/8155e4f3573b1db5fd95f2f8bcbd977a.jpg'
'https://i.pinimg.com/originals/bb/01/0e/bb010e90a8c6c322b22d798201e71b88.png'
'https://i.pinimg.com/originals/5c/84/14/5c84141717bce2ea2366ba9eb7fcf0ce.jpg'
'https://i.pinimg.com/originals/50/fe/c8/50fec80017749966f1db723fc239a744.jpg'
'https://i.pinimg.com/originals/d3/8f/6a/d38f6aa472a7b0e0ab0d9a6923adaa0d.jpg'
'https://i.pinimg.com/originals/0f/fd/9d/0ffd9dd538b2c173528d3e7ee9fe2803.jpg'
'https://i.pinimg.com/originals/7f/ec/61/7fec61bbdc71ca41f8d6f281a0811b1e.jpg'
'https://i.pinimg.com/originals/cd/3f/54/cd3f5455142af7cfa2b3a6da6a31bd5d.jpg'
'https://i.pinimg.com/originals/78/5f/aa/785faad22db2824ba45d22c5292f719a.jpg'
'https://i.pinimg.com/originals/aa/72/85/aa7285ff1877285edf54fa1aab8cb3bd.jpg'
'https://i.pinimg.com/originals/d6/a8/a9/d6a8a97014e15618f96c6c392946f2d0.jpg'
'https://i.pinimg.com/originals/20/67/43/2067433eb87e85b76af693f5d3c49511.jpg'
'https://i.pinimg.com/originals/78/14/70/781470cc915b83c940a71dfd728118e4.jpg'
'https://i.pinimg.com/originals/fd/0d/96/fd0d96977a1f9308d83517835d61ed4e.jpg'
'https://i.pinimg.com/originals/9d/80/66/9d80668331d487fc9ecf5abc796b9e72.jpg'
'https://i.pinimg.com/originals/e3/78/d0/e378d02d8b73bb9363e683504547c7db.jpg'
'https://i.pinimg.com/originals/41/31/db/4131dba30ca57a69698b3c67c587575b.jpg'
'https://i.pinimg.com/originals/82/3e/97/823e973be760736c7328fa5c225e0f66.jpg'
'https://i.pinimg.com/originals/1b/c1/99/1bc19967c900224419d5a08ce2bc378a.jpg'
'https://i.pinimg.com/originals/94/fd/41/94fd41776febe5f0e3834bcd685e4515.jpg'
'https://i.pinimg.com/originals/9f/5a/69/9f5a699fdff0e8308f687169e8d175aa.jpg'
'https://i.pinimg.com/originals/08/0e/5a/080e5a2aff2e805001b50eaba666f3e1.jpg'
'https://i.pinimg.com/originals/84/0c/6b/840c6b4860069aa029d749a171056f98.jpg'
'https://i.pinimg.com/originals/9b/ae/e1/9baee164a0dcc55bb543d19e672bdbfe.jpg'
'https://i.pinimg.com/originals/ee/f9/86/eef986bf65c4a2b9268e69b39017009c.jpg'
'https://i.pinimg.com/originals/b7/7c/ab/b77cab87218e897de1dcdc525608f8f1.jpg'
'https://i.pinimg.com/originals/c5/c5/42/c5c5428f2fadf71ec4d7d84c80f04173.jpg'
'https://i.pinimg.com/originals/5d/63/c0/5d63c0862eb299b6082ea3c3e72af575.jpg'
'https://i.pinimg.com/originals/c3/33/68/c3336815bbec9d2e791f886f9ab88c8e.jpg'
'https://i.pinimg.com/originals/3f/d3/f2/3fd3f268080cee72ef1bfc0788f34664.jpg'
'https://i.pinimg.com/originals/95/4f/80/954f80f66c7f4d50fe2c88b63f999006.jpg'
'https://i.pinimg.com/originals/60/40/aa/6040aa96f5e0e12379a48a70eceea3d1.jpg'
'https://i.pinimg.com/originals/e6/58/07/e65807ed3cc368103fb53769245b1a9a.jpg'
'https://i.pinimg.com/originals/56/27/29/56272988ddfe963d2f1de90e80cf40ae.jpg'
'https://i.pinimg.com/originals/0c/5b/bf/0c5bbf6a4109955faad5b5c48a6930fe.jpg'
'https://i.pinimg.com/originals/3a/12/26/3a12262c761c80031084f315dda0ecd8.jpg'
'https://i.pinimg.com/originals/3e/03/55/3e0355d7305d0a38e3fb85e80d33a0d4.jpg'
'https://i.pinimg.com/originals/b0/3c/70/b03c70fe45d4f1ce848aa0c77c2d3d85.jpg'
'https://i.pinimg.com/originals/8c/37/48/8c374821f88fd66a4156febf01bb0ce2.jpg'
'https://i.pinimg.com/originals/77/9e/84/779e8454c251232193681e31df6a10e8.jpg'
'https://i.pinimg.com/originals/68/55/27/6855273f1918d9a481e4436ed3ca8591.jpg'
'https://i.pinimg.com/originals/e7/f2/32/e7f23282f1d528da23a5fb53af525725.jpg'
'https://i.pinimg.com/originals/01/5f/41/015f414550c576c36df553e53850abca.jpg'
'https://i.pinimg.com/originals/95/fa/d7/95fad765bb2e9e55774f43273a02bade.jpg'
'https://i.pinimg.com/originals/52/38/ee/5238eed2bed9f95e3f66bcfd00e31b91.jpg'
'https://i.pinimg.com/originals/a9/2a/a9/a92aa902e2401f5590c715ef45c57640.jpg'
'https://i.pinimg.com/originals/17/e9/a8/17e9a89028d02d1c9c636afcd2417ea4.jpg'
'https://i.pinimg.com/originals/ec/96/35/ec96352d5721a744fbc95df01c352749.jpg'
'https://i.pinimg.com/originals/37/a0/de/37a0de43ae16810a3b2adf3448bffcfe.jpg'
'https://i.pinimg.com/originals/1d/04/3d/1d043d8f652f82852832432cb5b0d1d3.jpg'
'https://i.pinimg.com/originals/9d/5b/7a/9d5b7a316381877aad5eb71247a33c39.jpg'
'https://i.pinimg.com/originals/4c/0c/b8/4c0cb84fdf379f74b2240581910700a1.jpg'
'https://i.pinimg.com/originals/5b/18/c8/5b18c880a88bf806cc8044cc56d5e7f2.jpg'
'https://i.pinimg.com/originals/c7/78/e9/c778e9e7c49a69f38b929e588b336990.jpg'
'https://i.pinimg.com/originals/ed/c5/0d/edc50d133d3f2cc787928314eec82f43.jpg'
'https://i.pinimg.com/originals/e0/9b/2e/e09b2e2dcecdc5da1ba6878aaacfa195.jpg'
'https://i.pinimg.com/originals/3e/28/a0/3e28a0b8710a1bb3ed2a0b770fb9693f.jpg'
'https://i.pinimg.com/originals/5a/f4/65/5af465361cc52cd2c6d00a5396cf2b0f.jpg'
'https://i.pinimg.com/originals/18/9a/c9/189ac967f3d83341ae0390b71c57c2d7.jpg'
'https://i.pinimg.com/originals/4b/c7/a0/4bc7a0c9d25947b8312b67e7154be155.jpg'
'https://i.pinimg.com/originals/f0/12/7e/f0127e803a2dbd90e6483e6848340d7e.jpg'
'https://i.pinimg.com/originals/51/84/f0/5184f070d2daf0e6f09d536962e650e9.jpg'
'https://i.pinimg.com/originals/5c/10/67/5c1067d6c84e4ed03ada5ced613f0b74.jpg'
'https://i.pinimg.com/originals/40/0b/ec/400bec6a6b7240cd2d6f1cf3ac5081fa.jpg'
'https://i.pinimg.com/originals/7d/ea/4d/7dea4d3a1da759f1428942fbfe706b7a.jpg'
'https://i.pinimg.com/originals/0a/8b/4b/0a8b4b135b6167011ad3e27e03270ca8.jpg'
'https://i.pinimg.com/originals/3f/b4/9f/3fb49f1ebefc5692cf111566da7ec88c.jpg'
'https://i.pinimg.com/originals/08/ea/6f/08ea6fbea3f96eef4aa770c8f98f76a6.jpg'
'https://i.pinimg.com/originals/50/61/31/5061312b7c485b04eb08eb3ec2b09de7.jpg'
'https://i.pinimg.com/originals/5e/23/ca/5e23ca7cd41432fdb40d49ab22c6a4ab.jpg'
'https://i.pinimg.com/originals/f8/7c/21/f87c214d32e123bf01db2611221bb53c.jpg'
'https://i.pinimg.com/originals/c3/45/f5/c345f57875ef9059d18ce4e36052e93c.jpg'
'https://i.pinimg.com/originals/91/42/e6/9142e6641283c8c3a6814f018ffba3f6.jpg'
'https://i.pinimg.com/originals/fd/d0/de/fdd0de717eddc75c3bb8a9de06c044b1.jpg'
'https://i.pinimg.com/originals/b2/2d/88/b22d8814d66ee58d529216bac2300bef.jpg'
'https://i.pinimg.com/originals/b5/f7/ba/b5f7ba1014951960b99b4832f288e17c.jpg'
'https://i.pinimg.com/originals/2d/d9/a0/2dd9a08ea6ea0b23443b52a9f702800d.jpg'
'https://i.pinimg.com/originals/a2/01/2e/a2012eebef05a70db6e7f29b07abc5e4.jpg'
'https://i.pinimg.com/originals/34/7f/48/347f48f49af02acdfa9f204f9414f009.jpg'
'https://i.pinimg.com/originals/fc/03/f4/fc03f475efd09dd75522c42105fb6185.jpg'
'https://i.pinimg.com/originals/35/71/ce/3571ce8f7d78da36176c5cbf4a6a1418.jpg'
'https://i.pinimg.com/originals/55/f6/40/55f6406ca4c78e3a85b211cf2549faee.jpg'
'https://i.pinimg.com/originals/ab/86/f8/ab86f809baaa15555496064b2e4f719e.jpg'
'https://i.pinimg.com/originals/d6/44/a8/d644a866bf5794055d2d8cc295e6fe97.jpg'
'https://i.pinimg.com/originals/aa/be/b3/aabeb3e5d8b2ed51d0ca935c6fe32499.jpg'
'https://i.pinimg.com/originals/cd/da/5a/cdda5a35338154047e18bd23b4c4b866.jpg'
'https://i.pinimg.com/originals/ba/aa/fe/baaafeaeaba8361dd162a4bbc80d3e93.jpg'
'https://i.pinimg.com/originals/5a/3d/cc/5a3dcc2ed0452a5d3657ffe51402c1e3.jpg'
'https://i.pinimg.com/originals/6b/04/8c/6b048c70e5c2591ac7adb94857877d0b.jpg'
'https://i.pinimg.com/originals/b2/10/72/b210725613a34fc8fe33200bf8851e4f.jpg'
'https://i.pinimg.com/originals/54/73/92/5473922cfa6296effd6b3cf341928c34.jpg'
'https://i.pinimg.com/originals/f5/d6/26/f5d626607e3d56529d19fbfe39e0feb1.jpg'
'https://i.pinimg.com/originals/3d/c5/13/3dc513465fb79c46a429c011cd59a498.jpg'
'https://i.pinimg.com/originals/bf/e7/b6/bfe7b634dbd07d947ee9ae1442ee17bc.jpg'
'https://i.pinimg.com/originals/31/db/01/31db011036078a3b6727b61dd410a319.jpg'
'https://i.pinimg.com/originals/b6/5f/1c/b65f1c29cc63c3ca8654fcda68369417.jpg'
'https://i.pinimg.com/originals/af/71/6f/af716ffce908ea9daa32dbc096591027.jpg'
'https://i.pinimg.com/originals/77/7f/22/777f227960c68dcab56740502ca914e6.jpg'
'https://i.pinimg.com/originals/df/c1/47/dfc147a438863cc2a3224f391df30d43.jpg'
'https://i.pinimg.com/originals/34/52/f9/3452f95e971c4c90c69dc638d380553e.jpg'
'https://i.pinimg.com/originals/29/ab/5d/29ab5dba39b8ba8239f7b9a5cc96e6c5.jpg'
'https://i.pinimg.com/originals/99/5f/98/995f982d02e57ef083d2b85b01585269.jpg'
'https://i.pinimg.com/originals/3e/2a/85/3e2a8573403d694a2e0e79ca376a90c9.jpg'
'https://i.pinimg.com/originals/97/04/89/97048964ed39b100ea0cd485c9743332.jpg'
'https://i.pinimg.com/originals/11/d3/84/11d38470c0241e1f1a0cd8d9db96d33c.jpg'
'https://i.pinimg.com/originals/d1/32/db/d132dbf95f61183574c69dddb12b9ba8.jpg'
'https://i.pinimg.com/originals/ee/3d/9d/ee3d9d6b58d52524ceae26a392e52474.jpg'
'https://i.pinimg.com/originals/59/3f/3f/593f3f41742406f3f5ae224db5bbf214.jpg'
'https://i.pinimg.com/originals/d6/a3/fd/d6a3fd1e9a7b68744a1040bfda0c14be.jpg'
'https://i.pinimg.com/originals/16/53/4e/16534e12dfd3a3026f1696400b376250.png'
'https://i.pinimg.com/originals/e0/2c/b7/e02cb73964d008f3522f657e733b7e9f.jpg'
'https://i.pinimg.com/originals/00/c7/3e/00c73e2430afdecc6f54ad963f58a1f9.jpg'
'https://i.pinimg.com/originals/e5/2f/98/e52f98a206986c2b1b31df6463f41a16.jpg'
'https://i.pinimg.com/originals/6d/e8/b6/6de8b64303f7e72b00f77f241ba99e4d.png'
'https://i.pinimg.com/originals/cd/30/8b/cd308b63aaf82f49c901c3b651b07a31.jpg'
'https://i.pinimg.com/originals/a3/eb/06/a3eb06c517b725f6830bf77df9da4c41.jpg'
'https://i.pinimg.com/originals/31/24/11/3124118a334002c3ec23842cc53cdc95.jpg'
'https://i.pinimg.com/originals/47/21/9a/47219a3ecbc304125eb0e092bbf027ef.jpg'
'https://i.pinimg.com/originals/0a/45/e2/0a45e25aa30098d8924c8dbb178c557f.jpg'
'https://i.pinimg.com/originals/98/44/6f/98446f8f5367bf7fd697d99a78783473.jpg'
'https://i.pinimg.com/originals/c9/96/c4/c996c4e51af9f58746172cd8890a4b7b.jpg'
'https://i.pinimg.com/originals/7c/9e/f4/7c9ef4286bbd77e986ac45c77510cadc.jpg'
'https://i.pinimg.com/originals/a6/c7/da/a6c7da2d8d9f4641111e3e710c421911.jpg'
'https://i.pinimg.com/originals/f3/2a/66/f32a66873a9d66ba15097a71feb27c14.jpg'
'https://i.pinimg.com/originals/62/2a/ee/622aee76fa01c819665e37f3e4230c21.jpg'
'https://i.pinimg.com/originals/c2/a9/e3/c2a9e34f5edf07f82c5380004be26f32.jpg'
'https://i.pinimg.com/originals/83/d3/60/83d360c71c10958057395cc5f19b7a3e.jpg'
'https://i.pinimg.com/originals/11/2f/42/112f422bb0635a0d6cb67c68f504e96a.jpg'
'https://i.pinimg.com/originals/10/35/34/103534341af6185a3663b4b9f4b8d5a9.jpg'
'https://i.pinimg.com/originals/97/92/db/9792db81da170616a0ee50cd4bfbca11.jpg'
'https://i.pinimg.com/originals/31/67/22/316722ae083a2b0ad8c5601c66cd67fd.jpg'
'https://i.pinimg.com/originals/62/0b/f1/620bf196d7fba816ac861450d8027213.jpg'
'https://i.pinimg.com/originals/3c/ef/85/3cef8525ce3de0eb09cbf1f798834533.jpg'
'https://i.pinimg.com/originals/e9/32/44/e9324407b22f31a2e20882bd44ec52c3.jpg'
'https://i.pinimg.com/originals/83/db/5b/83db5bda9fcc7adfd5416572615a34f3.jpg'
'https://i.pinimg.com/originals/fc/5f/52/fc5f52ece57a8e1afd6f2ab232341161.jpg'
'https://i.pinimg.com/originals/ac/5f/e0/ac5fe0e6b30fb9c97d8e22ebb4396ee5.jpg'
'https://i.pinimg.com/originals/a3/63/33/a36333e9cf84eda4c1ef42b91973ae6e.png'
'https://i.pinimg.com/originals/c0/9b/9f/c09b9f52dd3d99866bbaf0292081502e.jpg'
'https://i.pinimg.com/originals/2d/e6/53/2de653b95f9fbc25782fe960b0065527.jpg'
'https://i.pinimg.com/originals/9f/91/86/9f9186df435d7b42a03cce26594a6751.jpg'
'https://i.pinimg.com/originals/79/99/c9/7999c972cdd819f5c378acaa9a08eb3e.jpg'
'https://i.pinimg.com/originals/e9/51/0c/e9510c8c54d18ed9808505b201d534ad.jpg'
'https://i.pinimg.com/originals/4c/26/42/4c264242b910bd59283eed1c85196e70.jpg'
'https://i.pinimg.com/originals/2a/6c/c7/2a6cc7c244fdc568b4deb3e231c9008e.jpg'
'https://i.pinimg.com/originals/0d/66/00/0d6600cec067ba2281c8c3328cb40df5.jpg'
'https://i.pinimg.com/originals/09/9c/cd/099ccda9c2f379fe590a07d9df5fe385.jpg'
'https://i.pinimg.com/originals/12/5b/75/125b754dc78fe6f448aeb48f5c18dd7c.jpg'
'https://i.pinimg.com/originals/f6/d1/14/f6d11497098c174b305004aa3acdbdc7.jpg'
'https://i.pinimg.com/originals/3f/a8/e1/3fa8e1c1d1877687a352b91a5c634817.jpg'
'https://i.pinimg.com/originals/5c/c5/2d/5cc52d16dce057a876b93a3b8c831888.jpg'
'https://i.pinimg.com/originals/13/2d/ec/132dec2d8eb3c2d79c9856f34e63947b.jpg'
'https://i.pinimg.com/originals/96/96/5b/96965ba1a08f88832376974069a79336.jpg'
'https://i.pinimg.com/originals/40/a5/31/40a5317be17f0e7bcb9bad374756bd58.jpg'
'https://i.pinimg.com/originals/40/a5/31/40a5317be17f0e7bcb9bad374756bd58.jpg'
'https://i.pinimg.com/originals/69/bf/99/69bf99e462cd42f8e99212520cb13e50.jpg'
'https://i.pinimg.com/originals/4c/e4/3d/4ce43daa31fb772602f20885a529db74.jpg'
'https://i.pinimg.com/originals/d6/56/8d/d6568dfc64fc27373e7d452280c656dc.jpg'
'https://i.pinimg.com/originals/73/9f/e5/739fe51a42b835b22ba41983ec6395ae.jpg'
'https://i.pinimg.com/originals/b7/ad/53/b7ad53a2958606ae0baad726f7602b01.jpg'
'https://i.pinimg.com/originals/aa/c1/03/aac103d708ec62b677ac2a4404eb02e0.jpg'
'https://i.pinimg.com/originals/cc/27/66/cc2766bf937cbcc0efe7cd11cf76b75c.jpg'
'https://i.pinimg.com/originals/13/ca/5c/13ca5cb8f96b34d227d7af98167edb64.jpg'
'https://i.pinimg.com/originals/9a/d8/3a/9ad83a675b0cbfc08c4dd59337677802.jpg'
'https://i.pinimg.com/originals/09/e9/d7/09e9d79e70cddb20b7463ba12194094a.jpg'
'https://i.pinimg.com/originals/8f/e6/bc/8fe6bc2392d2c8f29381520fbc8a74e3.jpg'
'https://i.pinimg.com/originals/58/14/24/581424b1c21cf9ede0294119a32d8d2f.jpg'
'https://i.pinimg.com/originals/a5/ae/95/a5ae95626541c6a0d31dc4b91078955c.jpg'
'https://i.pinimg.com/originals/7c/0b/44/7c0b4413de29a514a36e01fc20792ce1.jpg']


/** Fake Reply */
global.THUMBNAIL = await (await fetch(global.thumb)).buffer()
global.judul = '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ '
global.body = `𝗧 𝗜 𝗠 𝗘 : ${wib}`


global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
//global.fla Jangan di ganti
/*⫘⫘⫘⫘ LOADING ⫘⫘⫘⫘⫘*/
global.wait = '```[ ! ] wait...```'
global.eror = '⸨Acsess Danied⸩'

/*⫘⫘⫘⫘ DOCUMENT ⫘⫘⫘⫘⫘*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

/*⫘⫘⫘⫘ FAKE SIZE ⫘⫘⫘⫘⫘*/
global.fsizedoc = '99999999999999' // 10TB
global.fpagedoc = '999' //Gausah di ganti.

/*⫘⫘⫘⫘ BIO OWNER ⫘⫘⫘⫘⫘*/
global.nameowner = 'Uzui Michelle'
global.umurowner = '20+'
global.asalowner = 'Bekasi, Jawa Barat'
global.nomorowner = 'wa.me/62887433094409'
global.pacarowner = 'Ada Iyan Yuzuki'
/*⫘⫘⫘⫘ HIASAN ⫘⫘⫘⫘⫘*/
// DEFAULT MENU
global.dmenut = '╭━•〔' //top
global.dmenub = '│‣͎۪۫' //body
global.dmenub2 = '│' //body for info cmd on Default menu
global.dmenuf = '𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊\n\n◐ Fokus ID\n◐FangzXD\n◐The.sad.boy01\n◐Kanna\n◐Nurutomo\n◐Bochilgaming\n◐Amirul\n◐Ilham\n◐Rasel\n◐Pemakai bot ini\n◐I love you\n\n© IKAWATEAM' //footer

// COMMAND MENU
global.cmenut = '╭━•〔' //top
global.cmenuh = '〕•━─' //header
global.cmenub = '│•︎' //body
global.cmenuf = '\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '│‣︎' //pembatas menu selector

global.htki = '––––––⦅' // Hiasan Titile (KIRI)
global.htka = '⦆––––––' // Hiasan Title  (KANAN)
global.lopr = '🅟' //LOGO PREMIUM ON MENU.JS
global.lolm = '🅛' //LOGO FREE ON MENU.JS
global.htjava = 'இ'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']


/*⫘⫘⫘⫘ FAKE NYA ⫘⫘⫘⫘⫘*/
global.fsizedoc = '1'.repeat(10)
global.fpagedoc = '1'.repeat(10)
global.thumbdoc = 'https://telegra.ph/file/048d468d6c5c7adab4a28.jpg'

/*⫘⫘⫘⫘ STICKER ⫘⫘⫘⫘⫘*/
global.stickpack = 'Uzui Michelle'
global.stickauth = `© Tighnari BOT\nOfficial by Whatsapp\nNomor: ${global.nomorbot}`
global.packname = 'By IkawaTeam'


global.multiplier = 38 // The higher, The harder levelup

/*⫘⫘⫘⫘ GLOBAL EMOJI ⫘⫘⫘⫘⫘*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


global.fpay = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'BuatanFokusDotId',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: 'Hay kak👋'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
}
global.fpayment = (m) => {
	let key = {
		key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'BuatanFokusDotId',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: (m !== null && m !== undefined) ? m.sender : '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: (m !== null && m !== undefined) ? m.text : 'Hay kak👋'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
	}
	return key
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
