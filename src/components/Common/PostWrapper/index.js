import styled from 'styled-components';
import { breakpoint } from '~/design-system/';

const PostWrapper = styled.section`
  margin: auto;
  padding: 3rem 0 0;
  ${breakpoint.from('tablet')} {
    font-size: 1.125rem;
    max-width: 800px;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

export default PostWrapper;
