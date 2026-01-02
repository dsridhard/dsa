// AND operator
let a = 5;  // 0101
let b = 3;  // 0011
console.log(`a & b = ${a & b}`);  // Output: 1 (0001)

// OR operator
a = 5;  // 0101
b = 3;  // 0011
console.log(`a | b = ${a | b}`);  // Output: 7 (0111)

// XOR operator
a = 5;  // 0101
b = 3;  // 0011
console.log(`a ^ b = ${a ^ b}`);  // Output: 6 (0110)

// NOT operator (bitwise complement)
a = 5;  // 0101
console.log(`~a = ${~a}`);  // Output: -6 (inverts all bits, then interprets as signed integer)

// Left Shift operator
a = 5;  // 0101
console.log(`a << 1 = ${a << 1}`);  // Output: 10 (1010)
console.log(`a << 2 = ${a << 2}`);  // Output: 20 (10100)

// Right Shift operator
a = 10; // 1010
console.log(`a >> 1 = ${a >> 1}`); // Output: 5 (0101)
a = 5;  // 0101
console.log(`a >> 1 = ${a >> 1}`); // Output: 2 (0010)

// Common Bitwise Operations

// Check if a number is even or odd
function isEven(n) {
    return (n & 1) === 0;
}

function isOdd(n) {
    return (n & 1) === 1;
}

console.log(`Is 4 even? ${isEven(4)}`); // Output: True
console.log(`Is 7 odd? ${isOdd(7)}`);   // Output: True

// Check if a specific bit is set (1-indexed position)
function isBitSet(n, pos) {
    return ((n >> (pos - 1)) & 1) === 1;
}

console.log(`Is bit 3 set in 5 (0101)? ${isBitSet(5, 3)}`); // Output: True (bit 3 is 1)
console.log(`Is bit 2 set in 5 (0101)? ${isBitSet(5, 2)}`); // Output: False (bit 2 is 0)

// Set a specific bit (1-indexed position)
function setBit(n, pos) {
    return n | (1 << (pos - 1));
}

console.log(`Set bit 2 in 5 (0101): ${setBit(5, 2)}`); // Output: 7 (0111)
console.log(`Set bit 4 in 5 (0101): ${setBit(5, 4)}`); // Output: 13 (1101)

// Clear a specific bit (1-indexed position)
function clearBit(n, pos) {
    return n & (~(1 << (pos - 1)));
}

console.log(`Clear bit 3 in 5 (0101): ${clearBit(5, 3)}`); // Output: 1 (0001)
console.log(`Clear bit 1 in 5 (0101): ${clearBit(5, 1)}`); // Output: 4 (0100)

// Toggle a specific bit (1-indexed position)
function toggleBit(n, pos) {
    return n ^ (1 << (pos - 1));
}

console.log(`Toggle bit 2 in 5 (0101): ${toggleBit(5, 2)}`); // Output: 7 (0111)
console.log(`Toggle bit 4 in 5 (0101): ${toggleBit(5, 4)}`); // Output: 13 (1101)

// Count set bits (number of 1s) in a number
function countSetBits(n) {
    let count = 0;
    while (n > 0) {
        n &= (n - 1);  // Brian Kernighan's algorithm
        count++;
    }
    return count;
}

console.log(`Number of set bits in 7 (0111): ${countSetBits(7)}`);   // Output: 3
console.log(`Number of set bits in 10 (1010): ${countSetBits(10)}`); // Output: 2

// Check if a number is a power of two
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

console.log(`Is 8 a power of two? ${isPowerOfTwo(8)}`);   // Output: True
console.log(`Is 6 a power of two? ${isPowerOfTwo(6)}`);   // Output: False
console.log(`Is 0 a power of two? ${isPowerOfTwo(0)}`);   // Output: False

// Get the most significant bit (MSB) position
function getMsbPos(n) {
    if (n === 0) {
        return -1; // Or throw an error
    }
    return Math.floor(Math.log2(n)) + 1; // 1-indexed position
}

