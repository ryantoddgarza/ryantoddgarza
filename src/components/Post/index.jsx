import React, { useCallback, useEffect } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Tweet } from 'react-twitter-widgets';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Clipboard from 'clipboard';
import SEO from '../Common/SEO';
import formattedDate from '../../utils/formattedDate';

const Post = ({
  data: {
    post: {
      html,
      frontmatter: {
        banner,
        components = [],
        date,
        category,
        tags = [],
        title,
        tweets = [],
      },
    },
  },
}) => {
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
        console.warn(e); // eslint-disable-line no-console
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
        console.warn(e); // eslint-disable-line no-console
      }
    }
  }, []);

  useEffect(() => {
    createCopyButton();
    renderTweets(tweets);
    renderComponents(components);
  }, []);

  const layout = {
    hasFooter: tags,
  };

  return (
    <>
      <SEO title={title} />
      <div className="post container tablet-lg">
        <article className="article">
          <header className="header">
            <h1 className="title">{title}</h1>
            <div className="metadata">
              <span>{`— ${formattedDate(date)} in `}</span>
              <Link
                className="category"
                key={`category__${category}`}
                to={`/categories/${category}/1`}
              >
                {category}
              </Link>
            </div>
            {banner && (
              <GatsbyImage
                className="banner"
                image={getImage(banner)}
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
    </>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        banner: PropTypes.shape({
          name: PropTypes.shape({}),
        }),
        components: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
        date: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string),
        category: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string.isRequired,
        tweets: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
      }),
    }),
  }).isRequired,
};

export default Post;
