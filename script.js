alert("Привет! Предлагаю тебе сыграть одну интересную игру! Правила предельно просты! Я загадаю число от 1 до 10, а ты должен его отгадать. У тебя будет одна попытка");
let result = confirm('Ты готов приступить к игре?');
if (result === false) {
    alert("Возможно в другой раз. До свидания")
}
else {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    let yourNumber = prompt("выбери число от 1 до 10")
    let checkNumber = isNaN(yourNumber)
    if (checkNumber === true) {
        alert("Выбрано не числовое значение")
    }
    else if (+yourNumber == randomNumber) {
        alert('Поздравляю! Ты угадал') 
    }
    else if (yourNumber > 10) {
        alert("Ты выбрал число больше чем 10")
    } else if (yourNumber <= 0) {
        alert("Ты выбрал число меньше чем 1")
    } else {
        alert("Неудача! Верное число:" +  " " + (randomNumber) + " " + "Попробуй снова!")
    } 
}