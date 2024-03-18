import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GlobalStyles from './styles/Global Styles';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './styles/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
         <GlobalStyles />
         
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

