import styled from 'styled-components';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import { PRIMARY_COLOR } from '~/components/Common/constants';
import styledTechCard from './styledTechCard';

export const Wrapper = styled(SimpleWrapper)`
  width: 90%;
  margin: 0 auto;
  padding: 100px 0 0;
  @media (max-width: 414px) {
    padding: 70px 0 0;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }

  & > section {
    float: left;
    width: 50%;
    max-height: calc(100vh - 100px);
    overflow-y: scroll;
    @media (max-width: 414px) {
      float: none;
      width: 100%;
      max-height: unset;
      overflow: visible;
    }

    ::-webkit-scrollbar {
      width: 4px;
      height: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${PRIMARY_COLOR};
      border-radius: 6px;
    }
  }
`;

export const PortfolioDescription = styled.section`
  padding: 0 16px 16px 0;
  font-size: 14px;
  line-height: 1.6em;
  @media (max-width: 414px) {
    margin: 0 0 16px;
    padding: 0 0 16px;
  }

  h1 {
    margin: 16px 0 10px;
    font-size: 32px;
  }

  h2 {
    margin: 24px 0 10px;
    font-size: 28px;
  }

  h3 {
    margin: 24px 0 10px;
    font-size: 24px;
  }

  p {
    margin: 16px 0 0;
  }

  ol,
  ul {
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 3em;
  }

  ol {
    list-style: decimal-leading-zero;
  }

  ul {
    list-style: disc;
  }

  em,
  i {
    font-style: italic;
  }

  strong,
  b {
    font-weight: 600;
  }

  a {
    color: ${PRIMARY_COLOR};
  }

  ${styledTechCard}
`;

export const PortfolioImages = styled.section`
  img {
    padding: 16px;
    width: 100%;
    height: auto;
    @media (max-width: 414px) {
      float: left;
      margin: 0 0 8px;
      padding: 0;
      &:last-child {
        margin: 0 0 16px;
      }
    }
  }
`;
