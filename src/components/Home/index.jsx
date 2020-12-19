import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SEO from '~/components/Common/SEO';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import Hero from '~/components/Common/Hero';
import AlbumCard from '~/components/Common/AlbumCard';
import PortfolioCard from '~/components/Common/PortfolioCard';
import PostCard from '~/components/Common/PostCard';
import SectionHeader from '~/components/Common/SectionHeader';
import {
  TITLE as SITE_TITLE,
  ALBUMS_PATH,
  PORTFOLIOS_PATH,
  POSTS_PATH,
} from '~/constants';
import makeTypist from '~/utils/makeTypist';
import { Title } from './styled';

function Feature(name) {
  this.filtered = name.filter(
    ({
      node: {
        frontmatter: { featured },
      },
    }) => featured
  );

  return this.filtered;
}

const Home = ({ posts, albums, portfolios }) => {
  const featuredAlbums = albums.filter(({ node: { featured } }) => featured === true);
  const featuredPosts = new Feature(posts);
  const featuredPortfolios = new Feature(portfolios);
  const [intro, setIntro] = useState('');

  const introduction = makeTypist("Hi, I'm Ryan.", setIntro);

  useEffect(() => {
    introduction.type();

    return function cleanup() {
      introduction.stop();
    };
  }, []);

  return (
    <>
      <SEO title={SITE_TITLE} />
      <Hero>
        <Title>{intro}</Title>
      </Hero>
      <SimpleWrapper>
        {featuredAlbums.length >= 1 ? (
          <SimpleWrapper>
            <SectionHeader
              title="Featured Albums"
              linkName="View All"
              linkURL={ALBUMS_PATH}
            />
            {featuredAlbums
              .slice(0, 1)
              .map(({ node: { path, metadata: { title, cover } } }) => (
                <AlbumCard
                  key={title}
                  title={title}
                  path={path}
                  image={cover}
                />
              ))}
          </SimpleWrapper>
        ) : null}
        {featuredPortfolios.length >= 4 ? (
          <SimpleWrapper>
            <SectionHeader
              title="Featured Projects"
              linkName="View All"
              linkURL={PORTFOLIOS_PATH}
            />
            {featuredPortfolios
              .slice(0, 4)
              .map(
                ({
                  node: {
                    frontmatter: { path, title, summary, images },
                  },
                }) => (
                  <PortfolioCard
                    key={path}
                    title={title}
                    summary={summary}
                    path={path}
                    images={images}
                  />
                )
              )}
          </SimpleWrapper>
        ) : null}
        {featuredPosts.length >= 4 ? (
          <SimpleWrapper>
            <SectionHeader
              title="Featured Posts"
              linkName="View All"
              linkURL={`${POSTS_PATH}/1`}
            />
            {featuredPosts
              .slice(0, 4)
              .map(
                ({
                  node: {
                    html,
                    excerpt,
                    frontmatter: { title, summary, tags, path, images },
                  },
                }) => (
                  <PostCard
                    key={path}
                    title={title}
                    summary={summary || excerpt}
                    tags={tags}
                    path={path}
                    images={images}
                    html={html}
                  />
                )
              )}
          </SimpleWrapper>
        ) : null}
      </SimpleWrapper>
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
