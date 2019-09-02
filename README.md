# @lemuria/absolute-proxy

[![npm version](https://badge.fury.io/js/@lemuria/absolute-proxy.svg)](https://npmjs.org/package/@lemuria/absolute-proxy)

`@lemuria/absolute-proxy` is Assigns Styles To Position Element Absolutely On Top Of The Target One.

```sh
yarn add @lemuria/absolute-proxy
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`absoluteProxy(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@lemuria/absolute-proxy.Config`](#type-_@lemuria/absolute-proxyconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import absoluteProxy from '@lemuria/absolute-proxy'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>absoluteProxy</ins>(</code><sub><br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/></sub><code>): <i>void</i></code>

Call this function to get the result you want.

<strong><a name="type-_@lemuria/absolute-proxyconfig">`_@lemuria/absolute-proxy.Config`</a></strong>: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import absoluteProxy from '@lemuria/absolute-proxy'

(async () => {
  const res = await absoluteProxy({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright

(c) [Art Deco][1] 2019

[1]: https://artd.eco

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>