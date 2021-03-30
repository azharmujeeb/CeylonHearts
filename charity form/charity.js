//configurations
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
let Charitypic = firebase.database().ref("charityform");

// Listen for a submit
document.querySelector(".charity-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
   //   Get input Values
   
   let email = document.querySelector(".email").value;
   let address = document.querySelector(".address").value;
   let message= document.querySelector(".message").value;


   console.log(email,address,message);

   saveCharitypic(email,address,message);

  // document.querySelector(".charity-form").reset(); 

}
   // Save infos to Firebase
function saveCharitypic( email,address,message) {
  let newCharitypic = Charitypic.push();

  newCharitypic.set({
    
    email: email,
    address:address,
    message:message,
    
  });
// window.alert("success!");
 

  };
				        
					//-------------------charity picture-----------------
					//variables
					var ImgName;
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
							//document.getElementById("myimg").src = reader.result;
							}
							reader.readAsDataURL(files[0]);
						}

						input.click();

						
					}
					

					//UPLOAD PROCESS
					document.getElementById('pic').onclick = function(){
						ImgName = document.getElementById('namebox').value;
						var uploadTask = firebase.storage().ref('charity/'+ImgName+".png").put(files[0]);

						uploadTask.on('state_changed', function(snapshot){
							var progress = (snapshot.bytesTranferred / snapshot.totalBytes)*100;
							document.getElementById('UpProgress').innerHTML = 'upload '+progress+'%';
						},


						function(error){
							alert('Error in saving the image');
						},

					/*	function(){
							uploadTask.snapshot.ref.getDownloadURL().then(function(url){
								ImgUrl = url;
							});

							firebase.database().ref('charity/'+ImgName).set({
								Name: ImgName,
								Link: ImgUrl
							});
							alert('Image added successfully.');
					*/	

						);
					}