import React from 'react';
import ReactDOM from 'react-dom/client';
import Bot from './bot';  // Ensure 'bot.js' exports 'Bot'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bot />
  </React.StrictMode>
);
