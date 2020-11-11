import React, { useCallback, useEffect } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Tweet } from 'react-twitter-widgets';
import { Link } from 'gatsby';
import { FaTags } from 'react-icons/fa';
import Clipboard from 'clipboard';
import SEO from '~/components/Common/SEO';
import Bio from '~/components/Bio';
import PostWrapper from '~/components/Common/PostWrapper';
import { Container } from '~/components/Common/Container';
import ScopedImage from '~/components/Common/ScopedImage';
import { SITE_URL, DISQUS_ID } from '~/constants';
import formattedDate from '~/utils/formattedDate';
import { PostHeader, Tags, PostContent, ImageWrapper, ComponentInPost } from './styled';

const PostTemplate = ({
  data: {
    post: {
      html,
      frontmatter: {
        title,
        date,
        tags = [],
        images = [],
        tweets = [],
        components = [],
      },
    },
  },
  location,
}) => {
  const loadDisqus = useCallback(({ url, identifier, title }) => {
    const d = global.document;

    if (!d.getElementById('disqus-sdk')) {
      const s = d.createElement('script');

      s.src = `https://${DISQUS_ID}.disqus.com/embed.js`;
      s.setAttribute('data-timestamp', Date.now());
      d.body.appendChild(s);
    }

    global.disqus_config = function disqusCallback() {
      /* eslint-disable react/no-this-in-sfc */
      this.page.url = url;
      this.page.identifier = identifier;
      this.page.title = title;
      /* eslint-enable react/no-this-in-sfc */
    };
  }, []);

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
    const { pathname: identifier } = location;
    const url = `${SITE_URL}${identifier}`;

    loadDisqus({
      url,
      identifier,
      title,
    });
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
          {image === null ? null : (
            <ImageWrapper>
              <ScopedImage src={image} alt={title} />
            </ImageWrapper>
          )}
          <PostHeader>
            <h1>{title}</h1>
            <time>{formattedDate(date)}</time>
            {tags.length === 0 ? null : (
              <Tags>
                <FaTags />
                {tags.map((tag) => (
                  <Link key={tag} to={`/tags/${tag}/1`}>
                    <small>{tag}</small>
                  </Link>
                ))}
              </Tags>
            )}
            <Bio />
          </PostHeader>
          <PostContent>
            <div
              id="post-contents"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </PostContent>
          <div id="disqus_thread" />
          <noscript>
            Please enable JavaScript to view the &nbsp;
            <a href="https://disqus.com/?ref_noscript">
              comments powered by Disqus.
            </a>
          </noscript>
        </Container>
      </PostWrapper>
    </>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
        images: PropTypes.arrayOf(PropTypes.string),
        tweets: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
        components: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
      }),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostTemplate;
