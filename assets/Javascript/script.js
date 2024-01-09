//Animation config
const observer = new IntersectionObserver(entries => {
  console.log(entries);
  entries[0].target.classList.add('init-hidden-off')
}, {threshold: [0, .5, 1]})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element =>{
  observer.observe(element)
})

//Slides config
let count = 1;
let intervalId;

document.getElementById("radio1").checked = true;

function startInterval() {
  intervalId = setInterval(function() {
    nextImage();
  }, 5000);
}

startInterval();

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
  radio.addEventListener('change', function() {
    clearInterval(intervalId); // Interrompe a mudança automática durante a interação manual
    count = parseInt(this.id.replace('radio', ''));
    startInterval(); // Reinicia o intervalo após a interação manual
  });
});

//Modalconfig
/*
const button = document.querySelector(".botao-produto");
const closeButton = document.querySelector("dialog .close-modal");
const modal = document.querySelector("dialog");

button.onclick = function() {
  modal.showModal()
}

closeButton.onclick = function(){
  modal.close()
}
*/

// Função para abrir o modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.showModal();
}

// Função para fechar o modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.close();
}


