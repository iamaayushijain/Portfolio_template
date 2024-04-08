# rotate-array

Rotates the elements of an array in place. Supports rotation in both directions and automatically wraps rotations which are larger than the input array size.

[![Build status](https://travis-ci.org/CMTegner/rotate-array.svg)](http://travis-ci.org/CMTegner/rotate-array) [![devDependency status](https://david-dm.org/CMTegner/rotate-array/dev-status.svg)](https://david-dm.org/CMTegner/rotate-array#info=devDependencies) [![NPM version](https://badge.fury.io/js/rotate-array.svg)](https://npmjs.org/package/rotate-array)

[![Browser support](https://ci.testling.com/CMTegner/rotate-array.png)](https://ci.testling.com/CMTegner/rotate-array)

## Installation

```bash
npm i rotate-array
```

### Alternatives
For usage via AMD / `<script>`, download a UMD bundle from [wzrd.in](http://wzrd.in/standalone/rotate-array@latest).

## Usage

```javascript
var rotate = require('rotate-array');
```

## rotate(array, num)

Rotates the array `num` places to the left, i.e. it shifts `num` items out of the array and pushes them back on the end. The reverse is done when `num` is negative. In addition, `rotate` automatically wraps rotations which are larger than `array.length`.

Examples:

```js
var beatles = ['paul', 'john', 'ringo', 'george'];
rotate(beatles, 2);
console.log(beatles); // [ 'ringo', 'george', 'paul', 'john' ]
```

```js
var beatles = ['paul', 'john', 'ringo', 'george'];
rotate(beatles, -3);
console.log(beatles); // [ 'john', 'ringo', 'george', 'paul' ]
```

```js
var beatles = ['paul', 'john', 'ringo', 'george'];
rotate(beatles, 42);
console.log(beatles); // [ 'ringo', 'george', 'paul', 'john' ]
```

## rotate.all(array)

Returns all rotations for the given array. It does not modify the passed in array.

Example:

```js
var beatles = ['paul', 'john', 'ringo', 'george'];
console.log(rotate.all(beatles));
// [ [ 'paul', 'john', 'ringo', 'george' ],
//   [ 'john', 'ringo', 'george', 'paul' ],
//   [ 'ringo', 'george', 'paul', 'john' ],
//   [ 'george', 'paul', 'john', 'ringo' ] ]
```
