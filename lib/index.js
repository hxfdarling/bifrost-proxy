const { env } = process;

function setIpAndPortProxy() {
  // eslint-disable-next-line global-require
  const utils = require('./utils');
  const host = env.BIFROST_HOST || '127.0.0.1';
  const port = env.BIFROST_PORT || 8899;
  console.log('------bifrost proxy is working----------');
  console.log('host:port', `${host}:${port}`);
  console.log('----------------------------');
  utils.setProxy({
    host,
    port,
  });
}

if (env.BIFROST === 'true') {
  setIpAndPortProxy();
}

module.exports = {
  setIpAndPortProxy,
};
