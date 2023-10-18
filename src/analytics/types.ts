export enum Provider {
  GA = "GA",
  Amplitude = "AMPLITUDE",
}

export interface GaOptions {
  trackingId: string;
}

export interface AmplitudeOptions {
  apiKey: string;
  tokenEndPoint: string;
}

export type Options = {
  provider: Provider;
  ga?: GaOptions;
  amplitude?: AmplitudeOptions;
};

export interface TraceEventProps {
  category: string;
  action: string;
  events: Events[];
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  transport?: "beacon" | "xhr" | "image" | undefined;
}

export interface TraceProps {
  page: string;
  title: string;
}

export enum Events {
  OnClick = "onClick",
}

export enum Category {
  Authorization = "AUTHORIZATION",
  OpenDropDown = "OPEN_DROP_DOWN",
  OpenExternalLink = "OPEN_EXTERNAL_LINK",
  OpenInternalLink = "OPEN_INTERNAL_LINK",
  SavingCardProcess = "SAVING_CARD_PROCESS",
}

export enum Action {
  Login = "LOGIN",
  Signup = "SIGN_UP",
  ViewPlanDetails = "VIEW_PLAN_DETAILS",
  OpenAcountActions = "OPEN_ACCOUNT_ACTIONS",
  OpenMenu = "OPEN_MENU",
  ClickCancelUrl = "CLICK_CANCEL_URL",
  ProceedAfterCardSelection = "PROCEED_AFTER_CARD_SELECTION",
  CardSaved = "CARD_SAVED",
}

export enum Title {
  // Subscriptions

  SubscriptionHome = "SUBSCRIPTION_HOME",
  SubscriptionProfile = "SUBSCRIPTION_PROFILE",
  SubscriptionTerms = "SUBSCRIPTION_TERMS",
  SubscriptionWallet = "SUBSCRIPTION_WALLET",
  SubscriptionAddCard = "SUBSCRIPTION_ADD_CARD",

  // Auth

  ForgotPassword = "FORGOT_PASSWORD",
  ResetPassword = "RESET_PASSWORD",
  SignUp = "SIGN_UP",
  Login = "LOGIN",
}

export interface ShouldLogImpression {
  shouldLogImpression: boolean;
}
