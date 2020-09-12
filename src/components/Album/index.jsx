import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PREFIX } from '~/constants';
import {
  Wrapper,
  AlbumPanel,
  AlbumStart,
  AlbumEnd,
  Cover,
  Tracklist,
  Links,
} from './styled';

const Album = ({
  data: {
    album: {
      html,
      frontmatter: {
        artist,
        title,
        cover,
        metadata: { tracks },
        links = [],
      },
    },
  },
}) => (
  <Wrapper>
    <Helmet>
      <title>{`${PREFIX}${title}`}</title>
      <meta name="og:title" content={`${PREFIX}${title}`} />
    </Helmet>
    <AlbumPanel>
      <h1>{title}</h1>
      <AlbumStart>
        <Cover>
          <img
            src={cover.includes('//') ? cover : require(`~/resources/${cover}`)}
            alt={`${artist} - ${title}`}
          />
        </Cover>
        <Tracklist>
          <ul>
            {tracks.map(({ title, runtime, lyrics, video }, i) => {
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
                      <a href={video} target="_blank" rel="noreferrer noopener">
                        Video
                      </a>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </Tracklist>
      </AlbumStart>
      <AlbumEnd>
        <Links>
          <h2>Listen</h2>
          {links.map(({ distributor, url }) => (
            <a
              href={url}
              key={distributor}
              target="_blank"
              rel="noreferrer noopener"
            >
              {distributor} →
            </a>
          ))}
        </Links>
      </AlbumEnd>
    </AlbumPanel>
  </Wrapper>
);

// Album.propTypes = {
//   data: PropTypes.shape({ date: PropTypes.object }).isRequired,
// };

export default Album;
