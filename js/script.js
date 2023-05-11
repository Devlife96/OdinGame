const MAXROUND = 5
let roundCount = 1
let playerScore =0
let computerScore =0
let winnerOfTheRound=''
let playerSelection =''
let computerSelection = ''
let rate=0
let roundStorage=0

//object
const WinnerStorage ={
    roundId : 0,
    winner: '',
    winnerScore: 0
}

//get html element
const error = document.querySelector('.error')
const score = document.querySelector('.box-score')
const _roundWinner = document.querySelector('.round-winner')
const h_player_score = document.querySelector('.display-player-score')
const h_computer_score = document.querySelector('.display-computer-score')
const btnname = document.querySelectorAll('.score-container')
const playerName = document.querySelector('.player-name')
const scoreModal = document.querySelector('.modal-score')
const ratePlayer = document.querySelector('.player-star')
const award = document.querySelector('.award')
const modalText = document.querySelector('modal-text')
const reset = document.querySelector('.reset')
const historicity = document.querySelector('.show-historicity')
const rate_historicity = document.querySelector('.rate')

const homeData =  document.querySelector('.home-data')
//modal
const modal = document.querySelector('.modal-container')
const close = document.querySelector('.close')

//round storage
const round = document.querySelector('.round-storage')

//================================


//start
loadData()
startGame()
loadFourLatestData()





function startGame(){
    btnname.forEach(element => {
    element.addEventListener('click',(e)=>{
        if(roundCount >= 1 && roundCount <= MAXROUND){
            playerSelection = e.target.innerHTML.trim().toLowerCase()
            computerSelection = getRandomWordGame().toLowerCase()
            playRound(playerSelection, computerSelection)
            gameOver(roundCount)
        }
    })
    
})
}


//Generate an aleatoire word
function getRandomWordGame(){
    let arrayWord  = ['ROCK', 'PAPER','SCISSORS'];
     random = Math.floor(Math.random() * arrayWord.length) + 1
    switch(random){
        case 1:
            return 'ROCK'
        case 2:
            return 'PAPER'
        case 3:
            return 'SCISSORS'
    }
}


function playRound(playerSelection , computerSelection){

   
         if(playerSelection === convertToLower('Rock') || playerSelection === convertToLower('Paper') || playerSelection === convertToLower('Scissors'))
        {
            if(playerSelection === computerSelection)
            {
                winnerOfTheRound='tie'
                _roundWinner.textContent = `RoundNumber: Round doesn\'t count it\'s a tie`
                displayWinnerRound(winnerOfTheRound,0,computerSelection,playerSelection)
            }

            if(playerSelection === convertToLower('Rock') && computerSelection === convertToLower('Scissors')
                || playerSelection === convertToLower('Paper') && computerSelection === convertToLower('Rock')
                || playerSelection === convertToLower('Scissors') && computerSelection === convertToLower('Paper') )
                {
                    winnerOfTheRound = 'Player'
                    h_player_score.textContent = ++playerScore
                    score.textContent = roundCount++
                    displayWinnerRound(winnerOfTheRound,computerSelection,playerSelection)
                      
                }

                 if(computerSelection === convertToLower('Rock') && playerSelection === convertToLower('Scissors')
                || computerSelection === convertToLower('Paper') && playerSelection === convertToLower('Rock')
                || computerSelection === convertToLower('Scissors') && playerSelection === convertToLower('Paper'))
                {
                    winnerOfTheRound='Computer'
                    h_computer_score.textContent = ++computerScore
                    score.textContent = roundCount++
                    displayWinnerRound(winnerOfTheRound,computerSelection,playerSelection)
                }
                
                
        }
        else
        {
            error.textContent = `oups! wrong word, you must enter (Rock , Paper or Scissors) (${computerSelection}) to make a round your input is {(${playerSelection})}, please try again  round: ${roundCount}`
        }
}


let roundCount_func =  ()=>{
    score.textContent = roundCount
    return roundCount
}

function convertToLower(word_string){
    return word_string.toLowerCase()
}

function gameOver(count){
    if(count-1 == MAXROUND){
         displayTheWinnerByScore(winnerOfTheRound,playerScore,computerScore)
           showModal()
        }
    
    
}

function showModal(){
   return modal.classList.add('show')
}

function displayTheWinnerByScore(roundWinner,playerScore, computerScore){

   if(playerScore === computerScore){
    playerName.textContent= roundWinner
    scoreModal.textContent='0'
    modalText.textContent='There is no  winner'
    saveItemForTie(++roundStorage,roundWinner)
 }
   else if( playerScore > computerScore){
    playerName.textContent= roundWinner
    roundRate(playerScore,ratePlayer)
    if(playerScore >= 3){
        award.innerHTML ='<i class="fa-solid fa-award fs-4"></i>'
    }
    scoreModal.textContent=  playerScore
    saveItem(++roundStorage,winnerOfTheRound,playerScore)
    
    
   }
   else{
     playerName.textContent= roundWinner
       roundRate(computerScore,ratePlayer)
       if(computerScore >= 3){
        award.innerHTML ='<i class="fa-solid fa-award fs-4"></i>'
    }
    scoreModal.textContent= computerScore
    saveItem(++roundStorage,winnerOfTheRound,computerScore)
   }
}

