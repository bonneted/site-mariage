var countDownDate = new Date("Oct 9, 2021 15:00:00").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id
  document.getElementById("days").innerHTML = document.getElementById("days").innerHTML.replace(/00/g, days);
  document.getElementById("hours").innerHTML = document.getElementById("hours").innerHTML.replace(/00/g, hours);
  document.getElementById("minutes").innerHTML = document.getElementById("minutes").innerHTML.replace(/00/g, minutes);
  // document.getElementById("seconds").innerHTML = seconds;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "MA";
    document.getElementById("hours").innerHTML = "RI";
    document.getElementById("minutes").innerHTML = "&Eacute;S";

  }
}, 1000); 

function navbar_anim() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var all_navbar_a = document.querySelectorAll('a[href^="#"]')


all_navbar_a.forEach(anchor => {
  anchor.addEventListener('click', function (e) {

      [].forEach.call(all_navbar_a, function(el) {
      el.classList.remove("active");
      });

      e.preventDefault();
      e.currentTarget.classList.add("active");
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

window.onscroll = function() {scroll_detection()};

var navbar = document.getElementById("myTopnav");


function get_Yposition(el){
  var el_top = document.querySelector(el.getAttribute('href')+'-top').getBoundingClientRect();
  var el_bottom = document.querySelector(el.getAttribute('href')+'-bottom').getBoundingClientRect();

  return {
    top: el_top.top,
    bottom: el_bottom.bottom
  };

}
function scroll_detection() {
  if (window.pageYOffset >= 1) {
    navbar.classList.add("red_bckg")
  } else {
    navbar.classList.remove("red_bckg");
  }
  // if(window.pageYOffset >= temoins_position.top ){
  //   console.log('temoins')
  //   document.getElementById("temoins_bar").classList.add("active");
  // }
  // all_navbar_a.forEach(anchor => {
  //   anchor.classList.remove("active");
  //   console.log(anchor.getAttribute('href')+'-top');
  //   console.log(document.querySelector(anchor.getAttribute('href')+'-bottom'));
  
  //     });
}


// Get the modal
var modal = document.getElementById("detail-container");

var modal_wrapper = document.getElementById("detail-wrapper");
console.log(modal)


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  console.log('hello')
  modal.style.display = "none";
}

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


var all_title = document.querySelectorAll('.info-title')


all_title.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    var type_info = anchor.querySelector("a").text;
    modal.style.display = "block";
    console.log(type_info)

    if (type_info=="Messe"){
      modal_wrapper.innerHTML =  "<p class='detail-title'>Messe de mariage</p><p>La messe de mariage sera c??l??br??e le 9 Octobre 2021 ?? 14h en l'??glise Saint-Etienne d'Auneau (Eure-et-Loire). Le consentement des ??poux sera re??u par le P??re Martin Charcosset</p>"
    } else if (type_info=="Acc??s") {

      modal_wrapper.innerHTML =  "<p class='detail-title'>Acc??s</p><p>En voiture : environ 1h depuis Paris et 4h30 depuis Lyon</p><p>En train : La gare d'Auneau est situ??e ?? 5km de l'??glise, et accessible depuis la gare Paris-Austerlitz.</p>"
      
    } else if (type_info=="R??ception"){
      modal_wrapper.innerHTML =  "<p class='detail-title'>R??ception</p><p>Nous serons heureux de vous retrouver ?? l'issue de la c??r??monie au ch??teau de Denonville ?? partir de 16h30.</p>"
    } else if (type_info=="H??bergement"){
      modal_wrapper.innerHTML =  "<p class='detail-title'>H??bergement</p><p>Vous allez ??tre redirig?? vers une liste des h??bergements ?? proximit??.</p>"
    }
    

  });
});
