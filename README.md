# String Compare

Used to compare two strings to get the degree of similarity between 0 and 1

## Usage

```bash
    npm i -s string-compare
```

```js
    require('string-compare')

    String.compare('String 1', 'String 2')
```

or

```js
    const compareStrings = require('string-compare')

    compareStrings('Hello World', 'helo') //0.4
    compareStrings('Hello World', 'Helo') //0.5
    compareStrings('Hello World', 'word') //0.4
    compareStrings('Hello World', 'Word') //0.5
```