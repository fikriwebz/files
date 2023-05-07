let ownerMsg = "Bot off sementara ada update dikit!"; //tulis pesan disini
let handler = async m => m.reply(`*[FikriBot | Broadcast Group]*\nPesan: ${ownerMsg}\nDari: @⁨JSIDHWIDHWUDHKWXNSIDHUWYDU⁩ (Owner Bot)\n\n~FikriBot` .trim()) 
handler.help = ['pengumuman']
handler.tags = ['info']
handler.command = /^botmsg/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

module.exports = handler
