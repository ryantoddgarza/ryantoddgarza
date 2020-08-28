import styled from 'styled-components';
import { Link } from 'gatsby';
import { PRIMARY_COLOR } from '~/components/Common/constants';

export const Header = styled.header`
  padding: 24px 0;
  text-align: center;
`;

export const Title = styled.h2`
  margin: 16px 0;
  font-size: 32px;
`;

export const StyledLink = styled(Link)`
  &::after {
    content: ' →';
  }

  &:hover {
    color: ${PRIMARY_COLOR};
  }
`;
