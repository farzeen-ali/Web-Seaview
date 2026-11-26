// Loops 
// starting point, condition, updation
// for, while, do-while

// for(let i = 0; i <=10; i++){
//     console.log('My Number is: ' + i);
// }


// let lives = 3;

// while(lives > 0){
//     console.log("Game Play... Lives: " + lives);
//     lives--;
// }

// do while
// let slices = 5;

// do{
//     console.log('Eating pizza slice');
//     slices--;
// }
// while(slices >= 10);

// Array => variable => multiple values
// Indexing => 0

// let bag = ["Laptop", "Pen", "Mobile", "Stand"];
// console.log(bag);
// console.log(bag[1])

// for of
// for(let item of bag){
//     console.log("Item is: " + item);
// }

// Object

let phone = {color : "Red", battery: "80%", brand: "IPhone"};
// console.log(phone)
// console.log(phone.battery)
// for in
// for(let k in phone){
//     console.log("Key is: " + k + " => " + phone[k]);
// }

// Map Filter Reduce
// let prices = [100,200,300];
// const doublePrices = prices.map((p) => p * 2);
// console.log(prices); // orignal
// console.log(doublePrices); // duplicate array

// Filter
// let scores = [90, 34, 29, 67, 85];
// let maxScores = scores.filter((s) => s > 50);
// console.log(scores)
// console.log(maxScores)

// Reduce
let bill = [150, 300, 600];
let totalBill = bill.reduce((sum, item) => sum + item, 0);
// console.log(totalBill);