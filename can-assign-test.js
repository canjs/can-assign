var assign = require('./can-assign');
var QUnit = require('steal-qunit');

QUnit.module("can-assign");

QUnit.test("Assign all properties to an object", function(){
	var a = {a: 1, b: 2, d: 3};
	var b = {a: 1, b: 3, c: 2};
	var expected =  {a: 1, b: 3, c: 2, d: 3};
	var actual = assign(a, b);

	for (var prop in actual){
		equal(expected[prop], actual[prop]);
	}
});

QUnit.test("Assign all properties to an object from multiple source objects", function(){
	var one = { a: 1, b: 1, c: 1 };
	var two = { a: 2, b: 2 };
	var three = { a: 3 };

	var expected =  { a: 3, b: 2, c: 1 };
	var actual = assign(one, two, three);

	for (var prop in actual){
		equal(expected[prop], actual[prop]);
	}
});
