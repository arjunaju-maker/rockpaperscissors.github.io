let userScore=0;
let compScore=0;

let userScorepara = document.querySelector("#userScore")
let compScorepara = document.querySelector("#compScore")
let review = document.querySelector("#review")
let col = document.querySelector("#insidewin")

const choices = document.querySelectorAll(".box")

const wingame = (compChoice) => {
    userScore++;
    userScorepara.innerText = userScore
    review.innerText = `You Won, defeating ${compChoice}`;
    col.style.backgroundColor = "green"
}
const losegame =(compChoice) =>{
    compScore++;
    compScorepara.innerText = compScore;
    review.innerText = `You lost, with ${compChoice}`;
    col.style.backgroundColor = "red"
}

const generateChoice = () =>{
    const options = ["rock", "paper", "scissor"]
    let idx = Math.floor(Math.random()*3)
    return options[idx];
}

const playGame = (userChoice) =>{
    let compChoice = generateChoice();
    if(userChoice === compChoice){
        review.innerText = "Draw Game";
        col.style.backgroundColor = "#2e2e2e"
    }
    else{
        if(userChoice === "rock"){
            compChoice === "paper"? losegame(compChoice) : wingame(compChoice);
        }
        else if(userChoice === "paper"){
            compChoice === "scissor"? losegame(compChoice) : wingame(compChoice);
        }
        else{
            compChoice === "rock"? losegame(compChoice) : wingame(compChoice);
        }
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});