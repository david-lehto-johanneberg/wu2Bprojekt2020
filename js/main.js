function showMenu(){
  let menu = document.querySelector('.menu');

  menu.classList.toggle('show-menu');

  let fade = document.querySelector('.fade');

  fade.classList.toggle('visible');


};

let button = document.querySelector(".menu-button")
let fade = document.querySelector('.fade')

button.addEventListener("click",showMenu)
fade.addEventListener("click",showMenu)