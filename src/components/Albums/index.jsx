import React from 'react';
import PropTypes from 'prop-types';
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
    <Wrapper className="layout__main">
      <div className="container">
        {albums.map(
          ({
            node: {
              metadata: { title, cover },
              fields: { path },
            },
          }) => (
            <AlbumCard key={title} title={title} image={cover} path={path} />
          )
        )}
      </div>
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
