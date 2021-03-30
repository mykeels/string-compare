# String Compare

Used to compare two strings to get the degree of similarity between 0 and 1

## Installation

```bash
    npm i -s string-compare
```

or

```bash
    yarn add string-compare
```

## Usage

```js
    const { compare } = require('string-compare');

    compare('String 1', 'String 2'); // 0.8
```

or

```js
    import compare from 'string-compare';

    compare('Hello World', 'helo'); //0.4
    compare('Hello World', 'Helo'); //0.5
    compare('Hello World', 'word'); //0.4
    compare('Hello World', 'Word'); //0.5
```