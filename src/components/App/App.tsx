import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Header } from '../../design/components';
import Gnb from '../Gnb';
import Footer from '../Footer';
import type { AppProps } from './types';

const App: FunctionComponent<AppProps> = ({
  categories,
  hasPost,
  hasAlbum,
  children,
}: AppProps) => {
  const {
    site: {
      siteMetadata: { siteTitle },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle: title
        }
      }
    }
  `);

  return (
    <div className="app__root">
      <Header name={siteTitle}>
        <Gnb categories={categories} hasPost={hasPost} hasAlbum={hasAlbum} />
      </Header>
      <main className="app__main">{children}</main>
      <Footer />
    </div>
  );
};

export default App;
