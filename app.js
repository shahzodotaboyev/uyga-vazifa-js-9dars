// Func-1
// function power(a, n) {
//     return a ** n;

// }
// console.log(power(3,5));

// Func-2
// function mean(a, b){
//     let arifmetik =  (a + b) / 2;
//     let  geometric = Math.sqrt(a * b);
//     return [arifmetik, geometric];
// }
// console.log(mean(12,48));

// Func-3
// function sign(n) {
//     if (n > 0) {
//         return 1;
//     } else if (n < 0) {
//         return -1;
//     }else{
//         return 0;
//     }
// }
// console.log(sign(0));

// Func-4
// function numberOfRoots(A, B, C) {
//     let D = B ** 2 - 4 * A * C;
//     if (D > 0) {
//         return 2;
//     } else if (D == 0) {
//         return 1;
//     }else{
//         return  0;
//     }
// }
// console.log(numberOfRoots(1, -6, 9));

// Func-5
// function areaCircle(R) {
//     let area = 3.14 * R ** 2;
//     return area;
// }
//  console.log(areaCircle(5));

// Func-6
// function sumRange(A, B) {
//     if (A > B) {
//         return 0;
//     }
//     let sum = 0;
//     for (let i = A; i <= B; i++) {
//         sum += i;
//     }
//     return sum;

// }
// console.log(sumRange(8, 10));

// Func-7
// function calc(A, B, S) {
//     switch (S) {
//         case '+':
//             return A + B;
//         case '-':
//             return A - B;
//         case '*':
//             return A * B;
//         case '/':
//             return A / B;
//         default:
//             return 0
//     }
// }
// console.log(calc(10, 15, "*"));
// console.log(calc(10, 15, "-"));
// console.log(calc(10, 15, "+"));
// console.log(calc(10, 15, "/"));


// Func-8

// function isEven(K) {
//     if (K % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(10));
// console.log(isEven(11));

// Func-9
// function sortABC(a, b, c) {
//     const numbers = [a, b, c]
//     numbers.sort((x, y) => x - y);
//     return `${numbers[0]}, ${numbers[1]}, ${numbers[2]}`;
// }
// console.log(sortABC(5, 2, 15));

// Func-10
// function isPowerN(K, N) {
//     if (K <= 0 || N <= 1) {
//         return false;
//     }

//     let power = 1;
//     while (power < K) {
//         power *= N;
//     }

//     return power === K;
// }
// console.log(isPowerN(8, 2));
// console.log(isPowerN(8,3));

// Func-11
// function isPrime(N) {
//     if (N <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(N); i++) { 
//         if (N % i === 0) { 
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(4)); 
// console.log(isPrime(5)); 


// Func-12
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) { 
//             return false;
//         }
//     }
//     return true; 
// }                                                                                                              


// function numberOfPrime(N) {
//     let count = 0; 
//     for (let i = 2; i <= N; i++) { 
//         if (isPrime(i)) { 
//             count++;
//         }
//     }
//     return count;
// }


// console.log(numberOfPrime(10));

// Func-13
// function digitCount(K) {
//     return K.toString().length; 
// }

// function digitNth(K, N) {
//     if (K <= 0 || N <= 0) return -1;  
//     const count = digitCount(K);  

//     if (N > count) return -1;    
//     return parseInt(K.toString()[N - 1]); 
// }

// // Testlar
// console.log(digitNth(105782, 5)); 


// func-14
// function inverseNumber(N) {
//     const reversedString = N.toString().split('').reverse().join('');
//     return parseInt(reversedString, 10);
// }

// console.log(inverseNumber(56814));


// Func-15 (chatgpt yordamida ishladim)
// function inverseNumber(N) {
//     const reversedString = N.toString().split('').reverse().join('');
//     return parseInt(reversedString, 10);
// }

// function isPalindrom(N) {
//     if (N <= 0) return false; 
//     const reversedNumber = inverseNumber(N);  
//     return N === reversedNumber; 
// }

// console.log(isPalindrom(1678761)); // true
// console.log(isPalindrom(12321));   // true




//    Func-16
// function factorial(N) {
//     if (N < 0) return 1; 
//     let result = 1;

//     for (let i = 1; i <= N; i++) {
//         result *= i; 
//     }

//     return result; 
// }

// console.log(factorial(5)); 

// Func-17
// function getSum3(N) {
//     let sum = 0; 

//     for (let i = 1; i <= N; i++) {
//         if (i % 3 === 0) { 
//             sum += i; 
//         }
//     }

//     return sum; 
// }

// console.log(getSum3(15));


// Func-18

// function sumOddEven(N) {
//     let evenSum = 0;
//     let oddSum = 0; 

//     for (let i = 1; i <= N; i++) {
//         if (i % 2 === 0) {
//             evenSum += i; 
//         } else {
//             oddSum += i;
//         }
//     }

//     return `${evenSum}, ${oddSum}`; 
// }

// console.log(sumOddEven(10));
