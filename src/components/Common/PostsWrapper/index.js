import styled from 'styled-components';
import { Container } from '~/components/Common/Container';

const PostsWrapper = styled(Container)`
  padding: 3rem 0 0;
  font-size: 0;

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

export default PostsWrapper;
