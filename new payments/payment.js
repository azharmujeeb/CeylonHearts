/* Refernece contactInfo collections
let paymentInfo = firebase.database().ref("payments"); */

// Listen for a submit
document.querySelector(".payment-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  console.log(123);
 /*
  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);


  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
  window.alert("success") */
}