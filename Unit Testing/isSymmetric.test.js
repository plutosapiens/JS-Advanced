const { expect } = require('chai')
const isSymmetric = require('./isSymmetric')


describe('Symetry', function(){
//•	Return false for any input that isn’t of the correct type
it('Returns false for wrong type of input', () =>{
    expect(isSymmetric(1)).to.be.false
    expect(isSymmetric('aaa')).to.be.false
    expect(isSymmetric({a: 1, b: 2})).to.be.false // new test case for non-array inputs
})
//•	Return true if the input array is symmetric
it('Returns true if input is symetric', () =>{
    expect(isSymmetric([1,2,2,1])).to.be.true
    expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true
    
})
//•	Otherwise, return false
it('Returns false if input is not symetric', () =>{
    expect(isSymmetric([1,2,2,2])).to.be.false
    expect(isSymmetric(['a', 'b', 'c', 'd'])).to.be.true
})

it('Returns true for symetric odd lenght', () =>{
    expect(isSymmetric([1,2,1])).to.be.true
    expect(isSymmetric(['a', 'b', 'a'])).to.be.true
})

it('Returns false for nonsymetric odd lenght', () =>{
    expect(isSymmetric([1,2,3,3,1])).to.be.false
    expect(isSymmetric(['a', 'b', 'c', 'b', 'a'])).to.be.false
})
it('Returns true when array is empty',() =>{
    expect(isSymmetric([])).to.be.false
})
})