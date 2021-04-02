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
let Donations = firebase.database().ref("Donations");

// Listen for a submit
document.querySelector(".payment").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
   //   Get input Values
   let fullname = document.querySelector(".name").value;
   let email = document.querySelector(".email").value;
   let amount = document.querySelector(".amount").value;
  

   console.log(fullname, email,amount);

   saveDonations(fullname, email,amount);

   document.querySelector(".payment").reset(); 

}
   // Save infos to Firebase
function saveDonations(fullname, email, amount) {
  let newDontations = Donations.push();

  newDontations.set({
    fullname: fullname,
    email: email,
    amount:amount,
    
    //picture:picture,
    //reason:reason,
  });
  window.alert("Thank you for your kind donation!");
 

  };