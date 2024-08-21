// console.log("start js on vs code");
// console.log("i linked js file to firefox brower by html file");
// name="WAQAS TARIQ"
// console.log("name");
// console.log(name);                              
// age=22
// console.log("age");
// console.log(age);
// priceofpen=45.44
// console.log("price of pen");
// console.log(priceofpen);
// x=null
// console.log(x);
// y=undefined
// console.log(y);
// isLearnig=true;
// console.log(isLearnig);
// aboutjs="javascript is dynamical lagu"
// console.log(aboutjs);
// const heightt=6;
// console.log(heightt);
// // heightt=7;
// // console.log(heightt);
// let a;
// console.log(a);
// {
//     let a=3;
//    console.log(a);
// }
// {
//     let b=5;
//    console.log(b);
// }

// // primitive and non-primitive data types

// let student={
//     fullName:"waqas tariq",
//     age:22,
//     haircolor:"blackish",
//     height:6 ,
//     ismature:"true"

// };
// console.log(student)
// console.log(student.age)
// console.log(student["age"])
// console.log(student.fullName)
// console.log(student["fullName"])

// let product={
//     name:"pen",
//     rating:  "4 star" ,
//     Deal:"5% off ",
//     PKR:"270"
//     // isFollow : false
   

// };
// console.log(product)
// console.log(product.rating)
// console.log(product["PKR"])
// console.log(product.Deal)
// console.log(product["Deal"])
// console.log(product.name)
// console.log(product["name"])

// console.log(typeof product["name"])
// console.log(typeof product.rating)
// console.log(typeof product)

// // arithmetic operator

// // let x=2;
// // let y=5;
// // console.log(x ** y);

// // operators in JS

// // equal to ==
// // not equal to !=
// // equal to & type ===
// // not equal to & type !==
// console.log(5==4)
// console.log(5!=4)
// let a=3
// let b="3"
// console.log(a==b)
// console.log(a===b)

//logical operator
// let a=3 
// let b=4
// let cond1=a<b //true
// let cond2=a===4 //true

// console.log(! (cond1||cond2))

//conditional statement
// let age=22
// if(age>=18){
    
// console.log("vote")
// }
// else{
    
// console.log("not vote")
// }

// let number=31
// if(number%2==0){
    
// console.log("even")
// }
// else{console.log("odd")}

// let umr=5
// let result= umr > 18?"vote":"notvote";
// console.log(result)

// alert("your identity!")

// let display=prompt("your identity!")
// console.count(display)

// let number
// number=prompt("Enter a Number")
// console.log(number)
// if(number%5==0){console.log("Multiple")}
// else{console.log("NOT Multiple")}

// let marks
// marks=prompt("Enter a marks")
// console.log(marks)

// if    (marks<=100 && marks>=80){ console.log("A")}
// else if(marks<=80 && marks>=60){ console.log("B")}
// else if(marks<=60 && marks>=45){ console.log("C")}
// else if(marks<=45 && marks>=33){ console.log("D")}
// else if(marks<=33 && marks>=1){ console.log("F")}
// else{console.log("wrong input")}

//LOOPs
//for loop
// for(let i=1;i<=10;i++){
//     console.log("F");
//     console.log("")
// }

// let num=prompt("enter a num")
// console.log(num)

// let sum=0
// for(i=1;i<=num;i++){ sum=sum+i}
// console.log(sum)

// let i=1
// while (i<=num) {
//     console.log(i)
//     i++    
// }

// let a=12;
// do{
//     console.log("muhafiz Aman k hum hn")
//     a++
// }while(a<=10)
// for of loop
// let word="youganda1"
// length=0
// for(let alphabet of word ){
//     console.log(alphabet);
//     length++ 
// }
// console.log(length); 

//for of loop
// let student={
//     name:"waqas tariq",
//     age:22,
//     js:"30%",
//     cgpa:2.4,

// };
// console.log(student)
// for(let keys in student){
    
// console.log(keys)
// // console.log(student[keys])

// }
//game
// let gameNum=25;
// let enterNUm=prompt("enter the game number")
// // enterNum=prompt("enter the gameNum")
// while(enterNUm!=gameNum){
//    enterNUm= prompt("Try again")
// }
// console.log(enterNUm)

// variable="sentence"
// console.log(variable[0])
// console.log(variable[1])
// console.log(variable[2])

// let st1="hello";
// let str2="world";
// let newq = str2+str1;

// console.log(newq);

// wari="sentences"
// // wari.replace(searchval,newval)
// changed=wari.replace("ten","10")
// console.log(changed)

//prompt function
// let input=prompt("enter a name for userName")
// console.log("@",input,"0078")

// let fullName=prompt("enter fullName")

// userName="@"+fullName+fullName.length
// console.log(fullName)
// console.log(userName)

//ARRAYS
// Array=[1,2,3,4,5]
// console.log(Array)

// marks=["w","q","a","s"]

// console.log(marks)
// console.log(marks[00],marks[02])
// marks[2]="T"
// console.log(marks[2],marks[0],marks[1])

// let cities=["skg","fsd","lhr","mltn"]
// // for(let indx=0; indx<cities.length; indx++) {
// //     console.log(cities[indx])
// // }
// sum=0
// for(let city of cities){
//     // console.log(city.toLocaleUpperCase())
//    sum=sum+1

// }

// average and sum of array elements

// let marks=[85,67,59,84,93,44,32]
// let sum=0
// for(let value of marks){
//    sum=sum+=value
//    console.log(sum)
// }
// average=sum/marks.length
// console.log(average)

//10% off
let colors =[250,645,300,900,50]
// let outp;
for(let prise of colors){
   off= prise/10;
//    console.log(off)
   remaining=prise-off
   console.log(remaining)
}
// console.log(colors)









