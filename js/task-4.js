function getShippingCost(country) {
  let price;
  let message;

  switch (country) {
    case 'China':
      price = 100;
      break;
    case 'Chile':
      price = 250;
      break;
    case 'Australia':
      price = 170;
      break;
    case 'Jamaica':
      price = 120;
      break;
    default:
      return 'Sorry, there is no delivery to your country';
  }
  message = `Shipping to ${country} will cost ${price} credits`;
  return message;
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

// function checkNumberType(number) {
//   return number > 0 ? 'Positive' : number < 0 ? 'Negative' : 'Zero';
// }

// function getAccessMessage(isUser, hasPermission) {
//   return isUser && hasPermission ? 'Access granted' : 'Access denied';
// }

// function calculateDiscount(isVIP) {
//   return isVIP ? '20% discount' : '10% discount';
// }

// Завдання 1: Перевірка температури
// Створи функцію checkTemperature(temp), яка приймає один параметр
// temp(число) і повертає рядок "Hot", якщо температура більша або дорівнює 30, або "Cold", якщо менша за 30.

// function checkTemperature(temp) {
//   return temp >= 30 ? 'Hot' : 'Cold';
// }

// console.log(checkTemperature(35)); // "Hot"
// console.log(checkTemperature(20)); // "Cold"

// Завдання 2: Визначення більшого числа
// Створи функцію getMaxNumber(a, b), яка приймає два числа a і b і
// повертає більше з них.Якщо числа рівні, функція має повернути рядок "Numbers are equal".

// function getMaxNumber(a, b) {
//   return a > b ? a : a < b ? b : 'Numbers are equal';
// }

// console.log(getMaxNumber(10, 20)); // 20
// console.log(getMaxNumber(30, 15)); // 30
// console.log(getMaxNumber(5, 5)); // "Numbers are equal"

// Завдання 3: Перевірка парності числа
// Створи функцію isOddOrEven(number), яка приймає один параметр number(число) і
// повертає "Even", якщо число парне, або "Odd", якщо непарне.

// function isOddOrEven(number) {
//   return number % 2 ? 'Оdd' : 'Even';
// }

// console.log(isOddOrEven(4)); // "Even"
// console.log(isOddOrEven(7)); // "Odd"
