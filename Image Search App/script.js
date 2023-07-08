const accessKey = "XsfQFd7q5D_eqa43PaFoAIud2FQGTTIDF0lziA8FIzY";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResultEl = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImage() {
  inputData = inputEl.value;
  const url = `https://api.unsplash.com/search/photos?page = ${page}&query = ${inputData}&client_id=${accessKey}`;
  // console.log(url);

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  if (page === 1) {
    searchResultEl.innerHTML = "";
  }

  results.map((result) => {
    //div
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    //image
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    //imagelink
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    //append

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultEl.appendChild(imageWrapper);
  });

  page++;

  if (page > 1) {
    showMore.style.display = "block";
  }
}

//Events

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImage();
});

showMore.addEventListener("click", () => {
  searchImage();
});
