export function getPercents (percent, number) {
  let result, piece  
 
  
  if (percent > 0 && number != 0) {
    result = `${percent}% от ${number} это ${number / 100 * percent}`
  } else if (percent == 0 && number != 0) {
    result ='Отсутствие процентного изменения, специфическое значение в математике';
  } else if (number == 0 && percent != 0) {
    result = "От нуля процент не высчитывается"
  } else if (percent < 0 && number != 0) {
    result = "Процент не может быть отрицательным числом";
  } else if (number == 0 && percent == 0) {
    result = "Все по нулям! Кошмар какой, мозг сломался!";
  }
   return result; 
}

