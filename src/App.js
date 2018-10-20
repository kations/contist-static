import React, { Fragment } from "react";
import { Router } from "react-static";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { hot } from "react-hot-loader";
import { SiteData } from "react-static";
import { DefaultTheme } from "contist-ui";
import { Reset } from "contist-ui";

import Live from "./components/Live";
import Routes from "react-static-routes";

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${p => p.style}
`;

const App = () => (
  <Router>
    <SiteData
      render={({ website, layout, components }) => (
        <ThemeProvider theme={website.theme || DefaultTheme}>
          <Fragment>
            <GlobalStyle style={website.globalStyle} />
            <Live code={layout} components={components} />
          </Fragment>
        </ThemeProvider>
      )}
    />
  </Router>
);

export default hot(module)(App);
