// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  let totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    return 'Insufficient funds!';
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

function checkAccess(age) {
  if (age < 18) {
    return 'Access denied: You must be at least 18 years old.';
  } else {
    return 'Access granted: Welcome!';
  }
}

console.log(checkAccess(16)); // "Access denied: You must be at least 18 years old."
console.log(checkAccess(18)); // "Access granted: Welcome!"
console.log(checkAccess(21)); // "Access granted: Welcome!"

function isEven(number) {
  if (number % 2 !== 0) {
    return 'Odd';
  } else {
    return 'Even';
  }
}

console.log(isEven(4)); // "Even"
console.log(isEven(7)); // "Odd"
console.log(isEven(0)); // "Even"

function chooseSubscription(isStudent, wantsPremium) {
  if (isStudent) {
    return 'Basic Student Package';
  } else if (wantsPremium) {
    return 'Premium Package';
  } else {
    return 'Basic Package';
  }
}

console.log(chooseSubscription(true, true)); // "Basic Student Package"
console.log(chooseSubscription(false, true)); // "Premium Package"
console.log(chooseSubscription(false, false)); // "Basic Package"

function isEligibleForDiscount(totalAmount, isMember) {
  if (totalAmount >= 100) {
    return 'Eligible for discount';
  } else if (totalAmount < 100 && isMember === true) {
    return 'Eligible for discount';
  } else {
    return 'Not eligible for discount';
  }
}

console.log(isEligibleForDiscount(120, false)); // "Eligible for discount"
console.log(isEligibleForDiscount(50, true)); // "Eligible for discount"
console.log(isEligibleForDiscount(50, false)); // "Not eligible for discount"

function isAvailable(productInStock, isDiscontinued) {
  if (productInStock === true && !isDiscontinued) {
    return 'Available';
  } else {
    return 'Not available';
  }
}

console.log(isAvailable(true, false)); // "Available"
console.log(isAvailable(false, true)); // "Not available"
console.log(isAvailable(false, false)); // "Not available"

// Завдання 3: Перевірка доступу до ресурсу
// Напиши функцію hasAccess(isAdmin, hasPermission, isBanned), яка приймає три параметри:

// isAdmin — булеве значення, яке вказує, чи є користувач адміністратором.
// hasPermission — булеве значення, яке вказує, чи є у користувача дозвіл на доступ.
// isBanned — булеве значення, яке вказує, чи є користувач заблокованим.
// Функція повинна повертати рядок:

// "Access granted" — якщо користувач є адміністратором або має дозвіл, і він не заблокований.
// "Access denied" — в інших випадках.

function hasAccess(isAdmin, hasPermission, isBanned) {
  if (isBanned === true) {
    return 'Access denied';
  } else if (isAdmin === true) {
    return 'Access granted';
  } else if (hasPermission === true) {
    return 'Access granted';
  } else {
    return 'Access denied';
  }
}

console.log(hasAccess(true, false, false)); // "Access granted"
console.log(hasAccess(false, true, false)); // "Access granted"
console.log(hasAccess(false, true, true)); // "Access denied"
