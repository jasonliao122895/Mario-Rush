import Banana from './banana';
import BlueShell from './blueshell';

export default class Donkey {
  constructor(canvas) {
    this.dimension = [100, 100]
    this.x = canvas.width / 2 - 55
    this.y = 0;
    this.speed = 50;
    this.canvas = canvas
    this.hp = 100
    this.bananas = []
    this.blueShells = []
    this.bananathrown = 0
    this.ctx = canvas.getContext('2d')
  }

  draw(ctx) {
    let donkey = new Image()
    donkey.src = './dist/donkey.gif';
    ctx.drawImage(donkey, 0, 70, 35, 35, this.x, this.y, this.dimension[0], this.dimension[1])
  }

  fireBanana() {
    if (this.bananas.length < 1) {
      this.bananathrown += 1
      let banana = new Banana({x: this.x, y: this.y})
      this.bananas.push(banana);
    }
  }

  fireShell() {
    if (this.bananathrown % 5 === 0 && this.blueShells.length < 1) {
      let blueShell = new BlueShell({ x: this.x, y: this.y, canvas: this.canvas})
      this.blueShells.push(blueShell)
    }
  }

  cleanUpAmmo() {
    this.bananas.forEach((banana, i) => {
      if (banana.y > this.canvas.height) {
        this.bananas.splice(i, 1);
      }
    })
    if (this.blueShells[0] && this.blueShells[0].y > this.canvas.height) {
      this.blueShells.splice(0 , 1)
    }
  }

  update(deltaTime) {
    this.x += this.speed / deltaTime
    this.fireBanana();
    this.fireShell();
    this.bananas.forEach(banana => banana.update(deltaTime))
    this.bananas.forEach(banana => banana.draw(this.ctx))
    this.blueShells.forEach(shell => shell.update(deltaTime))
    this.blueShells.forEach(shell => shell.draw(this.ctx))

    this.cleanUpAmmo();
    if (this.x > this.canvas.width - 100 || this.x < 0) {
      this.speed = this.speed * -1
    }
  }
}