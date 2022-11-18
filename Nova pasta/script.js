const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


let play = document.querySelector('.play')
let remover = document.querySelector('.remover')
let encarteOne = document.querySelector('#one')
let encarteTwo = document.querySelector('#two')


play.addEventListener('click', function(){
    play.classList.add('hide')
    remover.classList.remove('hide')
})

remover.addEventListener('click', function() {
    remover.classList.add('hide')
    play.classList.remove('hide')
})

encarteOne.addEventListener('click', function(){
    play.classList.add('hide')
    remover.classList.remove('hide')
})

encarteTwo.addEventListener('click', function(){
    play.classList.remove('hide')
    remover.classList.add('hide')
})