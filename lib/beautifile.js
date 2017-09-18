'use strict';

var fs = require('fs');
var path = require('path');

var tryCatch = require('try-catch');
var readjson = require('readjson');
var beautify = require('js-beautify');

var DIR = __dirname + '/../';
var HOME = require('os-homedir')();

var EXT = ['js', 'css', 'html'];

var name = 'beautify.json';

var ConfigPath = path.join(DIR, 'json/' + name);
var ConfigHome = path.join(HOME, '.' + name);

var config =
    readjson.sync.try(ConfigHome) ||
    readjson.sync.try(ConfigPath) || {};

module.exports  = function(name, callback) {
    var is, ext;
    
    if (/(rc|\.json)$/.test(name))
        ext = 'js';
    else
        ext     = path
            .extname(name)
            .slice(1);
    
    is      = ~EXT.indexOf(ext);
    
    if (!is)
        return callback(erorMsg(ext));
        
    fs.readFile(name, 'utf8', function(error, data) {
        var result;
        
        if (!error)
            error = tryCatch(function() {
                result = beautify[ext](data, config);
            });
        
        callback(error, result);
    });
};

function erorMsg(ext) {
    var error = Error('File type "' + ext + '" not supported.');
    
    return error;
}

