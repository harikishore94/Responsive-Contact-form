
  const firebaseConfig = {
    apiKey: "AIzaSyAEmCulMq50LOm8o4jDlhYSHfOl9YJVN0g",
    authDomain: "contactform-517a8.firebaseapp.com",
    databaseURL: "https://contactform-517a8-default-rtdb.firebaseio.com",
    projectId: "contactform-517a8",
    storageBucket: "contactform-517a8.appspot.com",
    messagingSenderId: "201941619860",
    appId: "1:201941619860:web:d15de9b7f9c67635079081",
    measurementId: "G-WK330CZX5C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   reference DB and return obj
var formDB = firebase.database().ref('contactForm');

document.getElementById("contactForm").addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault();
    var name =  getElementValue('name');
    var email =  getElementValue('email');
    var phone =  getElementValue('phone');
    var message =  getElementValue('message');

    console.log(name, email, phone, message)
    saveDetail(name, email, phone, message)
    document.querySelector(".alert").style.display = "block";

    setTimeout(()=>{
    document.querySelector(".alert").style.display = "none";


    },5000)
    document.getElementById('contactForm').reset();
}

const saveDetail = (name, email, phone, message) =>{
    var getFormDetail = formDB.push();
    getFormDetail.set({
        name : name,
        email: email,
        phone: phone,
        message: message,
    })
}


const getElementValue = (id) => {
    return document.getElementById(id).value;
}