console.log(`MSB position of 5 (0101): ${getMsbPos(5)}`);   // Output: 3
console.log(`MSB position of 10 (1010): ${getMsbPos(10)}`); // Output: 4

// Get the least significant bit (LSB)
function getLsb(n) {
    return n & (-n); // Returns the value of the LSB
}

console.log(`LSB of 6 (0110): ${getLsb(6)}`); // Output: 2 (0010)
console.log(`LSB of 5 (0101): ${getLsb(5)}`); // Output: 1 (0001)

// Clear the least significant bit (LSB)
function clearLsb(n) {
    return n & (n - 1);
}

console.log(`Clear LSB of 6 (0110): ${clearLsb(6)}`); // Output: 4 (0100)
console.log(`Clear LSB of 5 (0101): ${clearLsb(5)}`); // Output: 4 (0100)

// Get the nth bit (0-indexed position)
function getBit(n, pos) {
    return (n >> pos) & 1;
}

console.log(`Get bit 0 of 5 (0101): ${getBit(5, 0)}`); // Output: 1
console.log(`Get bit 2 of 5 (0101): ${getBit(5, 2)}`); // Output: 1

// Turn off the rightmost set bit
function turnOffRightmostSetBit(n) {
    return n & (n - 1);
}

console.log(`Turn off rightmost set bit of 6 (0110): ${turnOffRightmostSetBit(6)}`); // Output: 4 (0100)
console.log(`Turn off rightmost set bit of 5 (0101): ${turnOffRightmostSetBit(5)}`); // Output: 4 (0100)

// Check if two numbers have opposite signs
function hasOppositeSigns(a, b) {
    return (a ^ b) < 0;
}

console.log(`Do 5 and -5 have opposite signs? ${hasOppositeSigns(5, -5)}`); // Output: True
console.log(`Do 5 and 10 have opposite signs? ${hasOppositeSigns(5, 10)}`); // Output: False

// Swap two numbers using XOR
function swapNumbersXor(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a, b];
}

let [x, y] = [10, 20];
[x, y] = swapNumbersXor(x, y);
console.log(`Swapped numbers using XOR: x=${x}, y=${y}`); // Output: x=20, y=10

// Find the unique number in an array where all others appear twice
function findUniqueNumber(arr) {
    let unique = 0;
    for (const num of arr) {
        unique ^= num;
    }
    return unique;
}

console.log(`Unique number in [1, 2, 3, 2, 1]: ${findUniqueNumber([1, 2, 3, 2, 1])}`); // Output: 3

// Find the missing number in a sequence
function findMissingNumber(arr, n) {
    // n is the expected range of numbers (e.g., 0 to n)
    // XOR all numbers from 0 to n
    let xorAll = 0;
    for (let i = 0; i <= n; i++) {
        xorAll ^= i;
    }
    
    // XOR all numbers in the given array
    let xorArr = 0;
    for (const num of arr) {
        xorArr ^= num;
    }
        
    // The missing number is the result of XORing these two
    return xorAll ^ xorArr;
}

console.log(`Missing number in [1, 2, 4, 5] (range 1-5): ${findMissingNumber([1, 2, 4, 5], 5)}`); // Note: This will be incorrect if range starts at 1. The function assumes 0-n.
console.log(`Missing number in [0, 1, 3] (range 0-3): ${findMissingNumber([0, 1, 3], 3)}`); // Output: 2

// Convert decimal to binary string
function decToBin(n) {
    return n.toString(2);
}

console.log(`Binary representation of 13: ${decToBin(13)}`); // Output: 1101

// Convert binary string to decimal
function binToDec(binaryStr) {
    return parseInt(binaryStr, 2);
}

console.log(`Decimal representation of '1101': ${binToDec('1101')}`); // Output: 13

// Check if a number is even or odd without modulo operator
function isEvenNoModulo(n) {
    return !(n & 1);
}

function isOddNoModulo(n) {
    return !!(n & 1);
}

