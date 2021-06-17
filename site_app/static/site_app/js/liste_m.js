
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

function show_popup(event) {
  let parent_block =  event.currentTarget.parentNode;
  let ancestor_block = parent_block.parentNode;
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
  console.log(prix)

  document.getElementById('mot-merci').innerHTML="Vous êtes sur le point de nous offrir le cadeau <b>"+nom+"</b >, pour un montant de <b>"+prix+"€</b>." 
}
function hide_confirmation() {
  document.getElementById("mypopupconfirmation").classList.remove("confirmation-visible");
}