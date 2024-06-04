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
  MerchantDashboardActions = "MERCHANT_DASHBOARD_ACTIONS",
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
  CreateDiscountClick = "CREATE_DISCOUNT_CLICK",
  CreateQuicklinkClick = "CREATE_QUICKLINK_CLICK",
  ApplyFinanceClick = "APPLY_FINANCE_CLICK",
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

  // Merchant Dashboard pages
  DiscountHome = "DISCOUNT_HOME",
  MerchantDashboardHome = "MERCHANT_DASHBOARD_HOME",
  QuicklinkHome = "QUICKLINK_HOME",
  PaymentDetails = "PAYMENT_DETAILS",
  PaymentDetailsV2 = "PAYEMNT_DETAILS_2.0",
  PaymentList = "PAYMENT_LIST",
  PaymentV2List = "PAYEMNT_LIST_V2",
}

export interface ShouldLogImpression {
  shouldLogImpression: boolean;
}
