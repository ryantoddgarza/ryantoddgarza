import styled, { css } from 'styled-components';
import {
  backgroundColor,
  breakpoint,
  fontSizeFluid,
  primaryColor,
  space,
  textColor,
  transition,
} from '~/design-system';

const Block = css`
  position: absolute;
  width: 50%;
  height: 100%;
  ${breakpoint.to('phone')} {
    width: 100%;
    height: 50%;
  }
`;

export const StyledArticle = styled.article`
  position: relative;
  height: 0;
  padding: 50% 0 0;
  background-color: ${backgroundColor.light};
  overflow: hidden;
  ${breakpoint.to('phone')} {
    padding: 200% 0 0;
  }

  &:hover {
    h5::after {
      width: 33%;
      background-color: ${primaryColor.default};
    }
  }

  h5 {
    font-size: ${fontSizeFluid(24)};

    &::after {
      display: block;
      content: '';
      width: 32px;
      height: 2px;
      margin: ${space.x8} auto;
      background-color: ${textColor.disabled};
      transition: width ${transition.duration.slow}
          ${transition.function.default},
        background-color ${transition.duration.normal}
          ${transition.function.default};
    }
  }
`;

export const CardBody = styled.div`
  ${Block}
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${space.x4};
  text-align: center;
  border-left: 1px solid #f9f9f9;
  ${breakpoint.to('phone')} {
    width: 100%;
    height: 50%;
    border-top: 1px solid #f9f9f9;
    border-left: unset;
  }
`;

export const Cover = styled.figure`
  ${Block}
  top: 0;
  left: 0;
`;
