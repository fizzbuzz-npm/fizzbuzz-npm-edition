const test = require('ava');
const fizzbuzz = require("./index.js");

test('numbers', t => {
    t.is(fizzbuzz(30), "fizzbuzz");
    t.is(fizzbuzz(6), "fizz");
    t.is(fizzbuzz(10), "buzz");
    t.is(fizzbuzz(4), "4");
});

test('strings', t => {
    t.is(fizzbuzz("45"), "fizzbuzz");
    t.is(fizzbuzz("9"), "fizz");
    t.is(fizzbuzz("40"), "buzz");
    t.is(fizzbuzz("8"), "8");
});
