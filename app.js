  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
  import { getDatabase , set,ref } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";
  import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js"
 
  const firebaseConfig = {
    apiKey: "AIzaSyDx2eD77O9yiBd_c40KZsOVT5n9_DFJWwM",
    authDomain: "react-9cde4.firebaseapp.com",
    projectId: "react-9cde4",
    storageBucket: "react-9cde4.appspot.com",
    messagingSenderId: "960636006222",
    appId: "1:960636006222:web:7caa8b87dcef22cf76381f",
    measurementId: "G-8FSZGWTJDK"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const Database= getDatabase(app)
  const auth = getAuth();
  const db = getFirestore(app);

  document.getElementById('reg-btn').addEventListener('click' , function(){
    document.getElementById('register-div').style.display='inline';
    document.getElementById('login-div').style.display='none';
})

document.getElementById("log-btn").addEventListener('click' , function(){
    document.getElementById('register-div').style.display='none';
    document.getElementById('login-div').style.display='inline';
})

document.getElementById('register-btn').addEventListener('click' , function(){
  const registerEmail =document.getElementById('register-email').value
  const registerpassword =document.getElementById('register-password').value
  
  createUserWithEmailAndPassword(auth, registerEmail, registerpassword)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById('register-div').style.display='none';
      document.getElementById('login-div').style.display='inline';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('result-box').style.display='inline';
      document.getElementById('register-div').style.display='none';
      document.getElementById('result').innerHTML='Sorry ! <br>'+errorMessage;
    });
  
  })

  document.getElementById('login-btn').addEventListener('click' , function(){
    const loginEmail =document.getElementById('login-email').value
    const loginPassword =document.getElementById('login-password').value

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById('register-div').style.display='none';
      document.getElementById('login-div').style.display='none';
      document.getElementById('result-box').style.display='inline';
      document.getElementById('log-out-btn').style.display='inline';
      document.getElementById('result').innerHTML='Welcome <br>'+registerEmail+'Was Registered Successfully';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('result-box').style.display='inline';
      document.getElementById('log-out-btn').style.display='inline';
      document.getElementById('register-div').style.display='none';
      document.getElementById('login-div').style.display='none';
      document.getElementById('result').innerHTML='Sorry ! <br>'+errorMessage;
    });
  })


  document.getElementById('log-out-btn').addEventListener('click' , function(){
    signOut(auth).then(() => {
        document.getElementById('result-box').style.display='none';
        document.getElementById('login-div').style.display='inline';
        document.getElementById('login-email').value='';
        document.getElementById('login-password').value='';

      }).catch((error) => {
        document.getElementById('result').innerHTML='Sorry ! <br>'+errorMessage;
      });
})