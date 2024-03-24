let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick= () =>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}

//creating an array with 10 questions.and creating four answers 
const questions=[
    {
        question:"What is the legislative capital of Sri Lanka.",
        answers:[
            {text: "Colombo",correct:false},
            {text: "Sri Jayawardanapura Kotte",correct:true},
            {text: "Anuradapurha",correct:false},
            {text: "Polonnaruwa",correct:false}
        ]
    },
    {
        question:"which is the longest river in sri lanka.",
        answers:[
            {text: "Mahawali river",correct:true},
            {text: "Kalani river",correct:false},
            {text: "Kalu river",correct:false},
            {text: "Walwe river",correct:false}
        ]
    },
    {
        question:"How many provincers are there in sri lanaka.",
        answers:[
            {text: "8",correct:false},
            {text: "4",correct:false},
            {text: "9",correct:true},
            {text: "7",correct:false}
        ]
    },
    {
        question:"What is the tallest mountain in Sri Lanka. ",
        answers:[
            {text: "Hakgala Mountain",correct:false},
            {text: "Piduruthalagala Mountain",correct:true},
            {text: "Kirigalpotha Mountain",correct:false},
            {text: "Siri Pada Mountain",correct:false}
        ]
    },
    {
        question:"What is the Main religion of Sri Lanka. ",
        answers:[
            {text: "catholicism",correct:false},
            {text: "Hinduism",correct:false},
            {text: "Islam",correct:false},
            {text: "Buddism",correct:true}
        ]
    },
    {
        question:"What is currency is used in Sri Lanka. ",
        answers:[
            {text: "Euro",correct:false},
            {text: "Dollar",correct:false},
            {text: "Rupee",correct:true},
            {text: "yen",correct:false}
        ]
    },
    {
        question:"What is the best National park for bird watching in Sri Lanka. ",
        answers:[
            {text: "Kumana National Park",correct:true},
            {text: "Yala National Park",correct:false},
            {text: "Udawalwe National Park",correct:false},
            {text: "Wilpatuu National Park",correct:false}
        ]
    },
    {
        question:"Where does the Elephant gathering take palce every year.",
        answers:[
            {text: "Kumana National Park",correct:false},
            {text: "Yala National Park",correct:false},
            {text: "Minneriya National Park",correct:true},
            {text: "Wilpatuu National Park",correct:false}
        ]
    },
    {
        question:"How was Sri Lanka Formerly known.",
        answers:[
            {text: "Nyasaland",correct:false},
            {text: "Formosa",correct:false},
            {text: "Burma",correct:false},
            {text: "Ceylon",correct:true}
        ]
    },
    {
        question:"Where does the asla maha perahara held.",
        answers:[
            {text: "Colombo",correct:false},
            {text: "Galle",correct:false},
            {text: "Kandy",correct:true},
            {text: "Anuradhapura",correct:false}
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answerbutton");
const nextButton=document.getElementById("nextbtn");


let CureentQnumber=0;
let score=0;
function QuizStart(){
    CureentQnumber=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestions();
    resetTimer();
    startTimer();
}
//function for displying questions and answers
function showQuestions(){
    reset();
    let currentQuestion=questions[CureentQnumber];
    let questionNo=CureentQnumber + 1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;
    questionElement.style.textAlign='left';
    questionElement.style.fontSize='16px';

    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",AnswerSelected);

    });
}
//function to reset previous answers
function reset(){
    nextButton.style.display="none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
//create function to check the answer
function AnswerSelected(e){
    const selectedbutton=e.target;
    const iscorrect=selectedbutton.dataset.correct==="true";
    nextButton.style.display="block";
    if(iscorrect){
        selectedbutton.classList.add("correct");
        score++;
    }else{
        selectedbutton.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    
}
//creating a function to handle the feed backs with colurs
function handlescore() {
    let remark = null
    // condition check for player remark with colur
    if (score<= 3) {
        remark = '<span style="color: red;">Bad Grades, Keep Practicing.</span>'; 
    }
    else if(score>=4 && score < 7){
        remark = '<span style="color: orange;">Good Grades.Practice more</span>';
    }else if(score>= 7){
        remark = '<span style="color: green;">Excellent Grades. Keep up the good work</span>';
    }
    return remark;
}
// function to get the precentage
function scoreprecentage(){
    grade=((score/10)*100);
    return grade;
}
//function to show the scores after the quiz done
function showScore(){
    reset();
    stopTimer();
    let congrats=null
    congrats='<span style="font-size:20px"> Congratulations, Quiz Completed!</span>'
    questionElement.innerHTML=`${congrats} <br><br>Right Answers:  ${score} <br><br>Wrong Anwers: ${(questions.length)-score}<br><br>You Took
     ${60-timeDuration}s<br><br> your grades ${scoreprecentage(score)}%<br><br>${handlescore(score)}<br>`;
    questionElement.style.textAlign='center';
    nextButton.innerHTML="Start again";
    nextButton.style.display ="block";
    nextButton.addEventListener(click,function(){showQuestions();
    });
}
//function to hadle the nextbutton    
function handleNextButton(){
    CureentQnumber++;
    if(CureentQnumber<questions.length){
        showQuestions();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(CureentQnumber<questions.length){
        handleNextButton();
    }else{
        QuizStart();
    }
})

//creating a timer
let timeDuration = 60; // Set the duration of the timer (in seconds)
let timerElement = document.getElementById("timer");// Get the timer element from the HTML
var timer; 

function startTimer() {
        timer = setInterval(function () {
        let minutes = Math.floor(timeDuration / 60);
        let seconds = timeDuration % 60;
        let formattedTime = `Timer : ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        timerElement.textContent = formattedTime;

        if (timeDuration <= 0) {
            clearInterval(timer);
            CureentQnumber=10;
            showScore();
     
    }

    timeDuration--;
  }, 1000); // Set the interval to update the timer every 1 second (1000 milliseconds)
}
//function to stop the timer
function stopTimer() {
    clearInterval(timer); // Clear the timer interval
    console.log("Timer stopped");
  }
//function to start the timer again 
function resetTimer() {
    clearInterval(timeDuration);
    timeDuration = 60;
  }

QuizStart();