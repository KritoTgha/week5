import React, { useState } from 'react';

function AddNumbers(props) {
  const [sum, setSum] = useState(0); // Initialize sum with 0

  const calculateSum = () => {
    setSum(props.num1 + props.num2); // Add num1 and num2 passed from parent component
  };

  return (
    <div>
      <h2>Sum of two numbers: {sum}</h2>
      <button onClick={calculateSum}>Add Numbers</button>
    </div>
  );
}

export default AddNumbers;
