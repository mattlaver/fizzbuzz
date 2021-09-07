const fizzbuzz = require('./fizzbuzz');
const each = require("jest-each").default;

// Part 1 Fizz Buzz
// uncomment the tests one at a time and implement the logic to make them pass.
// to run the tests use:
// npm t 
describe("isNumber", () => {
    each([
      [1],
      [2],
      [4],
      [7],
      [8],
      [80],
      [100]
    ]).it("when the input is '%s'", (text) => {
      expect(fizzbuzz(text)).toBe(text);
    });
  });
/*
describe("isFizz", () => {
    each([
      [3],
      [6],
      [9],
      [12],
      [63],
      [99]
    ]).it("when the input is '%s'", (text) => {
      expect(fizzbuzz(text)).toBe("Fizz");
    });
  });
*/
/*
  describe("isBuzz`", () => {
    each([
      [5],
      [10],
      [20]
    ]).it("when the input is '%s'", (text) => {
      expect(fizzbuzz(text)).toBe("Buzz");
    });
  });
  */
/*
  describe("isFizzBuzz`", () => {
    each([
      [15],
      [30],
      [45],
      [60]
    ]).it("when the input is '%s'", (text) => {
      expect(fizzbuzz(text)).toBe("FizzBuzz");
    });
  });
*/

// Part 2 Lucky Fizz Buzz
/*
describe("isFizzBuzz`", () => {
    each([
      [3],
      [30],
      [43],
      [63],
      [73],
      [93]
    ]).it("when the input is '%s'", (text) => {
      expect(fizzbuzz(text)).toBe("LuckyFizzBuzz");
    });
  });

  */