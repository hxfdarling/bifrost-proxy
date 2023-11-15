const { env } = process;

function getCommonHeaders() {
  const headers = {
    // eslint-disable-next-line global-require
    'x-bifrost-proxy-version': require('../package.json').version,
  };

  return headers;
}

function setIpAndPortProxy() {
  const headers = getCommonHeaders();
  // eslint-disable-next-line global-require
  const utils = require('./utils');
  const host = env.BIFROST_HOST || '127.0.0.1';
  const port = env.BIFROST_PORT || 8899;
  console.log('------bifrost proxy is working----------');
  console.log('host:port', `${host}:${port}`);
  console.log('headers', headers);
  console.log('----------------------------');
  utils.setProxy({
    host,
    port,
    headers,
  });
}

if (env.BIFROST === 'true') {
  setIpAndPortProxy();
}

module.exports = {
  setIpAndPortProxy,
};
