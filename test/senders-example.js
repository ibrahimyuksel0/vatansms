const VatanSms = require('../src/index');
const vatansms = new VatanSms('api_id', 'api_key');

async function main() {
    vatansms.senders();
    let response = await vatansms.run();
    console.log(response);
};

main();