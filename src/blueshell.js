
export default class BlueShell {
  constructor(options) {
    this.x = options.x
    this.y = options.y
    this.canvas = options.canvas
    this.dimension = [50, 50]
    this.speed = 100;
    this.speedY = 100;
  }

  draw(ctx) {
    let blueShell = new Image();
    blueShell.src = './dist/blueshell.png';
    ctx.drawImage(blueShell, 0, 0, 50, 50, this.x, this.y, 50, 50)
  }

  update(deltaTime) {
    this.x += (this.speed * 2) / deltaTime
    this.y += this.speedY / deltaTime

    if (this.x > this.canvas.width - 50 || this.x < 0) {
      this.speed = this.speed * -1
    }
  }
}