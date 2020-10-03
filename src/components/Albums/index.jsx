import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { PREFIX } from '~/constants';
import { Wrapper, AlbumCard, Cover } from './styled';

const Albums = ({
  data: {
    albums: { edges: albums },
  },
}) => (
  <>
    <Helmet>
      <title>{`${PREFIX}MUSIC`}</title>
      <meta name="og:title" content={`${PREFIX}ALBUMS`} />
    </Helmet>
    <Wrapper>
      {albums.map(({ node: { frontmatter: { path, title, cover } } }) => (
        <AlbumCard key={title}>
          <h2>{title}</h2>
          <Cover>
            <Link to={path}>
              <img src={require(`~/resources/${cover}`)} alt={`${title} - album cover`} />
            </Link>
          </Cover>
        </AlbumCard>
      ))}
    </Wrapper>
  </>
);

Albums.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Albums;
