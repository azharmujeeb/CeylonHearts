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
let signupinfo = firebase.database().ref("userdetails");

// Listen for a submit

document.querySelector(".signup-form").addEventListener("submit", submitForm);


/*function twoFunc(){
  if (function validate()==true) {
    document.querySelector(".signup-form").addEventListener("password", submitForm);
  }else{
    window.alert("Error");
  }
}*/


  /*

  //Mujeeb's validtion
  var a = document.getElementById("password").value;
  var b = document.getElementById("password2").value;

  if (a==null) {
    document.getElementById("message").innerHTML="Please enter a password."
  }
  if (b==null) {
    document.getElementById("message").innerHTML="Please enter a password."
  }
  if (a.length < 8 && b.length < 8) {
    document.getElementById("message").innerHTML="Enter password more than 8 characters."
    document.getElementById("message2").innerHTML="Enter password more than 8 characters."
  }
  if (a.length > 20 && b.length > 20) {
    document.getElementById("message").innerHTML="Enter password less than 20 characters."
    document.getElementById("message2").innerHTML="Enter password less than 20 characters."
  }
  if (a!=b) {
    document.getElementById("message2").innerHTML="Passwords doesn't match."
  }

  submitForm(e);

}
*/
function submitForm(e) {

  e.preventDefault();

   //   Get input Values
   let fullname = document.querySelector(".name").value;
   let email = document.querySelector(".email").value;
   let password = document.querySelector(".pass").value;
   let phone = document.querySelector(".Number").value;
   let IDnum = document.querySelector(".ID").value;
   //let samCard = document.querySelector(".Scard").value;
   let cause = document.querySelector(".custom-select").value;
   //let picture = document.querySelector(".pic").value;
   //let reason = document.querySelector(".reason").value;
   



   console.log(fullname, email, password,phone,IDnum,cause);

   saveSignupinfo(fullname, email, password, phone, IDnum,cause);

   document.querySelector(".signup-form").reset(); 

}
   // Save infos to Firebase
function saveSignupinfo(fullname, email, password,phone,IDnum,cause) {
  let newSignupInfo = signupinfo.push();

  newSignupInfo.set({
    fullname: fullname,
    email: email,
    password: password,
    phone:phone,
    IDnum:IDnum,
    //samCard:samCard,
    cause:cause,
    //picture:picture,
    //reason:reason,
  });
  window.alert("success!")
 

  };

  // login firebase 

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }


//select the img
				//variables
				var ImgName, ImgUrl;
				var Files = [];
				var reader =  new FileReader();
//SELECTION PROCESS
document.getElementById("select").onclick = function(e){

  var input = document.createElement('input');
  input.type = 'file';

  input.onchange = e => {
    files = e.target.files;
    reader = new FileReader();
    reader.onload = function(){
     // document.getElementById("myimg").src = reader.result;
    }
    reader.readAsDataURL(files[0]);
  }

  input.click();
}


// upload the image with name of img
document.getElementById('Scard').onclick = function(){
  ImgName = document.getElementById('namebox').value;
  var uploadTask = firebase.storage().ref('Samudhi cards/'+ImgName+".png").put(files[0]);

  uploadTask.on('state_changed', function(snapshot){
    var progress = (snapshot.bytesTranferred / snapshot.totalBytes)*100;
    document.getElementById('UpProgress').innerHTML = 'upload '+progress+'%';
  },

  function(error){
    alert('Error in saving the image');
  }
  )}
