import React from 'react';
import SEO from '~/components/Common/SEO';
import { TITLE } from '~/constants';
import { Wrapper } from './styled';

const NotFound = () => (
  <>
    <SEO title={TITLE} />
    <Wrapper>
      <header>
        <h2>Error 404</h2>
        <h1>Page Not Found</h1>
      </header>
    </Wrapper>
  </>
);

export default NotFound;
