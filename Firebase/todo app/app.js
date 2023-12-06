import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB5l3CcQPo923RtIErnKroAlHO9uu-IRqw",
    authDomain: "smitb10.firebaseapp.com",
    projectId: "smitb10",
    storageBucket: "smitb10.appspot.com",
    messagingSenderId: "730318374002",
    appId: "1:730318374002:web:13ce8c850ae58cbd6c2eeb",
    measurementId: "G-Q9ST507JWJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.addtodo = async function () {
    let getinp = document.querySelector('#getinp')
    const docRef = await addDoc(collection(db, "todos"), {
        name: getinp.value,
        time: new Date().toLocaleString()
    });
    console.log("Document written with ID: ", docRef.id);

}

function getData() {
    let ul = document.querySelector('#getul')
    onSnapshot(collection(db, 'todos'), (data) => {
        data.docChanges().forEach((newData) => {

            if (newData.type == 'removed') {
                let del = document.getElementById(newData.doc.id)
                del.remove()
            }
            else if(newData.type == 'added') {
                // console.log(newData)
                ul.innerHTML += `
                            <li id=${newData.doc.id}>${newData.doc.data().name} <br> ${newData.doc.data().time} <button onclick="delTodo('${newData.doc.id}')">Delete</button> <button onclick="edit(this,'${newData.doc.id}')">Edit</button></li>
                            `

            }
           

        })
    })
}

getData()

async function delTodo(id) {
    await deleteDoc(doc(db, "todos", id));
}


async function edit(e,id) {
    let editval = prompt('Enter Edit value')

    e.parentNode.firstChild.nodeValue = editval

    await updateDoc(doc(db, "todos", id), {
        name: editval,
        time: new Date().toLocaleString()
    });
}


window.getData = getData
window.delTodo = delTodo
window.edit = edit