# can-assign

[![Build Status](https://travis-ci.org/canjs/can-assign.png?branch=master)](https://travis-ci.org/canjs/can-assign)

A simplified version of Object.assign, which only accepts a single source argument.

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'can-assign';
```

### CommonJS use

Use `require` to load `can-assign` and everything else
needed to create a template that uses `can-assign`:

```js
var plugin = require("can-assign");
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/can-assign/dist/global/can-assign.js'></script>
```
