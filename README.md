# Lucky Fizz Buzz Coding Challenge

## Part 1 Fizz Buzz
Write a program that prints the numbers from 1 to 100. 
* But for multiples of three print “Fizz” instead of the number 
* And for the multiples of five print “Buzz”. 
* For numbers which are multiples of both three and five print “FizzBuzz”.

Tests have been written to guide you:

```npm t```

* Uncomment the tests one at a time
* Run the tests and watch them fail
* Implement the code in fizzbuzz.js to make the tests pass
* Repeat until all tests pass

## Part 2 Lucky Fizz Buzz
The business owners have decided that any number with a 3 in it should now return "lucky" for example: 3, 13, 23, 37 


## Hints

Remainder (%)
The remainder operator (%) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

```
console.log(12 % 5);
// expected output: 2

console.log(4 % 2);
// expected output: 0

console.log(12 % 4);
// expected output: 0

```

Note that while in most languages, ‘%’ is a remainder operator, in some (e.g. Python, Perl) it is a modulo operator. For positive values, the two are equivalent, but when the dividend and divisor are of different signs, they give different results. To obtain a modulo in JavaScript, in place of a % n, use ((a % n ) + n ) % n.