import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Truncate from 'react-truncate';
import { cardAspect } from './variants';

interface Props {
  title: string;
  subtitle?: string;
  summary?: string;
  path: string;
  image?: any;
  aspect: string;
}

const PostCard: FunctionComponent<Props> = ({
  title,
  subtitle,
  summary,
  path,
  image,
  aspect,
}: Props) => {
  const getCardClasses = () => {
    const cardClasses = ['post-card', aspect];
    return cardClasses.join(' ');
  };

  return (
    <div className={getCardClasses()}>
      <div className="inner">
        <Link to={path}>
          <div className="image-container">
            <GatsbyImage
              image={image && getImage(image)}
              alt=""
              className="image"
            />
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
  aspect: cardAspect.WIDESCREEN,
  subtitle: '',
  summary: '',
  image: {},
};

export default PostCard;
