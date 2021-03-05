import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+':
      return Big(numberOne).plus(numberTwo).toFixed();
    case 'X':
      return Big(numberOne).times(numberTwo).toFixed();
    case '-':
      return Big(numberOne).minus(numberTwo).toFixed();
    case '÷':
      return Big(numberOne).div(numberTwo).toFixed();
    case '%':
      return Big(numberTwo).div(100).toFixed();
    default:
      return null;
  }
};

export default operate;
