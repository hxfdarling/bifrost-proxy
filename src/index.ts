/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */

const { env } = process;

if (env.NOHOST === 'true') {
  const utils = require('./utils');
  const net = require('net');
  const host = env.NOHOST_HOST || '127.0.0.1';
  const port = env.NOHOST_PORT || 8899;
  const headers: any = {};
  if (env.NOHOST_ENV) {
    headers['x-whistle-nohost-env'] = env.NOHOST_ENV;
  }
  // 如果是本地开发，则不添加ID
  if (host !== '127.0.0.1') {
    const uuidv4 = require('uuid/v4');
    // 设置nohost客户端ID，因为部署在同一个环境所以本机IP是一样的，需要用额外的请求头设置
    headers['x-whistle-nohost-client-id'] = env.NOHOST_CLIENT_ID || uuidv4();
  }
  console.log('------nohost-proxy----------');
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
  const isPort = (port: string | number) => typeof port === 'number' || typeof port === 'string';
  net.Server.prototype.listen = function(...args: any[]) {
    const { PORT } = env;
    if (PORT) {
      if (isPort(args[0])) {
        //(port[,callback])
        args[0] = Number(PORT);
      } else if (isPort(args[0].port)) {
        //(options)
        args[0].port = Number(PORT);
      }
    }
    return originListen.call(this, ...args);
  };
}
