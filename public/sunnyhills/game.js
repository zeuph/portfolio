const canvas = document.getElementById('sandbox')
const smallScore = document.getElementById('smallScore')
const bigScore = document.getElementById('scoreBoard')
const bigScoreText = document.getElementById('bigScore')

//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
// Make it visually fill the positioned parent f
canvas.style.width = '100%'
canvas.style.height = '100%'
// ...then set the internal size to match
canvas.width = canvas.offsetWidth
canvas.height = canvas.offsetHeight

const ctx = canvas.getContext('2d')
const max = canvas.width - canvas.width * 0.2
const min = canvas.width - canvas.width * 0.8
const playerX = canvas.width - canvas.width * 0.5
const playerY = canvas.height - canvas.height * 0.1
const maxEnemy = 10

const img = document.getElementById('gamechair')
const fruits = new Image()
const chars = new Image()
fruits.src = 'img/fruits.png'
chars.src = 'img/char.png'

/*
 * fix text box and text
 * particle effect on catch?
 * make ui look better
 *
 * christmas wish: boss battle
 *
 *
 */

document.addEventListener('keypress', function (e) {
  player.searchLetter(e.key)
})

function Customer(x, y, r, c, m, tarX, tarY, seatID) {
  this.x = x
  this.y = y
  this.r = r
  this.c = c
  this.m = m
  this.tarX = tarX
  this.tarY = tarY
  this.seatID = seatID
  this.opacity = 1
  this.decay = 0
  this.obj = new ThrowObject()
  this.char = new Char()
  this.eat = false

  this.draw = function () {
    ctx.beginPath()
    /*ctx.save;
      ctx.globalAlpha = this.opacity;
      this.opacity -= 0.1;
      ctx.restore;
      */
    ctx.fillStyle = this.c
    //ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.closePath()
    ctx.fill()
  }

  this.animate = function () {
    let angleDeg =
      (Math.atan2(this.tarY - this.y, this.tarX - this.x) * 180) / Math.PI
    dx = Math.cos(angleDeg)
    dy = Math.sin(angleDeg)
    let tempX = this.x
    const dist = Math.hypot(this.tarX - this.x, this.tarY - this.y)
    if (dist > 5) {
      this.x += dx
      this.y += dy
    }
    if (typeof m.getMessage() === 'string') {
      m.drawMessage(this.x, this.y, this.r)
    }
    if (typeof this.obj.food.name === 'string') {
      if (!this.eat) {
        if (this.x - tempX < 0) {
          this.obj.draw(this.x - 40, this.y + 5)
        } else {
          this.obj.draw(this.x, this.y)
        }
      } else {
        this.obj.drawEating(this.x, this.y)
      }
    }

    this.char.animate(this.x, this.y)
    this.draw()
  }

  this.catch = function (obj) {
    this.obj = obj
    this.obj.stayHere(this.x, this.y)
  }

  this.getMessage = function () {
    return this.m.getMessage()
  }
  this.eating = function () {
    this.eat = true
  }

  this.reduceLetter = function () {
    this.m.reduceLetter()
  }
  this.goTo = function (x, y) {
    this.tarX = x
    this.tarY = y
  }
  this.setSeat = function (id) {
    this.seatID = id
  }
}

function Message(m) {
  this.m = m
  this.mArr = m.split('')

  this.drawMessage = function (x, y, r) {
    let message = this.m
    let height = 30
    let width = 100
    let offsetX = 10
    let offsetY = 0

    ctx.strokeStyle = '#000'
    ctx.lineCap = 'round'
    ctx.lineWidth = 2
    ctx.fillStyle = 'white'
    ctx.font = '20px serif'
    ctx.beginPath()
    ctx.moveTo(x + r + offsetX, y - offsetY - height / 2)
    ctx.lineTo(x + width, y - offsetY - height / 2)
    ctx.lineTo(x + width, y - offsetY + height / 2)
    ctx.lineTo(x + r + offsetX, y + height / 2)
    ctx.fillText(message, x - r + width / 2, y - offsetY + r / 2)
    ctx.closePath()
    ctx.stroke()
  }

  this.setMessage = function (m) {
    this.m = m
  }

  this.getMessage = function () {
    return this.mArr[0]
  }
  this.reduceLetter = function () {
    this.mArr.shift()
    this.m = this.m.substring(1)
  }
}

