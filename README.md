# Mario Rush

Mario is a shooting game where the player shoots shells to destroy incoming Bowsers to gain points. After reaching 3000 points, the player will face off against Donkey Kong Jr to win the game.

## Live

Play the game live [here](https://jasonliao122895.github.io/Mario-Rush/ "Mario Rush")

## Technologies
* JavaScript
* HTML5
* CSS3

## Features
* Implemented Game Loop to allow for smooth movement of player.
* Implemented collision logic to destroy Bowsers with shells, hurt Donkey Kong Jr with shells, and lose the game when the player gets hit.
* Implemented collision logic for blue shell to zigzag along the wall.
* Implemented the constant creation and removal of Bowsers as they enter and leave the screen.

## Code Snippets

```js
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
```
Use conditional logic to return false for conditions where I know the two object cannot be colliding. Then if those conditions aren't true I had the function return true. I use this function in other functions to check for the collision of different game objects so I know what actions should be done.


```js
addMoreBowsers() {
    if (this.score >= 3000) return
   let bowserHeights = this.bowsers.map(bowser => bowser.y)
   let allDone = bowserHeights.every(height => height > 0);
   if (allDone) {
     this.populateBowsers();
   }
  }
```
I saved all the existing bowser in an array as property of the game. I then used the map function to grab all those Bowsers' y coordinate. I know all the Bowsers I made are in the map when every Bowsers' y coordinate is greater than 0. Which means, I need to create more Bowsers off the screen at the top and which is what populateBowsers() does.

![mario rush](/dist/mariorush.png)
