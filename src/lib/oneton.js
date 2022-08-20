const oneton = (message_type, message, phones, settings) => {
    if(!message_type) throw new Error('message_type is required.');
    if(!message) throw new Error('message is required.');
    if(!phones) throw new Error('phones is required.');
    if(!settings) throw new Error('settings is required.');

    let data = JSON.stringify({
        api_id: settings.api_id,
        api_key: settings.api_key,
        sender: settings.sender,
        message_type: message_type,
        message: message,
        phones: phones
    });

    let config = {
        method: process.env.api_method,
        url: process.env.api_url + 'api/v1/1toN',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };

    return config;
};

module.exports = oneton;