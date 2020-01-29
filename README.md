# bifrost-proxy

为 Nodejs 提供全局代理服务，可以拦截所有从 Nodejs 发出的请求，并配置自定义代理服务器

**用法：**

在项目中安装 `npm i bifrost-proxy`

修改启动代码

```js
// 设置代理地址和端口
process.env.BIFROST_HOST = '127.0.0.1';
process.env.BIFROST_PORT = 8899;

require('bifrost-proxy'); // 必须要在业务代码前面
// you code...
const Koa = require('koa');
// you code...
```
