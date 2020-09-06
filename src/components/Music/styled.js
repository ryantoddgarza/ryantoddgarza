import styled from 'styled-components';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import { PRIMARY_COLOR } from '~/components/Common/constants';

export const Wrapper = styled(SimpleWrapper)`
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

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  & > * {
    margin-bottom: 8px;
  }

  a {
    color: ${PRIMARY_COLOR};
  }
  a:hover {
    color: #000;
  }
`;
