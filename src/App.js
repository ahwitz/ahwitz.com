import './App.scss';
import React from 'react';

import {HomePage} from './components/Page';

function App()
{
  return (
    <div className="App">
      <div className="banner">
        <p className="banner-title">ahwitz - Andrew Horwitz</p>
        <p className="banner-subtitle">composer/full-stack developer</p>
      </div>

      <HomePage/>
    </div>
  );
}

export default App;
