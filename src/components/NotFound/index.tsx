import React, { FunctionComponent } from 'react';
import { ErrorPage } from '../../design/components';
import SEO from '../Common/SEO';

const NotFound: FunctionComponent = () => (
  <>
    <SEO title="Page not found" />
    <ErrorPage />
  </>
);

export default NotFound;
