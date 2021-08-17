
function navbar_anim() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Get the modal
var modal = document.getElementById("mypopup");
console.log(modal)
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

var deja_paye = 0;
var prix = 0;

function show_popup(currentTarget) {
  let parent_block =  currentTarget.parentNode;
  console.log(parent_block)
  let popup = document.getElementById("popup-content")

  var nom = parent_block.querySelector(".data_nom");
  var description = parent_block.querySelector(".data_description");
  var image = parent_block.querySelector(".data_image");
  prix =  parseInt(parent_block.querySelector(".data_prix").id);
  deja_paye = parseInt(parent_block.querySelector(".data_deja_paye").id);


  popup.querySelector("h2").innerHTML = nom.id;
  popup.querySelector("p").innerHTML = description.id;
  popup.querySelector(".image-bck").style.backgroundImage = image.id;
  document.getElementById("nom_article").value =  nom.id;
  modal.style.display = "grid";

  if (nom.id == 'Participation libre'){
    document.getElementById("totalite").disabled = true;
  } else{
    document.getElementById("totalite").disabled = false;
  }
}

function show_participation() {
  let participation_block = document.getElementById("Participation libre")  
  show_popup(participation_block)

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  hide_confirmation();
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    hide_confirmation();
  }
}

var total_checkbox = document.getElementById("totalite");
var montant = document.getElementById("montant");

total_checkbox.onclick = function() {

  if(total_checkbox.checked){
    montant.value = prix-deja_paye;
    montant.readOnly = true;
  } else {
    montant.value = '';
    montant.readOnly = false;
  }

}

document.getElementById("btn-confirmation").onclick = show_confirmation;
document.getElementById("confirmation-close").onclick = hide_confirmation;

function show_confirmation() {
  document.getElementById("mypopupconfirmation").classList.add("confirmation-visible");

  let popup = document.getElementById("popup-content");
  var nom = popup.querySelector("h2").innerHTML;
  var prix =  document.getElementById("montant").value;

  document.getElementById('mot-merci').innerHTML="Vous êtes sur le point de nous offrir le cadeau <b>"+nom+"</b >, pour un montant de <b>"+prix+"€</b>." 
}
function hide_confirmation() {
  document.getElementById("mypopupconfirmation").classList.remove("confirmation-visible");
}

function hide_categorie(event){
  var categorie =  event.currentTarget.parentNode;
  var arrow = event.currentTarget.parentNode.getElementsByTagName('i')[0];
  if (categorie.classList.contains("hide_categorie")) {
    categorie.classList.remove("hide_categorie");
    arrow.style.transform= 'rotate(0deg)';

  } else {
    categorie.classList.add("hide_categorie");
    arrow.style.transform= 'rotate(90deg)';

  }
}
let participation_block = document.getElementById("Participation libre")  

participation_block.parentNode.querySelector(".informations-container").innerHTML =  "<h2 class='title'>Participation libre</h2>"

