import React from 'react';
import LookingFor from './LookingFor';

class Page extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      index: props.index,
      active: props.active || false,
      onSetActive: props.onSetActive
    };
  }
}

export class HomePage extends Page
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className="page">
        <LookingFor left={true}
          headerText="Information about purchasing/accessing compositions, upcoming performances..."
          promptText="Music"
          onLinkClick={() => this.state.onSetActive(-1)}/>
        <LookingFor left={false}
          headerText="Information about consulting, development projects, work history..."
          promptText="Software"
          onLinkClick={() => this.state.onSetActive(1)}/>

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
}

export class NonHomePage extends Page
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {index, active} = this.state;
    return (
      <div className="page">
          Index {index}, active {active ? 'true' : 'false'}
      </div>
    );
  }
}

