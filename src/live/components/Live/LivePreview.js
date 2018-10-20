import React, { Fragment } from "react";
import { LiveContext } from "./LiveProvider";

export default function LivePreview({ className, ...rest }) {
  return (
    <Fragment>
      <LiveContext.Consumer>
        {({ element: Element }) => Element && <Element />}
      </LiveContext.Consumer>
    </Fragment>
  );
}
