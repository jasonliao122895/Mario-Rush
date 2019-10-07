

export default class Banana {
  constructor(options) {
    this.x = options.x
    this.y = options.y
    this.dimension = [40, 40]
    this.speed = 115;
  }

  draw(ctx) {
    let banana = new Image()
    banana.src = './dist/banana.png';
    ctx.drawImage(banana, 0, 0, 40, 40, this.x, this.y, 40, 40)
  }

  update(deltaTime) {
    this.y += this.speed / deltaTime
  }
 }