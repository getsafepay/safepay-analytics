import { TraceEventProps } from "./types";
import React, { PropsWithChildren } from "react";
export default function TraceEvent({ category, action, label, value, nonInteraction, transport, children, events, }: PropsWithChildren<TraceEventProps>): React.JSX.Element;
