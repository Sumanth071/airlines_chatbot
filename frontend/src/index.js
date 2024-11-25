import React from 'react';
import ReactDOM from 'react-dom/client';
import Chatbot from './Chatbot';
  // Ensure 'bot.js' exports 'App'
// or 'import Bot from './bot';' depending on the export

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Chatbot />
  </React.StrictMode>
);
