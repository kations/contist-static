import React from "react";
import { LiveContext } from "./LiveProvider";

export default function LivePreview({ className, ...rest }) {
  return (
    <LiveContext.Consumer>
      {({ element: Element }) => Element && <Element />}
    </LiveContext.Consumer>
  );
}
