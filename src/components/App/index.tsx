import React, { FunctionComponent, ReactNode } from 'react';
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
}: Props) => (
  <div className="app__root">
    <Header>
      <Gnb categories={categories} hasPost={hasPost} hasAlbum={hasAlbum} />
    </Header>
    <main className="app__main">{children}</main>
    <Footer />
  </div>
);

export default App;
