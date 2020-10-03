import styled from 'styled-components';
import { fontSizeFluid } from '~/components/Common/fontSize';

export const Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 1.5em;
  line-height: 1.5em;
  font-size: ${fontSizeFluid(48, 16)};
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
