import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import AlbumCard from '~/components/Common/AlbumCard';
import ScopedImage from '~/components/Common/ScopedImage';
import { PREFIX } from '~/constants';
import { Wrapper } from './styled';

const Albums = ({
  data: {
    albums: { edges: albums },
  },
}) => (
  <Wrapper>
    <Helmet>
      <title>{`${PREFIX}Albums`}</title>
      <meta name="og:title" content={`${PREFIX}Albums`} />
    </Helmet>
    {albums.map(({ node: { frontmatter: { path, title, cover } } }) => (
      <Link to={path} key={title}>
        <AlbumCard>
          <ScopedImage src={cover} alt={`${title} - album`} />
          <div>
            <h2>{title}</h2>
          </div>
        </AlbumCard>
      </Link>
    ))}
  </Wrapper>
);

Albums.propTypes = {
  data: PropTypes.shape({
    albums: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Albums;
