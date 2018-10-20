import React from "react";
import { withRouteData } from "react-static";

import Live from "../components/Live";
import Site from "../components/Site";

export default withRouteData(({ code }) => (
  <Site>
    <Live code={code} />
  </Site>
));
