import React, { Fragment } from "react";
import ReactDOM from "react-dom";
var safeEval = require("safe-eval");

import { Router, Link } from "react-static";
import Routes from "react-static-routes";
import {
  Wrapper,
  Flex,
  Animate,
  Tilt,
  Fixed,
  Absolute,
  Box,
  Grid,
  Headline,
  Toolbar,
  Button,
  State,
  Overlay,
  Icon,
  Card,
  Progress
} from "contist-ui";

import { LiveProvider, LiveError, LivePreview } from "./Live/src";

const stringToJsx = (code, components) =>
  new Function(
    "React",
    "Fragment",
    "Wrapper",
    "Flex",
    "Animate",
    "Tilt",
    "Fixed",
    "Absolute",
    "Box",
    "Grid",
    "Headline",
    "Toolbar",
    "Button",
    "State",
    "Overlay",
    "Icon",
    "Card",
    "Progress",
    "Router",
    "Link",
    "Routes",
    ...components,
    "props",
    `return ${code}`
  );

const scope = {
  React,
  Fragment,
  Wrapper,
  Flex,
  Animate,
  Tilt,
  Fixed,
  Absolute,
  Box,
  Grid,
  Headline,
  Toolbar,
  Button,
  State,
  Overlay,
  Icon,
  Card,
  Progress,
  Router,
  Link,
  Routes,
  props: {}
};

export default ({ code, components }) => {
  const comps = {};
  if (components) {
    components.map(comp => {
      comps[comp.name] = props => {
        const scopeWithProps = Object.assign({}, scope, { props: props });
        console.log("scopeWithProps", scopeWithProps, comp.code);
        return (
          <LiveProvider code={comp.code} scope={scopeWithProps}>
            <LiveError />
            <LivePreview />
          </LiveProvider>
        );
      };
    });
  }
  //console.log(code, scropeWithComps);
  const scropeWithComps = { ...scope, ...comps };
  return (
    <LiveProvider code={code} scope={scropeWithComps}>
      <LiveError />
      <LivePreview />
    </LiveProvider>
  );
};

// const Item = props => {
//   var CompItem = props.comp;
//   return <CompItem />;
// };

// export default ({ code, components }) => {
//   const comps = {};
//   if (components) {
//     components.map(comp => {
//       console.log(comps);
//       comps[comp.name] = safeEval(comp.code, scope);
//     });
//   }
//   const scropeWithComps = { ...scope, ...comps };
//   console.log(
//     code,
//     <Fragment>
//       <Item comp={React.createElement(safeEval(code, scropeWithComps))} />
//     </Fragment>
//   );

//   return (
//     <Fragment>
//       <Item comp={React.createElement(safeEval(code, scropeWithComps))} />
//     </Fragment>
//   );
//   // return ReactDOM.render(
//   //   page(...scropeWithComps),
//   //   document.getElementById("root")
//   // );
//   return <Fragment>{page(...scropeWithComps)}</Fragment>;
// };
