import React, { Fragment, Component } from "react";
import { LiveProvider, LiveError, withLive } from "../live";
import styled from "styled-components";
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

const LiveComp = ({ live: { code, element: Element } }) => (
  <Fragment>{Element && <Element />}</Fragment>
);

const LiveLive = withLive(LiveComp);

export default class SubHeader extends Component {
  render() {
    const { code, add, props, ownComps } = this.props;

    const components = {
      Wrapper,
      Flex,
      Animate,
      Tilt,
      Fixed,
      Absolute,
      Box,
      Grid,
      Headline,
      Fragment,
      Toolbar,
      Link,
      Routes,
      Button,
      State,
      Overlay,
      Icon,
      Card,
      Progress,
      props: {}
    };

    if (ownComps) {
      ownComps.map(comp => {
        components[comp.name] = props => {
          components.props = props;
          return (
            <LiveProvider
              code={comp.code}
              scope={components}
              mountStylesheet={false}
            >
              <LiveLive />
            </LiveProvider>
          );
        };
      });
    }

    return (
      <Fragment>
        <LiveProvider
          code={code}
          scope={Object.assign({}, components)}
          mountStylesheet={false}
        >
          <LiveError />
          <LiveLive />
        </LiveProvider>
      </Fragment>
    );
  }
}

// import { transform } from "@babel/standalone";
//
// <LiveProvider
//   code={props.code}
//   transformCode={(input) => {
//     try {
//       return Babel.transform(input, { presets: ["typescript", "react"] }).code;
//     } catch () {
//       // todo: handle error
//       return input;
//     }
//   }}
// >
// ...
