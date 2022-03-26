import React from 'react';
import type { FunctionComponent } from 'react';
import Layout from '../components/layout';
import CurriculumVitae from '../components/CurriculumVitae';

const CVPage: FunctionComponent = () => (
  <Layout>
    <CurriculumVitae />
  </Layout>
);

export default CVPage;
