<div align="center">
        <h1><b>VatanSMS.net</b></h1>
	<p>
		<a href="https://www.npmjs.com/package/vatansms"><img src="https://img.shields.io/npm/v/vatansms.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/vatansms"><img src="https://img.shields.io/npm/dt/vatansms.svg?maxAge=3600" alt="npm downloads" /></a>
	</p>
</div>

## 1. Hakkında

VatanSMS.net, Türkiye'nin önde SMS servis sağlayıcısıdır. Bu modül VatanSMS API'ını kullanarak Node.js ile SMS göndermenizi sağlayan, kullanımı kolay bir modüldür.

- Tek mesajı farklı telefonlara gönderin.
- Her telefon için farklı mesajlar belirleyin.
- SMS gönderici isimlerinizi kontrol edin.
- API kullanıcı bilgilerinizi kontrol edin.

## 2. Kurulum

**Node.js 8.0.0 veya daha üstü gerekir.**

```sh-session
npm install vatansms
yarn add vatansms
pnpm add vatansms
```

### *2.1. Zorunlu Paketler (Otomatik Kurulum)*

- [axios](https://www.npmjs.com/package/axios) api post get işlemleri için kullanılır (`npm install axios`)

## 3. Örnekler

Önceklikle **vatansms** kurun:

```sh-session
npm install vatansms
yarn add vatansms
pnpm add vatansms
```

### *3.1. VatanSMS İçeri Aktarma ve Ayarları Yapmak*

```js
const VatanSms = require('vatansms');
const vatansms = new VatanSms('api_id', 'api_key', 'sender');
```

### *3.2. Tek Mesajı Farklı Telefonlara Göndermek*

```js
async function main() {
    let phones = ['5xxxxxxxxx']
    vatansms.oneton('turkce', 'Bu bir test mesajıdır', phones);
    let response = await vatansms.run();
    console.log(response);
};

main();
```

### *3.3. Farklı Telefonlara Farklı Mesajlar Göndermek*

```js
async function main() {
    let phones = [
        {
            "message": "Bu bir test mesajıdır.",
            "phone": "5xxxxxxxxx",
        },
    ];
    vatansms.nton('turkce', phones);
    let response = await vatansms.run();
    console.log(response);
};

main();
```

Diğer Örnekler: Diğer örneklere göz atmak için [github](https://github.com/ibrahimyuksel0/vatansms) sayfasını ziyaret edebilirsiniz.

## 4. Linkler

- [VatanSms](https://vatansms.net/)
- [GitHub](https://github.com/ibrahimyuksel0/vatansms)
- [npm](https://www.npmjs.com/package/vatansms)

## 5. Sponsorlar

[VOBHU](https://www.vobhu.com) - Teknoloji, Haber, Finans ve Blog Platformu

## 6. Yardım ve Öneriler

Herhangi bir yerde problem yaşamanız halinde bize ulaşınız. Bize ulaşmak için [issues](https://github.com/ibrahimyuksel0/vatansms/issues) sayfasını kullanabilirsiniz.