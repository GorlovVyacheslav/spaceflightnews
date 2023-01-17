import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './style/style.scss';
import App from './components/App';
import { ThemeProvider, createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
