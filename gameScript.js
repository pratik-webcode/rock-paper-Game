
const options = ["rock","paper","scissor"];
const playerSelect = document.getElementById("playerDispaly");
const computerSelect = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerOption){

    const computerChoice = options[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerOption === computerChoice){
        result = "koi bhi nhi....";

    }
    else{
        switch(playerOption){
            case "rock" :
       result = (computerChoice === "scissor") ? "YOU Winn!" : "YOU LOSE!";
        break;

            case "paper" :
      result =  (computerChoice === "rock") ? "YOU Winn!" : "YOU LOSE!";
        break;

            case "scissor" :
      result =  (computerChoice === "paper") ? "YOU Winn!" : "YOU LOSE!";
        break;
        }
    }
    playerSelect.textContent = `PLAYER : ${playerOption}`;
    computerSelect.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = result;
}