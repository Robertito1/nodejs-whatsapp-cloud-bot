require('dotenv').config();
const { Whatsapp } = require('./whatsapp')

const bot = new Whatsapp(process.env.WA_ID, process.env.WA_TOKEN)

bot.send_text(process.env.TEST_PHONE, "HI.....\nTesting the bot now")
