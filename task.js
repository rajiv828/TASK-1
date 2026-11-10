
let studentName = "Rajiv A";
console.log(typeof(studentName));  // 1


let  employeeAge = 21;
console.log(typeof( employeeAge)); // 2


let isWorking = true;
console.log(typeof(isWorking)); // 3 


let a ;
console.log(a) // 4


let b = "name";
let c = 21;
let d = true;
let e ;
let f = null; // 5


console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f)); // 6 



let courseName =  "JavaScript" ;
console.log(courseName); // 7

let batchNumber = 42;
console.log(typeof(batchNumber)); // 8



let fruits =["apple","orange","strawberry","grapes","banana"];
console.log(fruits) // 9

console.log(fruits[0]); // 10
console.log(fruits[2]); // 11 
console.log(fruits[fruits.length-1]); // 12 

let info =["Rajiv A", 18 , "coimbatore","Frontend developer"]; // 13

console.log(info[0]);
console.log(info[1]);
console.log(info[2]);
console.log(info[3]); // 14 



let define =["Rajiv A" ,18, true, false]; // 15

console.log(define.length); //16 


let mobile =["redmi","oppo","vivo","apple","samsung"]; 
console.log(mobile[1]); // 17


let programminglanguages =["c","python","java","c++","kotlin","javascript"];
console.log(programminglanguages[programminglanguages.length-1]); // 18 


let  student  ={
    Name:"Rajiv a",
    Age:21,
    city:"coimbatore"

} // 19 

console.log(student.Name); // 20

console.log(student.Age); // 21


let employee = {
    Name:"Rajiv A",
    salary:25000,
    Designation:"frontend developer"
} // 22 


let skills ={
    skillset:["java","python","github","figma","javascript"]
}

console.log(skills.skillset[2]); // 23


let container ={
    fruit:"apple",
    Number:3,
    Boolean:true,
    toy:"RC car"
} // 24 

console.log(container.toy); // 25


let company ={
    companyname:"Stackly",
    location:"coimbatore",
    employeecount: 3000
    
} // 26 



let g = 4;
let h = 6;
console.log(g+h); //27

let k =34;
let m = 20;

console.log(k-m); //28


let num1 = 4;
let num2 = 2;
let num3 = 5;

console.log(num1*num2*num3); // 29 


console.log(100/5); // 30

const remainder = 25 % 4;
console.log(remainder) // 31

let expo = 3**4;
console.log(expo); //32 


let num4 = 5;
let num5 = 2;

console.log("add:",num4+num5);
console.log("sub:",num4-num5);
console.log("multi:",num4*num5);
console.log("div:",num4/num5);
console.log("mod:",num4%num5);
console.log("expo:",num4**num5);  // 33 


let pre = 10;
console.log(++pre); // 34

let post = 30;
console.log(post++); // 35 

let predec = 45;
console.log(--predec); // 36 


let postdec = 47;
console.log(postdec--); // 37 




let ai = 10;
let si= ai++;
console.log(ai); // output = 11
console.log(si); // output = 10   // 38 

let x = 15;
let y = ++x;
console.log(x); // output = 16
console.log(y); // output = 16    // 39 


let num11 = 25;
let num21 = --num11;
let num31 = num21++;
let num41 = ++num31; 


console.log(num11); // output = 24
console.log(num21); // output = 25
console.log(num31); // output = 25
console.log(num41); // output = 25   // 40

