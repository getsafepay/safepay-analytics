import { ShouldLogImpression, TraceEventProps } from "./types";
import ReactGA from "react-ga4";

export function logAnalytics(
  props: TraceEventProps & ShouldLogImpression
) {
  if (props.shouldLogImpression) {
    ReactGA.event({
      category: props.category,
      action: props.action,
      label: props.label,
      value: props.value,
      nonInteraction: props.nonInteraction,
      transport: props.transport,
    });
  }
}
