import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContext from './context/ThemeContext';
import MoviesContext from './context/MoviesContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext>
      <MoviesContext>
        <App />
      </MoviesContext>
    </ThemeContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
