import { Events, TraceEventProps } from "./types";
import React, {
  PropsWithChildren,
  SyntheticEvent,
  cloneElement,
  useCallback,
} from "react";
import ReactGA from "react-ga4";

export function TraceEvent({
  category,
  action,
  label,
  value,
  nonInteraction,
  transport,
  children,
  events,
}: PropsWithChildren<TraceEventProps>) {
  const logEvent = useCallback(() => {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
      value: value,
      nonInteraction: nonInteraction,
      transport: transport,
    });
  }, [category, action, label, value, nonInteraction, transport]);

  const getEventHandlers = useCallback(
    (
      child: React.ReactElement,
      events: Events[],
      shouldLogImpression = true
    ) => {
      const eventHandlers: Partial<
        Record<string, (e: SyntheticEvent<Element, string>) => void>
      > = {};

      for (const event of events) {
        eventHandlers[event] = (eventHandlerArgs: unknown) => {
          const args = Array.isArray(eventHandlerArgs)
            ? eventHandlerArgs
            : [eventHandlerArgs];
          child.props[event]?.apply(child, args);

          if (shouldLogImpression) {
            logEvent();
          }
        };
      }

      return eventHandlers;
    },
    [children, events]
  );

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return cloneElement(child, getEventHandlers(child, events));
    }
    return child;
  });

  return <>{childrenWithProps}</>;
}
