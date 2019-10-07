import Game from './game';
import InputHandler from './input';


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  const playbtn = document.getElementById('play')
  canvas.width = 400;
  canvas.height = 600;
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 400, 600)

 
  const game = new Game(canvas);
  game.setup()

  new InputHandler(game.mario);

  let lastTime = 0;
  let start = false
  const gameloop = (timeStamp) => {
    let deltaTime = timeStamp - lastTime
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (start) {
      game.update(deltaTime)
    } else {
      let image = new Image();
      image.src = './dist/road.jpg'
      ctx.drawImage(image, 0, 0)
      playbtn.addEventListener('click', () => {
        start = true
        playbtn.style.display = 'none'
      })

    }
    requestAnimationFrame(gameloop)
  }

  requestAnimationFrame(gameloop)

})