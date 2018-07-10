/*can-assign@1.2.0#can-assign*/
'use strict';
var namespace = require('can-namespace');
module.exports = namespace.assign = function (d, s) {
    for (var prop in s) {
        d[prop] = s[prop];
    }
    return d;
};