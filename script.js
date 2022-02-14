let canvas = document.getElementById("snake"); 
let context = canvas.getContext("2d");
let box =32
let snake = [];
snake[0] = {
    x: 8* box,
    y: 8* box
}
let direction = "right"; // criação de onde a cobrinha partirá
let food = { // criação dos posicionamentos onde a comidinha ira aparecer 
    x:Math.floor (Math.random() * 15 +1 ) * box,
    y:Math.floor (Math.random()*15 + 1 ) * box
}

// criação da caixa do jogo 
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
    
}
// crição da cobrinha 
function criarCobrinha(){
    for (i = 0; i< snake.length; i++) {
      context.fillStyle="green";
      context.fillRect (snake[i].x, snake[i].y, box, box);
       
    }
}
// criação da comida da cobrinha 

function drawFood(){
    context.fillStyle = "red";
    context.fillRect (food.x, food.y, box, box );
    
}

// criação do evento onde é identificado o click no teclado
document.addEventListener('keydown', update);


//direcões que a cobrinha ira correr (exeto na direção oposta), os n° são os cod do teclado
function update(event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode== 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
 
}

// função para inicializar o jogo 

function iniciarJogo() {
    
    if(snake[0].x > 15 * box && direction == "right") snake[0].x =0;
    if(snake[0].x < 0 && direction == "left") snake[0].x =16*box;
    if (snake[0].y > 15 *box && direction == "down") snake[0].y =0;
    if (snake [0].y <0 && direction =="up")snake[0].y=16*box;

    for (i =1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
        
    }

//funções chamadas 
    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX= snake[0].x; 
    let snakeY= snake [0].y;

    // direção para  a cobrinha andar 
    if (direction =="right") snakeX += box;
    if (direction =="left") snakeX -= box;
    if (direction =="up") snakeY -= box;
    if (direction =="down") snakeY += box;

     // comando para que a cbrinha aumente de tamanho qdo comer a comidinha e para
    //que as comidinhas apareção em lugares direferentes. 

    if (snakeX != food.x || snakeY != food.y){
        snake.pop();
        
    }else{
        food.x = Math.floor (Math.random() * 15 +1 ) * box;
        food.y = Math.floor (Math.random()*15 + 1 ) * box;

    }



    let newHead = {
        x: snakeX,
        y: snakeY

    // acrescenta uma no primeiro elemento

    }
        snake.unshift(newHead);

    }
let jogo = setInterval(iniciarJogo, 150); // função de tempo 


