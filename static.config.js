import React, { Component } from "react";
import { ServerStyleSheet } from "styled-components";
import axios from "axios";

var babel = require("babel-core");

const website = {
  _id: "G6XJJsj4FMubu6AcK",
  name: "Contist test",
  projectId: "MRMHSGCbznosp2Jpr",
  pages: [
    {
      name: "404",
      slug: "404",
      public: true,
      code:
        '<Tilt options={{ max: 10, scale: 1.02 }}>\n  <Wrapper maxWidth="800px">\n    <Flex\n      alignItems="center"\n      justifyContent="center"\n      flexDirection="column"\n      width="100%"\n      height="100vh"\n    >\n      <Animate\n        from={{ transform: "translate3d(0,100px,0)", opacity: 0 }}\n        isVisible\n      >\n        <Fixed\n          as="img"\n          src="https://contist.s3.amazonaws.com/MRMHSGCbznosp2Jpr/banner-2.jpg"\n          alt="Spicy Media"\n          height="52vh"\n        />\n      </Animate>\n      <Headline textAlign="center" zIndex="2" animated isVisible>\n        404\n      </Headline>\n    </Flex>\n  </Wrapper>\n</Tilt>\n'
    },
    {
      name: "test",
      slug: "test",
      description: "test",
      code: "<Wrapper>test</Wrapper>\n"
    },
    {
      name: "home",
      slug: "/",
      description: "test",
      code:
        '() => { return <Fragment>\n  <State\n    initialState={{\n      show: false,\n      position: undefined,\n      full: false,\n      from: undefined,\n      fullHeight: false\n    }}\n  >\n    {({ state, setState }) => (\n      <Fragment>\n        <Headline as="h3" marginBottom={50} animated>\n          Overlay\n        </Headline>\n        <Grid gap="10px">\n          <Button\n            onClick={() =>\n              setState({\n                show: !state.show,\n                position: "center",\n                full: false,\n                from: undefined,\n                fullHeight: false\n              })\n            }\n          >\n            Show Overlay\n          </Button>\n          <Button\n            onClick={() =>\n              setState({\n                show: !state.show,\n                position: "center",\n                fullHeight: false,\n                full: false,\n                from: { transform: "translate3d(0, 0, 0) scale(0)", opacity: 0 }\n              })\n            }\n          >\n            Change Animation\n          </Button>\n          <Button\n            onClick={() =>\n              setState({\n                show: !state.show,\n                position: "left",\n                full: false,\n                fullHeight: true,\n                from: { transform: "translate3d(-300px, 0, 0)" }\n              })\n            }\n          >\n            As sidebar\n          </Button>\n          <Button\n            onClick={() =>\n              setState({\n                show: !state.show,\n                position: "center",\n                full: true,\n                fullHeight: false,\n                from: undefined\n              })\n            }\n          >\n            Full Overlay\n          </Button>\n        </Grid>\n        <Overlay\n          visible={state.show}\n          full={state.full}\n          position={state.position}\n          from={state.from}\n          fullHeight={state.fullHeight}\n          handleClose={() => setState({ show: !state.show })}\n        >\n          <Button onClick={() => setState({ show: !state.show })}>Close</Button>\n        </Overlay>\n      </Fragment>\n    )}\n  </State>\n</Fragment>\n}'
    },
    {
      name: "Shop",
      slug: "/shop",
      description: "test",
      code:
        "<section>\n  <Wrapper>\n    <Headline animated>Shop</Headline>\n  </Wrapper>\n</section>\n"
    }
  ],
  header: "<Toolbar>Hi</Toolbar>",
  footer: "<Footer>Hi</Footer>",
  globalStyle:
    "html,\nbody {\n  height: 100%;\n  width: 100%;\n  font-size: 100%;\n  background: #fff;\n  margin: 0;\n  padding: 0;\n  font-family: Roboto, sans-serif;\n  @media (max-width: 768px) {\n    font-size: 90%;\n  }\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}",
  theme: {
    breakpoints: {
      mb: 0,
      tb: 768,
      dt: 1024
    },
    colors: {
      primary: "#455acf",
      secondary: "#6F481E",
      success: "",
      danger: "",
      warning: "",
      info: "",
      light: "#fff",
      dark: "#231c20",
      grey: "rgb(240,240,240)"
    },
    globals: {
      wrapperWidth: "1200px",
      backdropColor: "rgba(0,0,0,0.25)",
      sidebarWidth: "300px",
      buttonRadius: "0.3rem",
      buttonColor: "primary",
      buttonSize: "medium",
      buttonType: "primary"
    }
  },
  updatedAt: "2018-10-14T10:47:36.489Z",
  createdAt: "2018-10-14T10:47:36.489Z",
  components: [
    {
      name: "Header",
      code:
        '<Toolbar padding="0 10px" position="sticky" top="0px">\n  <Flex\n    alignItems="center"\n    justifyContent="space-between"\n    width="100%"\n    height="100%"\n  >\n    <img\n      src="https://contist.s3.amazonaws.com/MRMHSGCbznosp2Jpr/twobold-logo.svg"\n      height="40px"\n      alt={props.text || "Hi!"}\n    />\n    <Flex>\n      <nav>\n        <Link to="/">Home</Link>\n        <Link to="/shop">Shop</Link>\n        <Link to="/about">About</Link>\n        <Link to="/contact">Kontakt</Link>\n      </nav>\n      <Button>test</Button>\n    </Flex>\n  </Flex>\n</Toolbar>\n'
    },
    {
      name: "Footer",
      code: '() => (<Toolbar>{props.test || "hi"}</Toolbar>)\n'
    }
  ],
  layout:
    '() => { return <Fragment>\n  <Header />\n  <main>\n <Routes /> </main>\n  <Footer test="nfnsfsnsngs" />\n</Fragment>}'
};

//<Routes />\n

export default {
  siteRoot: "https://contist-test.netlify.com",
  getSiteData: async () => {
    // const { website } = await axios.get(
    //   `http://192.168.2.107:5000/api/website/G6XJJsj4FMubu6AcK`
    // );

    const comps = [];
    if (website.components) {
      website.components.map(comp => {
        comps.push({
          name: comp.name,
          code: comp.code.replace("\n ", "")
        });
      });
    }
    return {
      siteTitle: website.name,
      layout: website.layout.replace("\n ", ""),
      components: comps,
      website
    };
  },
  getRoutes: async () => {
    // const { website } = await axios.get(
    //   `http://192.168.2.107:5000/api/website/G6XJJsj4FMubu6AcK`
    // );

    // console.log(website);
    const routes = [];
    website.pages.map(page => {
      routes.push({
        path: page.slug,
        component: "src/containers/Home",
        is404: page.slug === "404",
        getData: () => ({
          routeTitle: page.name,
          reactCode: page.code.replace("\n ", "")
        })
      });
    });

    return routes;
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
  devServer: {
    port: 4444
  }
};
