// •	addFive(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the function should return undefined.
// o	If the parameter is a number, add 5 to it, and return the result.
// •	subtractTen(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the function should return undefined.
// o	If the parameter is a number, subtract 10 from it, and return the result.
// •	sum(num1, num2) - A function that accepts two parameters:
// o	If any of the 2 parameters is NOT a number, the function should return undefined.
// o	If both parameters are numbers, the function should return their sum. 

const {expect} = require('chai')
const mathEnforcer = require('./mathEnforcer')

describe('MachEnforcer check', function(){
    describe('addFive', function(){
        it('returns "undefined" if the parameter is not a number', () =>{
            expect(mathEnforcer.addFive('a')).to.equal(undefined)
        })
        it('addFive accepts a single prameter, and returns parameter + 5', () =>{
            expect(mathEnforcer.addFive(4)).to.equal(9)
            expect(mathEnforcer.addFive(-4)).to.equal(1)
        })
    })
    describe('substractTen', function() {
        it('returns "undefined" if the parameter is not a number', () =>{
            expect(mathEnforcer.subtractTen('a')).to.equal(undefined)
        })
        it('returns the number - 10 if the input is a number', () =>{
            expect(mathEnforcer.subtractTen(12)).to.equal(2)
            expect(mathEnforcer.subtractTen(-12)).to.equal(-22)
            
        })
    })
    describe('Sum', function(){
        it('returns undefined if one of the parameters is not a number', () =>{
            expect(mathEnforcer.sum('a', 1)).to.equal(undefined)
            expect(mathEnforcer.sum(1, 'aaa')).to.equal(undefined)
        })
        it('returns the sum of the parameters if they\'re both numbers', () =>{
            expect(mathEnforcer.sum(1,2)).to.equal(3)
        })
    })
})