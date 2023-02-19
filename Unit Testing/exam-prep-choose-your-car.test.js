const { expect } = require('chai')
const chooseYourCar = require('./chooseYourCar')

describe('chooseYourCar', function() {

    describe('choosingType()', function() {

        it('should throw an error if year is less than 1900', function() {
          expect(() => chooseYourCar.choosingType('Sedan', 'blue', 1899)).to.throw('Invalid Year!')
        })

        it('should throw an error if year is more than 2022', function() {
          expect(() => chooseYourCar.choosingType('Sedan', 'blue', 2023)).to.throw('Invalid Year!')
        })

        it('should throw an error if type is not Sedan', function() {
          expect(() => chooseYourCar.choosingType('Sports Car', 'red', 2010)).to.throw('This type of car is not what you are looking for.')
        })

        it('should return message for old car', function() {
          expect(chooseYourCar.choosingType('Sedan', 'blue', 2005)).to.equal('This Sedan is too old for you, especially with that blue color.')
        })

        it('should return message for new car', function() {
          expect(chooseYourCar.choosingType('Sedan', 'blue', 2015)).to.equal('This blue Sedan meets the requirements, that you have.')
        })

        })

    describe('brandName()', function() {

        it('should throw an error if brands parameter is not an array', function() {
          expect(() => chooseYourCar.brandName('BMW', 0)).to.throw('Invalid Information!')
        })

        it('should throw an error if index is not a number', function() {
          expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], '2')).to.throw('Invalid Information!')
        })

        it('should throw an error if index is outside the limits of the array', function() {
          expect(() => chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 3)).to.throw('Invalid Information!')
        })

        it('should remove the element at the given index and return the changed array as a string', function() {
          expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 1)).to.equal('BMW, Peugeot')
        })

        })

    describe('carFuelConsumption()', function() {

        it('should throw an error if distanceInKilometers is not a number', function() {
          expect(() => chooseYourCar.carFuelConsumption('500', 10)).to.throw('Invalid Information!')
        })

        it('should throw an error if distanceInKilometers is negative', function() {
          expect(() => chooseYourCar.carFuelConsumption(-500, 10)).to.throw('Invalid Information!')
        })

        it('should throw an error if consumptedFuelInLitres is not a number', function() {
          expect(() => chooseYourCar.carFuelConsumption(500, '10')).to.throw('Invalid Information!')
        })

        it('should throw an error if consumptedFuelInLitres is negative', function() {
          expect(() => chooseYourCar.carFuelConsumption(500, -10)).to.throw('Invalid Information!')
        })

        it('should return message for efficient car', function() {
          expect(chooseYourCar.carFuelConsumption(500, 5)).to.equal('The car is efficient enough, it burns 1.00 liters/100 km.')
        
        })
    })
})