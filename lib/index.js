/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable global-require */
const { env } = process;
const isPort = (port) => typeof port === 'number' || typeof port === 'string';

if (env.NOX === 'true') {
  const utils = require('./utils');
  const net = require('net');
  const host = env.NOX_HOST || '127.0.0.1';
  const port = env.NOX_PORT || 8899;
  const headers = {
    'x-nox-proxy-version': require('../package.json').version,
  };
  if (env.NOX_ENV) {
    headers['x-whistle-nox-env'] = env.NOX_ENV;
  }
  // 如果是本地开发，则不添加ID
  if (host !== '127.0.0.1') {
    const uuidv4 = require('uuid/v4');
    // 设置nox客户端ID，因为部署在同一个环境所以本机IP是一样的，需要用额外的请求头设置
    headers['x-whistle-nox-client-id'] = env.NOX_CLIENT_ID || uuidv4();
  }
  console.log('------nox-proxy----------');
  console.log('host,port', host, port);
  console.log('headers', headers);
  console.log('----------------------------');
  utils.proxy({
    host,
    port,
    headers,
  });
  // 覆盖listen方法用于docker启动时替换端口
  const originListen = net.Server.prototype.listen;
  net.Server.prototype.listen = function (...args) {
    const { PORT } = env;
    if (PORT) {
      if (isPort(args[0])) {
        // (port[,callback])
        args[0] = Number(PORT);
      } else if (isPort(args[0].port)) {
        // (options)
        args[0].port = Number(PORT);
      }
    }
    return originListen.call(this, ...args);
  };
}
