/*function signup(){

        // Do stuff here, including _calling_ codeAddress(), but not _defining_ it!
    
  
	var email = document.getElementById("email");
    var password= document.getElementById("pass");
    
    
    const promise = auth().createUserWithEmailAndPassword( email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up");
 

} */

//sdk for firebase
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

// referencing the users 
let signupInfo = firebase.database().ref("userdetails");

// Listen for a submit
document.querySelector(".signup-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
   //   Get input Values
   let fullname = document.querySelector(".name").value;
   let email = document.querySelector(".email").value;
   let password = document.querySelector(".pass").value;
   let phone = document.querySelector(".Number").value;
   let IDnum = document.querySelector(".ID").value;
   let samCard = document.querySelector(".Scard").value;
   let cause = document.querySelector(".custom-select").value;
   let picture = document.querySelector(".pic").value;


   console.log(fullname, email, password,phone,IDnum,samCard,cause,picture);

   saveContactInfo(fullname, email, password, phone, IDnum,samCard,cause,picture);

   document.querySelector(".signup-form").reset(); 

}
   // Save infos to Firebase
function saveContactInfo(fullname, email, password,phone,IDnum,samCard,cause,picture) {
  let newSignupInfo = signupInfo.push();

  newSignupInfo.set({
    fullname: fullname,
    email: email,
    password: password,
    phone:phone,
    IDnum:IDnum,
    samCard:samCard,
    cause:cause,
    picture:picture,
  });
  window.alert("success!");
 
}
