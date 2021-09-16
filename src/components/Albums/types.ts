import type { AlbumData } from '../Album';

export interface AlbumsProps {
  data: {
    albums: {
      nodes: AlbumData[];
    };
  };
}
