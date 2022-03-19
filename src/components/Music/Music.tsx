import React from 'react';
import type { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../SEO';
import {
  List,
  listSize,
  TitledSection,
  PostCard,
  cardAspect,
} from '../../design/components';
import { ALBUMS_PATH } from '../../constants';
import { AlbumData } from '../Album';

const Music: FunctionComponent = () => {
  const {
    featAlbums: { nodes: albums },
    content: {
      title,
      links: { listen, credits },
    },
  } = useStaticQuery(graphql`
    query MusicQuery {
      content: resourcesJson(name: { eq: "music" }) {
        title
        links {
          listen {
            name
            url
          }
          credits {
            name
            url
          }
        }
      }
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

  const parseLinkData = (arr: any[]) =>
    arr.map(({ name, url }) => (
      <div key={name}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={`Ryan Todd Garza on ${name}`}
        >
          {name}
        </a>
      </div>
    ));

  return (
    <div className="music">
      <SEO title={title} />
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
        <section className="layout--margin">
          <TitledSection title="Listen">
            <List nodes={parseLinkData(listen)} size={listSize.LARGE} ordered />
          </TitledSection>
        </section>
        <section className="layout--margin">
          <TitledSection title="Credits">
            <List
              nodes={parseLinkData(credits)}
              size={listSize.LARGE}
              ordered
            />
          </TitledSection>
        </section>
      </div>
    </div>
  );
};

export default Music;
