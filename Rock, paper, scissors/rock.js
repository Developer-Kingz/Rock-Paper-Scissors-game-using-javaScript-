//Rock, papper, scissors challenge

function rpsGame(yourChoice){
    console.log(yourChoice);
    
    var humanChoice, botChoice;
    //first create a skeleton code to map out what the rpsgame will look like
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('computer choice:', botChoice);

    results = decideWinner(humanChoice, botChoice); //e.g(0,1) human lost, bot won
    console.log(results);

    message = finalMessage(results); 
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3); //Math.random()* 3 makes the bot to pic a random number between 0 and 3
}
function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage(yourScore, computerScore){
    if (yourScore === 0){
        return {'message': 'You Lost!', 'color': 'red'};
    } else if (yourScore === 0.5){
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'you Won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' style='box-shadow: 0px 10px 50px rgba(7, 50,233, 1);'>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' style='box-shadow: 0px 10px 50px rgba(243, 38,24, 1);'>"

    document.getElementById('flexbox-rps').appendChild(humanDiv);
    document.getElementById('flexbox-rps').appendChild(botDiv);

}