/*function signup(){
$(document).ready(()=>{
        // Do stuff here, including _calling_ codeAddress(), but not _defining_ it!
    
  
	var email = document.getElementById("email");
    var password= document.getElementById("pass");
    
    
    const promise = auth().createUserWithEmailAndPassword( email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up");
 
})
}*/


/*window.alert("Mujeeb, dont worry it links :)");*/


/*Mujeeb JS*/
function signupfunc(){
	    // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAa7iEF-LLXz0b4SsfxdrirbXnwLhvDonk",
    authDomain: "ceylonheartswebsite2.firebaseapp.com",
    databaseURL: "https://ceylonheartswebsite2-default-rtdb.firebaseio.com",
    projectId: "ceylonheartswebsite2",
    storageBucket: "ceylonheartswebsite2.appspot.com",
    messagingSenderId: "212125160276",
    appId: "1:212125160276:web:8129a7e527bce720582ec1",
    measurementId: "G-H4LS675FYM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  var namev, emailv, passv, numv, idv, samcv, typev, myfilev, textv;

  function Ready(){
    namev = document.getElementById('name').value;
    emailv = document.getElementById('email').value;
    passv = document.getElementById('pass').value;
    numv = document.getElementById('num').value;
    idv = document.getElementById('ID').value;
    samcv = document.getElementById('Scard').value;
    typev = document.getElementById('type').value;
    myfilev = document.getElementById('myfile').value;
    textv = document.getElementById('pic').value;
  }


      document.getElementById('signup').onclick = function(){
    Ready();
    firebase.database().ref('user').set({
      fname = namev;
      femail = emailv;
      fpass = passv;
      fnum = numv;
      fid = idv;
      fsamc = samcv;
      ftype = typev;
      fmyfile = myfilev;
      ftext = textv;
    });
  }
}