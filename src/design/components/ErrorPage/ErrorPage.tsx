import React from 'react';
import type { FunctionComponent } from 'react';

const ErrorPage: FunctionComponent = () => (
  <div className="layout__main">
    <div className="error-page center">
      <div className="message">
        <h2 className="title">404</h2>
        <p className="paragraph">Page not found</p>
      </div>
    </div>
  </div>
);

export default ErrorPage;
