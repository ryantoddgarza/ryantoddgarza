import styled from 'styled-components';
import { primaryColor, textColor } from '~/design-system';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import { Container } from '~/components/Common/Container';

export const Wrapper = styled(SimpleWrapper)`
  padding: 100px 0 0;
  font-size: 14px;

  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  h2 {
    margin-bottom: 36px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }

  li {
    margin-bottom: 12px;
  }
`;

export const AlbumPrimary = styled(Container)`
  display: flex;
  flex-direction: column;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const AlbumSecondary = styled(Container)`
  display: flex;
  flex-direction: column;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const ContentLeft = styled.div`
  position: relative;
  flex: 1 0 0;

  @media (min-width: 769px) {
    flex: 3 0 0;
    margin-right: 5%;
  }
`;

export const ContentRight = styled.div`
  position: relative;
  flex: 1 0 0;

  @media (min-width: 769px) {
    flex: 2 0 0;
  }
`;

export const Title = styled.div`
  margin-bottom: 36px;

  h1 {
    font-size: 36px;
    margin-bottom: 24px;
  }
`;

export const Cover = styled.div`
  margin-bottom: 40px;

  img {
    width: 100%;

    @media (min-width: 769px) {
      max-width: 500px;
    }
  }
`;

export const Details = styled.div`
  margin-bottom: 40px;
  font-size: 11px;
  color: ${textColor.light};
`;

export const Tracklist = styled.div`
  margin-bottom: 40px;

  .track-row {
    display: flex;
    margin-bottom: 16px;
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
    font-size: 11px;
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
  margin-bottom: 40px;

  a {
    color: ${primaryColor.default};
  }

  a:hover {
    color: ${textColor.default};
  }
`;

export const Credits = styled.div`
  margin-bottom: 40px;
  font-size: 11px;

  dl {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 24px;

    & dt,
    & dd {
      line-height: 2;
      margin-bottom: 6px;
    }

    & > :nth-child(odd) {
      margin-right: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &::after {
        content: "${'.'.repeat(250)}";
      }
    }
  }
`;
