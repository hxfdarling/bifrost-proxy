const http = require('http');
const https = require('https');
const http2 = require('http2');
const net = require('net');

const { setProxy } = require('./utils');

const PROXY_OPTIONS = {
  host: '127.0.0.1',
  port: 8899,
  headers: {
    'x-test-header': 1,
  },
};

describe('test suites', () => {
  it('http2', async (done) => {
    // 设置固定代理
    setProxy(PROXY_OPTIONS);
    const client = http2.connect('https://act.snssdk.com:443');
    client.on('error', console.error);
    const req = client.request({
      ':path': '/',
    });

    req.on('response', (headers) => {
      console.log(Object.keys(headers).map((name) => `${name}: ${headers[name]}`));
      done();
    });

    req.setEncoding('utf8');
    req.on('end', () => {
      client.close();
    });
    req.end();
  });
  it('proxy http', async (done) => {
    // 设置固定代理
    setProxy(PROXY_OPTIONS);
    const httpClient = http.request('http://act.snssdk.com', (res) => {
      console.log(res.statusCode);
      done();
    });
    httpClient.on('error', console.error);
    httpClient.end();
    httpClient.on('close', done);
  });
  it('proxy https', async (done) => {
    // 设置固定代理
    setProxy(PROXY_OPTIONS);
    const httpsClient = https.request('https://act.snssdk.com', (res) => {
      console.log(res.statusCode);
      done();
    });
    httpsClient.on('error', console.error);
    httpsClient.end();
    httpsClient.on('close', done);
  });
  it('socket', async (done) => {
    setProxy(PROXY_OPTIONS);

    const socket = net.connect({
      host: 'act.snssdk.com',
      port: 443,
    });
    socket.write(['GET / HTTP/1.1', 'Host: act.snssdk.com', '\r\n'].join('\r\n'));
    socket.on('error', console.error);
    socket.on('data', (data) => {
      console.log(data.toString());
      done();
    });
  });
});
