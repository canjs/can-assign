/*can-assign@1.1.1#can-assign*/
var namespace = require('can-namespace');
module.exports = namespace.assign = function (d, s) {
    for (var prop in s) {
        d[prop] = s[prop];
    }
    return d;
};