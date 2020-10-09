import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import AlbumCard from '~/components/Common/AlbumCard';
import PortfolioCard from '~/components/Common/PortfolioCard';
import SectionHeader from '~/components/Common/SectionHeader';
import {
  TITLE,
  ALBUMS_PATH,
  PORTFOLIOS_PATH,
  POSTS_PATH,
  MEDIUM_ID,
} from '~/constants';
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

const Home = ({ albums, portfolios }) => {
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
                  <AlbumCard>
                    <img
                      src={require(`~/resources/${cover}`)}
                      alt={`${title} - album cover`}
                    />
                    <div>
                      <h2>{title}</h2>
                    </div>
                  </AlbumCard>
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
                        {image.includes('//') ? (
                          <img src={image} alt="portfolio" />
                        ) : (
                          <img
                            src={require(`~/resources/${image}`)}
                            alt="portfolio"
                          />
                        )}
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
        <SectionHeader
          title="Featured Posts"
          linkName="View All"
          linkURL={`${POSTS_PATH}/1`}
        />
        <SectionHeader
          title="Medium Articles"
          linkName="Visit"
          linkURL={`https://medium.com/@${MEDIUM_ID}`}
        />
      </SimpleWrapper>
    </>
  );
};

Home.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({})),
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  albums: [],
  portfolios: [],
};

export default Home;
