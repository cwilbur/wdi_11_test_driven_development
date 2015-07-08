var primeFactor = require('../lib/primeFactor.js');

describe('test-driven primeFactor', function() {

  it('should exist', function() {
    expect(primeFactor).toBeDefined();
  });

  it('should be a function', function() {
    expect(typeof primeFactor).toBe('function');
  });

  it('should produce output [2] for input 2', function() {
    expect(primeFactor(2)).toEqual([2]);
  });

  it('should produce output [3] for input 3', function() {
    expect(primeFactor(3)).toEqual([3]);
  });

  it('should produce output [2, 2] for input 4', function() {
    expect(primeFactor(4)).toEqual([2, 2]);
  });

  it('should produce output [5] for input 5', function() {
    expect(primeFactor(5)).toEqual([5]);
  });

  it('should produce output [2, 3] for input 6', function() {
    expect(primeFactor(6)).toEqual([2, 3]);
  });

  // 7 won't break anything

  it('should produce [2, 2, 2] for input 8', function() {
    expect(primeFactor(8)).toEqual([2, 2, 2]);
  });

  it('should produce [3, 3] for input 9', function() {
    expect(primeFactor(9)).toEqual([3, 3]);
  });

  it('should produce [2, 5] for input 10', function() {
    expect(primeFactor(10)).toEqual([2, 5]);
  });

  // 11 won't break

  it('should produce [2, 2, 3] for input 12', function() {
    expect(primeFactor(12)).toEqual([2, 2, 3]);
  });

});
