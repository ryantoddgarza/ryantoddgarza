import React from 'react';
import type { FunctionComponent } from 'react';
import { Hero, PostCard, cardAspect } from '../../design/components';
import SEO from '../SEO';
import type { AlbumsProps } from './types';

const Albums: FunctionComponent<AlbumsProps> = ({ data }: AlbumsProps) => {
  const {
    albums: { nodes: albums },
  } = data;

  return (
    <>
      <SEO title="Albums" />
      <Hero heading="Albums" copy="" />
      <div className="container">
        <div className="posts-container">
          {albums.map(
            ({
              metadata: { title, artist, cover, date },
              fields: { path },
            }) => (
              <PostCard
                key={title}
                title={title}
                subtitle={`${artist} — ${date.split('-')[0]}`}
                image={cover}
                path={path}
                aspect={cardAspect.SQUARE}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Albums;
