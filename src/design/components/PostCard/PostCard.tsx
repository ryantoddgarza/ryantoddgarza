import React from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Truncate from 'react-truncate';
import { cardAspect, cardThemes } from './variants';
import type { PostCardProps } from './types';

const PostCard: FunctionComponent<PostCardProps> = ({
  title,
  subtitle,
  summary,
  path,
  image,
  aspect,
  theme,
}: PostCardProps) => {
  const getCardClasses = () => {
    const cardClasses = ['post-card', aspect, theme];
    return cardClasses.join(' ');
  };

  return (
    <div className={getCardClasses()}>
      <div className="inner">
        <Link to={path}>
          <div className="image-container">
            {image && (
              <GatsbyImage
                className="image"
                image={image}
                alt=""
              />
            )}
          </div>
          <div className="body">
            {subtitle && <h6 className="subtitle">{subtitle}</h6>}
            <h5 className="title">{title}</h5>
            <p className="copy">
              <Truncate lines={3} ellipsis={<span>...</span>}>
                {summary}
              </Truncate>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

PostCard.defaultProps = {
  subtitle: '',
  summary: '',
  image: undefined,
  theme: cardThemes.LIGHT,
  aspect: cardAspect.WIDESCREEN,
};

export default PostCard;
