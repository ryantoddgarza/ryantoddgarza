import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Truncate from 'react-truncate';
import { cardAspect } from './variants';

interface Props {
  title: string;
  summary?: string;
  path: string;
  tags?: string[];
  image?: any;
  aspect: string;
}

const PostCard: FunctionComponent<Props> = ({
  title,
  summary,
  path,
  tags,
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
            <GatsbyImage image={image && getImage(image)} alt="" className="image" />
          </div>
          <div className="body">
            <h5 className="title">{title}</h5>
            <p className="copy">
              <Truncate lines={3} ellipsis={<span>...</span>}>
                {summary}
              </Truncate>
            </p>
            {tags && (
              <div className="meta">
                <div className="tag-container">
                  {tags.map((tag) => (
                    <Link key={tag} to={`/tags/${tag}/1`} className="tag">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

PostCard.defaultProps = {
  aspect: cardAspect.WIDESCREEN,
  summary: '',
  tags: [],
  image: {},
};

export default PostCard;
