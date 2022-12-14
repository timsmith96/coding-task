import React from 'react';
import ReactDOM from 'react-dom/client';
import BirthdayInfo from './BirthdayInfo';
import exampleUser from './ExampleData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BirthdayInfo user={exampleUser} />
  </React.StrictMode>
);
