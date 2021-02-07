import React from 'react';
import PropTypes from 'prop-types';

export default class LookingFor extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      left: props.left,
      headerText: props.headerText,
      promptText: props.promptText
    };
  }

  render()
  {
    const {left, headerText, promptText} = this.state;
    console.log('yeah once', this.state);
    return (
      <div className={left ? 'looking-for looking-for-left' : 'looking-for looking-for-right'}>
        <div className="looking-for-header">{headerText}</div>
        <div className="looking-for-prompt">
          {
            left ? <div className="fa fa-chevron-left"></div>
              : <div className="fa fa-chevron-right"></div>
          }
          <p>{promptText}</p>
        </div>
      </div>
    );
  }
}
