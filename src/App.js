import './App.scss';
import React from 'react';

import {HomePage} from './components/Page';
import {MusicPage} from './components/MusicPage';
import {SoftwarePage} from './components/SoftwarePage';

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
          <SoftwarePage onSetActive={(idx) => this.onSetActive(idx)}/>
        </div>
      </div>
    );
  }
}
