// var obj = {
//     s_id : '01',
//     s_name : 'Saad Ali',
//     s_age : 23,
//     s_roll : 'CSC-20s-088',
//     s_depart : 'CS'
// }
// for(var key in obj){
//     document.write(key," : ",obj[key],"<br>")
// }





// console.log(obj)

// document.write(obj.s_id,obj.s_name)

// localStorage.setItem('fisrtName','Saad')

// localStorage.clear()

// sessionStorage.setItem('lastName','Ali')


function signup(){
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('Email',email)
    localStorage.setItem('Password',pass)
    location.href = './signin.html'
}

function signin(){
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value
    if(localStorage.getItem('Email') == email && localStorage.getItem('Password') == pass){
        location.href = './welcome.html'
    }
    else{
        alert('Chal nikal sign up kar k aaaoo  ...')
        location.href = './signup.html'
    }

}



