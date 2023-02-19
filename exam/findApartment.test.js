const { expect } = require("chai")
const findNewApartment = require("./findNewApartment")


describe('findNewApartment', function(){
    describe('isGoodLocation()', function(){
        // •	isGoodLocation (city, nearPublicTransportation) - A function that accepts two parameters: string and boolean.
        it('Returns "This location is not suitable for you." if the city is not Sofia, Plovdiv, or Varna', function(){
            expect(findNewApartment.isGoodLocation('Burgas', true)).to.equal('This location is not suitable for you.')
        })
        // o	If the value of the boolean nearPublicTransportation is false return : "There is no public transport in area."
        it('Returns "There is no public transport in area." if the value of the boolean nearPublicTransportation is false', function(){
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.')
        })
        // o	Otherwise, if the above conditions are not met, return the following message:"You can go on home tour!" 
        it('Returns "You can go on home tour!"  if the location is good and there is public transportation', function(){
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!')
        })
        // o	You need to validate the input, if the city and nearPublicTransportation are not a string and boolean, throw an error: "Invalid input!".
        it('Throws an error if the city name is not a string', function(){
            expect(findNewApartment.isGoodLocation(111, true)).to.throw('Invalid input!')
        })
        it('Throws an error if the nearPublicTransportation is not a boolean', function(){
            expect(findNewApartment.isGoodLocation('Plovdiv', 'not a boolean')).to.throw('Invalid input!')
        })
    })
    describe('isLargeEnough()', function(){
        // 	If passed apartments parameter is not an array.
        it('Throws an error if the apartaments are not an array', function(){
            expect(findNewApartment.isLargeEnough('not an array', 60)).to.throw('Invalid input!')
        })
        // 	If apartments is empty array.
        it('Throws an error if the apartaments are anempty array', function(){
            expect(findNewApartment.isLargeEnough([], 60)).to.throw('Invalid input!')
        })
        // 	If the minimalSquareMeters is not a number.
        it('Throws an error if the minimalSquareMeters is not a number', function(){
            expect(findNewApartment.isLargeEnough([50, 60, 70], 'not a number')).to.throw('Invalid input!')
        })
        // o	The apartments array will store the area of the apartment in square meters ([40, 50, 60…])
        it('Returns the large enough apartments in an array', function(){
            expect(findNewApartment.isLargeEnough([50, 60, 70], 60)).to.equal('60, 70')
        })
        it('Returns an empty array if there are no large enough apartments', function(){
            expect(findNewApartment.isLargeEnough([50, 60, 70], 120)).to.equal('')
        })

    })
    describe("isItAffordable()", function() {
        // o	If the result is lower than 0, return: "You don't have enough money for this house!"
        it('Returns "You don\'t have enough money for this house!" if the price is more than the budget', function(){
            expect(findNewApartment.isItAffordable(100000, 80000)).to.equal('You don\'t have enough money for this house!')
        })
        // o	Otherwise, if the above conditions are not met, return the following message:"You can afford this home!"
        it('Returns "You can afford this home!" if the price is less than the budget', function(){
            expect(findNewApartment.isItAffordable(80000, 100000)).to.equal('You can afford this home!')
        })
        // o	You need to validate the input, if the price and budget are not a number
        it('Throws an error if price is not a number', function(){
            expect(findNewApartment.isItAffordable('not a number', 100000)).to.throw('Invalid input!')
        })
        it('Throws an error if budget is not a number', function(){
            expect(findNewApartment.isItAffordable(80000, 'not a number')).to.throw('Invalid input!')
        })
        // and price and budget are less or equal to 0
        it('Throws an error if price is less or equal to 0', function(){
            expect(findNewApartment.isItAffordable(-1, 100000)).to.throw('Invalid input!')
        })
        it('Throws an error if budget is less or equal to 0', function(){
            expect(findNewApartment.isItAffordable(80000, 0)).to.throw('Invalid input!')
        })
    })
})


