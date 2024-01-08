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
