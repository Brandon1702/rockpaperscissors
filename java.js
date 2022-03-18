
let playerEl = document.getElementById("player-el")
let computerEl = document.getElementById("computer-el")
let resultEl = document.getElementById("result-el")


let playerScore = 0
let computerScore = 0
let computerChoice = ["Rock", "Paper", "Scissors"]
let message = ""
let isAlive = false

function rock() {
    if (playerScore >= 5 || computerScore >= 5) {
        rock() = null; 
        return false 
    }
     let randomChoice = Math.floor( Math.random() * 3)

        if (randomChoice === 0) {
            message = "Tie!"
        } else if (randomChoice === 1) {
            computerEl.textContent = ++computerScore
            message = "Round Loss!"
        } else if (randomChoice === 2) {
            playerEl.textContent = ++playerScore
            message = "Round Won!"
        }

        if (playerScore === 5) {
            message = "Player Wins The Game!!!"
        } else if (computerScore === 5) {
            message = "Sorry Computer Has Won"
        }
        
        playerEl.textContent = "Player: " + playerScore
        computerEl.textContent = "Computer: "  + computerScore
        resultEl.textContent = "Results: " + message
    
}

function paper() {
    if (playerScore >= 5 || computerScore >= 5) {
        paper() = null; 
        return false 
    }

    let randomChoice = Math.floor( Math.random() * 3)

        if (randomChoice === 0) {
            playerEl.textContent = ++playerScore
            message = "Round Won!"
        } else if (randomChoice === 1) {
            message = "Tie!"
        } else if (randomChoice === 2) {
            computerEl.textContent = ++computerScore
            message = "Round Loss!"
        }

        if (playerScore === 5) {
            message = "Player Wins The Game!!!"
        } else if (computerScore === 5) {
            message = "Sorry Computer Has Won"
        }

        playerEl.textContent = "Player: " + playerScore
        computerEl.textContent = "Computer: " + computerScore
        resultEl.textContent = "Results: " + message
        
    
}

function scissors() {
    if (playerScore >= 5 || computerScore >= 5) {
        scissors() = null; 
        return false 
    }
    
    let randomChoice = Math.floor( Math.random() * 3)

        if (randomChoice === 0) {
            computerEl.textContent = ++computerScore
            message = "Round Loss!"
        } else if (randomChoice === 1) {
            playerEl.textContent = ++playerScore
            message = "Round Won!"
        } else if (randomChoice === 2) {
            message = "Tie!"
        }

        if (playerScore === 5) {
            message = "Player Wins The Game!!!"
        } else if (computerScore === 5) {
            message = "Sorry Computer Has Won"
        }

        playerEl.textContent = "Player: " + playerScore
        computerEl.textContent = "Computer: " + computerScore
        resultEl.textContent = "Results: " + message
        
    
}


