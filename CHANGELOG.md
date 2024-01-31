# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.4.0](https://github.com/hxfdarling/bifrost-proxy/compare/v1.2.1...v1.4.0) (2024-01-31)

### Features

- 支持 socke 代理 ([2b4e8fa](https://github.com/hxfdarling/bifrost-proxy/commit/2b4e8fab1434308c0b4bd7ff553504a146b24a67))

### Bug Fixes

- 代理 http 到 charles 失败的问题 ([035bd14](https://github.com/hxfdarling/bifrost-proxy/commit/035bd14522a0d8e7bd20f2e2e896dbddac6828f2))
- 修复 fetch 请求不支持端口情况 ([b4d9feb](https://github.com/hxfdarling/bifrost-proxy/commit/b4d9febdd5d9f69cbd46d7f427aaaede5f237a0d))
- 修复 http 请求中,默认 header 有 host,优先使用了 header 中的 host ([f37c71e](https://github.com/hxfdarling/bifrost-proxy/commit/f37c71ec3b159854a409478392997f75fd7e2a72))
- 修复在动态分配端口时可能存在冲突 ([fef022c](https://github.com/hxfdarling/bifrost-proxy/commit/fef022ccacbd9b5d06bbcd2a14dbb99003fd895a))

### [1.3.1](https://github.com/hxfdarling/bifrost-proxy/compare/v1.3.0...v1.3.1) (2023-12-19)

## [1.3.0](https://github.com/hxfdarling/bifrost-proxy/compare/v1.2.1...v1.3.0) (2023-12-19)

### Features

- 支持 socke 代理 ([2b4e8fa](https://github.com/hxfdarling/bifrost-proxy/commit/2b4e8fab1434308c0b4bd7ff553504a146b24a67))

### Bug Fixes

- 代理 http 到 charles 失败的问题 ([035bd14](https://github.com/hxfdarling/bifrost-proxy/commit/035bd14522a0d8e7bd20f2e2e896dbddac6828f2))
- 修复在动态分配端口时可能存在冲突 ([fef022c](https://github.com/hxfdarling/bifrost-proxy/commit/fef022ccacbd9b5d06bbcd2a14dbb99003fd895a))
- 修复 http 请求中,默认 header 有 host,优先使用了 header 中的 host ([f37c71e](https://github.com/hxfdarling/bifrost-proxy/commit/f37c71ec3b159854a409478392997f75fd7e2a72))

### [1.2.3](https://github.com/hxfdarling/bifrost-proxy/compare/v1.2.1...v1.2.3) (2020-09-24)

### Bug Fixes

- 修复在动态分配端口时可能存在冲突 ([fef022c](https://github.com/hxfdarling/bifrost-proxy/commit/fef022ccacbd9b5d06bbcd2a14dbb99003fd895a))
- 修复 http 请求中,默认 header 有 host,优先使用了 header 中的 host ([f37c71e](https://github.com/hxfdarling/bifrost-proxy/commit/f37c71ec3b159854a409478392997f75fd7e2a72))

### [1.2.2](https://github.com/hxfdarling/bifrost-proxy/compare/v1.2.1...v1.2.2) (2020-03-16)

### Bug Fixes

- 修复在动态分配端口时可能存在冲突 ([d7b9f7e](https://github.com/hxfdarling/bifrost-proxy/commit/d7b9f7eea6cdf9bafa7e1a5786cb3a1ba2cc51ba))

### [1.2.1](https://github.com/hxfdarling/bifrost-proxy/compare/v1.2.0...v1.2.1) (2020-02-25)

### Bug Fixes

- 基于环境变量的端口自定添加触发逻辑 ([b66ca24](https://github.com/hxfdarling/bifrost-proxy/commit/b66ca249566a762ed330405c2785023b3b05df6b))

## [1.2.0](https://github.com/hxfdarling/bifrost-proxy/compare/v1.1.6...v1.2.0) (2019-11-17)

### Features

- 添加代理请求头标示 ([42163df](https://github.com/hxfdarling/bifrost-proxy/commit/42163df))

### [1.1.6](https://github.com/hxfdarling/bifrost-proxy/compare/v1.1.3...v1.1.6) (2019-10-31)

### Bug Fixes

- 修复 x-bifrost-forwarded-for 没有删除,造成重复添加的问题 ([997fd03](https://github.com/hxfdarling/bifrost-proxy/commit/997fd03))
- 移除多余的日志 ([37d92d6](https://github.com/hxfdarling/bifrost-proxy/commit/37d92d6))
- 优化 bifrost 请求转发，优先使用原始请求 headers ([a2d9c0c](https://github.com/hxfdarling/bifrost-proxy/commit/a2d9c0c))

### [1.1.5](https://github.com/hxfdarling/bifrost-proxy/compare/v1.1.4...v1.1.5) (2019-10-22)

### Bug Fixes

- 移除多余的日志 ([37d92d6](https://github.com/hxfdarling/bifrost-proxy/commit/37d92d6))

### [1.1.4](https://github.com/hxfdarling/bifrost-proxy/compare/v1.1.3...v1.1.4) (2019-09-23)

### Bug Fixes

- 优化 bifrost 请求转发，优先使用原始请求 headers ([a2d9c0c](https://github.com/hxfdarling/bifrost-proxy/commit/a2d9c0c))

### [1.1.3](https://github.com/hxfdarling/bifrost-proxy/compare/v1.1.2...v1.1.3) (2019-09-10)

### [1.1.2](https://github.com/hxfdarling/bifrost-proxy/compare/v1.1.1...v1.1.2) (2019-09-10)

### [1.1.1](https://github.com/hxfdarling/bifrost-proxy/compare/v1.1.0...v1.1.1) (2019-09-10)

### Bug Fixes

- 修复 whistle 特殊头，造成请求二次到达 whistle 出现解析规则错误 ([a44c820](https://github.com/hxfdarling/bifrost-proxy/commit/a44c820))

## [1.1.0](https://github.com/hxfdarling/bifrost-proxy/compare/v1.0.3...v1.1.0) (2019-08-26)

### Bug Fixes

- 修复本机代理没有正确环境问题 ([3c3565d](https://github.com/hxfdarling/bifrost-proxy/commit/3c3565d))

### Features

- rename ([7e70a5c](https://github.com/hxfdarling/bifrost-proxy/commit/7e70a5c))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
