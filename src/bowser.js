
export default class Bowser {
  constructor(canvas) {
    this.x = Math.floor(Math.random() * (canvas.width - 30));
    this.y = Math.floor(Math.random() * canvas.height / 2) - canvas.height / 2 ;
    this.dimension = [30, 35];
    this.speed = 65;
  }

  draw(ctx) {
   let bowser = new Image()
   bowser.src = './dist/bowser.gif'
    ctx.drawImage(
      bowser,
      193,
      0,
      30,
      35,
      this.x,
      this.y,
      30,
      35
    )
  }

  update(deltaTime) {
    this.y += this.speed / deltaTime
  }
  
}