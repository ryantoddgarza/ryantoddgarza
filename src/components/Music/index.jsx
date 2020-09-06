import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import SectionHeader from '~/components/Common/SectionHeader';
import CoverEkam from '~/resources/images/cover-ekam.jpg';
import { PREFIX } from '~/constants';
import { Wrapper, AlbumCard, Cover, Links } from './styled';

const Music = () => (
  <>
    <Helmet>
      <title>{`${PREFIX}MUSIC`}</title>
      <meta name="og:title" content={`${PREFIX}MUSIC`} />
    </Helmet>
    <Wrapper>
      <AlbumCard>
        <h2>Ekam</h2>
        <Cover>
          <img src={CoverEkam} alt="album cover" />
        </Cover>
        <p>September 09, 2020</p>
        <Links>
          <a
            href="https://ryantoddgarza.bandcamp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Bandcamp →
          </a>
          <a
            href="https://open.spotify.com/artist/7IWzHdwu7JSvad216IyNoe"
            target="_blank"
            rel="noreferrer noopener"
          >
            Spotify →
          </a>
          <a
            href="https://music.apple.com/us/artist/ryan-todd-garza/1094837829"
            target="_blank"
            rel="noreferrer noopener"
          >
            Apple Music →
          </a>
          <a
            href="https://listen.tidal.com/artist/7686132"
            target="_blank"
            rel="noreferrer noopener"
          >
            Tidal →
          </a>
        </Links>
      </AlbumCard>
    </Wrapper>
  </>
);

export default Music;
