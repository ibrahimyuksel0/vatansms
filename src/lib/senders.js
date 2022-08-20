const senders = (settings) => {
    if(!settings) throw new Error('settings is required.');

    let data = JSON.stringify({
        api_id: settings.api_id,
        api_key: settings.api_key
    });

    let config = {
        method: process.env.api_method,
        url: process.env.api_url + 'api/v1/senders',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };

    return config;
};

module.exports = senders;