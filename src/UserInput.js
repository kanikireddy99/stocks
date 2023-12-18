import React from 'react';

const UserInput = ({ handleInputSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const n = parseInt(e.target.elements.number.value);
        handleInputSubmit(n);
      }}
    >
      <label>
        Enter the number of stocks (max 20):
        <input type="number" name="number" />
      </label>
      <button type="submit">Fetch Stocks</button>
    </form>
  );
};

export default UserInput;
