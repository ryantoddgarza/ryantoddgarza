import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PREFIX } from '~/constants';
import {
  Wrapper,
  AlbumPanel,
  AlbumPrimary,
  AlbumSecondary,
  ContentLeft,
  ContentRight,
  Title,
  Cover,
  Details,
  Tracklist,
  Links,
  Credits,
} from './styled';

const Album = ({
  data: {
    album: {
      html,
      frontmatter: {
        artist,
        title,
        cover,
        metadata: { date, format, upc, tracks },
        credits = [],
        links = [],
      },
    },
  },
}) => {
  const getAlbumRuntime = () => {
    let seconds = 0;

    const runtimeInSeconds = tracks.forEach(({ runtime }) => {
      const min = parseInt(runtime.split(':')[0]) * 60;
      const sec = parseInt(runtime.split(':')[1]);
      seconds += min + sec;
    });

    return Math.round(seconds / 60);
  };

  return (
    <Wrapper>
      <Helmet>
        <title>{`${PREFIX}${title}`}</title>
        <meta name="og:title" content={`${PREFIX}${title}`} />
      </Helmet>
      <AlbumPrimary>
        <ContentLeft>
          <Cover>
            <img
              src={
                cover.includes('//') ? cover : require(`~/resources/${cover}`)
              }
              alt={`${artist} - ${title}`}
            />
          </Cover>
        </ContentLeft>
        <ContentRight>
          <Title>
            <h1>{title}</h1>
            <p>{artist}</p>
          </Title>
          <Details>
            <h2>Info</h2>
            <ul>
              <li>{artist}</li>
              <li>{date.split('-')[0]}</li>
              <li>{getAlbumRuntime()} minutes</li>
              <li>{format}</li>
              <li>{upc}</li>
            </ul>
          </Details>
          <Links>
            <h2>Listen</h2>
            {links.map(({ distributor, url }) => (
              <li key={distributor}>
                <a href={url} target="_blank" rel="noreferrer noopener">
                  {distributor} →
                </a>
              </li>
            ))}
          </Links>
        </ContentRight>
      </AlbumPrimary>
      <AlbumSecondary>
        <ContentLeft>
          <Tracklist>
            <h2>Tracks</h2>
            <ul>
              {tracks.map(({ title, lyrics, video }, i) => {
                let num = ++i;
                return (
                  <li className="track-row" key={title}>
                    <div className="track-counter">
                      {num.toString().padStart(2, '0')}
                    </div>
                    <div className="track-name">{title}</div>
                    <div className="track-lyrics">
                      {lyrics ? <a href="">Lyrics</a> : null}
                    </div>
                    <div className="track-video">
                      {video ? (
                        <a
                          href={video}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          Video
                        </a>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Tracklist>
          {credits ? (
            <Credits>
              <h2>Credits</h2>
              {credits.map(({ name, role }) => (
                <dl>
                  <dd>{role}</dd>
                  <dt>{name}</dt>
                </dl>
              ))}
            </Credits>
          ) : null}
        </ContentLeft>
        <ContentRight></ContentRight>
      </AlbumSecondary>
    </Wrapper>
  );
};

// Album.propTypes = {
//   data: PropTypes.shape({ date: PropTypes.object }).isRequired,
// };

export default Album;
