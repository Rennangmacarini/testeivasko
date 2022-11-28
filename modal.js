
const modalButton = document.querySelectorAll("#button")
const modalContent = document.querySelector(".global-conteudo")
const modalIcon = document.querySelector(".icone")

for(let i=0; i < modalButton.length; i++ ) {
    modalButton[i].addEventListener('click', function(){
    modalContent.classList.remove("hide")
    });
}


modalIcon.addEventListener('click', function(){
    modalContent.classList.add("hide")
} )

