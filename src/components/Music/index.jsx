import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import SectionHeader from '~/components/Common/SectionHeader';
import CoverEkam from '~/resources/images/cover-ekam.jpg';
import { PREFIX } from '~/constants';
import { Wrapper, AlbumCard, Cover, Links } from './styled';

const dist = [
  {
    distributor: 'Bandcamp',
    url: 'https://ryantoddgarza.bandcamp.com/album/ekam',
  },
  {
    distributor: 'Spotify',
    url: 'https://open.spotify.com/album/5kcR0DN8RXN54AfmIngvl6',
  },
  {
    distributor: 'Tidal',
    url: 'https://listen.tidal.com/album/154208173',
  },
  {
    distributor: 'Apple Music',
    url: 'https://music.apple.com/us/album/ekam/1530523304',
  },
  {
    distributor: 'Amazon Music',
    url: 'https://music.amazon.com/albums/B08HKQ1XFL',
  },
  {
    distributor: 'YouTube Music',
    url:
      'https://music.youtube.com/playlist?list=OLAK5uy_lC9q35EmKWO5uDCKvnTu9MsDP20wLMSKk',
  },
];

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
          <Link to="/music/ekam">
            <img src={CoverEkam} alt="album cover" />
          </Link>
        </Cover>
        <Links>
          {dist.map(({ distributor, url }) => (
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
      </AlbumCard>
    </Wrapper>
  </>
);

export default Music;
