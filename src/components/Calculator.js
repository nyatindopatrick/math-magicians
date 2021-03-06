import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = buttonName => {
    const value = calculate({ total, next, operation }, buttonName);
    if (value.next !== undefined) {
      setNext(value.next);
    }
    if (value.total !== undefined) {
      setTotal(value.total);
    }
    if (value.operation !== undefined) {
      setOperation(value.operation);
    }
  };

  return (
    <div className="main">
      <div className="calculator-main">
        <h2>Let&#39;s do some math!</h2>
        <div className="app">
          <Display data={total === null ? '0' : total.toString()} />
          <ButtonPanel handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
