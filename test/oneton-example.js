const VatanSms = require('../src/index');
const vatansms = new VatanSms('api_id', 'api_key', 'sender');

async function main() {
    let phones = ['5xxxxxxxxx']
    vatansms.oneton('turkce', 'Bu bir test mesajıdır', phones);
    let response = await vatansms.run();
    console.log(response);
};

main();