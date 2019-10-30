import Bowser from './bowser';
import Mario from './mario';
import Donkey from './donkey';

const NUM_BOWSERS = 2;

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')
    this.bowsers = [];
    this.backgroundY = -602
    this.score = 0;
    this.level = 1;
    this.lost = false
    this.win = false
    this.playAgain = document.querySelector('.hide')
  }

  

  setup() {
    this.populateMario();
    this.populateBowsers();
  }

  update(deltaTime) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let image = new Image();
    image.src = './dist/road.jpg'
    this.ctx.drawImage(image, 0, this.backgroundY += 10)
    if (this.backgroundY >= -2) {
      this.backgroundY = -602
    }
    this.ctx.fillStyle = 'white'
    this.ctx.font = '30px Verdana'
    this.ctx.fillText(this.score, 10, 30)
    if (this.donkey) {
      this.ctx.font = '15px Verdana'
      this.ctx.fillText(`Donkey's HP:${this.donkey.hp}`, 10, 55)
      this.ctx.font = '30px Verdana'
    }
    if (this.lost) {      
      this.playAgain.classList.remove('hide');
      this.playAgain.addEventListener('click', () => {
        this.score = 0;
        this.level = 1;
        this.bowsers = []
        this.mario.ammo = 3;
        this.mario.shells = [];
        this.donkey = null;
        this.mario.x = this.canvas.width / 2 - 15;
        this.mario.y = this.canvas.height - 40;
        this.lost = false;
        this.playAgain.classList.add('hide')
      })
      
      return
    } else if (this.win) {
      this.ctx.fillText('You Win', this.canvas.width / 2 - 60, this.canvas.height / 2)
      return
    }

    this.renderAmmos();
    this.addMoreBowsers();
    this.levelUp();
    this.garbageBowsers();
    this.mario.update(deltaTime);
    this.mario.draw(this.ctx);
    this.bowsers.forEach(bowser => bowser.update(deltaTime));
    this.bowsers.forEach(bowser => bowser.draw(this.ctx));
    if (this.donkey) {
      this.donkey.update(deltaTime);
      this.donkey.draw(this.ctx);
    }
    this.bowsersGetsHit();
    this.bowersHitMario()
    this.marioHitByBanana();
    this.marioHitByShell();
    this.donkeyHitByShell();
  }

  renderAmmos() {
    let redShell = new Image()
    redShell.src = './dist/redshell.png'
    if (this.mario.ammo === 3) {
      this.ctx.drawImage(redShell, 0, 0, 50, 50, this.canvas.width - 20, 10, 50, 50)
      this.ctx.drawImage(redShell, 0, 0, 50, 50, this.canvas.width - 40, 10, 50, 50)
      this.ctx.drawImage(redShell, 0, 0, 50, 50, this.canvas.width - 60, 10, 50, 50)
    } else if (this.mario.ammo === 2) {
      this.ctx.drawImage(redShell, 0, 0, 50, 50, this.canvas.width - 20, 10, 50, 50)
      this.ctx.drawImage(redShell, 0, 0, 50, 50, this.canvas.width - 40, 10, 50, 50)
    } else if (this.mario.ammo === 1) {
      this.ctx.drawImage(redShell, 0, 0, 50, 50, this.canvas.width - 20, 10, 50, 50)
    }
  }

  addMoreBowsers() {
    if (this.score >= 3000) return
   let bowserHeights = this.bowsers.map(bowser => bowser.y)
   let allDone = bowserHeights.every(height => height > 0);
   if (allDone) {
     this.populateBowsers();
   }
  }

  levelUp() {
    if (this.score >= 1000 && this.score < 2000 && !this.donkey) {
      this.bowsers.forEach(bowser => bowser.speed = 80)
    } else if (this.score >= 2000 && this.score < 3000) {
      this.bowsers.forEach(bowser => bowser.speed = 100)
    } else if (this.score >= 3000 && this.score < 4000 && !this.donkey) {
    //   this.bowsers.forEach(bowser => bowser.speed = 120)
    // } else if (this.score >= 4000 && this.score < 5000) {
    //   this.bowsers.forEach(bowser => bowser.speed = 140)
    // } else if (this.score >= 5000) {
      this.bowsers = [];
      this.donkey = new Donkey(this.canvas);
      this.donkey.draw(this.ctx);
    }
  }

  populateMario() {
    let mario = new Mario(this.canvas);
    mario.draw(this.ctx);
    this.mario = mario;
  }


  populateBowsers() {
    for (let i = 0; i < NUM_BOWSERS; i++) {
      let newBowser = new Bowser(this.canvas);
      newBowser.draw(this.ctx);
      this.bowsers.push(newBowser)
    }
  }

  garbageBowsers() {
    for (let i = 0; i < this.bowsers.length; i++) {
      if (this.bowsers[i].y > this.canvas.height) {
        this.bowsers.splice(i, 1);
      }
    }
  }

  remove(object) {
    if (object instanceof Bowser) {
      this.bowsers.splice(this.bowsers.indexOf(object), 1)
    } else if (object instanceof Mario) {
      this.mario = null;
    } 
  }

  collidedWith(obj1, obj2) {
    let top1 = obj1.y
    let bot1 = obj1.y + obj1.dimension[1]
    let right1 = obj1.x + obj1.dimension[0]
    let left1 = obj1.x
    let top2 = obj2.y
    let bot2 = obj2.y + obj2.dimension[1]
    let right2 = obj2.x + obj2.dimension[0]
    let left2 = obj2.x
    if (top1 > bot2 || right1 < left2 || bot1 < top2 || left1 > right2) {
      return false
    }
    return true
  }

  bowersHitMario() {
    this.bowsers.forEach(bowser => {
      if (this.collidedWith(bowser, this.mario)) {
        this.lost = true
      }
    })
  }

  bowsersGetsHit() {
    this.bowsers.forEach((bowser) => {
      this.mario.shells.forEach((shell) => {
        if (this.collidedWith(bowser, shell)) {
          this.remove(bowser)
          this.mario.deleteShell(shell)
          this.score += 100;
        }
      })
    })
  }

  marioHitByBanana() {
    if (this.donkey) {
      this.donkey.bananas.forEach(banana => {
        if (this.collidedWith(banana, this.mario)) {
          this.lost = true
        }
      })
    }
  }

  marioHitByShell() {
    if (this.donkey && this.donkey.blueShells[0]) {
      if (this.collidedWith(this.donkey.blueShells[0], this.mario)) {
        this.lost = true
      }
    }
  }

  donkeyHitByShell() {
    if (this.donkey) {
      this.mario.shells.forEach(shell => {
        if (this.collidedWith(shell, this.donkey)) {
          this.donkey.hp -= 10
          this.mario.deleteShell(shell)
        
          if (this.donkey.hp === 0) {
            this.win = true;
          }
        }
      })
    }
  }
}