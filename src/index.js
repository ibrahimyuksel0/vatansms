process.env.api_url = 'https://api.vatansms.net/';
process.env.api_method = 'post';

const axios = require('axios');

const oneton = require('./lib/oneton');
const nton = require('./lib/nton');
const senders = require('./lib/senders');
const userInfo = require('./lib/user-info');

class VatanSMS {
    constructor(api_id, api_key, sender) {
        this.settings = {
            api_id: api_id,
            api_key: api_key,
            sender: sender
        };
        this.config = {};
    }

    oneton(message_type, message, phones) {
        this.config = oneton(message_type, message, phones, this.settings);
    }

    nton(message_type, phones) {
        this.config = nton(message_type, phones, this.settings);
    }

    senders() {
        this.config = senders(this.settings);
    }

    userInfo() {
        this.config = userInfo(this.settings);
    }

    async run(config) {
        try {
            let response = await axios(this.config);
            return { status: 'success', data: response.data };
        } catch (error) {
            return { status: 'error', data: error.response.data };
        };
    }

};

module.exports = VatanSMS;