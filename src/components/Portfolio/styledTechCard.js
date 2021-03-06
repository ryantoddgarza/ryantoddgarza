import { css } from 'styled-components';
import { backgroundColor, textColor, space } from '~/design-system';

const styledTechCard = css`
  article.tech-card {
    background-color: ${backgroundColor.light};
    margin: ${space.x6} 0;
    padding: ${space.x4};

    & > *:last-child {
      margin-bottom: 0;
    }

    h3 {
      margin: 0 0 ${space.x6};
      font-size: 1.375rem;
    }

    p {
      margin: 0 0 ${space.x4};
    }

    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      margin: 0 0 ${space.x4};
      padding: 0;

      li {
        margin: 0 ${space.x2} ${space.x2} 0;
        padding: 0 ${space.x2};
        font-size: 0.6875rem;
        line-height: 1.25rem;
        text-transform: lowercase;
        border: 1px solid ${textColor.default};
        white-space: nowrap;
      }
    }
  }
`;

export default styledTechCard;
