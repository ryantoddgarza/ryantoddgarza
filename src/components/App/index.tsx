import React, { FunctionComponent, ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Header } from '../../design/components';
import Gnb from '../Gnb';
import Footer from '../Footer';

interface Props {
  children: ReactNode;
  categories: any[];
  postInformations: any[];
  hasPost: boolean;
  hasAlbum: boolean;
}

const App: FunctionComponent<Props> = ({
  categories,
  postInformations,
  hasPost,
  hasAlbum,
  children,
}: Props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle: title
        }
      }
    }
  `);

  const { siteTitle } = site.siteMetadata;

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
