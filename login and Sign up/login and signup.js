  
  //website firebase config below
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
  const auth = firebase.auth();
function signup(){
$(document).ready(()=>{
        // Do stuff here, including _calling_ codeAddress(), but not _defining_ it!
    
  
	var email = document.getElementById("email");
    var password= document.getElementById("pass");
    
    
    const promise = auth().createUserWithEmailAndPassword( email.value, password.value);
    promise.catch(e => alert(e.message));
    
 
})
}
alert("Signed Up");