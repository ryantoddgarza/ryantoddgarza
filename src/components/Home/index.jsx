import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import ScopedImage from '~/components/Common/ScopedImage';
import AlbumCard from '~/components/Common/AlbumCard';
import PortfolioCard from '~/components/Common/PortfolioCard';
import PostCard from '~/components/Common/PostCard';
import SectionHeader from '~/components/Common/SectionHeader';
import { TITLE, ALBUMS_PATH, PORTFOLIOS_PATH, POSTS_PATH } from '~/constants';
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
  const featuredPosts = new Feature(posts);
  const featuredAlbums = new Feature(albums);
  const featuredPortfolios = new Feature(portfolios);

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="og:title" content={TITLE} />
      </Helmet>
      <Wrapper isHome>
        <Title>Hi, I'm Ryan.</Title>
      </Wrapper>
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
              .map(({ node: { frontmatter: { path, title, cover } } }) => (
                <Link to={path} key={title}>
                  <AlbumCard title={title} image={cover} />
                </Link>
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
            {featuredPortfolios.slice(0, 4).map(
              ({
                node: {
                  frontmatter: { path, title, summary, images },
                },
              }) => {
                const image = Array.isArray(images) ? images[0] : null;

                if (image !== null) {
                  return (
                    <PortfolioCard key={path}>
                      <Link to={path}>
                        <ScopedImage src={image} alt="portfolio" />
                        <article>
                          <h6>{title}</h6>
                          {summary ? (
                            <>
                              <p>{summary}</p>
                              <p>
                                <em>Learn More</em>
                              </p>
                            </>
                          ) : null}
                        </article>
                      </Link>
                    </PortfolioCard>
                  );
                }

                return (
                  <PortfolioCard key={path}>
                    <Link to={path}>
                      <h4>{title}</h4>
                    </Link>
                  </PortfolioCard>
                );
              }
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
                    frontmatter: { title, summary, tags, path, images },
                  },
                }) => (
                  <PostCard
                    key={path}
                    title={title}
                    summary={summary}
                    tags={tags}
                    path={path}
                    images={images}
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
