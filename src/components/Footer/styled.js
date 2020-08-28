import styled from 'styled-components';
import { PRIMARY_COLOR } from '~/components/Common/constants';

export const FooterWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  font-size: 0.75rem;
  color: #adadad;
  background-color: #f0f0f0;
  @media (max-width: 414px) {
    grid-template-columns: 1fr;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const SocialInformation = styled.div`
  display: flex;
  font-size: 20px;
  @media (max-width: 414px) {
    justify-content: center;
    margin-bottom: 16px;
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

export const Copyright = styled.span`
  text-align: center;
`;
