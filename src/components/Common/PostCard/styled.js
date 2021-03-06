import styled from 'styled-components';
import {
  backgroundColor,
  breakpoint,
  primaryColor,
  space,
  textColor,
  transition,
} from '~/design-system';

export const StyledArticle = styled.article`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  vertical-align: top;
  ${breakpoint.from('tablet')} {
    padding: 0 ${space.x2} ${space.x4};
    width: 50%;
  }
  ${breakpoint.from('desktop')} {
    width: 33%;
  }
  ${breakpoint.from('widescreen')} {
    width: 25%;
  }

  a {
    color: ${textColor.default};
  }

  h5 {
    padding: 0 0 6px;
    height: 2.4em;
    line-height: 1.2;
    font-size: 20px;
    font-weight: 500;
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
`;

export const Container = styled.div`
  position: relative;
  top: 0;
  padding: 14px;
  background-color: ${backgroundColor.light};
  overflow: hidden;
  transition: top ${transition.duration.fast} ${transition.function.default};

  &:hover {
    top: -8px;
  }
`;

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

  span {
    color: ${textColor.light};
    font-size: 11px;
    line-height: 1.4;

    &:hover {
      color: ${primaryColor.default};
    }
  }
`;
