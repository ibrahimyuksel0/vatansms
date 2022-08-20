const VatanSms = require('../src/index');
const vatansms = new VatanSms('api_id', 'api_key', 'sender');

async function main() {
    let phones = [
        {
            "message": "Bu bir test mesajıdır",
            "phone": "5xxxxxxxxx",
        },
    ];
    vatansms.nton('turkce', phones);
    let response = await vatansms.run();
    console.log(response);
};

main();