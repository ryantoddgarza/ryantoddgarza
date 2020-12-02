import styled from 'styled-components';
import {
  backgroundColor,
  breakpoint,
  primaryColor,
  textColor,
} from '~/design-system';
import Clearfix from '~/components/Common/Clearfix';

export const Wrapper = styled.section`
  padding: 70px 16px 0;
  ${breakpoint.from('tablet')} {
    padding: 100px 0 0;
  }

  & > ${Clearfix} {
    margin: auto;
    max-width: 640px;
  }

  button {
    float: right;
  }
`;

export const BasicInformation = styled.section`
  text-align: center;
  font-size: 16px;
  text-transform: lowercase;

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  p {
    margin: 0.67em 0;
  }

  img {
    border-radius: 50%;
  }
`;

export const SocialInformation = styled.section`
  font-size: 20px;
  text-align: center;

  a {
    color: ${primaryColor.default};
    padding: 0 6px;
  }
`;

export const MDInformation = styled.section`
  font-size: 16px;

  h2 {
    font-size: 1.5em;
    margin: 0.67em 0;
  }

  ul {
    margin: 16px 0 0;
    padding: 0 0 0 20px;
    line-height: 2em;
    list-style: disc;
  }

  li ul {
    margin: 0 0 16px;
    padding: 0 0 0 20px;
    list-style: circle;
  }

  a {
    color: ${primaryColor.default};
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${textColor.default};
  background-color: ${backgroundColor.default};
  border: 1px solid ${({ theme: { color } }) => color};
  border-radius: 4px;
  outline: 0;
`;
