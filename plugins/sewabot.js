let handler = async m => m.reply(`
╭─「 RENT BOT 」
│
│ > Harga :
│• 5K / Minggu
│• 20K / Bulan
│• 50K / Tahun
│
│ > Pembayaran :
│• DANA : -
│• XL : 087719424487
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^se(wa|wabot)$/i

module.exports = handler
