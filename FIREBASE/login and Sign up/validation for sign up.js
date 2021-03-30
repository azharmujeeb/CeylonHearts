var a = document.getElementById("password").value;

  if (a="") {
    document.getElementById("message").innerHTML=" Please enter a password."
  }
   if (a.length < 8) {
    document.getElementById("message").innerHTML=" Please enter a password greater than 8 Character"
  }
   if (a.length > 20) {
    document.getElementById("message").innerHTML=" Please enter a password less than 20 Character"
  }
  