'use strict';

const fs = require('fs');
const path = require('path');

const tryCatch = require('try-catch');
const readjson = require('readjson');
const beautify = require('js-beautify');

const DIR = __dirname + '/../';
const HOME = require('os').homedir();

const EXT = ['js', 'css', 'html'];

const name = 'beautify.json';

const ConfigPath = path.join(DIR, 'json/' + name);
const ConfigHome = path.join(HOME, '.' + name);

const config =
    readjson.sync.try(ConfigHome) ||
    readjson.sync.try(ConfigPath) || {};

module.exports  = (name, callback) => {
    const ext = getExt(name);
    const is = ~EXT.indexOf(ext);
    
    if (!is)
        return callback(erorMsg(ext));
     
    fs.readFile(name, 'utf8', (error, data) => {
        if (!error) {
            const result = tryCatch(beautify[ext], data, config);
            
            error = result[0];
            data = result[1];
        }
        
        callback(error, data);
    });
};

function getExt(name) {
    if (/(rc|\.json)$/.test(name))
        return 'js';
    
    return path
        .extname(name)
        .slice(1);
}

function erorMsg(ext) {
    return Error(`File type "${ext}" not supported.`);
}

