import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Gnb from '~/components/Gnb';
import Footer from '~/components/Footer';
import { textColor } from '~/design-system';
import { BLACK_COLOR, WHITE_COLOR } from '~/components/Common/constants';
import { Wrapper } from './styled';

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
      location,
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
      backgroundColor: BLACK_COLOR,
    } : {
      color: textColor.onLight,
      backgroundColor: WHITE_COLOR,
    };

    // Reverts theme for users who have
    // used the temporarily deprecated toggle.
    if (global.localStorage) {
      global.localStorage.removeItem('theme');
    }

    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <nav>
            <Gnb
              location={location}
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
        </Wrapper>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  postInformations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  hasPost: PropTypes.bool.isRequired,
  hasPortfolio: PropTypes.bool.isRequired,
  hasAlbum: PropTypes.bool.isRequired,
};
