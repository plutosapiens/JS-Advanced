const { expect } = require ( 'chai' )
function sum(a,b){
    return a+b
}

describe('Main test', function(){
    it('Works with whole nums', function(){
        expect(sum(3,5)).to.equal(8)
    })
    it('Works with smart nums', function(){
        expect(sum(1,5)).to.equal(6)    })
}) 