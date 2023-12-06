// function foo(){
//     var a = document.getElementById('inp')
//     var b = a.setAttribute('class','aaa')
//     console.log(b)
// }

var getul = document.getElementById('ul')

function foo(){
   var a =  document.getElementById('inp')
   var li = document.createElement('li')
   var litext = document.createTextNode(a.value)
   
   li.appendChild(litext)
   getul.appendChild(li)
   a.value = ''
   var deletebtn = document.createElement('button')
   var deletebtnText = document.createTextNode('Delete')
   deletebtn.appendChild(deletebtnText)
   li.appendChild(deletebtn)
   deletebtn.setAttribute('onclick','del(this)')
   var editBtn = document.createElement('button')
   var editBtnText = document.createTextNode('Edit')
   editBtn.appendChild(editBtnText)
   li.appendChild(editBtn)
   editBtn.setAttribute('onclick','editfun(this)')
   deletebtn.setAttribute('class','btn btn-danger aaa')
   editBtn.setAttribute('class','btn btn-info aaa')
}
function deleteall(){
    getul.innerHTML = ''
}
function del(e){
    e.parentNode.remove()
}
function editfun(e){
    var a = prompt('Enter Edit value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
    
}

















