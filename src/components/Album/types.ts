import type { MusicRelease } from '../../../lib/contentful/generated';

export interface AlbumProps {
  data: {
    contentfulMusicRelease: MusicRelease;
  };
}
