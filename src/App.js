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
