/**
 * @module {function} can-assign can-assign
 * @parent can-js-utilities
 * @collection can-infrastructure
 * @signature `assign(target, source)`
 *
 * A simplified version of [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).
 *
 * ```js
 * var assign = require("can-assign");
 *
 * var obj = {};
 *
 * assign(obj, {
 *   foo: "bar"
 * });
 *
 * console.log(obj.foo); // -> "bar"
 * ```
 *
 * @param {Object} target The destination object. This object's properties will be mutated based on the object provided as `source`.
 * @param {Array} sources The source objects whose own properties will be applied to `target`.
 *
 * @return {Object} Returns the `target` argument.
 */

module.exports = function(d) {
	var sources = Array.prototype.slice.call(arguments, 1);
	var s = sources.shift();

	while(s) {
		for (var prop in s) {
			d[prop] = s[prop];
		}

		s = sources.shift();
	}

	return d;
};
