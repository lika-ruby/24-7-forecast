import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

*:focus {
	outline: none;
}

h1,
h2,
h3,
p {
	margin: 0;
	padding: 0;
}

ul,
ol {
	padding: 0;
	margin: 0;
	list-style: none;
}

a {
	text-decoration: none;
}

button {
	border: none;
	cursor: pointer;
}

img {
	display: block;
	width: 100%;
	height: 100%;
	max-width: 100%;
}

body{
    font-family: 'Inter', sans-serif;
	min-height: 100vh;
}
	.no-scroll {
  overflow: hidden;
  height: 100vh;
}

*{
  transition: all 0.1s ease-in-out;
}

:root {
    --first-text-color: #341355;
    --second-text-color: #077066;
    --additional-color: #ffffff;
    --bg-color: #ece1f6;
    --second-bg-color: #EFF7F4;
    --first-accent-color: #8263b6;
    --second-accent-color: #84b095;
}
`;
