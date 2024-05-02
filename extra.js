function startGame() {
    gameStarted = true; //Keep track of a running game
    instructionText.style.display = 'none';
    logo.style.display = 'none';
    gameInterval = setInterval(() => {
        move();
//        checkCollision();
        draw();
    }, gameSpeedDelay); 
}

// Keypress event listener

function handleKeyPress(event) {
    if( 
        (!gameStarted && event.code === 'Space') || 
        (!gameStarted && event.key === ' ')
    )  {
        startGame();
    } else {
        switch (event.key) {
            case 'ArrowUp' :
                direction = 'up';
                break;
            case 'ArrowUp' :
                direction = 'down';
                break;
            case 'ArrowUp' :
                direction = 'left';
                break;
            case 'ArrowUp' :
                direction = 'right';
                break;
        }
    }
}

document.addEventListener('keydown' handleKeyPress);
