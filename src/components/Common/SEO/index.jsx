import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { TITLE as SITE_NAME } from '~/constants';

const SEO = ({ title }) => {
  const formattedTitle = (title !== SITE_NAME ? `${title} | ${SITE_NAME}` : SITE_NAME);

  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta name="og:title" content={formattedTitle} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SEO;
