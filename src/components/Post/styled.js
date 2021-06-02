import styled from 'styled-components';
import { space, textColor } from '~/design-system';
import { typography, font } from '~/styles';

export const PostHeader = styled.header`
  h1 {
    ${font.h1}
    margin: 2rem 0 1.5rem;
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
  ${typography}
  padding: ${space.x8} 0 ${space.x16};

  blockquote {
    p {
      margin: ${space.x12} 0;
      padding: 0 0 0 ${space.x8};
      font-size: 1.5rem;
      line-height: 1.2;
      color: ${textColor.light};
      font-style: italic;
    }

    cite {
      display: block;
      font-size: 0.625em;
      text-align: right;
    }
  }

  pre {
    margin: ${space.x6} 0;
  }

  figure {
    margin: 1rem 0;
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
`;

export const BannerWrapper = styled.figure`
  img {
    width: 100%;
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
