const count = document.querySelector(".contagem");
const butoes = document.querySelector(".btns");

butoes.addEventListener("click", (e) => {
  if (e.target.classList.contains("addBtn")) {
    count.innerHTML++;
    corBtn();
  }
  if (e.target.classList.contains("substrBtn")) {
    count.innerHTML--;
    corBtn();
  }
  if (e.target.classList.contains("resetBtn")) {
    count.innerHTML = 0;
    corBtn();
  }
});

function corBtn() {
    if (count.innerHTML > 0) {
      count.style.color = "green";
    } else if (count.innerHTML < 0) {
      count.style.color = "orangered";
    } else 
      count.style.color = "black";
    };