

const {expect} = require('chai')
const dataClass = require('./2-Data-Class')

expect(typeof result).to.equal('function', "Couldn't find constructor.");
let myData = new result('GET', 'http://google.com', 'HTTP/1.1', '');
expect(myData.hasOwnProperty('method')).to.equal(true, "Instance doesn't have a method property.");
expect(myData.hasOwnProperty('uri')).to.equal(true, "Instance doesn't have a uri property.");
expect(myData.hasOwnProperty('version')).to.equal(true, "Instance doesn't have a version property.");
expect(myData.hasOwnProperty('message')).to.equal(true, "Instance doesn't have a message property.");
expect(myData.hasOwnProperty('response')).to.equal(true, "Instance doesn't have a response property.");
expect(myData.hasOwnProperty('fulfilled')).to.equal(true, "Instance doesn't have a fulfilled property.");
