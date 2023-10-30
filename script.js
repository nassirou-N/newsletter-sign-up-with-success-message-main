let email = document.getElementById("email");
let contauner = document.getElementById("container");
let submit = document.querySelector("form");
let no_valid = document.getElementById("novalid")

let succes = document.getElementById("succes");
let email_sucess = document.getElementById("email_sucess")

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

submit.addEventListener("submit", (e) => {
  let email_test = email.value;
    e.preventDefault();
  if (validateEmail(email_test)) {
    succes.classList.remove("hidden");
    email_sucess.textContent = email_test;
    contauner.classList.add("hidden");
    
  }else{
    
    email.classList.add('.error');
    no_valid.classList.add('novalided');
  }
});
