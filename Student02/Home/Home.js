/*Use for shorter navigation bar */
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick= () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

/*individual webpages are linked by java Script*/

let wild_life = document.getElementById("wildlife");
let hotels = document.getElementById("hotels");
let local_products = document.getElementById("products");
let travel = document.getElementById("travel");



wild_life.addEventListener("click", function () {
  window.location.href = "../../Student03/WildLife/wildlife.html";
});

hotels.addEventListener("click", function () {
  window.location.href = "../../Student01/COURSEWORK/hotel.html";
});

local_products.addEventListener("click", function () {
  window.location.href = "../../Student04/localproduct/localproductNew.html";
});

travel.addEventListener("click", function () {
  window.location.href = "../Individualpage/Individualpage.html";
});
