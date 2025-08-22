// ----------------- Part 1: Variables & Conditionals -----------------

let userName="Haile";
let age=27;

// Condition check

if (age>=18) {
    console.log(`${userName} is an Adult.`);

} else {
    console.log(`${userName} is a minor.`);

}
// ----------------- Part 2: Custom Functions -----------------

function greetingUser(name){
return `Hello, ${name}! Welcome to our Assignment.`;
}

function calculateSum(array){
    return array.reduce((total,num)=>total+=num,0);
}
function calculateSquare(num){
    return num*num;
}

// ----------------- Part 3: Loops -----------------
let numbers=[1,2,3,4,5];

// For loop
for (let index = 0; index < numbers.length; index++) {
console.log(`For loop - Number a index ${index}: ${numbers[index]}`);
}
// Foreach loop
numbers.forEach(num=>console.log(`ForEach -squared of ${num}:${calculateSquare(num)}`));

// while loop
let count=0;
while(count<numbers.length){
    console.log(`While loop -Number: ${numbers[count]}`);
    count++;
}

// Do-while loop

let index=0;
do{
    console.log(`Do-While loop -Number: ${numbers[index]}`);
    index++;
}while(index<numbers.length);

// for...in loop (indexes)
for(let  idx of numbers){
console.log(`for...in -Number: ${idx}`);

}

// For in loop (iterate over object)
let person={
    'name':"Haile",
    "age":27,
    "gender":"Male"
}
for(let key in person){
    console.log(`for...in -Property: ${key}: ${person[key]}`);
}

// ----------------- Part 4: DOM Interactions -----------------

const message=document.getElementById("message");
const changeTextBtn=document.getElementById("changeTextBtn");
const showListItem=document.getElementById("showListBtn");
const numberList=document.getElementById("numberList");
const sumBtn=document.getElementById("sumBtn");
const sumResult=document.getElementById("sumResult");
const title=document.getElementById("title");
const changeTitleStyle=document.getElementById("change-title-style");

// Interaction 1 : Change text

changeTextBtn.addEventListener("click",()=>{
    message.textContent=greetingUser(userName);
});
showListItem.addEventListener("click",()=>{
    numberList.innerHTML=""
    for (let index = 0; index < numbers.length; index++) {
       let li=document.createElement("li");
       li.textContent=`Number:${numbers[index]}`;
       numberList.appendChild(li);
    };
});

sumBtn.addEventListener("click",()=>{
    const sum=calculateSum(numbers);
    sumResult.textContent=`Sum of numbers:${sum}`;
});
changeTitleStyle.addEventListener("click",()=>{
    title.style.color="blue";
});