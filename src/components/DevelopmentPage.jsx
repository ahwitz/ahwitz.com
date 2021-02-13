import React from 'react';
import {Page} from './Page';


export class DevelopmentPage extends Page
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="page development-page">
        <a className="return-home inverting-button"
          onClick={() => this.state.onSetActive(0)}>
          <span className="fa fa-chevron-left"></span>
        </a>

        <div className="page-content">
          <div className="page-header">Development</div>
        </div>
      </div>
    );
  }
}

