let n = 3

let winningButton;
const onClick = function() {
  winningButton = winningButton ? winningButton : Math.floor(Math.random() * n);
  if (winningButton == this.id) { 
   document.getElementById("guessthebutton-text").innerHTML = "You have pressed the winning button!"
  } else {
    document.getElementById("guessthebutton-text").innerHTML = "You have pressed the wrong button!"
  }
}

for (let i = 0; i < n; ++i) {
  const buton = document.createElement("button")
  document.querySelector("div.card-body").appendChild(buton)
  buton.id = i
  buton.innerText = i;
  buton.addEventListener("click", onClick);
}
