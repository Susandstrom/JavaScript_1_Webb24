let main = document.getElementById("main");

let textRows = [
    "<p>Math.pow(2,53) // => 9007199254740992: 2 to the power 53</p>",
    "<p>Math.round(.6) // => 1.0: round to the nearest integer</p>",
    "<p>Math.ceil(.6) // => 1.0: round up to an integer</p>",
    "<p>Math.floor(.6) // => 0.0: round down to an integer</p>",
    "<p>Math.abs(-5) // => 5: absolute value</p>",
    "<p>Math.max(x,y,z) // Return the largest argument</p>",
    "<p>Math.min(x,y,z) // Return the smallest argument</p>",
    "<p>Math.random() // Pseudo-random number x where 0 <= x < 1.0</p>",
    "<p>Math.PI // π: circumference of a circle / diameter</p>",
    "<p>Math.E // e: The base of the natural logarithm</p>",
    "<p>Math.sqrt(3) // => 3**0.5: the square root of 3</p>",
    "<p>Math.pow(3, 1/3) // => 3**(1/3): the cube root of 3</p>",
    "<p>Math.sin(0) // Trigonometry: also Math.cos, Math.atan, etc.</p>",
    "<p>Math.log(10) // Natural logarithm of 10</p>",
    "<p>Math.log(100)/Math.LN10 // Base 10 logarithm of 100</p>",
    "<p>Math.log(512)/Math.LN2 // Base 2 logarithm of 512</p>",
    "<p>Math.exp(3) // Math.E cubed</p>",
    "<p>Math.cbrt(27) // => 3: cube root</p>",
    "<p>Math.hypot(3, 4) // => 5: square root of sum of squares of all arguments</p>",
    "<p>Math.log10(100) // => 2: Base-10 logarithm</p>",
    "<p>Math.log2(1024) // => 10: Base-2 logarithm</p>",
    "<p>Math.log1p(x) // Natural log of (1+x); accurate for very small x</p>",
    "<p>Math.expm1(x) // Math.exp(x)-1; the inverse of Math.log1p()</p>",
    "<p>Math.sign(x) // -1, 0, or 1 for arguments <, ==, or > 0</p>",
    "<p>Math.imul(2,3) // => 6: optimized multiplication of 32-bit integers</p>",
    "<p>Math.clz32(0xf) // => 28: number of leading zero bits in a 32-bit integer</p>",
    "<p>Math.trunc(3.9) // => 3: convert to an integer by truncating fractional part</p>",
    "<p>Math.fround(x) // Round to nearest 32-bit float number</p>",
    "<p>Math.sinh(x) // Hyperbolic sine. Also Math.cosh(), Math.tanh()</p>",
    "<p>Math.asinh(x) // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()",
];

function showMath(){
    let innerText="";

    for (let index = 0; index < textRows.length; index++) {
        innerText = innerText + textRows[index] + "\n"; 
    }

    main.innerHTML = innerText;
    

}

for (let index = 0; index < 10000000; index++) {
    console.info(index+"\r");

    
}