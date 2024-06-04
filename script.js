// funzione per contare i viaggi nella pagina e mostra un alert
const countTrips = () => {
  const cards = document.getElementsByClassName("card");
  alert("Scegli Eveline-R, abbiamo " + cards.length + " viaggi disponibili!");
};

// funzione che mette i badge hot
const badgeGen = () => {
  const cards = document.querySelectorAll("#collapseSummer .card");
  console.log(cards);
  for (let i = 0; i < cards.length; i++) {
    const currentCard = cards[i];
    currentCard.classList.add("position-relative");
    const badge = document.createElement("span");
    badge.className = "badge rounded-pill text-bg-danger position-absolute";
    badge.style.top = "5px";
    badge.style.right = "5px";
    badge.innerText = "HOT";
    currentCard.appendChild(badge);
  }
};
window.onload = badgeGen;