function Player(x, y, r, c) {
  this.x = x
  this.y = y
  this.r = r
  this.c = c
  this.shouldSearch = true
  this.alive = true
  this.throwObject = new ThrowObject()
  this.char = new Char(3)

  this.draw = function () {
    this.char.draw(this.x, this.y)
    this.throwObject.stayHere(this.x + 15, this.y)
    this.throwObject.animate()
  }

  this.searchLetter = function (key) {
    if (this.shouldSearch) {
      for (let i = 0; i < customerArr.length; i++) {
        this.customer = customerArr[i]
        if (key === this.customer.getMessage()) {
          this.throwObject = new ThrowObject(
            this.x,
            this.y,
            this.c,
            8,
            this.x,
            this.y,
            0,
            0,
            this.customer.m.m,
          )
          this.customer.reduceLetter()
          this.target = i
          this.shouldSearch = false
          break
        }
      }
    } else {
      if (key === this.customer.getMessage()) {
        this.customer.reduceLetter()
        if (this.customer.m.mArr.length < 1) {
          throwArr.push(
            new ThrowObject(
              this.x,
              this.y,
              this.customer.c,
              8,
              this.customer.x,
              this.customer.y,
              throwArr.length,
              this.target,
              this.throwObject.food.name,
            ),
          )
          this.throwObject = new ThrowObject()
          this.shouldSearch = true
        }
      } else if (key !== this.customer.getMessage()) {
        console.log('miss')
      }
    }
  }
  this.setAlive = function (a) {
    this.alive = a
  }
}

function ThrowObject(x, y, c, r, tarX, tarY, id, targetID, food) {
  this.x = x
  this.y = y
  this.c = c
  this.r = r
  this.tarX = tarX
  this.tarY = tarY
  this.id = id
  this.targetID = targetID
  this.food = new Food(food)
  this.currentframe = 0
  this.framesdrawn = 0

  this.draw = function (x, y) {
    this.x = x
    this.y = y
    this.food.draw(this.x + 15 - r, this.y - r)
  }

  this.animate = function () {
    dx = tarX - this.x
    dy = tarY - this.y
    this.x += dx * 0.04
    this.y += dy * 0.04
    this.food.draw(this.x - r, this.y - r)
  }
  this.stayHere = function (x, y) {
    this.x = x
    this.y = y
    this.tarX = x
    this.tarY = y
  }
  this.drawEating = function (x, y) {
    this.framesdrawn++
    if (this.framesdrawn >= 15) {
      this.currentframe++
      this.currentframe = this.currentframe % 2
      this.framesdrawn = 0
    }
    this.food.draw(x + 5, y - 12 + 10 * this.currentframe)
  }
}

function Seat(x, y, r, c, taken, picWidth, picHeight) {
  this.x = x
  this.y = y
  this.r = r
  this.c = c
  this.taken = taken
  this.picWidth = picWidth
  this.picHeight = picHeight

  this.draw = function () {
    /*ctx.beginPath();
    ctx.fillStyle = this.c;
    //ctx.arc(this.x, this.y, 15, 0, Math.PI * 2);
    ctx.fill();*/
    this.picHeight = 70
    this.picWidth = 40
    this.offsetX = -5
    this.offsetY = 15

    ctx.save()
    ctx.beginPath()
    ctx.arc(this.x, this.y, 15, 0, Math.PI * 2)
    ctx.clip()

    ctx.drawImage(
      img,
      this.offsetX + this.x - this.picWidth / 2,
      this.offsetY + this.y - this.picHeight / 2,
      this.picWidth,
      this.picHeight,
    )
    ctx.restore()
  }

  this.setTaken = function (t) {
    this.taken = t
  }
}

