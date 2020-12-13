import React, { useCallback, useEffect } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Tweet } from 'react-twitter-widgets';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Clipboard from 'clipboard';
import SEO from '~/components/Common/SEO';
import PostWrapper from '~/components/Common/PostWrapper';
import { Container } from '~/components/Common/Container';
import ScopedImage from '~/components/Common/ScopedImage';
import formattedDate from '~/utils/formattedDate';
import {
  ComponentInPost,
  BannerWrapper,
  PostContent,
  PostHeader,
  Tags,
} from './styled';

const Post = ({
  data: {
    post: {
      html,
      frontmatter: {
        banner,
        components = [],
        date,
        images = [],
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
            const $componentContainer = global.document.getElementById(
              componentRootId
            );
            const App = require(`~/postComponents/${componentFileName}`)
              .default;

            render(
              <ComponentInPost>
                <App />
              </ComponentInPost>,
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

  const [image = null] = images;

  return (
    <>
      <SEO title={title} />
      <PostWrapper>
        <Container>
          <PostHeader>
            <ul>
              <li>
                <time>{formattedDate(date)}</time>
              </li>
              <li>
                {tags.length === 0 ? null : (
                  <Tags>
                    {tags.map((tag) => (
                      <Link key={tag} to={`/tags/${tag}/1`}>
                        <small>{tag}</small>
                      </Link>
                    ))}
                  </Tags>
                )}
              </li>
            </ul>
            <h1>{title}</h1>
            {image === null && banner === null ? null : (
              <BannerWrapper>
                {banner ? (
                  <Img fluid={banner.childImageSharp.fluid} />
                ) : (
                  <ScopedImage src={image} alt={title} />
                )}
              </BannerWrapper>
            )}
          </PostHeader>
          <PostContent>
            <div
              id="post-contents"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </PostContent>
        </Container>
      </PostWrapper>
    </>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        banner: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({}),
          }),
        }),
        components: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
        date: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string),
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string.isRequired,
        tweets: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
      }),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
