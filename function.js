const selectButtons = document.querySelectorAll('[data-selection]')
let playerresult = document.querySelector('.your-selection')
let computerresult = document.querySelector('.computer-selection')
let finalResult = document.querySelector('.final-result')
let playerScore = document.querySelector('.player-score')
let computerScore = document.querySelector('.computer-score')
let playercounter = 0
let computercounter = 0
const SELECTIONS = [{
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
},{
    name: 'paper',
    emoji: '🤚',
    beats: 'rock'
},{
    name: 'scissors',
    emoji: '✌',
    beats: 'paper'
}]

selectButtons.forEach(selectButton =>{
    selectButton.addEventListener('click', element =>{
        const selectionName = selectButton.dataset.selection
        const playerselection = SELECTIONS.find(sel=>sel.name===selectionName)
        const computerSelection = ComputerSelection()
        playerresult.innerHTML = playerselection.emoji
        computerresult.innerHTML = computerSelection.emoji
        if(playerselection.beats == computerSelection.name){
            finalResult.innerHTML = `<h1 class='text-success'>You win</h1>`
            playerresult.classList.add('winner')
            computerresult.classList.remove('winner')
            playerScore.innerHTML = ++playercounter

        }else if (computerSelection.beats == playerselection.name) {
            finalResult.innerHTML = `<h1 class='text-danger'>Computer wins</h1>`
            computerresult.classList.add('winner')
            playerresult.classList.remove('winner')
            computerScore.innerHTML = ++computercounter
        }else {  
            finalResult.innerHTML = `<h1 class='text-secondary'>Draw</h1>`
            computerresult.classList.remove('winner')
            playerresult.classList.remove('winner')
        } 
    })
})

function ComputerSelection(){
    const randomnumber = Math.floor(Math.random()* SELECTIONS.length)
    const randomSelection = SELECTIONS[randomnumber] 
    return randomSelection
}

