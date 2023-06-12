const form = document.querySelector("form");
eField = form.querySelector(".email");
eInput = form.querySelector("input");
pField = form.querySelector(".password");
pInput = form.querySelector("input");

//Email field

function checkEmail() {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!eInput.value.match(pattern)) {
    eField.classList.add('error');
    eField.classList.remove('valid');
    let errorTxt = eField.querySelector(".error-txt");
    (eInput.value != "") ? errorTxt.innerText = 'Enter a valid email address' : errorTxt.innerText = 'Please enter a valid email address';
  } else {
    eField.classList.add('valid');
    eField.classList.remove('error');
  }
}

//password field

function checkPass() {
  if(pInput.value == "") {
    pField.classList.add('error');
    pField.classList.remove('valid');
}else {
  pField.classList.add('valid');
  pField.classList.remove('error');
}
}
if(!eField.classList.contains("error") && !pField.classList.contains("error")) {
  window.location.href = form.getAttribute("action");
} 

//submit field

form.onsubmit = (e)=> {
  e.preventDefault();

  (eInput.value =="") ? eField.classList.add("shake", "error") :checkEmail();

  (pInput.value =="") ? pField.classList.add("shake", "error") :checkPass();

  setTimeout(()=> {
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500)

  eInput.onkeyup = ()=> {checkEmail();}
  pInput.onkeyup = ()=> {checkPass();}
}




