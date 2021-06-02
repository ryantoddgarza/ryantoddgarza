import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Truncate from 'react-truncate';
import { Container, ImageWrapper, TagWrapper, StyledArticle } from './styled';

const PostCard = ({ title, summary, path, tags, image }) => (
  <StyledArticle>
    <Container>
      <Link to={path}>
        <ImageWrapper>
          <GatsbyImage image={getImage(image)} alt="" className="image" />
        </ImageWrapper>
        <h5>
          <Truncate lines={2} ellipsis={<span>...</span>}>
            {title}
          </Truncate>
        </h5>
        <p>
          <Truncate lines={3} ellipsis={<span>...</span>}>
            {summary}
          </Truncate>
        </p>
      </Link>
      <TagWrapper>
        {tags.map((tag) => (
          <Link key={tag} to={`/tags/${tag}/1`}>
            <span>{`${tag} `}</span>
          </Link>
        ))}
      </TagWrapper>
    </Container>
  </StyledArticle>
);

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  path: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.shape({}),
};

PostCard.defaultProps = {
  summary: '',
  tags: [],
  image: {},
};

export default PostCard;
