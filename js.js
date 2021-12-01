const player = {
  playerChoice:null
}

const computer = {
  computerChoice:null
}

let newGame = (playerSelection) => {
  
  player.playerChoice = choices[playerSelection];
  //playerDisplay.append(player.playerChoice + " ");
  playerDisplay.innerText = player.playerChoice;
  
  computer.computerChoice = choices[computerChooses()];
  //compDisplay.append(computer.computerChoice + " ");
  compDisplay.innerText = computer.computerChoice;
  
  resultDisplay.innerText = compareChoices();
  //compareChoices();
}

let computerChooses = () => {
  let randomIndex = Math.floor(Math.random() * 3);
  return randomIndex;
}

const compareChoices = () => {
  let result = null;
  if (player.playerChoice === computer.computerChoice) {
    result ="It's a tie!";
  }
  else if (computer.computerChoice === choices[0]) {
    if (player.playerChoice === choices[1]) {
      result ="Player won - paper beats rock";
    }
    else if (player.playerChoice === choices[2]) {
      result ="Player lost - rock beats scissors";
    }
  }
  else if (computer.computerChoice === choices[1]) {
    if (player.playerChoice === choices[0]) {
      result ="Player lost - paper beats rock";
    }
    else if (player.playerChoice === choices[2]) {
      result ="Player won - scissors beats paper";
    }
  }
  else if (computer.computerChoice === choices[2]) {
    if (player.playerChoice === choices[0]) {
      result ="Player won - Rock beats Scissors";
    }
    else if (player.playerChoice === choices[1]) {
      result = "Player lost - scissors beats paper";
    }
  }
  return result;
}

const choices = ["Lapis","Papyrus","Scalpellus"];

let compDisplay = document.getElementById("computerSelect");
let playerDisplay = document.getElementById("playerSelect");
let resultDisplay = document.getElementById("result");

document.getElementById("lapis").addEventListener('click', function(){newGame(0)});
document.getElementById("papyrus").addEventListener('click', function(){newGame(1)});
document.getElementById("scalpellus").addEventListener('click',function(){newGame(2)});
