"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.Action = exports.Category = exports.Events = exports.Provider = void 0;
var Provider;
(function (Provider) {
    Provider["GA"] = "GA";
    Provider["Amplitude"] = "AMPLITUDE";
})(Provider || (exports.Provider = Provider = {}));
var Events;
(function (Events) {
    Events["OnClick"] = "onClick";
})(Events || (exports.Events = Events = {}));
var Category;
(function (Category) {
    Category["Authorization"] = "AUTHORIZATION";
    Category["OpenDropDown"] = "OPEN_DROP_DOWN";
    Category["OpenExternalLink"] = "OPEN_EXTERNAL_LINK";
    Category["OpenInternalLink"] = "OPEN_INTERNAL_LINK";
    Category["SavingCardProcess"] = "SAVING_CARD_PROCESS";
})(Category || (exports.Category = Category = {}));
var Action;
(function (Action) {
    Action["Login"] = "LOGIN";
    Action["Signup"] = "SIGN_UP";
    Action["ViewPlanDetails"] = "VIEW_PLAN_DETAILS";
    Action["OpenAcountActions"] = "OPEN_ACCOUNT_ACTIONS";
    Action["OpenMenu"] = "OPEN_MENU";
    Action["ClickCancelUrl"] = "CLICK_CANCEL_URL";
    Action["ProceedAfterCardSelection"] = "PROCEED_AFTER_CARD_SELECTION";
    Action["CardSaved"] = "CARD_SAVED";
})(Action || (exports.Action = Action = {}));
var Title;
(function (Title) {
    // Subscriptions
    Title["SubscriptionHome"] = "SUBSCRIPTION_HOME";
    Title["SubscriptionProfile"] = "SUBSCRIPTION_PROFILE";
    Title["SubscriptionTerms"] = "SUBSCRIPTION_TERMS";
    Title["SubscriptionWallet"] = "SUBSCRIPTION_WALLET";
    Title["SubscriptionAddCard"] = "SUBSCRIPTION_ADD_CARD";
    // Auth
    Title["ForgotPassword"] = "FORGOT_PASSWORD";
    Title["ResetPassword"] = "RESET_PASSWORD";
    Title["SignUp"] = "SIGN_UP";
    Title["Login"] = "LOGIN";
})(Title || (exports.Title = Title = {}));
