import ReactGA from "react-ga4";
import { AmplitudeOptions, GaOptions, Options } from "./types";

export function initialize(options: Options) {
  switch (options.provider) {
    case "GA":
      initalizeGA(options.ga);
    case "AMPLITUDE":
      initalizeAmplitude(options.amplitude);
    default:
      throw new Error("This option is unsupported");
  }
}

function initalizeGA(options: GaOptions) {
  ReactGA.initialize(options.trackingId);
}

function initalizeAmplitude(options: AmplitudeOptions) {}
