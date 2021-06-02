import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import SEO from '~/components/Common/SEO';
import {
  Wrapper,
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

const Credit = (name, role) => {
  const id1 = nanoid();
  const id2 = nanoid();
  const componentArray = [<dt key={id1}>{name}</dt>, <dd key={id2}>{role}</dd>];

  return componentArray;
};

const Album = ({
  data: {
    album: {
      metadata: { title, artist, cover, date, format, upc, publishing },
      tracks,
      credits,
      links,
    },
  },
}) => {
  const getAlbumRuntime = () => {
    let seconds = 0;

    tracks.forEach(({ runtime }) => {
      const min = Number(runtime.split(':')[0]) * 60;
      const sec = Number(runtime.split(':')[1]);
      seconds += min + sec;
    });

    return Math.round(seconds / 60);
  };

  return (
    <>
      <SEO title={title} />
      <Wrapper className="layout__main">
        <AlbumPrimary className="container">
          <ContentLeft>
            <Cover>
              <GatsbyImage
                image={getImage(cover)}
                alt=""
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
                <li>{`${getAlbumRuntime()} minutes`}</li>
                <li>{format}</li>
                <li>{upc}</li>
              </ul>
            </Details>
            <Links>
              <h2>Listen</h2>
              {links.map(({ distributor, url }) => (
                <li key={distributor}>
                  <a href={url} target="_blank" rel="noreferrer noopener">
                    {`${distributor} →`}
                  </a>
                </li>
              ))}
            </Links>
          </ContentRight>
        </AlbumPrimary>
        <AlbumSecondary className="container">
          <ContentLeft>
            {tracks ? (
              <Tracklist>
                <h2>Tracks</h2>
                <ul>
                  {tracks.map(({ title, lyrics, video }, i) => {
                    const trackNum = i + 1;
                    return (
                      <li className="track-row" key={trackNum.toString()}>
                        <div className="track-counter">
                          {trackNum.toString().padStart(2, '0')}
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
            ) : null}
            {credits || publishing ? (
              <Credits>
                <h2>Credits</h2>
                {credits ? (
                  <dl>{credits.map(({ role, name }) => Credit(role, name))}</dl>
                ) : null}
                {publishing ? <p>{publishing}</p> : null}
              </Credits>
            ) : null}
          </ContentLeft>
          <ContentRight />
        </AlbumSecondary>
      </Wrapper>
    </>
  );
};

Album.propTypes = {
  data: PropTypes.shape({
    album: PropTypes.shape({
      metadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        cover: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({}),
          }),
        }).isRequired,
        date: PropTypes.string,
        format: PropTypes.string,
        upc: PropTypes.string,
        publishing: PropTypes.string,
      }),
      tracks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
      credits: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
      links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    }).isRequired,
  }).isRequired,
};

export default Album;
