// setInterval(function(){
//     document.write('hello world')
// },1000)

// function timer(){
//     document.write('Saad')
// }
// setInterval(timer,4000)

// setTimeout(function(){
//     document.write('abcd')
// },4000)


// var num = 0
// setInterval(function(){
//     num++
//     console.log(num)
// },10)

var minutes = 0
var seconds = 0
var miliseconds = 0
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmili = document.getElementById('msec')
var interval;



function start(){
    interval = setInterval(function(){
        miliseconds++
        getmili.innerHTML = miliseconds
        if(miliseconds >= 100){
            seconds++
            getsec.innerHTML = seconds
            miliseconds = 0
        }
        else if(seconds >= 5){
            minutes++
            getmin.innerHTML = minutes
            seconds = 0
        }
    },10)  
    document.getElementById('sss').disabled = true
}
function stop(){
    clearInterval(interval)
    document.getElementById('sss').disabled = false
}

function reset(){
    minutes = 0
    miliseconds = 0
    seconds = 0
    getmin.innerHTML = minutes
    getsec.innerHTML = seconds
    getmili.innerHTML = miliseconds
}














