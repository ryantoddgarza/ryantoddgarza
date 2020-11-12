import { css } from 'styled-components';
import { backgroundColor } from '~/design-system';
import { BLACK_COLOR } from '~/components/Common/constants';

const styledTechCard = css`
  article.tech-card {
    background-color: ${backgroundColor.light};
    margin: 1.5rem 0;
    padding: 1rem;

    & > *:last-child {
      margin-bottom: 0;
    }

    h3 {
      margin: 0 0 1.5rem;
      font-size: 1.25rem;
    }

    p {
      margin: 0 0 1rem;
    }

    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      margin: 0 0 1rem;
      padding: 0;

      li {
        margin: 0 0.5rem 0.5rem 0;
        padding: 0 0.5rem;
        font-size: 0.6875rem;
        line-height: 1.25rem;
        text-transform: lowercase;
        border: 1px solid ${BLACK_COLOR};
        white-space: nowrap;
      }
    }
  }
`;

export default styledTechCard;
