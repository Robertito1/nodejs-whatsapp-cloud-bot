const axios = require('axios').default;

class Whatsapp {
    constructor(WA_ID, WA_TOKEN) {
        //user instance
        this.WA_ID = WA_ID;
        this.WA_TOKEN = WA_TOKEN;
        this.base_url = `https://graph.facebook.com/v12.0/${this.WA_ID}`;
        this.message_url = `${this.base_url}/messages`;
    }
    a=console.log(this.message_url,this.WA_ID)
    //method to send text message
    send_text = (phone_num, text, url_preview = true) => {
        const data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": phone_num,
            "recipient_type": "individual",
            "type": "text",
            "text": {
                "body": text,
                "preview_url": url_preview
            }
        })
        return axios_request(this.WA_TOKEN, this.message_url, data)
    }

    // send image message
    sendImage = () => { }

    // send audio message
    sendAudio = () => { }

    // send video message
    sendVideo = () => { }

    // send location
    sendLocation = () => { }

    // send contact
    sendContact = () => { }

    // send interactive message
    sendInteractive = () => { }


}

const axios_request = (WA_TOKEN, target_url, data) => {
    //let res = 'r';
    return axios({
        method: 'post',
        url: target_url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${WA_TOKEN}`
        },
        data: data
    })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
        })
}



module.exports = { Whatsapp: Whatsapp };