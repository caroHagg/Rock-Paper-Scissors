// collect and store input
// prompt pop up to pick R,P,S
// store result in a variable
// edge case:(problem cases) 
// computer random choice
var listGame = ["R", "P", "S"]
var userWins = 0;
var userLost = 0 ;
var stillPlaying=false;
   
// compare user and computer choice
    // if statement, if user=R and com= S then user wins! 9 possible outcomes
    // display who wins
// display stats
    // display loose, wins, ties with a multi line streams
    // ask user if to play again
function gameGenerator(){
    var userChoice = prompt("Hello, choose between R, P, S: ");
    var compChoice = listGame[Math.floor(Math.random() * listGame.length)];
    var validChoice = checkCorrectChoice(userChoice);

    if (validChoice){
        // smaller if using && or ||
        if (userChoice == "R"){
            if(compChoice == "P"){
                userLost+=1;
    
                alert('Computer choice: '+ compChoice+ ' \n You Lost!'); 
                stillPlaying = confirm(' Here are you stats:\n wins: ' + userWins + ' loses: ' + userLost + ' ties: ' +userTie+ '\nDo you want to keep playing?');
    
            }else if (compChoice == "R"){
                userTie += 1;
                alert('Computer choice: '+ compChoice+ ' \n You Tied!'); 
                stillPlaying = confirm(' Here are you stats:\n wins: ' + userWins + ' loses: ' + userLost + ' ties: ' +userTie+ '\nDo you want to keep playing?');
            } else{
                userWins += 1;
                alert('Computer choice: '+ compChoice+ ' \n You Won!'); 
                stillPlaying = confirm('Here are you stats:\n wins: ' + userWins + ' loses: ' + userLost + ' ties: ' +userTie+ '\nDo you want to keep playing?');
            }
        
        }else if (userChoice == "P"){
            if(compChoice == "S"){
                userLost+=1;
    
                alert('Computer choice: '+ compChoice+ ' \n You loose!'); 
                stillPlaying = confirm(' Here are you stats:\n wins: ' + userWins + ' loses: ' + userLost + ' ties: ' +userTie+ '\nDo you want to keep playing?');
    
            }else if (compChoice == "P"){
                userTie += 1;
                alert('Computer choice: '+ compChoice+ ' \n You Tied!'); 
                stillPlaying = confirm('Here are you stats:\n wins: ' + userWins + ' loses: ' + userLost + ' ties: ' +userTie+ '\nDo you want to keep playing?');
            } else{
                userWins += 1;
                alert('Computer choice: '+ compChoice+ ' \n You Won!'); 
                stillPlaying = confirm('Here are you stats:\n wins: ' + userWins + ' loses: ' + userLost + ' ties: ' +userTie+ '\nDo you want to keep playing?');
            }
        
        }else if (userChoice == "S"){
            if(compChoice == "R"){
                userLost+=1;
    
                alert('Computer choice: '+ compChoice+ ' \n You loose!'); 
                stillPlaying = confirm(' Here are you stats:\n wins: ' + userWins + ' loses: ' + userLost + ' ties: ' +userTie+ '\nDo you want to keep playing?');
    
            }else if (compChoice == "S"){
                userTie += 1;
                alert('Computer choice: '+ compChoice+ ' \n You Tied!'); 
                stillPlaying = confirm('Here are you stats:\n wins: ' + userWins + ' loses: ' + userLost + ' ties: ' +userTie+ '\nDo you want to keep playing?');
            } else{
                userWins += 1;
                alert('Computer choice: '+ compChoice+ ' \n You Won!'); 
                stillPlaying = confirm('Here are you stats:\n wins: ' + userWins + ' loses: ' + userLost + ' ties: ' +userTie+ '\nDo you want to keep playing?');
            }
        
        }
        // instead of this put everything in a while function where stillplaying var changes
        
        if(stillPlaying){
            gameGenerator();
        }else{
            document.getElementById("header1").innerHTML = "Thank you for playing";
        }

    } else{

        alert("Please choose the right letters");
        gameGenerator()
    }
}

function checkCorrectChoice(userChoice2){

    if(userChoice2==="P" ||userChoice2==="R" ||userChoice2==="S"){

        return true;

    }else{
        return false;
    }

}

gameGenerator();



 


   
