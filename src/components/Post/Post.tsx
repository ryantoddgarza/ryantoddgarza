import React, { useCallback, useEffect } from 'react';
import type { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Clipboard from 'clipboard';
import { CATEGORIES_PATH } from '../../constants';
import SEO from '../SEO';
import { PostProps } from './types';

const Post: FunctionComponent<PostProps> = ({ data }: PostProps) => {
  const {
    contentfulBlogPost: {
      title,
      author,
      publishDate,
      category,
      image,
      content: {
        childMarkdownRemark: { html },
      },
    },
  } = data;

  const createCopyButton = useCallback(() => {
    const codes = global.document.querySelectorAll(
      '#post-content .gatsby-highlight'
    );

    codes.forEach((code) => {
      const button = document.createElement('button');
      button.setAttribute('class', 'copy-button');
      button.innerHTML = 'COPY';

      code.appendChild(button);
    });

    const clipboard = new Clipboard('.copy-button', {
      target: ({ previousElementSibling }) => previousElementSibling as Element,
    });

    clipboard.on('success', (e) => {
      e.clearSelection();
    });
  }, []);

  useEffect(() => {
    createCopyButton();
  }, [createCopyButton]);

  return (
    <div className="post container tablet-lg">
      <SEO title={title} />
      <article className="module">
        <header className="header">
          <h1 className="title">{title}</h1>
          <div className="metadata">
            {`By `}
            <span className="author">{author?.name}</span>
            {` | `}
            <span className="date">{publishDate}</span>
            {` in `}
            <Link className="category" to={`${CATEGORIES_PATH}/${category}`}>
              {category}
            </Link>
          </div>
          {image && (
            <GatsbyImage className="image" image={image?.gatsbyImage} alt="" />
          )}
        </header>
        <div
          id="post-content"
          className="content markdown"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  );
};

export default Post;
