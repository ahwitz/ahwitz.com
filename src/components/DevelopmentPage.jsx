import React from 'react';
import {Page} from './Page';
import works from './development.json';


export class DevelopmentPage extends Page
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    // Assign a key to satiate React, then component them
    let worksLocal = works.map(work =>
    {
      work.key = work.title;
      return work;
    }).map(work => React.createElement(Work, work));

    return (
      <div className="page development-page">
        <a className="return-home inverting-button"
          onClick={() => this.state.onSetActive(0)}>
          <span className="fa fa-chevron-left"></span>
        </a>

        <div className="page-content">
          <div className="page-header">Development</div>

          <div className="page-preface">
            <p>I&apos;m a software engineer specializing in <b>academic resource development</b>. I&apos;ve helped several organizations with content digitization, search and display interfaces, and business solutions. While I have expertise with a wide variety of technology, I have significant experience building solutions utilizing <b>MarkLogic</b>, <b>WordPress</b>, and <b>Amazon Web Services</b>.</p>

            <p>If you and your organization are looking to get content digitized and searchable quickly and efficiently, or if you have an older content delivery/management system and need help maintaining or modernizing it, send me a note at <a target="_blank" rel="noreferrer" href="mailto:ahwitz+website@gmail.com">ahwitz@gmail.com</a>.</p>

            <p>For some highlights of my porfolio, keep on scrolling...</p>
          </div>

          {worksLocal}
        </div>
      </div>
    );
  }
}


class Work extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {title, screenshots, info, links = {}} = this.props;
    return (
      <div className="work">
        <div className="work-body">
          <div className="work-screenshots">
            {
              screenshots.map(ss => <a href={ss} key={ss} target="_blank" rel="noreferrer">
                <img className="work-screenshot"
                  src={process.env.PUBLIC_URL + ss}
                  alt={'Screenshot of ' + title}/>
              </a>)
            }
          </div>
          <ul>
            <div className="work-title">{title}</div>
            {info.map(
              (line) => <li className="work-info-line" key={line}>
                <span className="fa fa-angle-double-right"></span>{line}</li>
            )}
            <ul className="work-links">
              {
                Object.keys(links).map(
                  (link) => <li key={link}><a className="work-link" href={link}>
                    {links[link]}
                  </a></li>
                )
              }
            </ul>
          </ul>
        </div>
      </div>
    );
  }
}
