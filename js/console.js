// ROCK PAPER SCISSORS GAME

let playerSelection =''
let computerSelection = getRandomWordGame().toLowerCase()
const MAXROUND = 5
let roundCount = 1
let playerScore =0
let computerScore =0
let winnerOfTheRound=''

//start the game
playRound(playerSelection, computerSelection)


//Generate an aleatoire word
function getRandomWordGame(){
    let arrayWord  = ['ROCK', 'PAPER','SCISSORS']
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




function userInput(){
    return  prompt('Please, make a choice !', '')
}

function playRound(playerSelection , computerSelection)
{
    //make the playerSelection and computerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase()
    computerSelection= computerSelection.toLowerCase()
    //allow player to play 5 rounds
    do{
        playerSelection = userInput()

        if(playerSelection === convertToLower('Rock') || playerSelection === convertToLower('Paper') || playerSelection === convertToLower('Scissors'))
        {
            
            if(playerSelection === computerSelection){
                winnerOfTheRound='tie'
                console.log(`RoundNumber: Round doesn\'t count it\'s a tie`)
                displayWinnerRound(winnerOfTheRound,0,computerSelection,playerSelection); continue
            }

            //case when the player win
            if(playerSelection === convertToLower('Rock') && computerSelection === convertToLower('Scissors')
                || playerSelection === convertToLower('Paper') && computerSelection === convertToLower('Rock')
                || playerSelection === convertToLower('Scissors') && computerSelection === convertToLower('Paper') )
                {
                    playerScore++
                    winnerOfTheRound = 'Player'
                    console.log(`RoundNumber: ${roundCount}`)
                      displayWinnerRound(winnerOfTheRound,playerScore,computerSelection,playerSelection)
                }

            //case when the computer win
            if(computerSelection === convertToLower('Rock') && playerSelection === convertToLower('Scissors')
                || computerSelection === convertToLower('Paper') && playerSelection === convertToLower('Rock')
                || computerSelection === convertToLower('Scissors') && playerSelection === convertToLower('Paper'))
                {
                    computerScore++
                    winnerOfTheRound='Computer'
                    console.log(`RoundNumber: ${roundCount}`)
                    displayWinnerRound(winnerOfTheRound,computerScore,computerSelection,playerSelection)
                } 
               
        }else{
            console.log(`oups! wrong number, you must enter (Rock , Paper or Scissors)  to make a round your input is {(${playerSelection})}, please try again  round: ${roundCount}`); break
        }
        if(roundCount ==5){
            console.log('Game Over! , let\' see the winner of the round')
        }    
        roundCount++
        
    }while( roundCount <= MAXROUND   );
    console.log('====================================================')
    displayTheWinnerByScore(winnerOfTheRound,playerScore,computerScore)

}

function convertToLower(word_string){
    return word_string.toLowerCase()
}

function displayTheWinnerByScore(roundWinner,playerScore, computerScore){

   if(playerScore === computerScore){
    return console.log(`There is no  winner, cause Scores is equal [PlayerScore:  ${playerScore}] and [ComputerScore: ${computerScore}]`)
   }
   else if( playerScore > computerScore){
    return console.log(`The ${roundWinner} win the game, with a score: ${playerScore}`)
   }
   else{
     return console.log(`The ${roundWinner} win the game, with a score: ${computerScore}`)
   }
}

function displayWinnerRound(roundWinner,roundScore, computerSelection, playerSelection){
    
     if(roundWinner === 'tie'){
        let message = `Oups! it's a ${roundWinner},(${playerSelection} is egual to ${computerSelection}) actual score of this round  is Player: ${Number(playerScore)}  and Computer: ${Number(computerScore)}`
        return console.log(message)
    }
    if(roundWinner === 'Player'){
       let message = `${roundWinner} is the winner of this round,(${playerSelection} beat by ${computerSelection}) actual score of the ${roundWinner} is ${Number(roundScore)} `
       return console.log(message)
    
    }
     if(roundWinner === 'Computer'){
        let message = `${roundWinner} is the winner of this round,(${computerSelection} beat by ${playerSelection}) actual score of the ${roundWinner} is ${Number(roundScore)} `
       return console.log(message)
        
    }
}
