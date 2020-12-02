import styled from 'styled-components';
import { breakpoint } from '~/design-system/';

const PostWrapper = styled.section`
  margin: auto;
  padding: 70px 0 0;
  ${breakpoint.from('tablet')} {
    padding: 120px 0 0;
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
