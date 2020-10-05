import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import PortfolioCard from '~/components/Common/PortfolioCard';
import { PREFIX } from '~/constants';
import { Wrapper } from './styled';

const Portfolios = ({
  data: {
    portfolios: { edges: portfolios },
  },
}) => (
  <Wrapper>
    <Helmet>
      <title>{`${PREFIX}PORTFOLIOS`}</title>
      <meta name="og:title" content={`${PREFIX}PORTFOLIOS`} />
    </Helmet>
    {portfolios.map(
      ({
        node: {
          frontmatter: { path, title, summary, images = [] },
        },
      }) => {
        const [image = null] = images;

        if (image !== null) {
          return (
            <PortfolioCard key={path}>
              <Link to={path}>
                {image.includes('//') ? (
                  <img src={image} alt="portfolio" />
                ) : (
                  <img src={require(`~/resources/${image}`)} alt="portfolio" />
                )}
                <article>
                  <h6>{title}</h6>
                  {summary ? (
                    <>
                      <p>{summary}</p>
                      <p><em>Learn More</em></p>
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
  </Wrapper>
);

Portfolios.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Portfolios;
