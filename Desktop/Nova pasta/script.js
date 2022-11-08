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