import styled from 'styled-components';

const PostWrapper = styled.section`
  max-width: 800px;
  margin: auto;
  padding: 3rem 0 0;

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

export default PostWrapper;
