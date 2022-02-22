import React from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../SEO';
import { TitledSection, PostCard, cardAspect } from '../../design/components';
import { ALBUMS_PATH } from '../../constants';
import { AlbumData } from '../Album';
import content from './content';

const Music: FunctionComponent = () => {
  const {
    featAlbums: { nodes: albums },
  } = useStaticQuery(graphql`
    query MusicQuery {
      featAlbums: allProjectsJson(
        filter: {
          type: { eq: "album" }
          hide: { ne: true }
          featured: { eq: true }
        }
        sort: { fields: [metadata___date], order: DESC }
      ) {
        nodes {
          metadata {
            title
            artist
            cover {
              childImageSharp {
                gatsbyImageData
              }
            }
            date
          }
          fields {
            path
          }
        }
      }
    }
  `);

  return (
    <div className="music">
      <SEO title={content.title} />
      <div className="container">
        <section className="layout--margin">
          <TitledSection
            title="Featured Albums"
            link={{ name: 'View all albums', url: ALBUMS_PATH }}
          >
            <div className="posts-container">
              {albums.map(
                ({
                  metadata: { title, artist, cover, date },
                  fields: { path },
                }: AlbumData) => (
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
          </TitledSection>
        </section>
      </div>
    </div>
  );
};

export default Music;