function spawnCustomer() {
  let r = 15
  let x = Math.floor(Math.random() * (max - min + 1) + min)
  let y = 30
  let messageID = getRandomNumber(4, 0)
  customerArr.push(
    new Customer(
      x,
      y,
      r,
      colorList[messageID],
      new Message(messageList[messageID]),
      playerX,
      playerY,
    ),
  )
}

function findSeat() {
  for (let i = 0; i < seatArr.length; i++) {
    if (!seatArr[i].taken) {
      seatArr[i].setTaken(true)
      return [seatArr[i].x, seatArr[i].y, i]
    }
  }
}

function killCustomer(targetID, id) {
  let customer = customerArr[targetID]
  let seatCoords = findSeat()
  customer.goTo(seatCoords[0], seatCoords[1])
  customer.setSeat(seatCoords[2])
  customer.catch(throwArr[id])
  throwArr.splice(id, 1)
}

function spawnSeats(seats) {
  let x = 30
  let y = 70
  for (let i = 0; i < seats; i++) {
    seatArr.push(new Seat(x, y, 10, 'white', false))
    y += 80
  }
}

function Food(name, col, row) {
  let cols = 7
  let rows = 6
  this.name = name

  this.x = 0
  this.y = 0

  let spriteWidth = fruits.width / cols
  let spriteHeight = fruits.height / rows

  if (typeof this.name === 'string') {
    if (this.name === 'apple') {
      this.col = getRandomNumber(6, 3)
      this.row = 2
    }
    if (this.name === 'banana') {
      this.col = getRandomNumber(6, 5)
      this.row = 3
    }
    if (this.name === 'cherry') {
      this.col = 0
      this.row = getRandomNumber(1, 0)
    }
    if (this.name === 'grapes') {
      this.col = getRandomNumber(1, 2)
      this.row = getRandomNumber(0, 1)
    }
    if (this.name === 'orange') {
      this.col = getRandomNumber(1, 0)
      this.row = 3
    }
  }

  let srcX = this.col * spriteWidth
  let srcY = this.row * spriteHeight

  this.draw = function (x, y) {
    this.x = x
    this.y = y
    ctx.drawImage(
      fruits,
      srcX,
      srcY,
      spriteWidth,
      spriteHeight,
      this.x,
      this.y,
      spriteWidth,
      spriteHeight,
    )
    // Draw border for debug
    //ctx.beginPath();
    //ctx.strokStyle = "red";
    //ctx.lineWidth = 2;
    //ctx.strokeRect(this.x, this.y, spriteWidth, spriteHeight);
  }
}

function Char(col) {
  let cols = 8
  let rows = 6
  this.currentframe = 0
  this.framesdrawn = 0

  this.x = 0
  this.y = 0

  typeof col === 'number'
    ? (this.col = col)
    : (this.col = getRandomNumber(3, 0))

  let spriteWidth = chars.width / cols
  let spriteHeight = chars.height / rows

  let srcX = this.col * spriteWidth
  let srcY = this.row * spriteHeight

  this.draw = function (x, y) {
    this.row = 4
    this.x = x
    this.y = y
    srcY = this.row * spriteHeight
    ctx.save()
    scaleSprite(3, spriteWidth, spriteHeight, x, y, false)
    ctx.drawImage(
      chars,
      srcX,
      srcY,
      spriteWidth,
      spriteHeight,
      0,
      0,
      spriteWidth,
      spriteHeight,
    )
    ctx.restore()
  }

  this.animate = function (x, y) {
    this.row = 2
    let flipMe = false
    if (this.y > y) {
      this.row = 0 + this.currentframe
    } else if (this.y < y) {
      this.row = 4 + this.currentframe
    }
    if (this.x > x) {
      this.row = 2 + this.currentframe
      flipMe = true
    } else if (this.x < x) {
      this.row = 2 + this.currentframe
    }
    this.x = x
    this.y = y
    srcY = this.row * spriteHeight
    ctx.save()
    scaleSprite(3, spriteWidth, spriteHeight, x, y, flipMe)
    //ctx.font = "5px serif";
    //ctx.fillText(
    //  "x: " + Math.floor(this.x) + " y: " + Math.floor(this.y),
    //  0,
    //  0
    //);
    ctx.drawImage(
      chars,
      srcX,
      srcY,
      spriteWidth,
      spriteHeight,
      0,
      0,
      spriteWidth,
      spriteHeight,
    )
    ctx.restore()
    this.framesdrawn++
    if (this.framesdrawn >= 20) {
      this.currentframe++
      this.currentframe = this.currentframe % 2
      this.framesdrawn = 0
    }
  }
}

