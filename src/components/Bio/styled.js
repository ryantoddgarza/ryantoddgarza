import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 1em 0;

  a {
    color: ${({ theme: { color } }) => color};
  }

  span,
  img {
    display: inline-block;
    vertical-align: middle;
  }

  img {
    margin: 0 4px 0 0;
    border-radius: 50%;
  }

  small {
    color: #919191;
    font-size: 90%;
  }
`;
