import React from 'react';
import type { FunctionComponent } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SEO from '../SEO';
import { PostCard, cardAspect } from '../PostCard';
import List, { listSize, listTheme } from '../List';
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
      <section className="section light">
        <div className="container">
          <div className="explore-module module">
            <div className="header">
              <h2 className="title">Featured Albums</h2>
              <div className="cta">
                <Link to={ALBUMS_PATH}>View all albums</Link>
              </div>
            </div>
            <div className="body">
              <div className="post-grid">
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
                      subtitle={`${artist?.name} — ${
                        releaseDate?.split('-')[0]
                      }`}
                      image={image?.gatsbyImage}
                      path={`/${slug}`}
                      aspect={cardAspect.SQUARE}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section light">
        <div className="container">
          <div className="explore-grid">
            <div className="explore-module module">
              <div className="header">
                <h2 className="title">Listen</h2>
              </div>
              <div className="body">
                <List
                  nodes={parseLinkData(listen)}
                  size={listSize.LARGE}
                  theme={listTheme.DARK}
                  ordered
                />
              </div>
            </div>
            <div className="explore-module module">
              <div className="header">
                <h2 className="title">Credits</h2>
              </div>
              <div className="body">
                <List
                  nodes={parseLinkData(credits)}
                  size={listSize.LARGE}
                  theme={listTheme.DARK}
                  ordered
                />
              </div>
            </div>
            <div className="explore-module module inquire">
              <div className="header">
                <h2 className="title">Inquire</h2>
              </div>
              <div className="body">
                <p className="u-copy">Email for licensing, press, and radio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Music;
