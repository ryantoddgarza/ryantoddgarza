import React from 'react';
import styled from 'styled-components';
import Layout from '~/components/layout';
import SEO from '~/components/Common/SEO';
import { TITLE } from '~/constants';
import SimpleWrapper from '~/components/Common/SimpleWrapper';

const Wrapper = styled(SimpleWrapper)`
  padding: 100px 0 0;
  text-align: center;
  @media (max-width: 414px) {
    padding: 70px 0 0;
  }

  h1 {
    margin: 0 0 2rem;
    font-size: 1.5rem;
  }

  h2 {
    margin: 0 0 1.5rem;
    font-size: 1rem;
  }

  a {
    text-decoration: underline;
  }
`;

const NotFoundPage = (props) => (
  <Layout {...props}>
    <SEO title={TITLE} />
    <Wrapper>
      <header>
        <h2>Error 404</h2>
        <h1>Page Not Found</h1>
      </header>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
