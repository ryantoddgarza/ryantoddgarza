import React from 'react';
import type { FunctionComponent } from 'react';

const ErrorPage: FunctionComponent = () => (
  <div className="error-page">
    <div className="align-center">
      <h1 className="u-h1">404</h1>
      <p className="u-copy margin">Page not found</p>
    </div>
  </div>
);

export default ErrorPage;
