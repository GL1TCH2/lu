player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");


player1_score = 0;
player2_score = 0;

document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";

document.getElementById("player1Score").innerHTML = player1_score;
document.getElementById("player2Score").innerHTML = player2_score;


document.getElementById("playerQuestion").innerHTML = "Turno da Pergunta - " + player1Name
document.getElementById("playerAnswer").innerHTML = "Turno da Resposta - " + player2Name

function send(){
    get_number1 = document.getElementById("numero1").value;
    get_number2 = document.getElementById("numero2").value;
  

   
    
  


    question_number = "<h4>"+ get_number1 + " X " + get_number2 + "</h4>" ;
    imputBox = "<br>Resposta: <input type='number' id='inputCheckBox'>";
    checkButton = "<br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_number + imputBox + checkButton;
    document.getElementById("output").innerHTML = row
    document.getElementById("numero1").value = "";
    document.getElementById("numero1").value = "";
}
 
questionTurn = "player1";
answerTurn = "player2";

function check()
{
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    if(answer == word){
        if(answerTurn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1Score").innerHTML = player1_score;
        }
            else{
                player2_score = player2_score + 1;
                document.getElementById("player2Score").innerHTML = player2_score;
        }
    }
    if(questionTurn == "player1"){
        questionTurn="player2"
        document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta -" + player2Name
    }
   else{
    questionTurn="player1"
    document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta -" + player1Name
   }
    
   if(answerTurn == "player1"){
    answerTurn="player2"
    document.getElementById("playerAnswer").innerHTML = "Turno de Resposta -" + player2Name
	}
	else{
	answerTurn="player1"
	document.getElementById("playerAnswer").innerHTML = "Turno de Resposta -" + player1Name
	}
   document.getElementById("output").innerHTML = "";
 }
