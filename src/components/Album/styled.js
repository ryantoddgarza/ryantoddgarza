import styled from 'styled-components';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import { PRIMARY_COLOR } from '~/components/Common/constants';

export const Wrapper = styled(SimpleWrapper)`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-height: 100vh;
  padding: 100px 0 0;
  margin: auto;
  font-size: 14px;

  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

export const AlbumPanel = styled.div`
  flex: 1 0 auto;

  h1 {
    font-size: 32px;
    margin-bottom: 1em;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 1em;
  }
`;

export const AlbumStart = styled.section`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  & > * {
    flex: 1 0 0;
    margin-bottom: 16px;
  }
`;

export const AlbumEnd = styled.section``;

export const Cover = styled.div`
  img {
    width: 100%;
    max-width: 500px;

    @media (max-width: 768px) {
      max-width: unset;
    }
  }
`;

export const Tracklist = styled.div`
  .track-row {
    display: flex;
    padding: 6px 0;

    & > * {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .track-counter {
    flex: 0 0 10%;
    min-width: fit-content;
    padding-right: 8px;
  }

  .track-name {
    flex: 1 1 auto;
  }

  .track-lyrics,
  .track-video {
    flex: 0 0 10%;
    min-width: 3em;
    text-align: right;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  & > * {
    margin-bottom: 8px;
  }

  a {
    color: ${PRIMARY_COLOR};
  }
  a:hover {
    color: #000;
  }
`;
