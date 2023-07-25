import React from 'react';

const Expense = () => {

  return (
    <div>

      <h2>We can build our Expense record here</h2>
      <h1>Expense</h1>

      <h3>Source</h3> <input placeholder='Expense' type='text' />
      <h3>Amount</h3> <input type='number' /> <br /> <br />
      <button type='submit'>Submit</button>
    </div>
  );
};

export default Expense;