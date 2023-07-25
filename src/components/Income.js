import React from 'react';

const Income = () => {

  return (
    <div>
      <h2>We can build our Income record here</h2>

      <h1>Income</h1>
      <h3>Source</h3> <input placeholder='Income' type='text' />
      <h3>Amount</h3> <input type='number' /> <br /> <br />
      <button type='submit'>Submit</button>
    </div>
  );
};

export default Income;