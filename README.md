# @lemuria/absolute-proxy

[![npm version](https://badge.fury.io/js/%40lemuria%2Fabsolute-proxy.svg)](https://npmjs.org/package/@lemuria/absolute-proxy)

`@lemuria/absolute-proxy` Assigns Styles To Position Element Absolutely On Top Of The Target One.

```sh
yarn add @lemuria/absolute-proxy
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`absoluteProxy(obj: HTMLElement, element: HTMLElement)`](#absoluteproxyobj-htmlelementelement-htmlelement-void)
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

## <code><ins>absoluteProxy</ins>(</code><sub><br/>&nbsp;&nbsp;`obj: HTMLElement,`<br/>&nbsp;&nbsp;`element: HTMLElement,`<br/></sub><code>): <i>void</i></code>

Computes the `getBoundingClientRect` and `getComputedStyle` of the target element to find out the position that should be set on the **obj** for it to appear on the same place on screen, but with absolute position (e.g., relative to `body`).

Accounts for `padding` and `border`.

```js
import positionAbsolute from '@lemuria/absolute-proxy'

const obj = document.createElement('object')
obj.type = 'image/svg+xml'
obj.data = src

const element = document.getElementById('example')

positionAbsolute(obj, element)
window.addEventListener('resize', () => {
  positionAbsolute(obj, element)
})
```
<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img width="100" src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png"
          alt="Art Deco">
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a>   2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img width="100" src="https://raw.githubusercontent.com/idiocc/cookies/master/wiki/arch4.jpg"
          alt="Tech Nation Visa">
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>