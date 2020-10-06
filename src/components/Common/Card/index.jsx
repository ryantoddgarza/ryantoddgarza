import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Truncate from 'react-truncate';
import { ImageWrapper, TagWrapper, StyledArticle } from './styled';

const Card = ({ tags, path, images, title, summary }) => {
  const [image = null] = images;

  return (
    <StyledArticle>
      <div>
        <Link to={path}>
          <ImageWrapper>
            {image === null ? null : (
              <img
                src={
                  image.includes('//') ? image : require(`~/resources/${image}`)
                }
                alt={title}
              />
            )}
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
              <tag>{`${tag} `}</tag>
            </Link>
          ))}
        </TagWrapper>
      </div>
    </StyledArticle>
  );
};

Card.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  path: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  summary: PropTypes.string,
};

Card.defaultProps = {
  tags: [],
  images: [],
  title: '',
  summary: '',
};

export default Card;
