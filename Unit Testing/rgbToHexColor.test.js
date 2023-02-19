const { expect } = require('chai')
const rgbToHexColor = require('./rgbToHexColor')

describe('rgbToHex', function(){
//•	Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]
it('takes input as integer numbers', () =>{
    expect(rgbToHexColor(1,2,3)).to.equal('#010203')
    expect(rgbToHexColor('1', '2', '3')).to.equal(undefined)      
})

//•	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
it('returns the color as a string', () =>{
    expect(typeof(rgbToHexColor(1,2,3))).to.equal('string')
})

//•	Return undefined if any of the input parameters are of an invalid type or not in the expected range
it('only takes numbers in the range', () =>{
    const lowerThanMin = -2
    const higherThanMax = 256
    expect(rgbToHexColor(lowerThanMin, 1, 1)).to.equal(undefined)
    expect(rgbToHexColor(higherThanMax, 1, 1)).to.equal(undefined)
})
})
