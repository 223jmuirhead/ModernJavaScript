//let email = "mario@thenetninja.co.uk";

//let result = email.replace("m", "w");

//let result = email.replace("n", "w");

//console.log(result);

//let radius = 10;
//const pi = 3.14

// console.log(radius, pi); 

// console.log(10/2);
// let result = radius % 3;
// let result = pi * radius**2;

 // let likes = 10;

// likes++;

// likes += 10;

// console.log(likes);

// let result = "the blog has " + likes + " likes.";

// console.log(result);


// const title = "Best reads of 2019"

// const author = "Mario";

// const likes = 30;

// let result = "The blog called " + title + " by " + author + " has " + likes + " likes ";

// console.log(result);

// let result = `The blog called ${title} by ${author} has ${likes} likes`;

// console.log(result);

// let html = `
  // <h2>${title}</h2>
  // <p>${author}</p>
  // <span> This blog has ${likes} likes</span>
// `;

// let ninjas = ["shaun", "ryu", "chun-li"];

// ninjas[1] = "ken";

// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];

// console.log(ages[2]);

// console.log(ninjas.length);

// let result = ninjas.join(', ');

// let result = ninjas.indexOf("chun-li");

// let result = ninjas.concat(["ken", "cyrstal"]);

// let result = ninjas.push("ken");
// result = ninjas.pop();

// console.log(result);

// let age = null; 

// console.log(age, age + 3, `the age is ${age}`);

// console.log(true, false, "true", "false");

// let email = "luigi@thenetninja.co.uk";
// let names = ["mario", "luigi", "toad"];
// // let result = names.includes("luigi");

// // console.log(result);

// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 20);

// let name = "shaun";

// console.log(name == "shaun");
// console.log(name == "Shaun");
// console.log(name > "Shaun");
// console.log(name > "Cyrstal");

// let age = 25;

// console.log(age == 25);
// console.log(age == "25");
// console.log(age != 25);
// console.log(age != "25");

// console.log(age === 25);
// console.log(age === "25");
// console.log(age !== 25);
// console.log(age !== "25");

// let score = "100";

// score = Number(score);

// console.log(score + 1);
// console.log(typeof score);

// let result = String(50);

// console.log(result);

// let result = Boolean(100);

// let result = Boolean("");

// console.log(result, typeof result);

//LOOPS

// for(let i = 0; i < 5; i++){
//   console.log("in loop:", i);
// }

// console.log("loop finished");

// const names = ["shaun", "mario", "luigi"];

// for(let i = 0; i < names.length; i++){
//   // console.log(names[i]);
//   let html = `<div>${names[i]}</div>`
//   console.log(html);
// }

// const names = ["shaun", "mario", "luigi"]
// let i = 0;

// while(i < 5){
//   console.log("in loop:", i);
//   i++;
// }

// while(i < names.length){
//   console.log(names[i]);
//   i++;
// }

// let i = 1;

// do{
//   console.log("val of i is: ", i);
//   i++;
// } while(i < 5);

// const age = 25;

// if(age > 20){
//   console.log("you are over 20 years old");
// }

// const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];

// if(ninjas.length > 4){
//   console.log("That's a lot of ninjas");
// }

// const password = "p@sswo";

// if(password.length >= 12 && password.includes("@")){
//   console.log("That password is mighty strong");
// } else if(password.length >= 8 || password.includes("@") && password.length > 5){
//   console.log("That password is strong enough!");
// } else {
//   console.log("That is a weak password!");
// }

// let user = false;

// if(!user){
//   console.log("You must be logged in to continue");
// }

// console.log(!true);
// console.log(!false);

// const score = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < score.length; i++){

//   if(score[i] === 0){
//     continue;
//   }
  
//   console.log("your score: ", score[i]);

//   if(score[i] === 100){
//     console.log("Congrats, you got the top score!");
//     break;
//   }
// }

// const grade = "A";

// switch(grade){
//   case "A":
//     console.log("Woohoo! Good job! You got an A!")
//     break;
//   case "B":
//     console.log("Good job! You got a B!")
//     break;
//   case "C":
//     console.log("You got a C.")
//     break;
//   case "D":
//     console.log("Oof, you got a D.")
//     break;
//   case "E":
//     console.log("E?")
//     break;
//   default:
//     console.log("What? How?")
//     break;
// }

// let age = 30;

// let age = 50;

// if(true){
//   let age = 40;
//   let name = "shaun";
//   console.log("Inside fist code block: ", age, name);

//   if(true){
//     console.log("Inside 2nd code block: ", age);
//   }
// }

// console.log("Outside code block: ", age, name);

// function greet(){
//   console.log("Hello there.");
// }

// const speak = function(){
//   console.log("Good day.");
// };

// // greet();
// // greet();
// // greet();

// speak();

function speak(){
  console.log(`good day ${name}`);
}

speak("Mario");