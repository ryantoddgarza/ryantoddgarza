import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { PREFIX } from '~/constants';

const SEO = ({ title }) => (
  <Helmet>
    <title>{`${PREFIX}${title}`}</title>
    <meta name="og:title" content={`${PREFIX}${title}`} />
  </Helmet>
);

SEO.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SEO;
