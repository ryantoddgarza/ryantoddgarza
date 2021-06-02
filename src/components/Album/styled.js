import styled from 'styled-components';
import {
  breakpoint,
  heading,
  primaryColor,
  space,
  textColor,
} from '~/design-system';

export const Wrapper = styled.div`
  font-size: 0.875rem;

  h2 {
    margin-bottom: ${space.x8};
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  li {
    margin-bottom: ${space.x3};
  }
`;

export const AlbumPrimary = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint.from('tablet-l')} {
    flex-direction: row;
  }
`;

export const AlbumSecondary = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint.from('tablet-l')} {
    flex-direction: row;
  }
`;

export const ContentLeft = styled.div`
  position: relative;
  flex: 1 0 0;
  ${breakpoint.from('tablet-l')} {
    flex: 3 0 0;
    margin-right: 5%;
  }
`;

export const ContentRight = styled.div`
  position: relative;
  flex: 1 0 0;
  ${breakpoint.from('tablet-l')} {
    flex: 2 0 0;
  }
`;

export const Title = styled.div`
  margin-bottom: ${space.x12};

  h1 {
    font-size: ${heading.lvl1.size.desktop};
    margin-bottom: ${space.x6};
  }
`;

export const Cover = styled.div`
  max-width: 600px;
  margin-bottom: ${space.x12};
`;

export const Details = styled.div`
  margin-bottom: ${space.x12};
  font-size: 0.75rem;
  color: ${textColor.light};
`;

export const Tracklist = styled.div`
  margin-bottom: ${space.x12};
  font-size: 0.875rem;
  line-height: 1.25rem;

  .track-row {
    display: flex;
    margin-bottom: 0.875rem;
  }

  .track-counter {
    flex: 0 0 10%;
    min-width: 2em;
  }

  .track-name {
    flex: 1 1 auto;
    min-width: 4em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .track-lyrics,
  .track-video {
    flex: 0 0 10%;
    min-width: 4em;
    font-size: 0.75rem;
    text-transform: uppercase;
    text-align: right;

    & a {
      color: ${textColor.light};
    }

    & a:hover {
      color: ${primaryColor.default};
    }
  }
`;

export const Links = styled.ul`
  margin-bottom: ${space.x12};

  a {
    color: ${primaryColor.default};
  }

  a:hover {
    color: ${textColor.default};
  }
`;

export const Credits = styled.div`
  margin-bottom: ${space.x12};
  font-size: 0.75rem;

  dl {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: ${space.x6};

    & dt,
    & dd {
      line-height: 2;
      margin-bottom: ${space.x3};
    }

    & > :nth-child(odd) {
      margin-right: ${space.x2};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &::after {
        content: '${'.'.repeat(250)}';
      }
    }
  }
`;
