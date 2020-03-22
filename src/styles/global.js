import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,600i&display=swap');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --color1: #f9f5f0;
    --color2: #f2ead3;
    --color3: #f4991a;
    --color4: #321313;

    --text-color1: #140E02;
    --text-color2: #100C02;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-image: linear-gradient(to top left, var(--color2), var(--color1));
    background-repeat: no-repeat;
  }

  h1, h2, h3 {
    color: var(--text-color2);
  }

  p {
    color: var(--text-color1);
  }

`;

export default globalStyle;
