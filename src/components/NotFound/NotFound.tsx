import React, { FunctionComponent } from 'react';
import ErrorPage from '../ErrorPage';
import SEO from '../SEO';

const NotFound: FunctionComponent = () => (
  <div className="module">
    <SEO title="Page not found" />
    <ErrorPage />
  </div>
);

export default NotFound;
