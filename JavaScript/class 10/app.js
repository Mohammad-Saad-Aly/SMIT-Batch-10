// function abc(){

//     document.getElementById('ttt').innerHTML = 'hello world'
//     document.getElementById('anc').style.display = 'none'

//     // document.getElementById('abc').innerHTML = 'hello world'
// }

function dabaya(e){
    document.getElementById('inp').value += e
}

function eq(){
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}

function clr(){
    document.getElementById('inp').value = ''
}

function ccc(){
    var a = document.getElementById('inp')
    a.value = a.value.slice(0,-1)
}