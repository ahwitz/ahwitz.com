import React from 'react';
import {Page} from './Page';


export class MusicPage extends Page
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="page music-page">
        <a className="return-home inverting-button"
          onClick={() => this.state.onSetActive(0)}>
          <span className="fa fa-chevron-right"></span>
        </a>
          Music page
      </div>
    );
  }
}

