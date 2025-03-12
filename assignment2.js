// Declare variables  
let a = 11;  
let b = 1;  
let c = 25;  
let d = "15"; // String number  
const e = 15; // Constant  

// 1. Add all numbers  
const sum = a + b + c + Number(d) + e;  
console.log("Combined Sum:", sum);  

// 2. Compare d and e  
console.log("\nComparisons between d and e:");  
console.log("d > e:", Number(d) > e);  
console.log("d < e:", Number(d) < e);  
console.log("d <= e:", Number(d) <= e);  
console.log("d >= e:", Number(d) >= e);  
console.log("d === e:", Number(d) === e);  

// 3. Subtract all values  
const subtraction = a - b - c - Number(d) - e;  
console.log("\nSubtraction Result:", subtraction);  

// 4. Multiply a and c, then divide by e  
const multiplyDivide = (a * c) / e;  
console.log("Multiplication/Division Result:", multiplyDivide);  

// 5. e raised to the power of c  
const exponent = e ** c;  
console.log("Exponent Result:", exponent);  

// 6. Try changing c (no error since it's let)  
try {  
    console.log("\nReassignment Attempt:");  
    c = 3;  
    console.log("New c value:", c);  
} catch (error) {  
    console.log("Error:", error.message);  
}