import ReactGA from "react-ga4";
import { AmplitudeOptions, GaOptions, Options } from "./types";

export function initialize(options: Options) {
  switch (options.provider) {
    case "GA":
      initalizeGA(options.ga);
      break;
    case "AMPLITUDE":
      initalizeAmplitude(options.amplitude);
      break;
    default:
      throw new Error("This option is unsupported");
  }
}

function initalizeGA(options: GaOptions | undefined) {
  if (options?.trackingId) {
    ReactGA.initialize(options.trackingId);
  } else {
    throw new Error("Missing required parameters");
  }
}

function initalizeAmplitude(options: AmplitudeOptions | undefined) {}
