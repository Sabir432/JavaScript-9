function rang(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}



let minNumber = +prompt('Введите минимальный диапазон')
let maxNumber = +prompt('Введите максимальный диапазон')
let gg = +prompt('Введите число сколько примеров вы хотите :)')
let symbol = ""
let result = 0

for (let i = 0; i < gg; i++) {
  const num = rang(1, 4)

  let one = rang(minNumber, maxNumber)
  let two = rang(minNumber, maxNumber)

  if (num == 1) {
    symbol = '+'; 
    result = one + two;
  }
  else if (num == 2) {
    symbol = '-'; 
    result = one - two;
  }
  else if (num == 3) {
    symbol = '*'; 
    result = one * two;
  }
  else if (num == 4) {
    symbol = '/'; 
    result = one / two;
  }

  let answer = +prompt(`${one} ${symbol} ${two} = ?`)
  let word = answer == result ? 'Ну ты и молодец' : 'Ну ты и огурец, правильный ответ ' + result + '!'
  alert(one + symbol + two + ' = ' + result + '?' + ' Ваш ответ ' + answer + ', ' + word)
  console.log(one + symbol + two + ' = ' + result + '?' + ' Ваш ответ ' + answer + ', ' + word);
}