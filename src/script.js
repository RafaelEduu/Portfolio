/*  window.alert ('Bem Vindo!!! Este portfólio ainda não está 100% pronto! Quando eu terminar irei postar o link novamente.')  */


const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
const target = document.querySelectorAll ('[data-anime]');

const animation = 'animate';

function animeScroll () {
    const windowTop = window.pageYOffset + ((window.innerHeight * 4) / 4);;
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animation)
        }
        else {
            element.classList.remove(animation);
        }
    })
}

animeScroll();

if(target.length){
window.addEventListener('scroll', debounce(function(){
    animeScroll();
    
}, 200));
}

const button = document.getElementById('discord')
const modal = document.querySelector('dialog')
const buttonClose = document.querySelector('dialog button')

button.onclick = function (){
  modal.showModal()
}

buttonClose.onclick = function(){
  modal.close()
}