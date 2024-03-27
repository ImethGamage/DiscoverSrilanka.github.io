// java cript for navigation bar

let menu = document.querySelector('#menu-btn');
        let navbar = document.querySelector('.header .navbar');

        menu.onclick = () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        }


//create funstion to display description and enlarge image

function showPopup(image) {
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popupImage");
    const popupDescription = document.getElementById("popupDescription");

    const fontSize = document.body.style.fontSize; // Get the current font size from the body

    popupImage.src = image.src;
    popupDescription.innerText = image.getAttribute("data-description");
    popupDescription.style.fontSize = fontSize; // Set the font size of the popup description

        popup.style.display = "block";

        }

        function hidePopup() {
            const popup = document.getElementById("popup");
            popup.style.display = "none";
        }
       
// Functions to change font size
function changeFontSize(size) {
document.body.style.fontSize = size;
var photoDescription = document.querySelector('.photo-description');
photoDescription.style.fontSize = size;
}

let buttons = document.querySelector('.buttons');
let btn = buttons.querySelectorAll('.btn');

for (var i = 0; i < btn.length; i++) {
btn[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('active');
    current[0].classList.remove('active');
    this.classList.add('active');
});
}



function applyBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }

    function applyRandomBackgroundColor() {
        var colors = ["white", "#D4FFA9", "#F1FF7C","#D5A423","#654B06","#2A778D","#8AACA9","#FFCFA0"]; 
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        applyBackgroundColor(randomColor);
    }
