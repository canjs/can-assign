/*can-assign@1.0.1#can-assign*/
define(function (require, exports, module) {
    module.exports = function (d) {
        var sources = Array.prototype.slice.call(arguments, 1);
        var s = sources.shift();
        while (s) {
            for (var prop in s) {
                d[prop] = s[prop];
            }
            s = sources.shift();
        }
        return d;
    };
});