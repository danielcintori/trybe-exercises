const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const getText = document.querySelector('.game-over')
const clouds = document.querySelector('.clouds')
let score = 0;
let highScore = 0;
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');


const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";        
    pipe.style.left = `${pipePosition}px`;
    
    clouds.style.animationPlayState = 'paused';
    
    mario.src = "./game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";
    
    getText.style.display = 'block';
    
    clearInterval(loop);
  }

  // Check if Mario passed the pipe
  if (pipePosition <= 0) {
    score += 1;
    scoreElement.textContent = `Score: ${score}`;
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = `High Score: ${highScore}`;
    }
  }
}, 10);


document.addEventListener("keydown", jump);

