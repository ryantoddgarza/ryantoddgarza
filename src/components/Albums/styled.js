import styled from 'styled-components';
import { Container } from '~/components/Common/Container';

export const Wrapper = styled(Container)`
  position: relative;
  padding: 100px 0 0;

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

export const AlbumCard = styled.div`
  font-size: 14px;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 1em;
  }
`;

export const Cover = styled.div`
  margin: 16px 0;

  img {
    width: 100%;
    max-width: 500px;
  }
`;
