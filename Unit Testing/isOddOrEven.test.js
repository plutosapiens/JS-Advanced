
const { expect } = require('chai')
const isOddOrEven = require('./isOddOrEven')

describe('Check length', function(){
    it('returns "undefined" when the input is not an array', () =>{
        expect(isOddOrEven(['abc', 'aaa', 'aaa'])).to.equal(undefined)
        expect(isOddOrEven(123)).to.equal(undefined)
    })
    it('returns "even" when presented with even length array', () =>{
        expect(isOddOrEven('abcd')).to.equal('even')
    })
    it('returns "odd" when presented with odd length array', () =>{
        expect(isOddOrEven('123')).to.equal('odd')
        expect(isOddOrEven('1 2 3')).to.equal('odd')
    })
})

