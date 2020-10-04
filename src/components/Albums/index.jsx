import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import AlbumCard from '~/components/Common/AlbumCard';
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
      <meta name="og:title" content={`${PREFIX}ALBUMS`} />
    </Helmet>
    {albums.map(({ node: { frontmatter: { path, title, cover } } }) => (
      <Link to={path} key={title}>
        <AlbumCard>
          <img
            src={require(`~/resources/${cover}`)}
            alt={`${title} - album cover`}
          />
          <div>
            <h2>{title}</h2>
          </div>
        </AlbumCard>
      </Link>
    ))}
  </Wrapper>
);

Albums.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Albums;
