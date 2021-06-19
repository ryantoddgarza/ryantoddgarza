import React from 'react';
import PropTypes from 'prop-types';
import SEO from '~/components/Common/SEO';
import SectionHeader from '~/components/Common/SectionHeader';
import { Hero, PostCard, cardAspect } from '~/design/components';
import { ALBUMS_PATH, PORTFOLIOS_PATH, POSTS_PATH } from '~/constants';

const content = {
  hero: {
    heading: 'I build practical systems to actualize creative concepts.',
    copy: "I'm Ryan Todd Garza. I draw from a broad background of interdisciplinary pattern abstraction to develop effective technical and creative solutions to artistic and entrepreneurial ventures.",
  },
};

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

  return (
    <>
      <SEO />
      <Hero heading={content.hero.heading} copy={content.hero.copy} />
      {featuredAlbums && (
        <section className="container">
          <SectionHeader
            title="Featured Albums"
            linkName="View All"
            linkURL={ALBUMS_PATH}
          />
          <div className="posts-container">
            {featuredAlbums.map(
              ({
                node: {
                  type,
                  metadata: { title, artist, date, cover },
                  fields: { path },
                },
              }) => (
                <PostCard
                  aspect={cardAspect.SQUARE}
                  key={title}
                  title={title}
                  summary={`${
                    type[0].toUpperCase() + type.slice(1)
                  } by ${artist} (${date.split('-')[0]})`}
                  path={path}
                  image={cover}
                />
              )
            )}
          </div>
        </section>
      )}
      {featuredPortfolios && (
        <section className="container">
          <SectionHeader
            title="Featured Projects"
            linkName="View All"
            linkURL={PORTFOLIOS_PATH}
          />
          <div className="posts-container">
            {featuredPortfolios.map(
              ({
                node: {
                  frontmatter: { title, summary, banner },
                  fields: { path },
                },
              }) => (
                <PostCard
                  key={path}
                  title={title}
                  summary={summary}
                  path={path}
                  image={banner}
                />
              )
            )}
          </div>
        </section>
      )}
      {featuredPosts && (
        <section className="container">
          <SectionHeader
            title="Featured Posts"
            linkName="View All"
            linkURL={`${POSTS_PATH}/1`}
          />
          <div className="posts-container">
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
          </div>
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
