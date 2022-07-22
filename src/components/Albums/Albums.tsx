import React from 'react';
import type { FunctionComponent } from 'react';
import { PostCard, cardAspect } from '../../design/components';
import SEO from '../SEO';
import type { AlbumsProps } from './types';

const Albums: FunctionComponent<AlbumsProps> = ({ data }: AlbumsProps) => {
  const {
    albums: { nodes: albums },
  } = data;

  return (
    <div className="albums">
      <SEO title="Albums" />
      <section className="layout--margin">
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
                  image={cover.childImageSharp.gatsbyImageData}
                  path={path}
                  aspect={cardAspect.SQUARE}
                />
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Albums;
