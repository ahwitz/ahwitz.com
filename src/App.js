import './App.scss';
import React from 'react';

import LookingFor from './components/LookingFor';

function App()
{
  return (
    <div className="App">
      <div className="banner">
        <p className="banner-title">ahwitz - Andrew Horwitz</p>
        <p className="banner-subtitle">full-stack developer/composer</p>
      </div>

      <LookingFor left={true}
        headerText="If you were looking for information about me as a composer..."
        promptText="Click here."/>
      <LookingFor left={false}
        headerText="If you were looking for information about me as a developer..."
        promptText="Click here."/>
    </div>
  );
}

export default App;
