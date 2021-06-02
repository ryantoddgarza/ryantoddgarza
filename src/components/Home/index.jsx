import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SEO from '~/components/Common/SEO';
import AlbumCard from '~/components/Common/AlbumCard';
import PortfolioCard from '~/components/Common/PortfolioCard';
import PostCard from '~/components/Common/PostCard';
import SectionHeader from '~/components/Common/SectionHeader';
import { ALBUMS_PATH, PORTFOLIOS_PATH, POSTS_PATH } from '~/constants';
import Typist from '~/lib/typist/dist/typist.es.min';
import { Title } from './styled';

const Home = ({ posts, albums, portfolios }) => {
  const featuredAlbums = albums.filter(
    ({ node: { featured } }) => featured === true
  );
  const featuredPosts = posts.filter(
    ({
      node: {
        frontmatter: { featured },
      },
    }) => featured === true
  );
  const featuredPortfolios = portfolios.filter(
    ({
      node: {
        frontmatter: { featured },
      },
    }) => featured === true
  );

  const [intro, setIntro] = useState('');
  const introduction = Typist(setIntro);

  useEffect(() => {
    introduction
      .type("Hi, I'm Ryan.\n")
      .pause(120)
      .type('A developer')
      .pause(120)
      .backspace(9)
      .type('musician')
      .pause(120)
      .backspace(8)
      .type('yogi')
      .pause(120)
      .backspace(4)
      .type('creative')
      .pause(240)
      .type('.')
      .start();

    return function cleanup() {
      introduction.stop();
    };
  }, []);

  return (
    <>
      <SEO />
      <div className="hero">
        <div className="container">
          <Title>{intro}</Title>
        </div>
      </div>
      {featuredAlbums.length >= 1 && (
        <section>
          <div className="container">
            <SectionHeader
              title="Featured Albums"
              linkName="View All"
              linkURL={ALBUMS_PATH}
            />
          </div>
          {featuredAlbums.slice(0, 1).map(
            ({
              node: {
                metadata: { title, cover },
                fields: { path },
              },
            }) => (
              <AlbumCard key={title} title={title} path={path} image={cover} />
            )
          )}
        </section>
      )}
      {featuredPortfolios.length >= 2 && (
        <section>
          <div className="container">
            <SectionHeader
              title="Featured Projects"
              linkName="View All"
              linkURL={PORTFOLIOS_PATH}
            />
          </div>
          {featuredPortfolios
            .slice(
              0,
              featuredPortfolios.length % 2 === 0
                ? featuredPortfolios.length
                : featuredPortfolios.length - 1
            )
            .map(
              ({
                node: {
                  frontmatter: { title, summary, banner },
                  fields: { path },
                },
              }) => (
                <PortfolioCard
                  key={path}
                  title={title}
                  summary={summary}
                  path={path}
                  image={banner}
                />
              )
            )}
        </section>
      )}
      {featuredPosts.length >= 8 && (
        <section className="posts-container">
          <div className="container">
            <SectionHeader
              title="Featured Posts"
              linkName="View All"
              linkURL={`${POSTS_PATH}/1`}
            />
          </div>
          {featuredPosts.slice(0, 8).map(
            ({
              node: {
                excerpt,
                frontmatter: { title, summary, tags, banner },
                fields: { path },
              },
            }) => (
              <PostCard
                key={path}
                title={title}
                summary={summary || excerpt}
                tags={tags}
                path={path}
                image={banner}
              />
            )
          )}
        </section>
      )}
    </>
  );
};

Home.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({})),
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
  posts: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  albums: [],
  portfolios: [],
  posts: [],
};

export default Home;
