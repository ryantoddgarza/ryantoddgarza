import styled from 'styled-components';
import { breakpoint } from '~/components/Common/breakpoints';
import { PRIMARY_COLOR, BLACK_COLOR } from '~/components/Common/constants';

export const ImageWrapper = styled.figure`
  position: relative;
  margin: -14px -14px 14px;
  padding: 50% 0 0;
  height: 0;
  border-bottom: 1px solid #f9f9f9;
  overflow: hidden;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2r9//38gYGAEESAAEGAAasgJOgzOKCoAAAAASUVORK5CYII=);

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }

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

export const TagWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledArticle = styled.article`
  display: inline-block;
  width: 100%;
  margin: 0 0 16px;
  padding: 0 0 16px;
  font-size: 14px;
  vertical-align: top;
  ${breakpoint('from-tablet')} {
    padding: 0 16px 16px;
  }
  ${breakpoint('tablet')} {
    width: 50%;
  }
  ${breakpoint('desktop')} {
    width: 33%;
  }
  ${breakpoint('widescreen')} {
    width: 25%;
  }

  & > div {
    position: relative;
    top: 0;
    padding: 14px;
    background-color: #fff;
    overflow: hidden;
    transition: top 0.1s;

    &:hover {
      top: -8px;
    }
  }

  a {
    color: ${BLACK_COLOR};
  }

  h3 {
    padding: 0 0 6px;
    height: 2.4em;
    line-height: 1.2;
    font-size: 20px;
    font-weight: 700;
  }

  p {
    padding: 24px 0 16px;
    height: 106px;
    line-height: 1.4;
    font-size: 16px;

    span {
      white-space: nowrap;
    }
  }

  tag {
    color: #757575;
    font-size: 11px;
    line-height: 1.4;

    &:hover {
      color: ${PRIMARY_COLOR};
    }
  }
`;
