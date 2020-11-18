import styled from 'styled-components';

const PostWrapper = styled.section`
  margin: auto;
  padding: 120px 0 0;
  max-width: 800px;
  font-size: 1.125rem;
  @media (max-width: 414px) {
    padding: 70px 0 0;
    font-size: 1rem;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

export default PostWrapper;
