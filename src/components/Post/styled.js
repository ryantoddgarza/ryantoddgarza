import styled from 'styled-components';
import { primaryColor, textColor } from '~/design-system';
import styledCodeBlock from './styledCodeBlock';

export const PostHeader = styled.header`
  h1 {
    margin: 0.67em 0;
    font-size: 36px;
  }

  time {
    margin: 1em 0;
    color: ${textColor.light};
  }
`;

export const Tags = styled.div`
  margin: 1em 0;
  font-size: 12px;

  a {
    margin: 0 0 0 4px;
    color: ${textColor.light};

    &:hover {
      color: ${textColor.default};
    }
  }
`;

export const PostContent = styled.section`
  padding: 1em 0 4em;
  line-height: 1.6em;

  h2 {
    margin: 24px 0 10px;
    font-size: 28px;
  }

  h3 {
    margin: 24px 0 10px;
    font-size: 24px;
  }

  h4 {
    margin: 24px 0 10px;
    font-size: 21px;
  }

  p {
    margin: 16px 0 0;
  }

  blockquote {
    margin: 40px 0;
    padding: 0 0 0 2em;
    line-height: 1.2em;
    color: ${textColor.light};
    font-style: italic;
    font-size: 24px;
  }

  cite {
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  pre {
    margin: 20px 0 0;
  }

  code {
    padding: 0.15em 0.3em;
    font-size: 85%;
    background: #f0f0f0;
    border-radius: 5px;
  }

  figcaption {
    font-size: 11px;
    text-align: center;
    color: ${textColor.light};
  }

  ul {
    margin: 1em 0;
    list-style: disc;
  }

  li {
    margin: 0.5em 0 0 2em;
  }

  em,
  i {
    font-style: italic;
  }

  strong,
  b {
    font-weight: 600;
  }

  sup,
  sub {
    margin: 0 0.2em;
    font-size: 12px;
    line-height: 1;
  }

  sup {
    vertical-align: super;
  }

  sub {
    vertical-align: sub;
  }

  a {
    color: ${primaryColor.default};

    &:hover {
      color: ${textColor.default};
    }
  }

  ${styledCodeBlock}
`;

export const ImageWrapper = styled.figure`
  position: relative;
  margin: 0 0 48px;
  padding: 56.25% 0 0;
  width: 100%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: auto;
  }
`;

export const ComponentInPost = styled.div`
  position: relative;
  margin: 1em 0 1em;
  padding: 55px 16px 16px;
  color: #263238;
  border: 1px solid #263238;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 0 0 0 80px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    color: #fff;
    background-color: #263238;
    font-weight: 100;
    content: 'Application for example';
  }

  &:after {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 20px;
    width: 10px;
    height: 10px;
    background-color: #ff5f56;
    border-radius: 50%;
    content: '';
  }

  & > *:first-child {
    &:before {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 40px;
      width: 10px;
      height: 10px;
      background-color: #ffbd2e;
      border-radius: 50%;
      content: '';
    }

    &:after {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 60px;
      width: 10px;
      height: 10px;
      background-color: #27c93f;
      border-radius: 50%;
      content: '';
    }
  }
`;
