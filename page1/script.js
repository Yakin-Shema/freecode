
let inputText = document.getElementById("nom")


function messagePage(){
  let message = "Bienvenu à toi "
  let salutation = message + inputText.value
  return salutation
}

function afficherText(){
  let body = document.querySelector("header")
  let header = `
      <div> ${messagePage()}</div>
  `;
  body.innerHTML = header
}
function afficherPage() {
  let rideau = document.getElementById("backgroundRideau")
  rideau.style.display = "block"
}
 
let bouton1 = document.getElementById("bouton1")
bouton1.addEventListener("click", () => {
  if(inputText.value === ""){
    window.alert("Veullez entrez votre nom")
    console.log("le champ est vide")
  }else{
    afficherText()
    afficherPage()
    cacherIntro()
    console.log("c'est fait "+ inputText.value)
  }
})