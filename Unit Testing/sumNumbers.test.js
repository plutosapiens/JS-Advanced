const { expect } = require('chai')
const sum = require('./sumNumbers')

describe('Calc', function(){
    //let sumNums = sum()
    it('Returns correct sum', () => {
        expect(sum([1, 2, 3])).to.equal(6)
    })
    
    it('returns sum when working with negative numbers', () =>{
        expect(sum([-1, 2, 3])).to.equal(4)
    })

    it('Returns NaN if elements are not numbers', () => {
        expect(sum([1, 2, 'a'])).to.equal(NaN)
    })
})