player_1 = localStorage.getItem("player_1");
player_2 = localStorage.getItem("player_2");

player_1_score = 0;
player_2_score = 0;

document.getElementById("name1").innerHTML = player_1;
document.getElementById("name2").innerHTML = player_2;

document.getElementById("score1").innerHTML = player_1_score;
document.getElementById("score2").innerHTML = player_2_score;

function send(){
    firstnumber = document.getElementById("enternumber").value;
    console.log(firstnumber);
    secondnumber = document.getElementById("enternumber2").value;
    console.log(secondnumber);
    answer = parseInt(firstnumber) * parseInt(secondnumber);
    console.log(answer);

    question = "<h3> Question :" + firstnumber + " " + "X" + " " + secondnumber + "</h3>";
    answerinput = "<br> Answer : <input type='text' id='finalanswer'>";
    check = "<br><br> <button class='btn btn-success' onclick='check()'> Check </button>";
    all = question + answerinput + check;
    document.getElementById("output").innerHTML = all;

    document.getElementById("enternumber").value = "";
    document.getElementById("enternumber2").value = "";
}