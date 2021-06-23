import React from 'react';
import { ErrorPage } from '../../design/components';
import SEO from '~/components/Common/SEO';

const NotFound = () => (
  <>
    <SEO title="Page not found" />
    <ErrorPage />
  </>
);

export default NotFound;
