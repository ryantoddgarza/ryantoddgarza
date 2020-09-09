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
        <Links>
          <a
            href="https://ryantoddgarza.bandcamp.com/album/ekam"
            target="_blank"
            rel="noreferrer noopener"
          >
            Bandcamp →
          </a>
          <a
            href="https://open.spotify.com/album/5kcR0DN8RXN54AfmIngvl6"
            target="_blank"
            rel="noreferrer noopener"
          >
            Spotify →
          </a>
          <a
            href="https://music.apple.com/us/album/ekam/1530523304"
            target="_blank"
            rel="noreferrer noopener"
          >
            Apple Music →
          </a>
          <a
            href="https://music.amazon.com/albums/B08HKQ1XFL"
            target="_blank"
            rel="noreferrer noopener"
          >
            Amazon Music →
          </a>
          <a
            href="https://listen.tidal.com/album/154208173"
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
