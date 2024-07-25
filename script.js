// TASK # 01
let num = Math.random()*100;
console.log(num);

// TASK # 02 COIN TOSS
let coinToss = Math.floor(Math.random() * 2);

let result;

if (coinToss === 0) {
    result = "Heads";
} else {
    result = "Tails";
}

console.log(result);




// RANDOM PASSWORD GENERATOR

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgh1254325z034544';
let password = '';

for(let i = 0; i < 10; i++){
    password += chars.charAt(Math.floor(Math.random() * chars.length));
}
console.log(password);

// Strings to Integers and Decimals

let str = "123";
let num = parseInt(str);
console.log(num);

let str = "123.45";
num = parseFloat(str);
console.log(num);

// Converting Strings to Numbers, Numbers to Strings

 let str = "123";
 num = Number(str);
console.log(num);


let num = 123;
str = num.toString();
console.log(str);



// Controlling the Length of Decimals using toFixed method

let num = 123.45678;
let decimal = num.toFixed(2);
console.log(decimal);


let num = 123.45678;
let num2 = num.toFixed(4);
console.log(num2);

// Getting the Current Date and Time

let num = new Date();
console.log(num);


let num = new Date("2024-06-18");
console.log(num);


const d = new Date();
let text = d.toTimeString();
console.log(text);

const d = new Date();
let text = d.toString();
console.log(text);


// AGE CALCULATOR

let birth =  new Date("2004-11-09");
let today = new Date();
let age = today.getFullYear() - birth.getFullYear();
console.log(age);


// Extracting Parts of the Date and Time

let y = new Date();
let z = y.getFullYear();
console.log(z);

let m =new Date();
let z = m.getMonth();
console.log(z);

let input = new Date("2024-07-06");
let z = input.getFullYear();
console.log(z);

let input = new Date("2024-17-06");
let z = input.getMonth();
console.log(z);

let input = new Date();
let z = input.getDate();
console.log(z);

// Specifying a Date and Time


let dt = new Date();
console.log(dt);


let dte = new Date("2024-06-18");
console.log(dte);



// Changing Elements of a Date and Time




let date = new Date();
let nextDate = new Date(date);
nextDate.setDate(date.getDate()+1);

console.log(date);
console.log(nextDate);


let date = new Date();
let nextDate = new Date(date);
nextDate.setHours(date.getHours() - 1);

console.log(date);
console.log(nextDate);

// Schedule Appointment


const apponttime = new Date("2024-07-18T20:14");
const CurrentTime = new Date();

if(CurrentTime.getTime()>= apponttime.getTime()){
    console.log("its your appontment")
}



