
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick= () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}


/*Javascript for the Feedback form*/
let submit_Btn = document.querySelector('#submit-btn');
let name_Input = document.querySelector('#name');
let phone_Input = document.querySelector('#phone');
let email_Input = document.querySelector('#email');
let age_Input = document.querySelector('#age');
let feed_back = document.querySelector('#Comment');






//prevent form from default validating
submit_Btn.addEventListener('click', (event) => {
    event.preventDefault();
    validate_Form();
});


//this for validate user inputs one by one
function validate_Form() {

    if (name_Input.value.trim() === '') {
        alert('Name slot is empty.Enter your name');
        return;
    }
    else if (!/^[a-zA-Z]/.test(name_Input.value)) {
        alert('Name can not contain special characters or numbers');
        return;
    }
    else if (isNaN(phone_Input.value) || phone_Input.value.length !== 10) {
        alert('Phone number should not contain letters and it should be 10 integers long');
        return;
    }
    else if (phone_Input.value.trim() === '') {
        alert('Enter your Phone number');
        return;
    }
    else if (age_Input.value.trim()<0){
        alert('Age cannot be negative');
        return;
    } 
    else if (age_Input.value.trim()>120){
        alert('Age cannot be more than 120');
        return;
    } 
    else if (email_Input.value.trim() === '') {
        alert('Email slot is empty.Enter your email');
        return;
    }
    else if (!email_Input.value.includes('@') || !email_Input.value.includes('.')) {
        alert('Email should contain @ and .');
        return;
    }
    else if (feed_back.value.trim() === '') {
        alert('Please enter Feedback');
        return;
    }

    let emojiReaction = document.querySelector('input[name="emoji_reaction"]:checked');
    let emojiValue = emojiReaction ? emojiReaction.value : "";

    //allocating the user choose emoji to the emohi variable

    let emoji = '';
    if (emojiValue === '1') {
        emoji = '😞';
    } else if (emojiValue === '2') {
        emoji = '😐';
    } else if (emojiValue === '3') {
        emoji = '🙂';
    } else if (emojiValue === '4') {
        emoji = '😄';
    } else if (emojiValue === '5') {
        emoji = '😊';
    }

    submit_Form(emoji);
}


//submitting the form
function submit_Form(emoji) {



    const subject = 'Discover Sri Lanka Feedback';    //subject of the email

    const emailBody =
        `Name: ${name_Input.value}%0D%0A` +
        `Phone number: ${phone_Input.value}%0D%0A` +
        `Email: ${email_Input.value}%0D%0A` +
        `Age: ${age_Input.value}%0D%0A` +
        `Emoji reaction: ${emoji}%0D%0A` +
        `Feedback of the user: ${feed_back.value}`;

    window.location.href = `mailto:sasanka.20220496@iit.ac.lk,binul.20220501@iit.ac.lk,janiru.20220497@iit.ac.lk,imeth.20220546@iit.ac.lk?subject=${subject}&body=${emailBody}`;


    //pop up alert 
    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 9000);

    //time set for 9 seconds
}


