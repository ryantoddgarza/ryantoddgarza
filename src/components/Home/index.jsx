import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import PortfolioCard from '~/components/Common/PortfolioCard';
import SectionHeader from '~/components/Common/SectionHeader';
import { TITLE, MEDIUM_ID } from '~/constants';
import { Title } from './styled';

const Home = ({ portfolios }) => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="og:title" content={TITLE} />
    </Helmet>
    <Wrapper isHome>
      <Title>Hi, I'm Ryan.</Title>
    </Wrapper>
    <SimpleWrapper>
      <SectionHeader
        title="Music"
        linkName="View All"
        linkURL="/music"
      />
      <SectionHeader
        title="Featured Projects"
        linkName="View All"
        linkURL="/portfolios"
      />
      {portfolios.length >= 4 ? (
        <SimpleWrapper>
          {portfolios.slice(0, 4).map(
            ({
              node: {
                frontmatter: { path, title, images },
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
                      <h6>{title}</h6>
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
            },
          )}
        </SimpleWrapper>
      ) : null}
      <SectionHeader
        title="Featured Posts"
        linkName="View All"
        linkURL="/pages/1"
      />
      <SectionHeader
        title="Medium Articles"
        linkName="Visit"
        linkURL={`https://medium.com/@${MEDIUM_ID}`}
      />
    </SimpleWrapper>
  </>
);

Home.propTypes = {
  portfolios: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;
