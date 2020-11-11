import styled from 'styled-components';

const PostWrapper = styled.section`
  margin: auto;
  padding: 120px 0 0;
  max-width: 800px;
  font-size: 16px;
  @media (max-width: 414px) {
    padding: 70px 0 0;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

export default PostWrapper;
