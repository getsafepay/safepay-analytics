# Safepay Analytics

The `safepay-analytics` package is an [npm package](https://www.npmjs.com/package/safepay-analytics) of React components and functions used to provide Analytics capability to Safepay front-end applications.

## Installation

Install via `npm` or `yarn`.

```js
yarn add safepay-analytics
```

```js
npm i safepay-analytics
```

### Initializing Analytics

The client should be initialized before it is used. To initialize the client, pass in Provider, as well as the parameters for that provider, in this case a Tracking ID.

```js
import { Provider, initialize } from "safepay-analytics";

initialize({ provider: Provider.GA, ga: { trackingId: "1234" } });
```

Note that an `Error` is thrown if an invalid provider is provided.

### Logging Events Directly

```js
import {
  logEvent,
  Category,
  Action,
  Events,
} from "safepay-analytics";

logEvent({
  category: Category.Authorization,
  action: Action.Signup,
  events: [Events.OnClick],
  shouldLogImpression: true,
});
```

### Logging Events Using the Trace Component

This is a React component that wraps event callbacks with logging logic:

```js
import {
  logEvent,
  Category,
  Action,
  Events,
  TraceEvent,
} from "safepay-analytics";

<TraceEvent
  category={Category.Authorization}
  action={Action.Signup}
  events={[Events.OnClick]}
  shouldLogImpression={true}
>
  <SomeButton onClick={onClickHandler} />
</TraceEvent>;
```

Depending on the context that `<Trace/>` is used in, you may have to define new values in [@uniswap/analytics-events](https://www.npmjs.com/package/@uniswap/analytics-events) for the enums that are passed in as arguments such: `BrowserEvent`, `EventName`, `ModalName`, `ElementName`.

| Field                 | Type                                      | Required |
| :-------------------- | :---------------------------------------- | -------- |
| `category`            | Category                                  | Yes      |
| `action`              | Action                                    | Yes      |
| `events`              | Events[]                                  | Yes      |
| `label`               | string                                    | No       |
| `value`               | number                                    | No       |
| `nonInteraction`      | boolean                                   | No       |
| `transport`           | "beacon" or "xhr" or "image" or undefined | No       |
| `shouldLogImpression` | boolean                                   | Yes      |

##### Values for Category

Authorization = "AUTHORIZATION",  
OpenDropDown = "OPEN_DROP_DOWN",  
OpenExternalLink = "OPEN_EXTERNAL_LINK",  
OpenInternalLink = "OPEN_INTERNAL_LINK",  
SavingCardProcess = "SAVING_CARD_PROCESS",

##### Values for Action

Login = "LOGIN",  
Signup = "SIGN_UP",  
ViewPlanDetails = "VIEW_PLAN_DETAILS",  
OpenAcountActions = "OPEN_ACCOUNT_ACTIONS",  
OpenMenu = "OPEN_MENU",  
ClickCancelUrl = "CLICK_CANCEL_URL",  
ProceedAfterCardSelection = "PROCEED_AFTER_CARD_SELECTION",  
CardSaved = "CARD_SAVED",

##### Values for Events

OnClick = "onClick",

#### Log in Page Views

This is a built in React component that logs an event when it is first mounted. You may use it as a wrapper:

```js
import { Trace, Title } from "safepay-analytics";

<Trace
  page={window.location.pathname}
  title={Title.SubscriptionProfile}
>
  <SomeComponent />
</Trace>;
```

| Field   | Type   | Required |
| :------ | :----- | -------- |
| `page`  | string | Yes      |
| `title` | Title  | Yes      |

##### Values for Title

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
