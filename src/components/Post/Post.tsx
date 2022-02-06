import React, { useCallback, useEffect } from 'react';
import type { FunctionComponent } from 'react';
import { render } from 'react-dom';
import { Tweet } from 'react-twitter-widgets';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Clipboard from 'clipboard';
import SEO from '../SEO';
import formattedDate from '../../utils/formattedDate';
import { PostProps } from './types';

const Post: FunctionComponent<PostProps> = ({ data }: PostProps) => {
  const {
    post: {
      html,
      timeToRead,
      frontmatter: { title, date, category, tags, banner, components, tweets },
    },
  } = data;

  const createCopyButton = useCallback(() => {
    const codes = global.document.querySelectorAll(
      '#post-contents .gatsby-highlight'
    );

    codes.forEach((code) => {
      const button = document.createElement('button');
      button.setAttribute('class', 'copy-button');
      button.innerHTML = 'COPY';

      code.appendChild(button);
    });

    const clipboard = new Clipboard('.copy-button', {
      target: ({ previousElementSibling }) => previousElementSibling,
    });

    clipboard.on('success', (e) => {
      e.clearSelection();
    });
  }, []);

  const renderComponents = useCallback((components) => {
    if (Array.isArray(components)) {
      try {
        components.forEach(
          ({ rootId: componentRootId, fileName: componentFileName }) => {
            const $componentContainer =
              global.document.getElementById(componentRootId);
            const App =
              require(`../../postComponents/${componentFileName}`).default;

            render(
              <div className="component-in-post">
                <App />
              </div>,
              $componentContainer
            );
          }
        );
      } catch (e) {
        console.warn(e);
      }
    }
  }, []);

  const renderTweets = useCallback((tweets) => {
    if (Array.isArray(tweets)) {
      try {
        tweets.forEach(({ rootId: tweetRootId, tweetId, userId: username }) => {
          const $tweetContainer = global.document.getElementById(tweetRootId);

          render(
            <div>
              <Tweet tweetId={tweetId} options={{ username }} />
            </div>,
            $tweetContainer
          );
        });
      } catch (e) {
        console.warn(e);
      }
    }
  }, []);

  useEffect(() => {
    createCopyButton();
    renderTweets(tweets);
    renderComponents(components);
  }, [createCopyButton, components, renderComponents, tweets, renderTweets]);

  const layout = {
    hasFooter: tags,
  };

  return (
    <div className="post container tablet-lg">
      <SEO title={title} />
      <article className="article">
        <header className="header">
          <h1 className="title">{title}</h1>
          <div className="metadata">
            <span className="date">
              {`${formattedDate(date)} in `}
              <Link
                className="category"
                key={`category__${category}`}
                to={`/categories/${category}/1`}
              >
                {category}
              </Link>
            </span>
            <span className="readtime">{` • ${timeToRead} minute read`}</span>
          </div>
          {banner && (
            <GatsbyImage
              className="banner"
              image={banner.childImageSharp.gatsbyImageData}
              alt={banner.name}
            />
          )}
        </header>
        <div
          className="body markdown"
          id="post-contents"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {layout.hasFooter && (
          <footer className="post-footer">
            {tags && (
              <div className="tags">
                {tags.map((tag) => (
                  <Link className="tag" key={tag} to={`/tags/${tag}/1`}>
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </footer>
        )}
      </article>
    </div>
  );
};

export default Post;
