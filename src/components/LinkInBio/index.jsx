import React from 'react';
import SocialLinks from '~/components/Common/SocialLinks';
import SEO from '~/components/Common/SEO';
import links from './links';
import {
  GlobalStyle,
  LinkInBioWrapper,
  StyledButton,
  SocialInformation,
} from './styled';

const LinkInBio = () => (
  <>
    <SEO title="Link In Bio" />
    <GlobalStyle />
    <LinkInBioWrapper>
      <main>
        {links.map(({ id, linkName, url, featured }) => (
          <a href={url} target="_blank" rel="noreferrer noopener" key={id}>
            <StyledButton className={featured ? 'featured' : null}>
              {linkName}
            </StyledButton>
          </a>
        ))}
      </main>
      <footer>
        <SocialInformation>
          <SocialLinks />
        </SocialInformation>
      </footer>
    </LinkInBioWrapper>
  </>
);

export default LinkInBio;
