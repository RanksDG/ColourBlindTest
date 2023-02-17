randomDiv = document.getElementById("random");
output = document.getElementById("output");
scoreboard = document.getElementById("scoreboard");
copyButton = document.getElementById("copy-button");
color = ["red", "brown", "green", "yellow", "blue", "purple"];
hex = ["#de2e2e", "#521704", "#008c71", "#ffb200", "#133bd4", "#7b0460"]
currColor = -1;
trailsPerColor = 3; 
trails = color.length * trailsPerColor;
trailsleft= trails;
data = [];

function randomColor(){
    currColor = Math.floor(Math.random()* color.length);
    randomDiv.style.display = "inline-block";
    randomDiv.style.backgroundColor = hex[currColor];

}

function flushColor(){
    currColor = -1;
    randomDiv.style.display = "none";
}


function setScoreboard(){
    scoreboard.innerText = (trailsleft == 0) ? "Thank you ":`${trails - trailsleft} \\ ${trails}`;
    
}

function copydata(){
    navigator.clipboard.writeText(output.innerText);
    alert("Text has been copied!")
}

copyButton.onclick = function(){copydata()}