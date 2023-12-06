import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
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
const auth = getAuth(app);
const db = getFirestore(app);

let btn = document.querySelector('#subtn')

if (btn) {

  btn.addEventListener('click', () => {

    let getemail = document.querySelector('#semail')
    let getpass = document.getElementById('spass')

    createUserWithEmailAndPassword(auth, getemail.value, getpass.value)
      .then(async (userCredential) => {

        const user = userCredential.user;
        console.log(user)

        try {
          const docRef = await addDoc(collection(db, "users"), {
            first: getemail.value,
            last: getpass.value,

          });
          console.log("Document written with ID: ", docRef.id);
          alert('han signup hogaya')
          location.href = './signin.html'
        }
        catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error code ==> ', errorCode)
        console.log('error message ==> ', errorMessage)
      });
  })




}


let btn1 = document.querySelector('#sibtn')
if (btn1) {

  btn1.addEventListener('click', () => {

    let email = document.querySelector('#lemail')
    let password = document.getElementById('lpass')

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email)

        location.href = './welcome.html'
      })
      .catch((error) => {
        console.log(error)
      });
  })
}


let getBtn = document.querySelector('#show')
if(getBtn){
  
  getBtn.addEventListener('click', async () => {
  
    const hashir = await getDocs(collection(db, "users"));
    let getDiv = document.getElementById('getusers')

    hashir.forEach((doc) => {
      getDiv.innerHTML += `
      <div>${doc.data().first}</div>
      <div>${doc.data().last}</div>
      `
      // console.log(doc.data());
    });
  })
}