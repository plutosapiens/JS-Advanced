describe('createCalculator', function() {
    it('returns an object with add(), subtract(), and get() functions', function() {
      const calculator = createCalculator()
      expect(calculator).to.be('object')
      expect(calculator.add).to.be('function')
      expect(calculator.subtract).to.be('function')
      expect(calculator.get).to.be('function')
    })
  
    it('adds numbers to the internal sum', function() {
      const calculator = createCalculator()
      calculator.add(5)
      expect(calculator.get()).to.equal(5)
    })
  
    it('subtracts numbers from the internal sum', function() {
      const calculator = createCalculator()
      calculator.subtract(5)
      expect(calculator.get()).to.equal(-5)
    })
  
    it('accepts numbers as strings', function() {
      const calculator = createCalculator()
      calculator.add('5')
      expect(calculator.get()).to.equal(5)
    })
  
    it('keeps the internal sum private', function() {
      const calculator = createCalculator()
      expect(calculator.value).to.be.undefined
    })
  })
  