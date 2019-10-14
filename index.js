"use strict"
const toInt = require('to-integer')
const toStr = require('to-str')
const isMultipleOf3 = require('is-multiple-of-3')
const isMultipleOf5 = require('is-multiple-of-5')
const isMultipleOf3and5 = require('is-multiple-of-three-and-five')

const fizz = require("string-fizz")
const buzz = require("string-buzz")
const fizzbuzzStr = require("string-fizzbuzz")

function fizzbuzz(value){
    const int = toInt(value);

    if(isMultipleOf3and5(int)) return fizzbuzzStr
    if(isMultipleOf3(int)) return fizz
    if(isMultipleOf5(int)) return buzz

    return toStr(int);

}

module.exports = fizzbuzz;