console.log(`Is 10 even (no modulo)? ${isEvenNoModulo(10)}`); // Output: True
console.log(`Is 11 odd (no modulo)? ${isOddNoModulo(11)}`);   // Output: True

// Multiply by 2 using left shift
function multiplyByTwo(n) {
    return n << 1;
}

console.log(`5 multiplied by 2: ${multiplyByTwo(5)}`); // Output: 10

// Divide by 2 using right shift
function divideByTwo(n) {
    return n >> 1;
}

console.log(`10 divided by 2: ${divideByTwo(10)}`); // Output: 5

// Absolute value without branching
function absValue(n) {
    const mask = n >> 31; // For 32-bit integers
    return (n + mask) ^ mask;
}

console.log(`Absolute value of -5: ${absValue(-5)}`); // Output: 5
console.log(`Absolute value of 5: ${absValue(5)}`);   // Output: 5

// Find maximum of two numbers without branching
function maxNoBranch(a, b) {
    return a - ((a - b) & ((a - b) >> 31)); // For 32-bit integers
}

console.log(`Max of 10 and 20: ${maxNoBranch(10, 20)}`); // Output: 20
console.log(`Max of 5 and 15: ${maxNoBranch(5, 15)}`);   // Output: 15

// Find minimum of two numbers without branching
function minNoBranch(a, b) {
    return b + ((a - b) & ((a - b) >> 31)); // For 32-bit integers
}

console.log(`Min of 10 and 20: ${minNoBranch(10, 20)}`); // Output: 10
console.log(`Min of 5 and 15: ${minNoBranch(5, 15)}`);   // Output: 5

// Check if a number is negative
function isNegative(n) {
    return ((n >> 31) & 1) === 1; // For 32-bit integers
}

console.log(`Is -5 negative? ${isNegative(-5)}`); // Output: True
console.log(`Is 5 negative? ${isNegative(5)}`);   // Output: False

// Reverse bits of an integer (example for 8-bit)
function reverseBits8bit(n) {
    n = (n & 0x55) << 1 | (n >> 1) & 0x55;
    n = (n & 0x33) << 2 | (n >> 2) & 0x33;
    n = (n & 0x0F) << 4 | (n >> 4) & 0x0F;
    return n;
}

console.log(`Reverse bits of 0b00001011 (11): 0b${reverseBits8bit(11).toString(2)}`); // Output: 0b11010000 (208)

// Count total bits in a number
function countTotalBits(n) {
    if (n === 0) {
        return 1; // Or 0 depending on definition
    }
    return n.toString(2).length;
}

console.log(`Total bits in 13: ${countTotalBits(13)}`); // Output: 4
console.log(`Total bits in 0: ${countTotalBits(0)}`);   // Output: 1

// Check if all bits are set in a range (e.g., from 0 to k-1)
function areAllBitsSet(n, k) {
    return (n & ((1 << k) - 1)) === ((1 << k) - 1);
}   

console.log(`Are all bits set in 7 (0111) for k=3? ${areAllBitsSet(7, 3)}`);   // Output: True
console.log(`Are all bits set in 6 (0110) for k=3? ${areAllBitsSet(6, 3)}`);   // Output: False

// Get the number of bits required to represent a number
function numBitsRequired(n) {
    if (n === 0) {
        return 1;
    }
    return n.toString(2).length;
}

console.log(`Number of bits required for 13: ${numBitsRequired(13)}`); // Output: 4
console.log(`Number of bits required for 0: ${numBitsRequired(0)}`);   // Output: 1

// Check if a number is a power of 4
function isPowerOfFour(n) {
    return n > 0 && (n & (n - 1)) === 0 && (n & 0xAAAAAAAA) === 0;
}

console.log(`Is 16 a power of four? ${isPowerOfFour(16)}`); // Output: True
console.log(`Is 8 a power of four? ${isPowerOfFour(8)}`);   // Output: False

