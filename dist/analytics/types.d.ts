export declare enum Provider {
    GA = "GA",
    Amplitude = "AMPLITUDE"
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
    ga: GaOptions;
    amplitude: AmplitudeOptions;
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
export declare enum Events {
    OnClick = "onClick"
}
export declare enum Category {
    Authorization = "AUTHORIZATION",
    OpenDropDown = "OPEN_DROP_DOWN",
    OpenExternalLink = "OPEN_EXTERNAL_LINK",
    OpenInternalLink = "OPEN_INTERNAL_LINK",
    SavingCardProcess = "SAVING_CARD_PROCESS"
}
export declare enum Action {
    Login = "LOGIN",
    Signup = "SIGN_UP",
    ViewPlanDetails = "VIEW_PLAN_DETAILS",
    OpenAcountActions = "OPEN_ACCOUNT_ACTIONS",
    OpenMenu = "OPEN_MENU",
    ClickCancelUrl = "CLICK_CANCEL_URL",
    ProceedAfterCardSelection = "PROCEED_AFTER_CARD_SELECTION",
    CardSaved = "CARD_SAVED"
}
export declare enum Title {
    SubscriptionHome = "SUBSCRIPTION_HOME",
    SubscriptionProfile = "SUBSCRIPTION_PROFILE",
    SubscriptionTerms = "SUBSCRIPTION_TERMS",
    SubscriptionWallet = "SUBSCRIPTION_WALLET",
    SubscriptionAddCard = "SUBSCRIPTION_ADD_CARD",
    ForgotPassword = "FORGOT_PASSWORD",
    ResetPassword = "RESET_PASSWORD",
    SignUp = "SIGN_UP",
    Login = "LOGIN"
}
export interface ShouldLogImpression {
    shouldLogImpression: boolean;
}
