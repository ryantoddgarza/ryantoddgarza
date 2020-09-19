import styled from 'styled-components';
import { Container } from '~/components/Common/Container';

const PostsWrapper = styled(Container)`
  padding: 120px 0 0;
  font-size: 0;

  @media (max-width: 414px) {
    padding: 70px 0 0;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }

  h1 {
    margin: .67em 0;
    font-size: 32px;
  }

  time {
    margin: 1em 0;
    font-size: 12px;
  }
`;

export default PostsWrapper;
