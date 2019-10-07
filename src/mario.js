import Shell from './shell';

export default class Mario {
  constructor(canvas) {
    this.x = canvas.width / 2 - 15;
    this.y = canvas.height - 40;
    this.ctx = canvas.getContext('2d');
    this.dimension = [30, 35]
    this.speedX = 0;
    this.speedY = 0;
    this.velX = 45;
    this.velY = 55;
    this.canvasWidth = canvas.width
    this.canvasHeight = canvas.height
    this.color = 'red';
    this.shells = [];
    this.firing = false
    this.ammo = 3
  }

  draw(ctx) {
  
    let mario = new Image();
    mario.src = './dist/mario.gif';
   
    ctx.drawImage(
      mario,
      180,
      34,
      28,
      35,
      this.x,
      this.y,
      30,
      35
    )
  }

  moveLeft() {
    this.speedX = -this.velX;
  }
  
  moveRight() {
    this.speedX = this.velX;
  }

  moveUp() {
    this.speedY = -this.velY;
  }

  moveDown() {
    this.speedY = this.velY;
  }

  stopX() {
    this.speedX = 0;
  }

  stopY() {
    this.speedY = 0;
  }

  fire() {
    if (this.ammo === 0 || this.shells.length >= 3) return
    if (this.firing) {
      const newShell = new Shell({
        x: this.x,
        y: this.y
      })
      newShell.draw(this.ctx)
      newShell.speed = newShell.fireSpeed
      this.shells.push(newShell)
      this.firing = false
      this.ammo -= 1
    }
  }

  reload() {
    if (this.ammo === 0) {
      setTimeout(() => {
        this.ammo = 3;

      }, 1000)
    } else {
      return
    }
  }


  cleanUp() {
    this.shells.forEach((shell, i) => {
      if (shell.y < 0) {
        this.shells.splice(i, 1)
      }
    })
  }

  deleteShell(shell) {
    this.shells.splice(this.shells.indexOf(shell), 1)
  }

  update(deltaTime) {
    
    this.x += this.speedX / deltaTime;
    this.y += this.speedY / deltaTime;
    
    this.cleanUp()
    this.fire()
    this.shells.forEach(shell => shell.update(deltaTime))
    this.shells.forEach(shell => shell.draw(this.ctx))
    if (this.x < 0) {
      this.x = 0
    }
    if (this.x > this.canvasWidth - 30) {
      this.x = this.canvasWidth - 30
    }
    if (this.y < 0) {
      this.y = 0
    } 
    if (this.y > this.canvasHeight - 40) {
      this.y = this.canvasHeight -40
    }
  }
}