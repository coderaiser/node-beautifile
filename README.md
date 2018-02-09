# Beautifile

Beautify js, html and css.

## Install

```
npm i beautifile --save
```

## Options

Options of `beautifile` can be find in [json/beautify.json](json/beautify.json "beautify.json"),
and could be overriden by `~/.beautify.json`.

## How to use?

```js
const beautifile  = require('beautifile');

beautife('ugly.js', (error, data) => {
    if (error)
        return console.error(error.message);
    
    console.log(data);
});
```

## License

MIT

