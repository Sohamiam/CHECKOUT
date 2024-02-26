const notWorkingModal = document.getElementById("not-working-modal");
const applyBtn = document.querySelector(".promo button");
const closeBtn = notWorkingModal.querySelector(".close");

applyBtn.addEventListener("click", function() {
  notWorkingModal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  notWorkingModal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == notWorkingModal) {
    notWorkingModal.style.display = "none";
  }
});