function animation(arg, element){
    let i = {
        radius: 250,
        speed: 20,
    }
    let f = 0
    let s = 2 * Math.PI / 180
    setInterval(function () {
        f += s
        element.style.left = 235 + i.radius * Math.sin(f) + 'px'
        element.style.top = 235 + i.radius * Math.cos(f) + 'px'
    }, i.speed)
}

const timer = document.querySelector('.second')

let time = 0
const interval = setInterval(() => {
    time++
    timer.innerText = time

    if (time === 61) {
        clearInterval(interval)
        alert('прошло 60 секунд')
    }console.log(time)
}, 1000 )