import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Truncate from 'react-truncate';

const PostCard = ({ title, summary, path, tags, image }) => (
  <div className="post-card">
    <div className="inner">
      <Link to={path}>
        <div className="image-container">
          <GatsbyImage image={getImage(image)} alt="" className="image" />
        </div>
        <div className="body">
          <h5 className="title">
            <Truncate lines={2} ellipsis={<span>...</span>}>
              {title}
            </Truncate>
          </h5>
          <p className="copy">
            <Truncate lines={3} ellipsis={<span>...</span>}>
              {summary}
            </Truncate>
          </p>
          <div className="meta">
            <div className="tag-container">
              {tags.map((tag) => (
                <Link key={tag} to={`/tags/${tag}/1`} className="tag">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  </div>
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
