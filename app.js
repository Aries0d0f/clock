// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth * 2
canvas.height = innerHeight * 2


// Variables
const initPosition = {
	x: canvas.width / 2,
	y: canvas.height / 2 
}

const colors = [
	'#FABD40',
	'#F5E094',
	'#fff8d6',
	'#ffffff'
]


// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)]
}


// Objects
function Particale(x, y, radius, color) {
	this.x = x
	this.y = y
	this.radius = radius
  this.color = color
  this.radians = Math.random() * Math.PI * 2
  this.velocity = 0.005 + (Math.random() * 0.02)
  this.distance = randomIntFromRange(300, 480)

	this.update = () => {
    const lastPoint = {x: this.x, y: this.y}
    this.radians += this.velocity
    this.x = x + Math.cos(this.radians) * this.distance
    this.y = y + Math.sin(this.radians) * this.distance
		this.draw(lastPoint)
	}

	this.draw = lastPoint => {
		c.beginPath()
    c.strokeStyle = this.color
    c.lineWidth = this.radius
    c.moveTo(lastPoint.x, lastPoint.y)
    c.lineTo(this.x, this.y)
    c.stroke()
		c.closePath()
	}
}

function clock(hour, min, sec) {
  this.draw = (time, long, color) => {
    this.x = initPosition.x + Math.cos((time - 0.25) * Math.PI * 2) * long
    this.y = initPosition.y + Math.sin((time - 0.25) * Math.PI * 2) * long
    c.beginPath()
    c.strokeStyle = color
    c.lineWidth = 1
    c.moveTo(initPosition.x, initPosition.y)
    c.lineTo(x, y)
    c.stroke()
    c.closePath()
  }
  draw(hour / 12, 300, '#FFFFFF')
  draw(min / 60, 490, '#888888')
  draw(sec / 60, 500, '#FABD40')
}


// Implementation
let particales
function init() {
	particales = []

	for (let i = 0; i < 150; ++i) {
    const radius = (Math.random() * 2) + 1
		particales.push(new Particale(
      canvas.width / 2,
      canvas.height / 2,
      radius , randomColor(colors)
    ))
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = 'rgba(0, 0, 0, 0.1)'
	c.fillRect(0, 0, canvas.width, canvas.height)
  particales.forEach(particale => {
    particale.update()
  })
  getTime()
}

function getTime() {
  this.sec = new Date().getSeconds() + (new Date().getMilliseconds() / 1000)
  this.min = new Date().getMinutes() + (sec / 60)
  this.hour = (new Date().getHours() % 12 || 12) + (min / 60)
  console.log(hour, min, sec)
  clock(hour, min, sec)
}

(function() {
  init()
  animate()
})();