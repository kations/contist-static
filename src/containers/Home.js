import React, { Fragment } from "react";
import { withRouteData } from "react-static";

import Site from "../components/Site";
import Live from "../components/Live";

export default withRouteData(({ code, reactCode }) => (
  <Site>
    <Live code={reactCode} />
  </Site>
));
