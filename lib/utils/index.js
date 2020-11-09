/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const http = require('http');
const https = require('https');
const { parse: urlParse } = require('url');
const util = require('util');
require('./socket'); // 初始化socket
const { getAgent, HTTP_REQ_FLAG } = require('./util');
const { getProxy, setProxy, removeProxy } = require('./proxy');

const { ClientRequest } = http;
const CONNECT_RE = /^\s*connect\s*$/i;

const checkMethod = (opts) => opts && CONNECT_RE.test(opts.method);

function ClientRequestProxy(uri, options, cb, isHttps) {
  if (typeof uri === 'string') {
    uri = urlParse(uri);
  }
  if (typeof options === 'function') {
    cb = options;
    options = {
      ...uri,
    };
  } else {
    options = {
      ...uri,
      ...options,
    };
  }
  options[HTTP_REQ_FLAG] = true;
  options.isSocket = 0;
  if (isHttps) {
    options._defaultAgent = https.globalAgent;
  }
  const proxy = !checkMethod(uri) && !checkMethod(options) && getProxy(options, isHttps);
  if (proxy && (!proxy.filterRequest || proxy.filterRequest(options))) {
    proxy.isHttps = isHttps;
    options.agent = getAgent(proxy, options);
  }
  if (options.headers) {
    // 清理whistle特殊请求头
    delete options.headers['x-whistle-real-host'];
    delete options.headers['x-whistle-https-request'];
    delete options.headers['x-bifrost-client-version'];
    delete options.headers['x-bifrost-forwarded-for'];
    delete options.headers.host;
  }
  ClientRequest.call(this, options, cb);
}

util.inherits(ClientRequestProxy, ClientRequest);

http.ClientRequest = ClientRequestProxy;
http.request = function (url, options, cb) {
  return new ClientRequestProxy(url, options, cb);
};
http.get = function get(url, options, cb) {
  const req = new ClientRequestProxy(url, options, cb);
  req.end();
  return req;
};

https.request = function (url, options, cb) {
  return new ClientRequestProxy(url, options, cb, true);
};
https.get = function get(url, options, cb) {
  const req = new ClientRequestProxy(url, options, cb, true);
  req.end();
  return req;
};

exports.getProxy = getProxy;
exports.setProxy = setProxy;
exports.proxy = setProxy;
exports.removeProxy = removeProxy;
