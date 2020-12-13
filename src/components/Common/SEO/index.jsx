import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { TITLE } from '~/constants';
import titleCase from '~/utils/titleCase';

const SEO = ({ title }) => {
  const SITE_NAME = TITLE;
  const pageName = titleCase(title);
  const formattedTitle = (title !== SITE_NAME ? `${pageName} | ${SITE_NAME}` : SITE_NAME);

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
