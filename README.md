# nox-proxy

为 Nodejs 提供全局代理服务，可以拦截所有从 Nodejs 发出的请求，并配置自定义代理服务器

**用法：**

在项目中安装 `npm i nox-proxy`

修改启动代码

```js
require('nox-proxy'); // 必须要在最前面
// you code...
const Koa = require('koa');
```
