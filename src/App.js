import './App.scss';
import React from 'react';

import {HomePage} from './components/Page';
import {MusicPage} from './components/MusicPage';
import {DevelopmentPage} from './components/DevelopmentPage';

export default class App extends React.Component
{
  constructor(options)
  {
    super(options);
    this.state = {
      activeIndex: 0
    };
  }

  onSetActive(index)
  {
    // scroll back to the top before triggering the change animation
    window.scrollTo({
      top: 0
    });
    this.setState({activeIndex: index});
  }

  render()
  {
    return (
      <div className="App">
        <div className="banner">
          <p className="banner-title">ahwitz - Andrew Horwitz</p>
          <p className="banner-subtitle">composer/software engineer</p>
          <p className="banner-links">
            <span className="banner-link">Email: <a href="mailto:ahwitz@gmail.com" target="_blank" rel="noreferrer">ahwitz@gmail.com</a></span>
            <span className="banner-link">LinkedIn: <a href="https://linkedin.com/in/ahwitz" target="_blank" rel="noreferrer">also ahwitz</a></span>
            <span className="banner-link">Github: <a href="https://github.com/ahwitz" target="_blank" rel="noreferrer">not surprisingly, ahwitz</a></span>
          </p>
        </div>

        <div className="pages" data-active-index={this.state.activeIndex}>
          <MusicPage onSetActive={(idx) => this.onSetActive(idx)}/>
          <HomePage onSetActive={(idx) => this.onSetActive(idx)}/>
          <DevelopmentPage onSetActive={(idx) => this.onSetActive(idx)}/>
        </div>
      </div>
    );
  }
}
