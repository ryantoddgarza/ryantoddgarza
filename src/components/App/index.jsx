import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Gnb from '~/components/Gnb';
import Footer from '~/components/Footer';
import { textColor, backgroundColor } from '~/design-system';
import { GlobalStyle, SiteWrapper } from './styled';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDracula: global.localStorage && global.localStorage.getItem('theme') === 'dracula',
    };
  }

  toggleTheme = () => {
    const { isDracula } = this.state;

    if (isDracula) {
      if (global.localStorage) {
        global.localStorage.setItem('theme', 'normal');
      }
    } else {
      if (global.localStorage) {
        global.localStorage.setItem('theme', 'dracula');
      }
    }

    this.setState({
      isDracula: !isDracula,
    });
  };

  render() {
    const {
      categories,
      postInformations,
      hasPost,
      hasPortfolio,
      hasAlbum,
      children,
    } = this.props;
    const { isDracula } = this.state;
    const theme = isDracula ? {
      color: textColor.onDark,
      backgroundColor: backgroundColor.dark,
    } : {
      color: textColor.onLight,
      backgroundColor: backgroundColor.default,
    };

    // Reverts theme for users who have
    // used the temporarily deprecated toggle.
    if (global.localStorage) {
      global.localStorage.removeItem('theme');
    }

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SiteWrapper>
          <nav>
            <Gnb
              categories={categories}
              postInformations={postInformations}
              hasPost={hasPost}
              hasPortfolio={hasPortfolio}
              hasAlbum={hasAlbum}
              toggleTheme={this.toggleTheme}
              isDracula={isDracula}
            />
          </nav>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </SiteWrapper>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  postInformations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  hasPost: PropTypes.bool.isRequired,
  hasPortfolio: PropTypes.bool.isRequired,
  hasAlbum: PropTypes.bool.isRequired,
};