function scaleSprite(f, sWidth, sHeight, x, y, flipMe) {
  let xPos = x - (sWidth * f) / 2
  let yPos = y - (sHeight * f) / 2

  let fx = 0
  if (flipMe) {
    fx = f * -1
    xPos += sWidth * f
  } else {
    fx = f
  }
  ctx.translate(xPos, yPos)
  ctx.scale(fx, f)
}

function pauseBtn() {
  this.x = canvas.width * 0.9
  this.y = 15

  this.draw = function () {
    ctx.strokeStyle = '#649'
    ctx.lineCap = 'round'
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.x, this.y + 15)
    ctx.stroke()
    ctx.moveTo(this.x + 10, this.y)
    ctx.lineTo(this.x + 10, this.y + 15)
    ctx.stroke()
  }
}

function playBtn() {
  this.x = canvas.width * 0.95
  this.y = 15

  this.draw = function () {
    ctx.globalAlpha = 1.0
    ctx.fillStyle = '#1D1D1B'
    ctx.beginPath()
    ctx.moveTo(142, 69)
    ctx.bezierCurveTo(141, 31, 111, 1, 74, 0)
    ctx.bezierCurveTo(53, -1, 34, 7, 20, 22)
    ctx.bezierCurveTo(7, 36, -1, 54, 0, 74)
    ctx.bezierCurveTo(1, 111, 31, 141, 69, 142)
    ctx.bezierCurveTo(70, 142, 70, 142, 71, 142)
    ctx.bezierCurveTo(91, 142, 109, 135, 122, 121)
    ctx.bezierCurveTo(136, 107, 143, 88, 142, 69)
    ctx.lineTo(142, 69)
    ctx.moveTo(112, 110)
    ctx.bezierCurveTo(101, 121, 87, 127, 71, 127)
    ctx.bezierCurveTo(71, 127, 70, 127, 69, 127)
    ctx.bezierCurveTo(40, 126, 16, 103, 15, 73)
    ctx.bezierCurveTo(15, 58, 20, 43, 31, 32)
    ctx.bezierCurveTo(42, 21, 56, 15, 71, 15)
    ctx.bezierCurveTo(72, 15, 72, 15, 73, 15)
    ctx.bezierCurveTo(103, 16, 126, 40, 127, 69)
    ctx.bezierCurveTo(128, 85, 122, 99, 112, 110)
    ctx.lineTo(112, 110)
    ctx.fill()
    ctx.fillStyle = '#1D1D1B'
    ctx.beginPath()
    ctx.moveTo(95, 67)
    ctx.lineTo(63, 44)
    ctx.bezierCurveTo(60, 42, 55, 44, 55, 49)
    ctx.lineTo(55, 94)
    ctx.bezierCurveTo(55, 98, 60, 100, 63, 98)
    ctx.lineTo(95, 75)
    ctx.bezierCurveTo(97, 73, 97, 69, 95, 67)
    ctx.lineTo(95, 67)
    ctx.fill()
  }
}

