/* eslint-disable @typescript-eslint/no-explicit-any */
import { Server } from 'net';
if (process.env.NOHOST === 'true') {
  const host = process.env.NOHOST_HOST || '127.0.0.1';
  const port = process.env.NOHOST_PORT || 8899;
  const headers: any = {};
  if (process.env.NOHOST_ENV) {
    headers['whistle_nohost_env'] = process.env.NOHOST_ENV;
  }
  console.log('----');
  require('lack').proxy({
    host,
    port,
    headers,
  });
  // 覆盖listen方法用于docker启动时替换端口
  const originListen = Server.prototype.listen;
  const isPort = (port: string | number) => typeof port === 'number' || typeof port === 'string';
  Server.prototype.listen = function(...args: any[]) {
    const { PORT } = process.env;
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