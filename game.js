let block = document.getElementById("block");
let pole = document.getElementById("pole");
let character = document.getElementById("char");
let jumping = 0;
let score = 0;
let scoreboard = document.getElementById("scoreboard");
let highscre=0;

block.addEventListener('animationiteration', () => {
    score += 10;
    let random = -((Math.random() * 350) + 200);
    block.style.top = random + "px";
});

setInterval(function() {
    let chartop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let poleleft = parseInt(window.getComputedStyle(pole).getPropertyValue("left"));
    let blocktop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    let ctop = -(550 - chartop);
    scoreboard.innerHTML = score;

    if (jumping == 0) {
        character.style.top = (chartop + 3) + "px";
    }

    if (chartop >= 550 || ((poleleft < 110) && (poleleft > -20) && ((ctop + 23 < blocktop) || (ctop > blocktop + 115)))) {
        alert("Game Over")
        setTimeout(function(){},1000)
        localStorage.setItem("finalScore", score);
        if(highscre<=score){
            highscre=score;
            localStorage.setItem("highscore",highscre);
        }
        window.location.href = "gameover.html";
    }
}, 10);

function jump() {
    jumping = 1;
    let jumpcount = 0;
    let jumpinterval = setInterval(function() {
        let chartop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((chartop > 6) && (jumpcount < 15)) {
            character.style.top = (chartop - 6) + "px";
        }
        if (jumpcount > 20) {
            clearInterval(jumpinterval);
            jumping = 0;
            jumpcount = 0;
        }
        jumpcount++;
    }, 10);
}
