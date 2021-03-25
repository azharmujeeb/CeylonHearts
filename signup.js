  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAa7iEF-LLXz0b4SsfxdrirbXnwLhvDonk",
    authDomain: "ceylonheartswebsite2.firebaseapp.com",
    projectId: "ceylonheartswebsite2",
    storageBucket: "ceylonheartswebsite2.appspot.com",
    messagingSenderId: "212125160276",
    appId: "1:212125160276:web:8129a7e527bce720582ec1",
    measurementId: "G-H4LS675FYM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  var con = firebase.database().ref("users");

  document.getElementById("CeylonHeartsWebsite2").addEventListener("submit",(e)=>{
    e.preventDefault();

    var userinfo=con.push();
    userinfo.set({
      username=getId("user"),
      password=getId("pass"),
      cpassword=getId("cpass"),
      email=getId("email")
    });
    alert("sent");
    console.log("sent");
    document.getElementById("CeylonHeartsWebsite2").reset();
  });

  function getId(id){
    return document.getElementById(id).value;
  }