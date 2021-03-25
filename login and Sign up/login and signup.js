function signup(){
$(document).ready(()=>{
        // Do stuff here, including _calling_ codeAddress(), but not _defining_ it!
    
  
	var email = document.getElementById("email");
    var password= document.getElementById("pass");
    
    
    const promise = auth().createUserWithEmailAndPassword( email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up");
 
})
}

