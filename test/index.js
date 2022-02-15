process.env.BIFROST = true;
require('../lib/index');
const fetch = require('node-fetch');
const WebSocket = require('ws');

fetch('https://act.snssdk.com/test/', {
  headers: {
    // host: '127.0.0.1:8080',
  },
}).then((r) => console.log(`status:${r.status}`));

const ws = new WebSocket('ws://121.40.165.18:8800');
ws.onopen = function () {
  console.log('连接服务器成功');
  // 向服务器发送消息
  ws.send('what`s your name?');
};
ws.onclose = function () {
  console.log('服务器关闭');
};
ws.onerror = function () {
  console.log('连接出错');
};
// 接收服务器的消息
ws.onmessage = function (e) {
  const message = `message:${e.data}`;
  console.log(message);
};
