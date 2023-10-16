import { TraceProps } from "./types";
import React, { PropsWithChildren, useEffect } from "react";
import ReactGA from "react-ga4";

export default function Trace({
  page,
  title,
  children,
}: PropsWithChildren<TraceProps>) {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: page,
      title: title,
    });
  }, []);

  return <>{children}</>;
}
