import React from 'react';
import Layout from '~/components/layout';
import Home from '~/components/Home';

const HomePage = (props) => (
  <Layout {...props}>
    <Home />
  </Layout>
);

export default HomePage;
