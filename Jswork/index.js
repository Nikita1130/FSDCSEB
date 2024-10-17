// console.log('Welcome to JS');
// const a = 12
// console.log(a);
// if(a > 10)
// {
//     a = 23;
//     let b = 24;
//     console.log("a is inside the condition : " + a);
// }
// console.log("b is outside the condition : " + b);

/* let a = 12;
let b = "12";
console.log(typeof b);

let today = Date();
console.log(today);

if(a === b){
    console.log("Welcome");
}
else
{
    console.log("Chal nikal")
} */

/* let myname = "Harshil";
let college = "ABESEC";
let result = Hi , my name is ${myname} and I am doing my B-Tech from ${college};
console.log(result);
 */
// Objects in JS
/* 
let key = "sname";
const students = [
    {
    sname : "Harshil" , 
    course : "B-Tech" , 
    college : "ABESEC"
},
{
    sname : "Prabhat",
    course : "B-Tech" ,
    college : "ABESEC"
}
]
console.log(students);
console.log(students[0]);
console.log(students[1]);

console.log(students[1].sname + " " + students[1].college);
// console.log("Name : " + students.sname +" " +  "Course : " + students.course);
// const {sname} = students;
// console.log(sname);
// students[key] = "Gupta";
// console.log(students); */

//function

// function greeting(msg = "Welcome")
// {
//     console.log("Good Morning" + " " + msg);
// }
// greeting("Greetings");

// function sum(a,b,c=23)
// {
//     return a+b+c;
// }
// let data = sum(12 , 20)
// console.log(data);

// function selectLanguage(language)
// {
//     let data;
//     if(language == "C")
//     {
//         function cCompiler()
//         {
//             return "C Compiler Selected";
//         }
//         data = cCompiler();
//     }
//     if(language == "Java")
//     {
//         function javaCompiler()
//         {
//             return "Java Compiler Selected";
//         }
//         data = javaCompiler();
//     }
    
//     return data;
// }

// let result = selectLanguage("C");
// console.log(result);

console.log("Hello World");
let parent = document.getElementsByClassName("parent");
console.log(parent);
// // parent[0].innerText = "Data has changed";
// // parent[0].innerHTML = "<H1 style=color:red>Hello</H1>"

// const h1=document.createElement("H1");
// console.log(h1);
// h1.innerText = "ABES Engineering College";
// console.log(h1);
// h1.style.backgroundColor = "cyan";
// h1.style.color = "red";
// h1.style.padding = "20px";
// h1.style.marginLeft="300px";
// parent[0].appendChild(h1);

// const img = document.createElement("img");
// img.src = "./Image2.jpg";
// console.log(img);
// img.setAttribute("height" , "300");
// img.setAttribute("width" , "300");
// parent[0].appendChild(img);
// parent[0].removeChild(img);
// function getData()
// {
//     console.log("Hi , inside getData function");
//     parent[0].innerHTML = "<H2 style='color : red'>Hello , Event Handler</H2>";
// }

// const button = document.getElementsByClassName("btn");
// console.log(button);
// button[0].addEventListener("click" ,getData);

const promise=new Promise((resolve,reject)=>
{
    let a=12;
    if(a>10){
        resolve("Accepted");
    }
    else{
        reject("not Accepted");
    }
})
promise.then((msg)=>{console.log(msg)})
.catch((error)=>{console.log(error)})
.finally(()=>console.log("all resources  re closed"));