function color() {
    var randomColor = (Math.floor(Math.random() * 17629439)).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
    var text = document.querySelector(".text");
    text.innerText = '#' + randomColor;
}