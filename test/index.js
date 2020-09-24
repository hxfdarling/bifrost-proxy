process.env.BIFROST = true;
require('../lib/index');
const fetch = require('node-fetch');

fetch('https://act.snssdk.com/test/', {
  headers: {
    // host: '127.0.0.1:8080',
  },
}).then(console.log);
