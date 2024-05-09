// начально значение показа времени
let mode = 'time'
// забираем из html id в которым будем обращаться
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBnt = document.getElementById('date')
const timeBtn = document.getElementById('time')


// функции переключения времени и даты
fullBtn.onclick = function() {
    mode = 'full'
    update()
}

dateBnt.onclick = function() {
    mode = 'date'
    update()
}

timeBtn.onclick = function() {
    mode = 'time'
    update()
}

// вызоваем  update который из format берет выбранный вариант показа (каждую секунду)
setInterval(update, 1000) 
update()

// вызываем format и апдейтим переменную mode что бы вывести выбранный формат даты и времени
function update() {
    output.textContent = format(mode)
}

// основная функция переключения формата 
function format(formatMode) {
    const now = new Date()

    switch (formatMode) {
        case 'time' : 
        return now.toLocaleTimeString()
        case 'date' : 
        return now.toLocaleDateString()
        case 'full' : 
        return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default:
        now.toLocaleTimeString()
    }
}