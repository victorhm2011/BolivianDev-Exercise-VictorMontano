import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Mars from '../src/mars/Mars';
import Instrucctions from '../src/intructions/Intrucctions';

ReactDOM.render(
  <React.StrictMode>
    <Instrucctions></Instrucctions>
    <Mars></Mars>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
