import styled from 'styled-components';
import { fontSizeFluid } from '~/components/Common/fontSize';
import { PRIMARY_COLOR, BLACK_COLOR } from '~/components/Common/constants';

const AlbumCard = styled.section`
  position: relative;
  height: 0;
  padding: 200% 0 0;
  background-color: #fff;
  color: ${BLACK_COLOR};
  overflow: hidden;
  @media (min-width: 769px) {
    padding: 50% 0 0;
  }

  &:hover,
  &:active {
    h2::after {
      width: 33%;
      background-color: ${PRIMARY_COLOR};
    }
  }

  div {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 50%;
    padding: 16px;
    text-align: center;
    @media (min-width: 769px) {
      width: 50%;
      height: 100%;
    }
  }

  h2 {
    font-size: ${fontSizeFluid(24)};

    &::after {
      display: block;
      content: '';
      width: 32px;
      height: 2px;
      margin: 32px auto;
      background-color: #adadad;
      transition: all 0.6s ease-in-out;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    @media (min-width: 769px) {
      width: 50%;
    }
  }
`;

export default AlbumCard;
