

export default class Shell {
  constructor(options) {
    this.dimension = [16, 16];
    this.x = options.x;
    this.y = options.y;
    this.speed = 0;
    this.fireSpeed = -75;
  }

  draw(ctx) {
    ctx.fillStyle = 'purple';
    // ctx.fillRect(this.x, this.y, this.dimension[0], this.dimension[1])
    let redShell = new Image()
    redShell.src = './dist/redshell.png'
    ctx.drawImage(
      redShell,
      0,
      0,
      16,
      16,
      this.x,
      this.y,
      16,
      16

    )
  }

  update(deltaTime) {
    this.y += this.speed / deltaTime
  }
}