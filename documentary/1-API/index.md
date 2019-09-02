## API

The package is available by importing its default function:

```js
import absoluteProxy from '@lemuria/absolute-proxy'
```

%~%

```## absoluteProxy
[
  ["obj", "HTMLElement"],
  ["element", "HTMLElement"]
]
```

Computes the `getBoundingClientRect` and `getComputedStyle` of the target element to find out the position that should be set on the **obj** for it to appear on the same place on screen, but with absolute position (e.g., relative to `body`).

Accounts for `padding` and `border`.

<!-- %TYPEDEF types/index.xml% -->

%EXAMPLE: example, ../src => @lemuria/absolute-proxy%
<!-- %FORK example% -->

%~%