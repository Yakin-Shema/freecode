
let inputText = document.getElementById("nom")
let rideau = document.getElementById("rideau")

function messagePage(){
  let message = "Bienvenu à toi "
  let salutation = message + inputText.value
  return salutation
}


function afficherPage(){
  rideau.classList.add("active")
}

function afficherText(){
  let body = document.querySelector("body")
  let header = `
    <header>
      <div> ${messagePage()}</div>
    </header>
  `;
  body.innerHTML = header
}

let bouton1 = document.getElementById("bouton1")

bouton1.addEventListener("click", function() {
  afficherText()
  afficherPage()
  console.log("T'inquiètes pas, ça fonctionne "+ inputText.value)
})