// Find the position of the only set bit (if only one is set)
function findOnlySetBitPos(n) {
    if (!isPowerOfTwo(n)) {
        return -1; // Or raise an error if not a power of two
    }
    return n.toString(2).length;
}

console.log(`Position of set bit in 8 (1000): ${findOnlySetBitPos(8)}`); // Output: 4
console.log(`Position of set bit in 5 (0101): ${findOnlySetBitPos(5)}`); // Output: -1

// Count the number of bits to flip to convert A to B
function countBitsToFlip(a, b) {
    let xorResult = a ^ b;
    let count = 0;
    while (xorResult > 0) {
        xorResult &= (xorResult - 1);
        count++;
    }
    return count;
}

console.log(`Bits to flip from 29 (11101) to 15 (01111): ${countBitsToFlip(29, 15)}`); // Output: 2

// Add two numbers without using arithmetic operators (+, -)
function addWithoutArithmetic(a, b) {
    while (b !== 0) {
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}

console.log(`5 + 3 without arithmetic: ${addWithoutArithmetic(5, 3)}`); // Output: 8
console.log(`10 + 7 without arithmetic: ${addWithoutArithmetic(10, 7)}`); // Output: 17

// Subtract two numbers without using arithmetic operators (+, -)
function subtractWithoutArithmetic(a, b) {
    // a - b is equivalent to a + (-b)
    // -b can be represented as (~b + 1)
    return addWithoutArithmetic(a, addWithoutArithmetic(~b, 1));
}

console.log(`5 - 3 without arithmetic: ${subtractWithoutArithmetic(5, 3)}`); // Output: 2
console.log(`3 - 5 without arithmetic: ${subtractWithoutArithmetic(3, 5)}`); // Output: -2

// Multiply two numbers without using arithmetic operators (*, /)
function multiplyWithoutArithmetic(a, b) {
    let result = 0;
    while (b !== 0) {
        if ((b & 1) !== 0) { // If the last bit of b is 1
            result = addWithoutArithmetic(result, a);
        }
        a <<= 1;
        b >>= 1;
    }
    return result;
}

console.log(`5 * 3 without arithmetic: ${multiplyWithoutArithmetic(5, 3)}`); // Output: 15
console.log(`10 * 7 without arithmetic: ${multiplyWithoutArithmetic(10, 7)}`); // Output: 70

// Divide two numbers without using arithmetic operators (*, /, %)
function divideWithoutArithmetic(dividend, divisor) {
    if (divisor === 0) {
        throw new Error("Cannot divide by zero");
    }

    // Handle signs
    const sign = ((dividend < 0) !== (divisor < 0)) ? -1 : 1;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let quotient = 0;
    let temp_divisor = divisor;
    let temp_quotient = 1;

    // Find the largest power of 2 such that (divisor << power) <= dividend
    while (temp_divisor <= dividend) {
        temp_divisor <<= 1;
        temp_quotient <<= 1;
    }

    // Now, temp_divisor is greater than dividend, so shift back once
    temp_divisor >>= 1;
    temp_quotient >>= 1;

    while (temp_quotient !== 0) {
        if (dividend >= temp_divisor) {
            dividend = subtractWithoutArithmetic(dividend, temp_divisor);
            quotient = addWithoutArithmetic(quotient, temp_quotient);
        }
        temp_divisor >>= 1;
        temp_quotient >>= 1;
    }
        
    return quotient * sign;
}

console.log(`10 / 3 without arithmetic: ${divideWithoutArithmetic(10, 3)}`); // Output: 3
console.log(`7 / 2 without arithmetic: ${divideWithoutArithmetic(7, 2)}`);   // Output: 3
console.log(`-10 / 3 without arithmetic: ${divideWithoutArithmetic(-10, 3)}`); // Output: -3
console.log(`10 / -3 without arithmetic: ${divideWithoutArithmetic(10, -3)}`); // Output: -3
console.log(`-10 / -3 without arithmetic: ${divideWithoutArithmetic(-10, -3)}`); // Output: 3
