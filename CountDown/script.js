const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

function countdown() {
    const CurrentYear = new Date().getFullYear();
    //new year date
    const newYear = new Date(`January 1 ${CurrentYear + 1} 00:00:00`);

    //current date
    const currentDate = new Date();
    const dif = newYear - currentDate;
    const d = Math.floor(dif / 1000 / 60 / 60 / 24);
    const h = Math.floor(dif / 1000 / 60 / 60 / 24) % 24;
    const m = Math.floor(dif / 1000 / 60) % 60;
    const s = Math.floor(dif / 1000) % 60;
    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
    //console.log(d+" "+h+" "+m+" "+s);
}
setInterval(countdown, 1000)