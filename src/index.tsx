import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import { StoreProvider } from './data/store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
