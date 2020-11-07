import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import SEO from '~/components/Common/SEO';
import AlbumCard from '~/components/Common/AlbumCard';
import { Wrapper } from './styled';

const Albums = ({
  data: {
    albums: { edges: albums },
  },
}) => (
  <>
    <SEO title="Albums" />
    <Wrapper>
      {albums.map(({ node: { frontmatter: { path, title, cover } } }) => (
        <Link to={path} key={title}>
          <AlbumCard title={title} image={cover} />
        </Link>
      ))}
    </Wrapper>
  </>
);

Albums.propTypes = {
  data: PropTypes.shape({
    albums: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Albums;
