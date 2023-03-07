running = false;
//Erick Petrucelli
// const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`
keys = ["KeyS", "KeyD", "KeyF", "KeyJ", "KeyK", "KeyL"];

document.addEventListener("keyup", (event) => {
    if(trailsleft > 0){
        var codeValue = event.code;
        if (codeValue == "Space" && !running){
            randomColor();
            running = true;
            time = Date.now();
            console.log(time);
        }else if (keys.includes(codeValue) && running){
            pressedColor = keys.indexOf(codeValue);
            isCorrect = (currColor == pressedColor);
            elapsed = Date.now() - time;
            data.push([color[currColor],color[pressedColor], isCorrect, elapsed]);
            console.log("elasped", elapsed);
            console.log(data);
            flushColor();
            trailsleft--;
            running = false;
            
        }
        setScoreboard();
        if(trailsleft == 0){
            randomDiv.style.display = "none";
            output.innerText = JSON.stringify(data);
            copyButton.style.display = "inline-block";
        }
    }
    
}, false);