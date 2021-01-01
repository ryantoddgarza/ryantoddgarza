import React from 'react';
import SEO from '~/components/Common/SEO';
import { Wrapper } from './styled';

const NotFound = () => (
  <>
    <SEO />
    <Wrapper>
      <header>
        <h2>Error 404</h2>
        <h1>Page Not Found</h1>
      </header>
    </Wrapper>
  </>
);

export default NotFound;
