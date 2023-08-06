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
        setText("Time Up", "red")
    } else {
        var minutes = Math.floor(timeLeft / 60e3)
        var seconds = Math.floor((timeLeft % 60e3) / 1e3)
        setText(minutes + ':' + (seconds < 10 ? '0' : '') + seconds, "white")
    }
}

const setText = (text, color) => {
    document.getElementById('timer').textContent = text
    document.getElementById('timer').style.color = color
}

setInterval(update, 200)

const setMinister = () => {
    minister = prompt("Enter the Minister's Name")
    document.getElementById('minister').textContent = minister
}