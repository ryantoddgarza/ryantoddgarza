import React from 'react';
import type { FunctionComponent } from 'react';
import { PostCard, cardAspect } from '../PostCard';
import SEO from '../SEO';
import type { AlbumsProps } from './types';

const Albums: FunctionComponent<AlbumsProps> = ({ data }: AlbumsProps) => {
  const {
    allContentfulMusicRelease: { nodes: albums },
  } = data;

  return (
    <div className="albums">
      <SEO title="Albums" />
      <section className="section light module">
        <div className="container">
          <div className="posts-container">
            {albums.map(({ id, slug, title, artist, image, releaseDate }) => (
              <PostCard
                key={id}
                title={title}
                subtitle={`${artist?.name} — ${releaseDate?.split('-')[0]}`}
                image={image?.gatsbyImage}
                path={`/${slug}`}
                aspect={cardAspect.SQUARE}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Albums;
