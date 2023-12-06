// function abc(){
//     alert('hello world')
// }

// for(var i=0; i<=10; i++){
//     abc()
// }

function sum(a=2,b=2,c=2){
    var t = +prompt('Enter value 1')
    var t1 = +prompt('Enter value 2')
    var t2 = +prompt('Enter value 3')
    if(t == '' && t1 == '' && t2 == ''){
        return a + b + c 
    }
    else{
        return t + t1 + t2
    }
}

alert(sum())







// var t = +prompt('Enter value 1')
// var s = +prompt('Enter value 2')
// var f = +prompt('Enter value 3')

// alert(sum())



// alert(sum(10))
// alert(sum())




















