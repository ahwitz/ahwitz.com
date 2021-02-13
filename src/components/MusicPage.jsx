import React from 'react';
import {Page} from './Page';
import compositions from './compositions.json';

export class MusicPage extends Page
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    // Invert order, assign a key to satiate React, then component them
    let compsLocal = compositions.reverse().map(comp =>
    {
      comp.key = comp.title;
      return comp;
    }).map(comp => React.createElement(Composition, comp));

    return (
      <div className="page music-page">
        <div className="page-content">
          <div className="page-header">Compositions</div>

          <p>I haven&apos;t had a reason to update this page for a long time, but there&apos;s a very good chance it&apos;s why you&apos;re here.</p>

          <p>Send me an email if you want a copy of any of these. I&apos;ll probably give it to you in exchange for asking for a recording if you ever make one. Only piece here that&apos;s not only self-published is the Sonatina for Baritone Saxophone, which has hard-copy information available below.</p>

          {compsLocal}
        </div>
        <a className="return-home inverting-button"
          onClick={() => this.state.onSetActive(0)}>
          <span className="fa fa-chevron-right"></span>
        </a>
      </div>
    );
  }
}

class Composition extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {title, year, info, recordings = {}, purchase = {}} = this.props;
    return (
      <div className="composition">
        <div className="composition-title">{title} ({year})</div>
        <ul>
          {info.map(
            (line) => <li className="composition-info-line" key={line}>{line}</li>
          )}
        </ul>
        {
          Object.keys(recordings).map(
            (link) => <li key={link}><a className="composition-link" href={link}>
              {recordings[link]}
            </a></li>
          )
        }
        {
          Object.keys(purchase).map(
            (link) => <li key={link}><a className="composition-link" href={link}>
              {purchase[link]}
            </a></li>
          )
        }
      </div>
    );
  }
}
