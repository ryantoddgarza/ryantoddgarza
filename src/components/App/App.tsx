import React from 'react';
import type { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GlobalFooter, GlobalHeader } from '../../design/components';
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
    <div className="app root">
      <GlobalHeader name={siteTitle}>
        <Gnb categories={categories} hasPost={hasPost} hasAlbum={hasAlbum} />
      </GlobalHeader>
      <main className="app main">{children}</main>
      <GlobalFooter>
        <Footer categories={categories} />
      </GlobalFooter>
    </div>
  );
};

export default App;
