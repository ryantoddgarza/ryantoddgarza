import styled from 'styled-components';
import {
  backgroundColor,
  primaryColor,
  space,
  textColor,
  transition,
} from '~/design-system';
import { fontSizeFluid } from '~/components/Common/fontSize';

const StyledArticle = styled.article`
  position: relative;
  height: 0;
  padding: 50% 0 0;
  background-color: ${backgroundColor.light};
  overflow: hidden;
  @media (max-width: 414px) {
    padding: 200% 0 0;
  }

  &:hover,
  &:active {
    h3::after {
      width: 33%;
      background-color: ${primaryColor.default};
    }
  }

  div {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;
    padding: ${space.x2};
    text-align: center;
    border-left: 1px solid #f9f9f9;
    @media (max-width: 414px) {
      width: 100%;
      height: 50%;
      border-top: 1px solid #f9f9f9;
      border-left: unset;
    }
  }

  h3 {
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

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    @media (max-width: 414px) {
      width: 100%;
    }
  }
`;

export default StyledArticle;
