import styled from 'styled-components';
import { Container } from '~/components/Common/Container';
import { PRIMARY_COLOR } from '~/components/Common/constants';

export const FooterWrapperOuter = styled.div`
  font-size: 0.75rem;
  color: #adadad;
  background-color: #f0f0f0;
`;

export const FooterWrapperInner = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: baseline;
  padding: 16px 0;

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SocialInformation = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 16px;
  font-size: 20px;

  @media (min-width: 769px) {
    justify-content: flex-start;
    margin: 0;
  }

  & > *:not(:last-child) {
    margin-right: 16px;
  }

  a {
    display: inline-flex;

    &:hover,
    &:active {
      color: ${PRIMARY_COLOR};
    }
  }
`;

export const Copyright = styled.div`
  text-align: center;
`;
