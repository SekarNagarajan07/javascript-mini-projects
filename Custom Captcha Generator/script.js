// Selecting necessary DOM elements

const captchaTextBox = document.querySelector(".captch_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captch_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

// Variable to store generated captcha
let captchaText = null;

// Function to generate captcha
const generateCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 7);
  const randomStringArray = randomString.split("");
  const changeString = randomStringArray.map((char) =>
    Math.random() > 0.5 ? char.toUpperCase() : char
  );
  captchaText = changeString.join("");
  captchaTextBox.value = captchaText;
  console.log(captchaText);
};

const refreshBtnClick = () => {
  generateCaptcha();
  captchaInputBox.value = "";
  captchakeyUpValidate();
};

const captchakeyUpValidate = () => {
  submitButton.classList.toggle("disabled", !captchaInputBox.value);

  if (!captchaInputBox.value) message.classList.remove("active");
};
// Function to validate the entered captcha

const submitBtnClick = () => {
  captchaText = captchaText
    .split(" ")
    .filter((char) => char !== "")
    .join(" ");
  message.classList.add("active");
  if (captchaInputBox.value === captchaText) {
    message.innerText = "Entered captcha is not correct";
    message.style.color = "red";
  } else {
    message.innerText = "Entered captcha is correct";
    message.style.color = "green";
  }
};

// Add event listeners for the refresh button, captchaInputBox, submit button

refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchakeyUpValidate);
submitButton.addEventListener("click", submitBtnClick);

generateCaptcha();
