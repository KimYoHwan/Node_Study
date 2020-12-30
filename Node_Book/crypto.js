const crypto = require('crypto');
console.log(crypto.createHash('sha512').update('암호화대상').digest('base64'));
