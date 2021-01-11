import { css } from 'styled-components';
import { textColor, backgroundColor } from '~/design-system';

const global = css`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  *[disabled] {
    cursor: not-allowed;
  }

  body {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen-Sans,
      Ubuntu,
      Cantarell,
      "Helvetica Neue",
      sans-serif
    ;
    -webkit-font-smoothing: antialiased;
    color: ${textColor.default};
    background-color: ${backgroundColor.default};
  }

  code {
    font-family:
      Menlo,
      Consolas,
      Monaco,
      "Liberation Mono",
      "Lucida Console",
      monospace
    ;
  }

  img {
    user-select: none;
  }

  a,
  button,
  label {
    cursor: pointer;
  }
`;

export default global;
