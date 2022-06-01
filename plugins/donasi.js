let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Shopee:* [Tidak Tersedia]
┣➥ *Xl:* [087719424487]
┣➥ *Dana:* [Tidak Tersedia]
┣➥ *Saweria:* [Tidak Tersedia]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6287719424487*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
