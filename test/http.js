process.env.BIFROST = 'true';
process.env.BIFROST_PORT = '8899';

require('./lib/index');

const http = require('http');

http
  .get('http://common-consul-boe.bytedance.net:2280/', (res) => {
    res.on('data', (data) => {
      console.log('http success');
    });
  })
  .on('error', (err) => {
    console.error('http failed', err);
  });
