import React from 'react';
import type { FunctionComponent } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { Track, Writeup } from '../../../lib/contentful/generated';
import SEO from '../SEO';
import type { AlbumProps } from './types';

const Album: FunctionComponent<AlbumProps> = ({ data }: AlbumProps) => {
  const {
    contentfulMusicRelease: {
      title,
      releaseDate,
      label,
      format,
      upc,
      copyright,
      artist,
      image,
      tracks,
      credits,
      links,
      writeups,
    },
  } = data;

  const getCreditEl = ({ name, role }: { name: string; role: string }) => {
    const nameKey = `${name.substr(0, 3)}${role.substr(0, 7)}`;
    const roleKey = `${role.substr(0, 7)}${name.substr(0, 3)}`;
    const trailChar = '.';

    const componentArray = [
      <dt className="list-item xs" key={nameKey}>
        {name + trailChar.repeat(220)}
      </dt>,
      <dd className="list-item xs" key={roleKey}>
        {role}
      </dd>,
    ];

    return componentArray;
  };

  const layout = {
    hasExtendedData: credits || copyright,
  };

  const content = {
    details: [
      { key: 'Artist', value: artist?.name },
      { key: 'Date', value: releaseDate },
      { key: 'Format', value: format },
      { key: 'Label', value: label },
      { key: 'UPC', value: upc },
    ],
  };

  return (
    <article className="album">
      <SEO title={title} />
      <div className="layout--margin container">
        <div className="row">
          <div className="col left">
            <div className="cover-art">
              <GatsbyImage image={image?.gatsbyImage} alt="" />
            </div>
          </div>
          <div className="col right">
            <header className="header">
              <h1 className="title h1">{title}</h1>
              <h2 className="title h2">{artist?.name}</h2>
            </header>
            <section className="section">
              <header className="section-header">
                <h3 className="title">Info</h3>
              </header>
              <div>
                <ul className="meta-list">
                  {content.details.map(
                    ({ key, value }) =>
                      value && (
                        <li className="list-item sm" key={key}>
                          {key}: {value}
                        </li>
                      )
                  )}
                </ul>
              </div>
            </section>
            {links && (
              <section className="section">
                <header className="section-header">
                  <h3 className="title">Listen</h3>
                </header>
                <div>
                  <ul className="listen-list">
                    {links.map(
                      ({ name, url }: { name: string; url: string }) => (
                        <div className="list-item sm" key={name}>
                          <a
                            className="list-link"
                            href={url}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            {`${name} →`}
                          </a>
                        </div>
                      )
                    )}
                  </ul>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
      {tracks && (
        <div className="layout--margin container">
          <div className="row">
            <div className="col left">
              <header className="section-header">
                <h3 className="title">Tracks</h3>
              </header>
              <div className="tracks">
                <ul className="track-list">
                  {tracks.map(({ id, title, videoUrl }: Track, i: number) => {
                    const trackNum = i + 1;
                    return (
                      <li key={id} className="list-item md">
                        <div className="track-col index-col">
                          {trackNum.toString().padStart(2, '0')}
                        </div>
                        <div className="track-col title-col">{title}</div>
                        <div className="track-col link-col">
                          {videoUrl && (
                            <a
                              className="list-link"
                              href={videoUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              Video
                            </a>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {(layout.hasExtendedData || writeups) && (
        <div className="layout--margin container">
          <div className="row">
            {credits && (
              <div className="col left credits">
                <header className="section-header">
                  <h3 className="title">Credits</h3>
                </header>
                <div>
                  <dl className="credit-list">
                    {credits.map(
                      ({ name, role }: { name: string; role: string }) =>
                        getCreditEl({ name, role })
                    )}
                  </dl>
                </div>
                {copyright && <p>{copyright}</p>}
              </div>
            )}
            {writeups && (
              <div className="col right praise">
                <header className="section-header">
                  <h3 className="title">Praise</h3>
                </header>
                <div>
                  <ul className="praise-list">
                    {writeups.map(
                      ({ title, publication, author, date, url }: Writeup) => (
                        <li className="list-item sm" key={url}>
                          <div className="title">
                            <a
                              className="list-link"
                              href={url}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {publication}
                            </a>
                          </div>
                          <div className="detail">
                            {`
                              ${date ? date : ''}
                              ${title}
                              ${author ? ` by ${author}` : ''}
                            `}
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default Album;
