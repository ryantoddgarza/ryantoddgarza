import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { TITLE, PREFIX } from '~/constants';

const SEO = ({ title }) => {
  const formattedTitle = title !== TITLE ? `${PREFIX}${title}` : TITLE;

  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta name="og:title" content={`${PREFIX}${title}`} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SEO;
