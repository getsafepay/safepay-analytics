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

enum TransportType {
  Beacon = "beacon",
  XHR = "xhr",
  Image = "image",
}
export interface TraceEventProps {
  category: string;
  action: string;
  events: Events[];
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  transport?: TransportType;
}

export interface TraceProps {
  page: string;
  title: string;
}

export enum Events {
  OnClick = "onClick",
  IsValid = "isValid",
  OnChange = "onChange",
}

export enum Category {
  Authorization = "AUTHORIZATION",
  OpenDropDown = "OPEN_DROP_DOWN",
  OpenExternalLink = "OPEN_EXTERNAL_LINK",
  OpenInternalLink = "OPEN_INTERNAL_LINK",
  SavingCardProcess = "SAVING_CARD_PROCESS",
  UserActions = "USER_ACTIONS",
  Payment = "PAYMENT",
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

  // Checkout 2.0
  EmailValidInput = "EMAIL_VALID_INPUT",
  PhoneInput = "PHONE_VALID_INPUT",
  ValidLoginPasswordInput = "VALID_LOGIN_PASSWORD_INPUT",
  ValidSignUpPasswordInput = "VALID_SIGNUP_PASSWORD_INPUT",
  ValidEmailOtpInput = "VALID_EMAIL_OTP_INPUT",
  ValidSmsOtpInput = "VALID_SMS_OTP_INPUT",
  EmailOtpRequest = "EMAIL_OTP_REQUEST",
  SmsOtpRequest = "SMS_OTP_REQUEST",
  ValidCardDetailsInput = "VALID_CARD_DETAILS_INPUT",
  ValidCardDetailsInputInstrument = "VALID_CARD_DETAILS_INPUT_INSTRUMENT",
  ValidBillingDetailsInput = "VALID_BILLING_DETAILS_INPUT",
  SignUpClick = "SIGNUP_CLICK",
  PayButtonClick = "PAY_BUTTON_CLICK",
  SelectedSavedCard = "SELECTED_SAVED_CARD",
  AddAnotherPaymentMethod = "ADD_ANOTHER_PAYMENT_METHOD",
  CancelButtonClick = "CANCEL_BUTTON_CLICK",
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
