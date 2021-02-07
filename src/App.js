import './App.scss';
import React from 'react';

import LookingFor from './components/LookingFor';

function App()
{
  return (
    <div className="App">
      <div className="banner">
        <p className="banner-title">ahwitz - Andrew Horwitz</p>
        <p className="banner-subtitle">composer/full-stack developer</p>
      </div>

      <LookingFor left={true}
        headerText="Information about purchasing/accessing compositions, upcoming performances..."
        promptText="Music"/>
      <LookingFor left={false}
        headerText="Information about consulting, development projects, work history..."
        promptText="Software"/>

      <div className="other-horwitzes">
        <div className="other-horwitzes-header">In case I&apos;m too good at SEO and you were looking for:</div>

        <LookingFor left={true}
          headerText="...an 'innovative and thought-leading writer, curator, and cultural producer,' he prefers to be called Andy."
          promptText="Andy Horwitz"
          link="http://andyhorwitz.com/"/>

        <LookingFor left={false}
          headerText="...a photographer based out of London who specializes in hotel/food photography, you found the wrong Andrew."
          promptText="Other Andrew Horwitz"
          link="https://andrewhorwitz.com/"/>

      </div>
    </div>
  );
}

export default App;
