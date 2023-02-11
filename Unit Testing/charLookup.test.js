// o	If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
// o	If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index". 
// o	If both parameters have correct types and values - return the character at the specified index in the string.

const {expect} = require('chai')
const lookupChar = require('./charLookup')

describe('Char Lookup', function(){
    it('returns "undefined" when the first parameter is not a string and the second parameter is not a number', () =>{
        expect(lookupChar(1, 'aaa')).to.equal(undefined)
        expect(lookupChar('aaa', 2.5)).to.equal(undefined)
    })
    it('returns "Incorrect index" when the index is incorrect', () =>{
        expect(lookupChar('aaa', 3)).to.be.equal('Incorrect index')
        expect(lookupChar('aaa', 5)).to.be.equal('Incorrect index')
        expect(lookupChar('aaa', -1)).to.be.equal('Incorrect index')
    })
    it('returns the character in the specified index', () =>{
        expect(lookupChar('abcde', 2)).to.equal('c')
    })
})