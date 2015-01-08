# Beautifile

Beautify js, html and css.

## Install

```
npm i beautifile --save
```

## How to use?

```js
var beautifile  = require('beautifile');

beautife('ugli.js', function(error, data) {
    if (error)
        console.error(error.message);
    else
        console.log(data);
});
```

## License

MIT
