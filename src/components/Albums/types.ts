import type { MusicRelease } from '../../../lib/contentful/generated';

export interface AlbumsProps {
  data: {
    allContentfulMusicRelease: {
      nodes: MusicRelease[];
    };
  };
}
