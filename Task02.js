const number = prompt('Введите число');


const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

console.log(isPrime(number));