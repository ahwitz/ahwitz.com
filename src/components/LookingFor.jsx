import React from 'react';

export default class LookingFor extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      left: props.left,
      headerText: props.headerText,
      promptText: props.promptText,
      link: props.link,
      onLinkClick: props.onLinkClick
    };
  }

  setActive()
  {
    // No-op if this has a link, because it's external
    if (this.state.link) return false;

    // Otherwise, update the index as requested
    this.state.onLinkClick();
  }

  render()
  {
    const {left, headerText, promptText, link} = this.state;
    return (
      <div className={left ? 'looking-for looking-for-left' : 'looking-for looking-for-right'}>
        <div className="looking-for-header">{headerText}</div>
        <a className="looking-for-prompt inverting-button" href={link}
          onClick={() => this.setActive()}>
          {
            left ? <div className="fa fa-chevron-left"></div>
              : <div className="fa fa-chevron-right"></div>
          }
          <p>{promptText}</p>
        </a>
      </div>
    );
  }
}
