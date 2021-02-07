import './App.scss';
import React from 'react';

import {HomePage, NonHomePage} from './components/Page';

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
    console.log('setting to', index);
    this.setState({activeIndex: index});
  }

  render()
  {
    return (
      <div className="App">
        <div className="banner">
          <p className="banner-title">ahwitz - Andrew Horwitz</p>
          <p className="banner-subtitle">composer/full-stack developer</p>
        </div>

        <div className="pages" data-active-index={this.state.activeIndex}>
          <NonHomePage index={-1} active={false}
            onSetActive={(idx) => this.onSetActive(idx)}/>
          <HomePage index={0} active={true}
            onSetActive={(idx) => this.onSetActive(idx)}/>
          <NonHomePage index={1} active={false}
            onSetActive={(idx) => this.onSetActive(idx)}/>
        </div>
      </div>
    );
  }
}
