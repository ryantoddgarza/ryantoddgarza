import styled from 'styled-components';
import {
  backgroundColor,
  heading,
  primaryColor,
  space,
  textColor,
} from '~/design-system';
import styledCodeBlock from './styledCodeBlock';

export const PostHeader = styled.header`
  h1 {
    margin: ${space.x6} 0 ${space.x12};
    font-size: ${heading.lvl1.size.desktop};
  }

  ul {
    display: flex;
    justify-content: space-between;
    margin: ${space.x4} 0;
    font-size: 0.875rem;
  }

  time {
    color: ${textColor.light};
  }
`;

export const Tags = styled.div`
  a {
    color: ${textColor.light};

    &:hover {
      color: ${textColor.default};
    }

    &:not(:last-child) {
      margin-right: ${space.x2};
    }
  }
`;

export const PostContent = styled.section`
  padding: ${space.x8} 0 ${space.x16};
  line-height: 1.6;

  h2 {
    margin: ${space.x6} 0 ${space.x4};
    font-size: ${heading.lvl2.size.desktop};
  }

  h3 {
    margin: ${space.x6} 0 ${space.x4};
    font-size: ${heading.lvl3.size.desktop};
  }

  h4 {
    margin: ${space.x6} 0 ${space.x4};
    font-size: ${heading.lvl4.size.desktop};
  }

  p {
    margin: ${space.x4} 0 0;
  }

  blockquote {
    margin: ${space.x12} 0;
    padding: 0 0 0 ${space.x8};
    line-height: 1.2;
    color: ${textColor.light};
    font-style: italic;
    font-size: 1.5rem;
  }

  cite {
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  pre {
    margin: ${space.x6} 0;
  }

  code {
    padding: 0.15em 0.3em;
    font-size: 85%;
    background-color: ${backgroundColor.darker};
    border-radius: 5px;
  }

  figcaption {
    font-size: 11px;
    text-align: center;
    color: ${textColor.light};
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
  }

  li {
    margin: ${space.x3} 0 0 ${space.x6};
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
  margin: 0 0 ${space.xl};
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
  margin: 1em 0;
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
