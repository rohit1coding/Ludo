let player1 ="Player1";
let player2= "Player2";
function enterPlayerName(){
    player1 = prompt("Enter the name of Player-1");
    player2 = prompt("Enter the name of Player-2");
    document.getElementById('player1').innerHTML=player1;
    document.getElementById('player2').innerHTML=player2;
    document.getElementById("battle").innerHTML=player1 +" vs "+ player2;
}
document.getElementById('playerName').onclick(enterPlayerName);

function playGame(){
    //For player 1
    var score1= Math.floor(Math.random()*6)+1;
    var img1 ="./Dice images/"+score1+".jfif";
    var randomImage1 =document.querySelectorAll('img')[0];
    randomImage1.setAttribute('src',img1);
    //For player 2
    var score2= Math.floor(Math.random()*6)+1;
    var img2 ="./Dice images/"+score2+".jfif";
    var randomImage2 =document.querySelectorAll('img')[1];
    randomImage2.setAttribute("src",img2);

    if(score1 > score2)
    {
        document.querySelector("h1").innerHTML= player1+ " win";
    }
    else if(score2 > score1)
    {
        document.querySelector("h1").innerHTML= player2 +" win";
    }
    else{
        document.querySelector("h1").innerHTML="Match Draw!";
    }
}
