import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+':
      return Big(numberOne).plus(numberTwo).toFixed(4);
    case 'X':
      return Big(numberOne).times(numberTwo).toFixed(4);
    case '-':
      return Big(numberOne).minus(numberTwo).toFixed(4);
    case '÷':
      return Big(numberOne).div(numberTwo).toFixed(4);
    case '%':
      return Big(numberTwo).div(100).toFixed(4);
    default:
      return null;
  }
};

export default operate;
