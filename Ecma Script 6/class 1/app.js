// block scope
// const abc = 'abcd'
// {
//     const abc = 'efgh'
//     console.log(abc)
// }
// console.log(abc)


// function scope
// function foo(){
//     const abc = 'saad'
// }
// console.log(abc)


// reDeclared or reAssigned
// const abc = 'muskan'
// abc = 'kiran'
// console.log(abc)


// hositing
// console.log(bc)
// const bc = 'shamim'


// template literals
// var firstName = 'Noman'
// var lastName = 'Shamim'
// var merge = `Your first
// name is ${firstName} & Your last name is ${lastName}`
// var merge = firstName + " " + lastName //purana
// console.log(merge)



// default params
// function foo(a = 4,b = 5){
//     return a + b
// }
// console.log(foo(10,10))




// rest para

function foo(...rest) {

    let num = 0

    for (let key in rest) {


        num += rest[key]

        // console.log(rest[key])
    }

    console.log(num)


    // console.log(a,b, ...rest)
}

foo(8, 9, 10, 11, 12, 13, 14)