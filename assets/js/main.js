var ctx, canvas, date, time, h, m, s

function init() {
    canvas = document.getElementById('clock-timer')
    ctx = canvas.getContext('2d')
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.lineWidth = 3
    ctx.strokeStyle = '#ffffff'
    eval(`num_${h[0]}(0)`)
    eval(`num_${h[1]}(320)`)
    eval(`num_${m[0]}(760)`)
    eval(`num_${m[1]}(1080)`)
    eval(`num_${s[0]}(1520)`)
    eval(`num_${s[1]}(1840)`)
    if (s[1] % 2 == 0) {
        dot(640)
        dot(1400)
    }
}

function num_1(dx) {
    ctx.beginPath()
    ctx.moveTo(160 + dx, 160)
    ctx.lineTo(280 + dx, 40)
    ctx.lineTo(280 + dx, 280)
    ctx.stroke()
}

function num_2(dx) {
    ctx.beginPath()
    ctx.arc(160 + dx, 160, 120, 1 * Math.PI, 1.5 * Math.PI)
    ctx.lineTo(280 + dx, 40)
    ctx.lineTo(40 + dx, 280)
    ctx.lineTo(280 + dx, 280)
    ctx.stroke()
}

function num_3(dx) {
    ctx.beginPath()
    ctx.moveTo(40 + dx, 40)
    ctx.lineTo(280 + dx, 40)
    ctx.lineTo(160 + dx, 160)
    ctx.lineTo(280 + dx, 280)
    ctx.arc(160 + dx, 160, 120, 0.5 * Math.PI, 1 * Math.PI)
    ctx.stroke()
}

function num_4(dx) {
    ctx.beginPath()
    ctx.moveTo(280 + dx, 160)
    ctx.lineTo(40 + dx, 160)
    ctx.arc(160 + dx, 160, 120, 1 * Math.PI, 1.5 * Math.PI)
    ctx.lineTo(280 + dx, 40)
    ctx.lineTo(40 + dx, 280)
    ctx.stroke()
}

function num_5(dx) {
    ctx.beginPath()
    ctx.moveTo(280 + dx, 40)
    ctx.lineTo(160 + dx, 40)
    ctx.lineTo(40 + dx, 160)
    ctx.lineTo(280 + dx, 160)
    ctx.arc(160 + dx, 160, 120, 0 * Math.PI, 0.5 * Math.PI)
    ctx.lineTo(40 + dx, 280)
    ctx.stroke()
}

function num_6(dx) {
    ctx.beginPath()
    ctx.moveTo(280 + dx, 40)
    ctx.lineTo(160 + dx, 40)
    ctx.lineTo(40 + dx, 160)
    ctx.lineTo(280 + dx, 160)
    ctx.arc(160 + dx, 160, 120, 0 * Math.PI, 1 * Math.PI)
    ctx.stroke()
}

function num_7(dx) {
    ctx.beginPath()
    ctx.arc(160 + dx, 160, 120, 1 * Math.PI, 1.5 * Math.PI)
    ctx.lineTo(280 + dx, 40)
    ctx.lineTo(40 + dx, 280)
    ctx.stroke()
}

function num_8(dx) {
    ctx.beginPath()
    ctx.arc(160 + dx, 160, 120, 1 * Math.PI, 1.5 * Math.PI)
    ctx.lineTo(280 + dx, 40)
    ctx.lineTo(40 + dx, 280)
    ctx.lineTo(160 + dx, 280)
    ctx.moveTo(280 + dx, 160)
    ctx.arc(160 + dx, 160, 120, 0 * Math.PI, 0.5 * Math.PI)
    ctx.moveTo(280 + dx, 160)
    ctx.lineTo(40 + dx, 160)
    ctx.stroke()
}

function num_9(dx) {
    ctx.beginPath()
    ctx.moveTo(40 + dx, 280)
    ctx.lineTo(160 + dx, 280)
    ctx.moveTo(280 + dx, 160)
    ctx.arc(160 + dx, 160, 120, 0 * Math.PI, 0.5 * Math.PI)
    ctx.moveTo(280 + dx, 160)
    ctx.lineTo(40 + dx, 160)
    ctx.lineTo(160 + dx, 40)
    ctx.arc(160 + dx, 160, 120, 1.5 * Math.PI, 0 * Math.PI)
    ctx.stroke()
}

function num_0(dx) {
    ctx.beginPath()
    ctx.arc(160 + dx, 160, 120, 1 * Math.PI, 1.5 * Math.PI)
    ctx.lineTo(280 + dx, 40)
    ctx.lineTo(280 + dx, 160)
    ctx.arc(160 + dx, 160, 120, 0 * Math.PI, 0.5 * Math.PI)
    ctx.lineTo(40 + dx, 280)
    ctx.lineTo(40 + dx, 160)
    ctx.moveTo(40 + dx, 280)
    ctx.lineTo(280 + dx, 40)
    ctx.stroke()
}

function dot(dx) {
    ctx.beginPath()
    ctx.arc(60 + dx, 100, 10, 0, 2 * Math.PI)
    ctx.moveTo(70 + dx, 220)
    ctx.arc(60 + dx, 220, 10, 0, 2 * Math.PI)
    ctx.stroke()
}

function timer() {
    date = new Date()
    time = date.toString().split(' ')[4].split(':')
    h = time[0].split('')
    m = time[1].split('')
    s = time[2].split('')
    console.log(h, m, s)
    draw()
}

init()
setInterval('timer()', 1000)