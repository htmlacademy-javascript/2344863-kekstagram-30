/*функция comparesNumberLetters получает произвольную строку setString и максимальное колличество символов maxLetter. Определяет в произвольной строке количество символов, сравнивает с максимальным колличеством символов.
Выдает true, если произвольная строка меньше максимальное колличество символов, иначе false*/
function comparesNumberLetters(setString, maxLetter) {
  if (setString.length <= maxLetter) {
    console.log('В строке ' + setString.length + ' символов, что меньше или равно ' + maxLetter + ' значит', true);
  }
  else {
    console.log('В строке ' + setString.length + ' символов, что больше ' + maxLetter + ' значит', false);
  }
}
// Cтрока короче 20 символов
comparesNumberLetters('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
comparesNumberLetters('проверяемая строка', 18); // true
// Строка длиннее 10 символов
comparesNumberLetters('проверяемая строка', 10); // false

/*функция checksPalindrome получает строку setString и проверяет является ли она палидромом. Берет первый символ и сравнивает его в последним, потом второй с предпоследним и т.д.*/
/*function checksPalindrome(setString) {
  let string = setString.toUpperCase();
  for (let i = 0; i <= Math.floor(string.length / 2); i++) {
    console.log('Длинна выражения ' + string.length + ' символов.', ' -номер проверки ' + (i+1));

    if (string.at(i) === string.at(-1-i)) {
      console.log('Символ ' + setString.at(i) + ' и символ ' + string.at(-1-i) + ' равны');
    }
    else {
      console.log('Символ ' + string.at(i) + ' и символ ' + string.at(-1-i) + ' не равны');
      console.log('Выражение ' + string + ' не является палидромом');
      break;
    }
    if (i === Math.floor(string.length / 2)) {
    console.log('Выражение ' + string + ' палидром');
    }
  }
}

checksPalindrome('топот');
checksPalindrome('Кекс');
checksPalindrome('ДовОд');
checksPalindrome('Лёша на полке клопа нашёл')


/*Функция extractsNumbersFromString принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа number.
Функция берет по очереди символы и определяет их принадлежность к цифре. Если символ является цифрой, то она записывается методом конкаиенации в number.*/
/*function extractsNumbersFromString(string) {
  for (let i = 0; i < string.length; i++) {
    let w = string[i]
    console.log(w)
    if (w >= 0) {
      let number = String(number) + w
    }

  }
}
extractsNumbersFromString('gsf256sf5')*/

let man = {
  name: 'kos',
  age: 35,
  haer: {
    color: 'black',
    w: 'length'},
  religiy: true
}

let otherMan = structuredClone(man);
console.log(otherMan)
console.log(man ===otherMan)
