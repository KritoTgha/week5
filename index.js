import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddNumbers from './AddNumbers'; // Correct import path
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddNumbers num1={10} num2={5} /> {/* Pass num1 and num2 as props */}
  </React.StrictMode>
);

// Optionally, you can call reportWebVitals to measure app performance
reportWebVitals();
