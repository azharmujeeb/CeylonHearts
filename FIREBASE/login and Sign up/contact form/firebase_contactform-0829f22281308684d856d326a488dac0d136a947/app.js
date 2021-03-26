// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDRgFg4v54qiCNOyAp-rYVMLjxSvRg9buc",
  authDomain: "ch-fund.firebaseapp.com",
  databaseURL: "https://ch-fund-default-rtdb.firebaseio.com",
  projectId: "ch-fund",
  storageBucket: "ch-fund.appspot.com",
  messagingSenderId: "711033521341",
  appId: "1:711033521341:web:9d38507b98f3d045f6a3d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
 
  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  

  console.log(name, email, message);


  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message){
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
   
  });
  window.alert("success")
}
