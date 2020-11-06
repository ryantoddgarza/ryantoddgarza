import { nanoid } from 'nanoid';
import { SITE_URL, ALBUMS_PATH, POSTS_PATH } from '~/constants';

const links = [
  {
    id: nanoid(),
    linkName: 'ryantoddgarza.com',
    url: SITE_URL,
  },
  {
    id: nanoid(),
    linkName: 'New album Ekam',
    url: `${SITE_URL}/${ALBUMS_PATH}/ekam`,
    featured: true,
  },
  {
    id: nanoid(),
    linkName: 'svara',
    url: 'https://svara.dev',
  },
  {
    id: nanoid(),
    linkName: 'Ens Ensemble on Bandcamp',
    url: 'https://ensensemble.bandcamp.com/',
  },
  {
    id: nanoid(),
    linkName: 'Blog',
    url: `${SITE_URL}/${POSTS_PATH}/1`,
  },
  {
    id: nanoid(),
    linkName: 'Recent articles on Medium',
    url: 'https://ryantoddgarza.medium.com',
  },
];

export default links;
