import React from 'react';
import type { FunctionComponent } from 'react';
import Layout from '../components/layout';
import About from '../components/About';

const HomePage: FunctionComponent = () => (
  <Layout>
    <About />
  </Layout>
);

export default HomePage;
