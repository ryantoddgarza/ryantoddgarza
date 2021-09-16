import React from 'react';
import type { FunctionComponent } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import SEO from '../SEO';
import type { AlbumProps, CreditData, TrackData } from './types';

const Album: FunctionComponent<AlbumProps> = ({
  data: {
    album: {
      metadata: { title, artist, cover, date, format, upc, publishing },
      tracks,
      credits,
      links,
      praise,
    },
  },
}: AlbumProps) => {
  const getAlbumRuntime = () => {
    let seconds = 0;

    tracks.forEach(({ runtime }: TrackData) => {
      const min = Number(runtime.split(':')[0]) * 60;
      const sec = Number(runtime.split(':')[1]);
      seconds += min + sec;
    });

    return Math.round(seconds / 60);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('default', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCreditEl = ({ name, role }: CreditData) => {
    const nameKey = `${name.substr(0, 3)}${role.substr(0, 7)}`;
    const roleKey = `${role.substr(0, 7)}${name.substr(0, 3)}`;
    const trailChar = '.';

    const componentArray = [
      <dt className="list-item md" key={nameKey}>
        {name + trailChar.repeat(220)}
      </dt>,
      <dd className="list-item md" key={roleKey}>
        {role}
      </dd>,
    ];

    return componentArray;
  };

  const content = {
    details: [
      { key: 'artist', value: artist },
      { key: 'date', value: date.split('-')[0] },
      { key: 'runtime', value: `${getAlbumRuntime()} minutes` },
      { key: 'format', value: format },
      { key: 'upc', value: upc },
    ],
  };

  const layout = {
    hasCredits: credits || publishing,
    hasPraise: praise,
  };

  return (
    <>
      <SEO title={title} />
      <div className="layout__main album">
        <section className="section container">
          <div className="album-row">
            <div className="album-col left">
              <div className="cover-container">
                <GatsbyImage
                  image={cover.childImageSharp.gatsbyImageData}
                  alt={cover.name}
                />
              </div>
            </div>
            <div className="album-col right">
              <div className="info">
                <div className="info-section">
                  <h1 className="album-title">{title}</h1>
                  <h2 className="album-subtitle">{artist}</h2>
                </div>
                <div className="info-section details">
                  <h3 className="section-heading">Info</h3>
                  <div className="panel">
                    {content.details.map(({ key, value }) => (
                      <div className="list-item sm" key={key}>
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="info-section links">
                  <h3 className="section-heading">Listen</h3>
                  <div className="panel">
                    {links.map(({ distributor, url }) => (
                      <div className="list-item sm" key={distributor}>
                        <a
                          className="list-link"
                          href={url}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {`${distributor} →`}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section container">
          <div className="album-row">
            <div className="album-col left">
              <div className="tracks">
                <h3 className="section-heading">Tracks</h3>
                <ul className="track-list">
                  {tracks.map(({ title, lyrics, video }, i) => {
                    const trackNum = i + 1;
                    return (
                      <li
                        className="list-item md track-row"
                        key={trackNum.toString()}
                      >
                        <div className="track-col data counter">
                          {trackNum.toString().padStart(2, '0')}
                        </div>
                        <div className="track-col data name">{title}</div>
                        <div className="track-col data link">
                          {lyrics && <a href={lyrics}>Lyrics</a>}
                        </div>
                        <div className="track-col data link">
                          {video && (
                            <a
                              className="list-link"
                              href={video}
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
        </section>
        <section className="section container">
          <div className="album-row">
            {layout.hasCredits && (
              <div className="album-col left">
                <div className="credits">
                  <h3 className="section-heading">Credits</h3>
                  {credits && (
                    <dl className="credit-list">
                      {credits.map(({ name, role }) =>
                        getCreditEl({ name, role })
                      )}
                    </dl>
                  )}
                  {publishing && <p>{publishing}</p>}
                </div>
              </div>
            )}
            {layout.hasPraise && (
              <div className="album-col right">
                <div className="praise">
                  <h3 className="section-heading">Praise</h3>
                  <div className="praise-list">
                    {praise.map(({ publication, title, author, date, url }) => (
                      <div className="list-item sm" key={url}>
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
                          ${formatDate(date)}
                          ${title ? `“${title}”` : ''}
                          ${author ? ` by ${author}` : ''}
                        `}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Album;
