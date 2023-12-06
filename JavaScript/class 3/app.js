// // if statement

// // var a = 'Saad'
// // == value check karunga

// // if(5 === "5"){
// //     document.write('han sahi hai')
// // }
// // else{
// //     document.write('galat hai')
// // }


// // var email = 'admin'
// // var password = 'Admin'
// // var email = prompt('Enter Email');
// // var password = prompt('Enter Password');

// // if(email=='saad' || password == '123456'){
// //     document.write('login successful')
// // }
// // else{
// //     document.write('Invalid username or Password')
// // }

// // = assigning operator
// // == value match
// // === value k sath datatype bhi check
// // && left and right dono ka true hona zaruri hai
// // || koi bhi ek side ka true hona zaruri hai
// // < less than
// // > greater
// // <= less than equal to
// // >= greater than equal to
// // != not equal to 

// var userInput = +prompt('Enter Percentage')

// if(userInput >= 80 && userInput < 101){
//     document.write('A+')
// }
// else if(userInput >=70 && userInput < 80){
//     document.write('A')
// }

// else if(userInput >=60 && userInput < 70){
//     document.write('B')
// }

// else if(userInput >=50 && userInput < 60){
//     document.write('C')
// }

// else if(userInput >=40 && userInput < 50){
//     document.write('D')
// }
// else{
//     document.write('Nikal karwey')
// }


// naam ka prompt
// english
// urdu
// islamiat
// bio
// chem
// total = sab ka sum
// percentage ka variable (total / 500) * 100
// percentage ko check kara kar uska grade document.write mein


// console.log('hello world')

var num1=+prompt("enter value 1")
var num2=+prompt("enter value 2")
var op=prompt("Enter operator")
if(op=="+"){
    document.write(num1+num2)
}
else if(op=="-"){
    document.write(num1-num2)
}
else if(op=="*"){
    document.write(num1*num2)
}
else if(op=="/"){
    document.write(num1/num2)
}
else if(op=="%"){
    document.write(num1%num2)
}
else{
    document.write("Invalid Operator")
}