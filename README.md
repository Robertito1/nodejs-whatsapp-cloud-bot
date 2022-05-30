# Nodejs-whatsapp-bot

A NodeJs library that conneects to the new Whatsapp cloud API.

To use, run 
```
npm install nodejs-whatsapp-bot
```
or
```
yarn add nodejs-whatsapp-bot
```

## Sample usage
### Send a Text message

```
const { Whatsapp } = require('./functions/whatsapp');

const bot = new Whatsapp(WHATSAPP_ID, WHATSAPP_TOKEN);
const target_phone_number = "123xxxx";

bot.send_text(target_phone_number, "Hello.....\nTesting text messaging feature")
```
