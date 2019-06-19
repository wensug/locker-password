module.exports = function getPassword() {
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return numbers.reduce((password, digit, index, array) => {
    for (let i = 0; i <= array.length; i++) {
      if (digit * array[i] === 24) {
        let firstDig = digit;
        let secondDig = array[i];
        let fourthDig = getFourthDig(secondDig);
        if (firstDig && secondDig && fourthDig) {
          password.push(sumDigit(firstDig, secondDig, fourthDig, numbers));
        }
      }
    }
    return password;
  }, [])[0];
}

function getFourthDig(number) {
  if (number % 3 === 0) {
    return number / 3;
  }
}

function sumDigit(firstNumber, secondNumber, fourthNumber, numbers) {
  for (let i = 0; i <= numbers.length; i++) {
    let firstAndThirdSum = firstNumber + numbers[i];
    for (let j = 0; j <= numbers.length; j++) {
      let lastTwoDigSum = fourthNumber + numbers[j];
      if (firstAndThirdSum === lastTwoDigSum) {
        let sumNumber =
          firstNumber + secondNumber + numbers[i] + fourthNumber + numbers[j];
        if (Number(sumNumber) === 26) {
          return (
            `${firstNumber}${secondNumber}${numbers[i]}${fourthNumber}${numbers[j]}`
          );
        }
      }
    }
  }
}



