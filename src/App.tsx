import React from 'react';
import logo from './logo.svg';
import './App.css';

import { DialogsComponent, taskTestData } from './components/DialogList';
import { render } from '@testing-library/react';
import { MessComponent, messTestData } from './components/MessageList';

const App = () => {
  return (
    <div className="app">
      <DialogsComponent{...taskTestData} />
      <MessComponent{...messTestData} />
    </div>
  )

}

export default App;
