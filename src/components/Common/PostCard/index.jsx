import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Truncate from 'react-truncate';
import ScopedImage from '~/components/Common/ScopedImage';
import { ImageWrapper, TagWrapper, StyledArticle } from './styled';

const PostCard = ({ title, summary, path, tags, image }) => (
  <StyledArticle>
    <div>
      <Link to={path}>
        <ImageWrapper>
          {image === null ? null : <ScopedImage src={image} alt="title" />}
        </ImageWrapper>
        <h3>
          <Truncate lines={2} ellipsis={<span>...</span>}>
            {title}
          </Truncate>
        </h3>
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
    </div>
  </StyledArticle>
);
PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  path: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
};

PostCard.defaultProps = {
  summary: '',
  tags: [],
  image: '',
};

export default PostCard;
