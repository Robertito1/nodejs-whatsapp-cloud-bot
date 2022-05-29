const express = require('express')
require('dotenv').config();

const axios = require('axios').default;
const data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": "2349013175953",
    "recipient_type": "individual",
    "type": "interactive",
    "interactive": {
        "type": "button",
        "header": {"type": "text", "text": "Okay ohh"},
        "body": {
            "text": "BUTTON_TEXT"
        },
        "action": {
            "buttons": [
                {
                    "type": "reply",
                    "reply": {
                        "id": "UNIQUE_BUTTON_ID_1",
                        "title": "TItle",
                    }
                },
                {
                    "type": "reply",
                    "reply": {
                        "id": "GUuu",
                        "title": "Guuy"
                    }
                }
            ]
        }
    }
})

const sendMeMessage = () => {
    axios({
        method: 'post',
        url: `https://graph.facebook.com/v12.0/${process.env.ID}/messages/`,
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${process.env.WA_TOKEN}`
        },
        data: data
    })
    .then((response) => {
    console.log(response);
    })
    .catch((error) => {
    console.log({token: process.env.WA_TOKEN})
    console.log(error.response);
    })
}

const app = express();

app.get('/', function (req, res) {
  res.send('World')
})
sendMeMessage();
app.listen(3000)
