let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• Yt Agungx
┃
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS
┃• FFmpeg
┃• ImageMagick
┃
┃> Thanks To :
┃• Nurutomo
┃• Zevano
┃• RC047/Kuhong
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *XL:* [087719424487]
┣➥ *Dana:* [-]
┣➥ *Gopay:* [-]
┣➥ *LinkAja:* [-]
┃ 「 *Chat OWNER* 」
┃ > *INGIN DOANSI ? https://wa.me/6287719424487*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sachi-Botzzえ TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
