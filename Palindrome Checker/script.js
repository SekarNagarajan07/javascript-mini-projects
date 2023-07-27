const txtInput = document.querySelector(".inputs input");
checkbox = document.querySelector(".inputs button");
infoTxt = document.querySelector(".info-txt");
let filterInput;

txtInput.addEventListener("keyup", () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-z0-9]/gi, "");
  if (filterInput) {
    return checkBtn.classList.add("active");
  }

  checkBtn.classList.remove("active");
});