function mouseDown(e) {
  let element = canvas
  let offsetX = 0,
    offsetY = 0

  if (element.offsetParent) {
    do {
      offsetX += element.offsetLeft
      offsetY += element.offsetTop
    } while ((element = element.offsetParent))
  }
  let x = e.pageX - offsetX
  let y = e.pageY - offsetY

  const distToBtn = Math.hypot(x - pause.x - 5, y - pause.y - 7)

  if (distToBtn < 10) {
    stop()
  }
}

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function initGame() {
  customerArr = []
  deadcustomerArr = []
  throwArr = []
  seatArr = []
  score = 0
  smallScore.innerHTML = score
  bigScore.style.display = 'none'
  spawnSeats(10)
  runAsync()
  Update()
}

const runAsync = () => {
  setTimeout(() => {
    let v = runAsync()
    customerArr.length < maxEnemy ? spawnCustomer() : null
  }, 2000)
  return
}

const messageList = ['apple', 'orange', 'banana', 'cherry', 'grapes']
const colorList = ['green', 'orange', 'yellow', 'brown', 'beige']

let customerArr = []
let throwArr = []
let seatArr = []

const player = new Player(
  canvas.width - canvas.width * 0.5,
  canvas.height - canvas.height * 0.1,
  15,
  'blue',
)

const pause = new pauseBtn()
const play = new playBtn()

let updateID
let score = 0

function saveHighscore() {
  console.log('Saving highscore.. ' + score)
  let scoreArr = []
  let setScore = true
  let tscore = score
  for (let i = 0; i < 10; i++) {
    let hs = localStorage.getItem('Highscore-' + i)
    hs != null ? (scoreArr[i] = hs) : (scoreArr[i] = 0)
  }
  for (let i = 0; i < scoreArr.length; i++) {
    if (scoreArr[i] < score && setScore) {
      scoreArr.splice(i, 0, score)
      setScore = false
      console.log(scoreArr[i], scoreArr.length)
    }

    localStorage.setItem('Highscore-' + i, scoreArr[i])
  }
  showScore()
}

function showScore() {
  let scoreArr = []
  let output = '<table>'
  for (let i = 0; i < 10; i++) {
    let hs = localStorage.getItem('Highscore-' + i)
    hs != null ? (scoreArr[i] = hs) : null
    if (scoreArr[i] != '0' && typeof scoreArr[i] !== 'undefined') {
      output += '<tr><td>'
      output += scoreArr[i] + '</td></tr>'
    }
  }
  output += '</table>'
  $('.highscorelist').html(output)
}

function stop() {
  cancelAnimationFrame(updateID)
}
function start() {
  Update()
}

function Update() {
  updateID = requestAnimationFrame(Update)
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < customerArr.length; i++) {
    let customer = customerArr[i]
    customer.animate()
    const distToPlayer = Math.hypot(
      customer.x - player.x,
      customer.y - player.y,
    )
    if (distToPlayer < 40) {
      cancelAnimationFrame(updateID)
      bigScore.style.display = 'flex'
      bigScoreText.innerHTML = score
      saveHighscore()
    }
    const distToTarget = Math.hypot(
      customer.tarX - customer.x,
      customer.tarY - customer.y,
    )
    if (distToTarget < 5) {
      customer.decay += 1
      customer.eating()
      if (customer.decay > 200) {
        for (let i = 0; i < throwArr.length; i++) {
          throwArr[i].targetID -= 1
        }
        player.target -= 1
        customerArr.splice(i, 1)
        seatArr[customer.seatID].setTaken(false)
      }
    }
  }
  for (let i = 0; i < throwArr.length; i++) {
    let throwObject = throwArr[i]
    throwObject.animate()
    let target = throwObject.targetID
    try {
      const dist = Math.hypot(
        customerArr[target].x - throwObject.x,
        customerArr[target].y - throwObject.y,
      )
      if (dist - customerArr[target].r - throwObject.r < 5) {
        killCustomer(target, i)
        score += 10
        smallScore.innerHTML = score
      }
    } catch (e) {
      console.log(e)
      stop()
    }
  }
  for (let i = 0; i < seatArr.length; i++) {
    let seat = seatArr[i]
    seat.draw()
  }

  player.draw()
  pause.draw()
  play.draw()
}
