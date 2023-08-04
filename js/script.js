var endTime = (localStorage.endTime || 0)

const setTimer = () => {
    var duration = prompt('How long to set the timer (minutes)', '15')
    endTime = localStorage.endTime = duration * 60e3 + Date.now()
    update()
}

const resetTimer = () => {
    endTime = 0
    document.getElementById('minister').textContent = "-----"
}

const toggleControls = () => {
    document.body.classList.toggle('controls-hidden')
} 

const update = () => {
    var timeLeft = endTime - Date.now()
    if (timeLeft < 0) {
        setText('--:--')
    } else {
        var minutes = Math.floor(timeLeft / 60e3)
        var seconds = Math.floor(timeLeft / 1e3) % 60
        setText(`${minutes}:${seconds.toString(10).padStart(2, '0')}`)
    }
}

const setText = (text) => {
    document.getElementById('timer').textContent = text
}

setInterval(update, 200)

const setMinister = () => {
    minister = prompt("Enter the Minister's Name")
    document.getElementById('minister').textContent = minister
}