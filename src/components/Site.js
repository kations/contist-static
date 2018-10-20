import React, { Fragment } from "react";
import { RouteData, SiteData, Head } from "react-static";

export default ({ children, render }) => (
  <SiteData
    render={siteProps => (
      <RouteData
        render={routeProps => (
          <Fragment>
            <Head>
              <meta charSet="UTF-8" />
              <title>
                {routeProps.routeTitle || "404"} | {siteProps.siteTitle}
              </title>
              <meta name="description" content={siteProps.description} />
              <meta name="keywords" content={siteProps.keywords} />
            </Head>
            {render ? render(routeProps) : children}
          </Fragment>
        )}
      />
    )}
  />
);
