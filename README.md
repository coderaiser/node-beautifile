# Beautifile [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

[NPMIMGURL]:                https://img.shields.io/npm/v/beautifile.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/node-beautifile/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/gemnasium/coderaiser/node-beautifile.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/beautifile "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/node-beautifile  "Build Status"
[DependencyStatusURL]:      https://gemnasium.com/coderaiser/node-beautifile "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

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

