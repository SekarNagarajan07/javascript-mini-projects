const counter = document.querySelector('.counter');
const incr = document.querySelector('.inc');
const decr = document.querySelector('.dec');

let count = 0;

incr.addEventListener("click",()=>{
    count++;
   counter.innerHTML= count;
});

decr.addEventListener("click",()=>{
    count--;
   counter.innerHTML= count;
});