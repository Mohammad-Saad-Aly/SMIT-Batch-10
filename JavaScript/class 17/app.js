// var a = document.childNodes[1].childNodes[2].childNodes[1].textContent = 'hahaha'

// console.log(a)

// var a = document.getElementById('getUl')
// console.log(a.childNodes[3].textContent = 'HEHEHE')

// let a = document.getElementById('getli')
// console.log(a.parentNode.childNodes[1].textContent += ' Wasim Badami')



function changeColor(){
    let getElements = document.getElementsByTagName('p')
    for(let i=0; i<getElements.length; i++){
        getElements[i].className = 'abc'
        // getElements[i].style.backgroundColor = 'black';
        // getElements[i].style.color = 'white'
    }
}