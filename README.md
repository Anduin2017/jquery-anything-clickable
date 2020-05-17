# jquery-anything-clickable

A jQuery plugin which makes anything clickable easily.

[![npm](https://img.shields.io/npm/v/jquery-anything-clickable.svg?style=flat)](https://www.npmjs.com/package/jquery-anything-clickable)

## How to install

```bash
$ npm install jquery-anything-clickable
```

And add your reference:

```html
<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/jquery-anything-clickable/src/jquery-anything-clickable.js"></script>
```

Or in es6

```js
import { Clickable } from 'jquery-anything-clickable';
```

## How to use

Create an element.

```html
<p>

</p>
```

And change it like this.

```html
<p data-href="https://www.aiursoft.com">
  
</p>
```

Init it:

```javascript
new Clickable('data-href');
```

And when it starts, just click it!

You can even add `data-href` to

```html
<hr>
<img>
<tr>
<td>
<video>
<div>

...

And anything!
```
