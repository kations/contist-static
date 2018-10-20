import React from "react";
import { LiveContext } from "./LiveProvider";

export default function LiveError({ className, ...rest }) {
  return (
    <LiveContext.Consumer>
      {({ error }) =>
        error ? (
          <div {...rest} className="react-live-error">
            {error}
          </div>
        ) : null
      }
    </LiveContext.Consumer>
  );
}
