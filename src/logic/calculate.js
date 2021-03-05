import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  let obj;

  if (/[0-9]|\./.test(buttonName)) {
    if (buttonName === '.' && total.includes('.')) {
      obj = { total };
    }
    obj = {
      total: total === null ? buttonName : total + buttonName,
    };
  }
  if (/\+|X|-|÷/.test(buttonName)) {
    obj = {
      operation: buttonName,
      next: total,
      total: '',
    };
  }
  if (buttonName === '=') {
    obj = { total: operate(next, total, operation) };
  }
  if (buttonName === '%') {
    obj = { total: operate(next, total, buttonName) };
  }
  if (buttonName === 'AC') {
    obj = { total: null, next: null, operation: null };
  }
  if (buttonName === '+/-') {
    obj = { total: total > 0 ? total * -1 : total * 1 };
  }
  return obj;
};

export default calculate;
