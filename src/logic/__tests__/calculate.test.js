import calculate from '../calculate';

it('Returns negative number for "+/-" button', () => {
  expect(
    calculate({ total: 5, next: null, operation: null }, '+/-').total,
  ).toEqual(-5);
});

it('Returns percentage of 5', () => {
  expect(
    calculate({ total: 5, next: null, operation: null }, '%').total,
  ).toEqual('0.05');
});

it('Return 25 as the product of 5 and 5', () => {
  expect(calculate({ total: 5, next: 5, operation: 'X' }, '=').total).toEqual(
    '25',
  );
});

it('Return 5 when 25 is divided by 5', () => {
  expect(calculate({ total: 5, next: 25, operation: '÷' }, '=').total).toEqual(
    '5',
  );
});

it('Adds two numbers to get 4', () => {
  expect(calculate({ total: 2, next: 2, operation: '+' }, '=').total).toEqual(
    '4',
  );
});

it('Subtracts two numbers to get 0', () => {
  expect(calculate({ total: 2, next: 2, operation: '-' }, '=').total).toEqual(
    '0',
  );
});

it('Sets everything to null when AC is pressed', () => {
  expect(calculate({ total: 2, next: 2, operation: '-' }, 'AC')).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});
