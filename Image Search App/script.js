const accessKey = "XsfQFd7q5D_eqa43PaFoAIud2FQGTTIDF0lziA8FIzY";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResultEl = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImage() {
  inputData = inputEl.value;
  const url = `https://unsplash.com/search/photos?page = ${page}&query = ${inputData}&client_id=${accessKey}`;
  // console.log(url);

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResultEl.innerHTML = "";
  }
}
searchImage();
