import React, { Fragment } from "react";
import { Router } from "react-static";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { hot } from "react-hot-loader";
import { SiteData } from "react-static";
import { DefaultTheme } from "contist-ui";
import { Reset } from "contist-ui";

import Live from "./components/Live";

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${p => p.style}
`;

const App = () => (
  <Router>
    <SiteData
      render={({ website }) => (
        <ThemeProvider theme={website.theme || DefaultTheme}>
          <Fragment>
            <GlobalStyle style={website.globalStyle} />
            <Live code={website.layout} ownComps={website.components} />
          </Fragment>
        </ThemeProvider>
      )}
    />
  </Router>
);

export default hot(module)(App);