function displayWinnerRound(roundWinner, computerSelection, playerSelection){
    
     if(roundWinner === 'tie'){
        let message = `Oups! it's a ${roundWinner}, this round doesn't count, please try to make another choise !`
         _roundWinner.textContent = message
    }
    if(roundWinner === 'Player'){
       let message = `${roundWinner} is the winner of this round," ${playerSelection} beat by ${computerSelection} "`
       _roundWinner.textContent = message
    
    }
     if(roundWinner === 'Computer'){
        let message = `${roundWinner} is the winner of this round," ${computerSelection} beat by ${playerSelection} " `
         _roundWinner.textContent = message
        
    }
}

function roundRate(score,element){
    switch(score){
        case 1:
             element.innerHTML='<i class="rate fa-solid fa-star text-yellow"></i>'
        break
        case 2:
             element.innerHTML='<i class="rate fa-solid fa-star text-yellow"></i> <i class="rate fa-solid fa-star text-yellow"></i>'
        break
        case 3:
             element.innerHTML='<i class="rate fa-solid fa-star text-yellow"></i> <i class="rate fa-solid fa-star text-yellow"></i><i class="rate fa-solid fa-star text-yellow"></i>'
        break
        case 4:
             element.innerHTML='<i class="rate fa-solid fa-star text-yellow"></i> <i class="rate fa-solid fa-star text-yellow"></i><i class="rate fa-solid fa-star text-yellow"></i> <i class="rate fa-solid fa-star text-yellow"></i>'
        break
        case 5:
             element.innerHTML='<i class="rate fa-solid fa-star text-yellow"></i> <i class="rate fa-solid fa-star text-yellow"></i><i class="rate fa-solid fa-star text-yellow"></i> <i class="rate fa-solid fa-star text-yellow"></i> <i class="rate fa-solid fa-star text-yellow"></i>'
        break
        
    }
}


function resetGame(){
    window.location.reload()
}

// function addData(key,value){
//     localStorage.setItem(key+1,value)
// }
// function getData(key){
//     return localStorage.getItem(key)
// }

function saveItemForTie(id,win){
    let lsCount =  localStorage.length
    id = lsCount +1
    WinnerStorage.roundId = id
    WinnerStorage.winner = win
    WinnerStorage.winnerScore =0
    localStorage.setItem(`round-${id}`,JSON.stringify(WinnerStorage))
}

function saveItem(id,win,winscore){
    let lsCount =  localStorage.length
    id = lsCount +1
    WinnerStorage.roundId = id
    WinnerStorage.winner = win
    WinnerStorage.winnerScore =winscore
    localStorage.setItem(`round-${id}`,JSON.stringify(WinnerStorage))
}

function loadData(){
    let dataCount = localStorage.length
   if(dataCount == 0){
    return
   }else{
     for (let i = 0; i < dataCount; i++) {
        let key = localStorage.key(i)
        let data = localStorage.getItem(key)
        let parseData = JSON.parse(data)
        createCard(parseData.roundId, parseData.winner, parseData.winnerScore,historicity)       
    }
   }
}

function  loadFourLatestData(){
      let dataCount = localStorage.length
   if(dataCount == 0){
    return
   }else{
     for (let i = 0; i < 4; i++) {
        let key = localStorage.key(i)
        let data = localStorage.getItem(key)
        let parseData = JSON.parse(data)
        createCard(parseData.roundId, parseData.winner, parseData.winnerScore,homeData) 
    }
   }
}


function createCard(id, winner, score,container){
    let card = createElement('div',{class:'card flex-20 bg-gray-dark  rounded-5 p-1'})
    let pic = createElement('div',{class: 'position-relative'})
    let pic_card1 = createElement('div',{class:'card-player w-70 h-70 bg-gray-light rounded-5 mb-1 position-relative middle-content'})
    pic_card1.innerHTML = '<i class="fa-solid fa-user fs-2 text-gray"></i>'
    let pic_card2 = createElement('div',{class: 'card-player-bordered w-70 h-70   mb-1 position-absolute'})
    let roundText = createElement('p',{class: 'fs-small text-white-gray'})
        roundText.textContent =`RoundNumber: #000-${id}`
    let nameWinner = createElement('h4',{class:'fs-4 mb-small text-smoke'})
        nameWinner.textContent = winner
    let rate = createElement('div',{class:'star d-flex gap-small mb-small rate'})
        roundRate(score,rate)
    let message = createElement('p',{class:'mb-small text-white-gray'})
        message.textContent = 'wine this round with a'
    let w_score = createElement('div',{class:'score-container w-middle rounded-5  p-1 ft-slakley fs-4 text-center'})
        w_score.textContent = `Score ${score}`

        pic.append(pic_card1,pic_card2)
        card.append(pic, roundText,nameWinner,rate,message,w_score)
        if(container == null){
            return
        }
       return container.prepend(card)
        
        
    
}

function createElement(tagName, attributes={}){
    const element = document.createElement(tagName)
    for (const [attribute, value] of  Object.entries(attributes)) {
        if(value !== null){
            element.setAttribute(attribute, value)
        }
    }
    return element
}


// function getCurrentLink(url)
// {
//     let currentLink = url.pathname
//     let start = currentLink.lastIndexOf('/')+1
//     let end = currentLink.length - 5
//     return currentLink.substring(start,end)
// }

if(close != null){
    close.addEventListener('click',(e)=>{
    modal.remove('show')
    resetGame()
    e.stopPropagation()
})
}
