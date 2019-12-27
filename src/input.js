
export default class InputHandler {
  constructor(mario) {
    this.pressed = {}
    document.addEventListener('keydown', (e) => {
 
      switch(e.keyCode) {
        case 65:
          mario.moveLeft()
         
          break;
        case 68:
          mario.moveRight()
         
          break;
        case 87:
          mario.moveUp();
       
          break;
        case 83:
          mario.moveDown()
          break;
        
      }
    })


    document.addEventListener('keyup', (e) => {

      switch (e.keyCode) {
        case 65:
          if (mario.speedX < 0) {
            mario.stopX()
          }
          break;
        case 68:
          if (mario.speedX > 0) {
            mario.stopX()
          }
          break;
        case 87:
          if (mario.speedY < 0) {
            mario.stopY()
          }
          break;
        case 83:
          if (mario.speedY > 0) {
            mario.stopY()
          }
          break;
        case 75:
          if (mario.ammo > 0) {
            mario.firing = true
          }
          break;
        case 74:
          mario.reloading = true;
          mario.reload()
          break;
      }
    })

  }
}