import React, { Fragment } from "react";
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

const props = {};
const scope = [
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
  Routes
];

export default ({ code, components }) => {
  const comps = [];
  const compsNames = [];
  if (components) {
    components.map(comp => {
      const compRender = stringToJsx(comp.code, []);
      compsNames.push(comp.name);
      console.log(scope);
      comps.push(props => {
        const newScope = [...scope];
        newScope.push(props);
        return compRender(...newScope);
      });
    });
  }

  const scropeWithComps = [...scope, ...comps];

  const page = stringToJsx(code, compsNames);
  return <Fragment>{page(...scropeWithComps)}</Fragment>;
};
