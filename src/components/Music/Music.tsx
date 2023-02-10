import React from 'react';
import type { FunctionComponent } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SEO from '../SEO';
import { PostCard, cardAspect } from '../PostCard';
import { List, listSize } from '../../design/components';
import { ALBUMS_PATH } from '../../constants';
import type { MusicRelease } from '../../../lib/contentful/generated';

const Music: FunctionComponent = () => {
  const {
    allContentfulMusicRelease: { nodes: albums },
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
      allContentfulMusicRelease(
        filter: { type: { eq: "album" }, featured: { eq: true } }
        sort: { fields: releaseDate, order: DESC }
      ) {
        nodes {
          id
          slug
          title
          releaseDate
          artist {
            name
          }
          image {
            gatsbyImage(width: 1280)
          }
        }
      }
    }
  `);

  const parseLinkData = (arr: { name: string; url: string }[]) =>
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
        <section className="section light layout--margin">
          <header className="section-header">
            <h2 className="section-header title h2">Featured Albums</h2>
          </header>
          <div>
            <div className="posts-container">
              {albums.map(
                ({
                  id,
                  slug,
                  title,
                  releaseDate,
                  artist,
                  image,
                }: MusicRelease) => (
                  <PostCard
                    key={id}
                    title={title}
                    subtitle={`${artist?.name} — ${releaseDate?.split('-')[0]}`}
                    image={image?.gatsbyImage}
                    path={`/${slug}`}
                    aspect={cardAspect.SQUARE}
                  />
                )
              )}
            </div>
            <div className="view-all">
              <Link to={ALBUMS_PATH}>View all albums</Link>
            </div>
          </div>
        </section>
        <section className="section light layout--margin">
          <header className="section-header">
            <h2 className="section-header title h2">Listen</h2>
          </header>
          <div>
            <List nodes={parseLinkData(listen)} size={listSize.LARGE} ordered />
          </div>
        </section>
        <section className="section light layout--margin">
          <header className="section-header">
            <h2 className="section-header title h2">Credits</h2>
          </header>
          <div>
            <List
              nodes={parseLinkData(credits)}
              size={listSize.LARGE}
              ordered
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Music;
