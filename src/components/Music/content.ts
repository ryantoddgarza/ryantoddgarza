import {
  ALLMUSIC_ID,
  AMAZON_MUSIC_ID,
  APPLE_MUSIC_ID,
  IMDB_ID,
  SPOTIFY_ID,
  TIDAL_ID,
} from '../../constants';

const content = {
  links: [
    {
      name: 'Bandcamp',
      url: 'https://ryantoddgarza.bandcamp.com',
    },
    {
      name: 'Spotify',
      url: `https://open.spotify.com/artist/${SPOTIFY_ID}`,
    },
    {
      name: 'Tidal',
      url: `https://listen.tidal.com/artist/${TIDAL_ID}`,
    },
    {
      name: 'Apple Music',
      url: `https://music.apple.com/us/artist/ryan-todd-garza/${APPLE_MUSIC_ID}`,
    },
    {
      name: 'Amazon Music',
      url: `https://music.amazon.com/artists/${AMAZON_MUSIC_ID}/ryan-todd-garza`,
    },
    {
      name: 'AllMusic',
      url: `https://allmusic.com/artist/ryan-todd-garza-${ALLMUSIC_ID}`,
    },
    {
      name: 'IMDB',
      url: `https://imdb.com/name/${IMDB_ID}`,
    },
  ],
};

export default content;
