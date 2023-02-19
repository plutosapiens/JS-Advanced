const assert = require("chai").assert;
const findNewApartment = require("./findNewApartment");

describe("findNewApartment", function() {
  describe("isGoodLocation()", function() {
    it("should return 'This location is not suitable for you.' if the city is not Sofia, Plovdiv, or Varna", function() {
      assert.equal(findNewApartment.isGoodLocation("Madrid", true), "This location is not suitable for you.");
    });
    it("should return 'There is no public transport in area.' if nearPublicTransportation is false", function() {
      assert.equal(findNewApartment.isGoodLocation("Sofia", false), "There is no public transport in area.");
    });
    it("should return 'You can go on home tour!' if the location is good and there is public transportation", function() {
      assert.equal(findNewApartment.isGoodLocation("Plovdiv", true), "You can go on home tour!");
    });
    it("should throw an error if city is not a string", function() {
      assert.throw(() => findNewApartment.isGoodLocation(123, true), "Invalid input!");
    });
    it("should throw an error if nearPublicTransportation is not a boolean", function() {
      assert.throw(() => findNewApartment.isGoodLocation("Sofia", "yes"), "Invalid input!");
    });
  });

  describe("isLargeEnough()", function() {
    it("should return the correct array of apartments that are large enough", function() {
      assert.equal(findNewApartment.isLargeEnough([50, 60, 70], 60), "60, 70");
    });
    it("should return an empty array if there are no large enough apartments", function() {
      assert.equal(findNewApartment.isLargeEnough([40, 50], 60), "");
    });
    it("should throw an error if apartments is not an array", function() {
      assert.throw(() => findNewApartment.isLargeEnough("not an array", 60), "Invalid input!");
    });
    it("should throw an error if apartments is an empty array", function() {
      assert.throw(() => findNewApartment.isLargeEnough([], 60), "Invalid input!");
    });
    it("should throw an error if minimalSquareMeters is not a number", function() {
      assert.throw(() => findNewApartment.isLargeEnough([50, 60, 70], "not a number"), "Invalid input!");
    });
  });

  describe("isItAffordable()", function() {
    it("should return 'You can afford this home!' if the price is less than or equal to the budget", function() {
      assert.equal(findNewApartment.isItAffordable(50000, 70000), "You can afford this home!");
    });
    it("should return 'You don't have enough money for this house!' if the price is greater than the budget", function() {
      assert.equal(findNewApartment.isItAffordable(70000, 50000), "You don't have enough money for this house!");
    });
    it("should throw an error if price is not a number", function() {
      assert.throw(() => findNewApartment.isItAffordable("not a number", 70000), "Invalid input!");
    });
    it("should throw an error if budget is not a number", function() {
      assert.throw(() => findNewApartment.isItAffordable(50000, "not a number"), "Invalid input!");
    })
})
})
