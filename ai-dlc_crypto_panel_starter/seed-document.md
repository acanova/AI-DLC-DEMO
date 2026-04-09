# Crypto Coin Dashboard  
## Vision, Technical Specification, and Seed Document

### 1. Purpose
Define a compact, implementation-ready specification for a simple crypto dashboard web app suitable for a one-hour demo build. The document covers product vision, scope, technical stack, CoinGecko integration, project structure, and unit testing approach.

### 2. Product Summary
Build a single-page web application that allows the user to:
- select crypto coins from a predefined list to add to a grid dashboard,
- view live market data per coin on each card,
- remove coins from the dashboard,
- persist the dashboard state across reloads.

The app should be simple, visually modern, and fast to implement.

### 3. Scope
In scope:
- React frontend using JavaScript and JSX
- Vite as the build tool
- Tailwind CSS
- CoinGecko Demo API integration
- grid-based responsive dashboard layout (desktop only)
- predefined coin list (hardcoded, up to 20 coins)
- add and remove tracked coins
- localStorage persistence
- API key prompt via native browser input
- rate limit modal with auto-dismiss countdown (HTTP 429 and CORS preflight failures)
- unit tests with Vitest only

Out of scope:
- backend
- authentication
- mobile or responsive layout
- charts or candlestick visualization
- chart libraries (TradingView or any other)
- alert engine or notifications
- dynamic coin listing from API
- session storage or remember-me toggle
- React Router or multi-page navigation
- React Testing Library
- Playwright or end-to-end tests
- custom API key input UI component
- toast or sound notifications

### 4. Main Requirements
The application shall:
- display a grid of coin cards for tracked coins,
- allow the user to add coins from the predefined list not yet tracked,
- allow the user to remove any coin card directly with no confirmation,
- persist the tracked coin list in localStorage,
- persist the API key in localStorage,
- show an empty-state message when no coins are tracked,
- request the API key via `window.prompt()` on load if not found in localStorage,
- re-prompt for the API key if the current key is rejected by the API (HTTP 401 or 403),
- poll live market data for tracked coins at a dynamic interval (20 s base + 2 s per tracked coin),
- show a rate limit modal when a HTTP 429 response or CORS preflight failure is received,
- auto-dismiss the rate limit modal after a 30-second countdown.

### 5. Predefined Coin List
The app shall support exactly the following 20 coins. No dynamic loading from the API is needed.

```js
export const COINS = [
  { id: "bitcoin",       symbol: "BTC",  name: "Bitcoin"    },
  { id: "ethereum",      symbol: "ETH",  name: "Ethereum"   },
  { id: "dogecoin",      symbol: "DOGE", name: "Dogecoin"   },
  { id: "solana",        symbol: "SOL",  name: "Solana"     },
  { id: "cardano",       symbol: "ADA",  name: "Cardano"    },
  { id: "ripple",        symbol: "XRP",  name: "XRP"        },
  { id: "polkadot",      symbol: "DOT",  name: "Polkadot"   },
  { id: "chainlink",     symbol: "LINK", name: "Chainlink"  },
  { id: "litecoin",      symbol: "LTC",  name: "Litecoin"   },
  { id: "binancecoin",   symbol: "BNB",  name: "BNB"        },
  { id: "avalanche-2",   symbol: "AVAX", name: "Avalanche"  },
  { id: "uniswap",       symbol: "UNI",  name: "Uniswap"    },
  { id: "stellar",       symbol: "XLM",  name: "Stellar"    },
  { id: "cosmos",        symbol: "ATOM", name: "Cosmos"     },
  { id: "tron",          symbol: "TRX",  name: "Tron"       },
  { id: "monero",        symbol: "XMR",  name: "Monero"     },
  { id: "algorand",      symbol: "ALGO", name: "Algorand"   },
  { id: "vechain",       symbol: "VET",  name: "VeChain"    },
  { id: "theta-token",   symbol: "THETA",name: "Theta"      },
  { id: "shiba-inu",     symbol: "SHIB", name: "Shiba Inu"  },
];
```

### 6. Dashboard Layout
The application shall use a single-page grid layout:
- a top bar with the app title and an Add Coin button,
- a responsive grid of coin cards below,
- an empty-state message centered on screen when no coins are tracked.

No mobile-specific layout is required.

### 7. Coin Cards
Each coin card shall display:
- coin name
- symbol
- coin image (from CoinGecko market response)
- current price in USD (formatted with 2 decimal places and thousands separator)
- 24-hour price change percentage (green if positive, red if negative)
- a remove button (✕)

Clicking the remove button removes the card immediately with no confirmation.

### 8. Add Coin Flow
The Add Coin button shall reveal a native multi-row `<select>` listbox (using the `size` attribute) listing only the coins not yet tracked. Selecting a coin adds it to the grid immediately and closes the picker. The Add Coin button hides itself when all 20 coins are already tracked.

Keep this flow lightweight — no custom search, no autocomplete.

### 9. API Key Handling
On application load:
1. Read the API key from `localStorage`.
2. If not found, call `window.prompt("Enter your CoinGecko Demo API key:")`.
3. Save the returned key to `localStorage` and use it for all requests.
4. If a request returns HTTP 401 or 403, clear the stored key and re-prompt immediately.

No custom modal or styled input is needed for key entry.

### 10. Data and Refresh
The application shall:
- fetch market data for all tracked coins using a single API call,
- repeat this fetch using `setInterval` at a dynamic interval,
- stop polling when no coins are tracked,
- restart polling when a coin is added or removed (recalculate the interval each time).

Two constants govern the interval: `BASE_POLL_INTERVAL = 20000` (ms) and `EXTRA_INTERVAL_PER_COIN = 2000` (ms). The effective interval is `BASE_POLL_INTERVAL + trackedIds.length × EXTRA_INTERVAL_PER_COIN` (e.g. 22 s for 1 coin, 30 s for 5 coins, 60 s for 20 coins).

### 11. Rate Limiting (HTTP 429)
CoinGecko's free-tier API enforces request rate limits. The app shall handle rate-limit errors gracefully:

- **HTTP 429**: if the server responds with status 429, throw an error with `.status = 429`.
- **CORS preflight failure**: CoinGecko can block the CORS OPTIONS preflight when rate-limiting, causing a network-level `TypeError` before a response is received. Catch this in `fetchMarkets` and re-throw as an error with `.status = 429` so the caller treats it identically.
- **Rate Limit Modal**: when `App.jsx` catches a 429 error, set a `rateLimitError` state flag and render `<RateLimitModal>` as an overlay.

### 12. Rate Limit Modal
`RateLimitModal` is a centered overlay displayed when a 429 is encountered.

Behaviour:
- Starts a 30-second countdown on mount using `setTimeout` (1-second ticks).
- Auto-dismisses (calls `onDismiss`) when the countdown reaches 0.
- Provides a Dismiss button to close immediately.
- Displays a plain-language explanation and suggests using a longer refresh interval or a paid API key.

Visual style:
- dark overlay (`bg-black/60 backdrop-blur-sm`)
- card with yellow accent border (`border-yellow-700`)
- countdown shown in yellow
- dismiss button in yellow

### 13. CoinGecko Integration
Use the CoinGecko Demo API. Send the API key in the `x-cg-demo-api-key` request header.

#### 13.1 Authentication
Base URL: `https://api.coingecko.com/api/v3`

All requests include:
```
x-cg-demo-api-key: <apiKey>
```

#### 13.2 Market Data Endpoint
**Endpoint:** `GET /coins/markets`

This is the only endpoint used by the app.

Query parameters:
- `vs_currency=usd`
- `ids=<comma-separated tracked coin ids>`

Fields used from the response:
- `id`
- `symbol`
- `name`
- `image`
- `current_price`
- `price_change_percentage_24h`

Expected simplified output model after adapter mapping:
```js
{
  id: "bitcoin",
  symbol: "BTC",
  name: "Bitcoin",
  image: "https://...",
  currentPrice: 70187,
  changePercent24h: 3.12
}
```

#### 13.3 Error Handling in fetchMarkets
```
HTTP 401 / 403  → throw Error with .status = 401 or 403  (triggers re-prompt)
HTTP 429        → throw Error with .status = 429         (triggers rate limit modal)
network failure → catch TypeError, throw Error with .status = 429
other non-ok    → throw Error("API error: <status>")
```

### 14. Persistence
Store in `localStorage`:
- tracked coin IDs under key `crypto_tracked_coins` (array serialised as JSON)
- API key under key `crypto_api_key` (plain string)

Use simple helper functions with no abstraction overhead:
```js
getTrackedCoins()    // returns string[]
setTrackedCoins(ids) // saves string[]
getApiKey()          // returns string | null
setApiKey(key)       // saves string
clearApiKey()        // removes key
```

`getTrackedCoins` must return `[]` (not throw) when the stored value is absent or invalid JSON.

### 15. Frontend Architecture
Keep the structure flat and minimal. No routing library is needed.

Required structure:
```
src/
  App.jsx             # Root component: API key gate, grid layout, add/remove logic, polling
  CoinCard.jsx        # Single coin card display component
  AddCoinButton.jsx   # Button + multi-row select listbox (hides when all coins tracked)
  RateLimitModal.jsx  # Overlay modal shown on HTTP 429 with 30-second auto-dismiss countdown
  coins.js            # Hardcoded COINS list (20 entries)
  coingecko.js        # fetchMarkets(ids, apiKey) → normalized card data
  storage.js          # localStorage helpers
  main.jsx            # React entry point

tests/
  coingecko.test.js   # Market data adapter, request building, and error handling tests
  storage.test.js     # localStorage helper tests
```

Implementation recommendations:
- keep `App.jsx` focused on orchestration only,
- isolate all CoinGecko API access in `coingecko.js`,
- isolate all localStorage access in `storage.js`,
- keep components small and stateless where possible,
- use a `useRef` to track the latest API key inside the polling interval closure,
- use a `useRef` to track the latest tracked coin count so the interval closure can compute the current effective poll interval without stale closures.

### 16. Visual Style
The app should look modern and related to the crypto world:
- dark background (`bg-gray-950`),
- cards with subtle borders (`border-gray-700`) and blue glow on hover (`hover:border-blue-800 hover:shadow-blue-900/30`),
- green for positive price changes (`text-green-400`), red for negative (`text-red-400`),
- clean sans-serif typography,
- minimal but polished.

Use Tailwind CSS utility classes to achieve this. No additional UI libraries are required.

### 17. Unit Testing Approach
Testing shall use Vitest only. No React Testing Library or Playwright.

Focus areas:
- **request building**: verify correct URL, query parameters, and headers
- **response adapter**: verify that raw CoinGecko response maps correctly to the internal card model
- **error handling**: verify status-tagged errors for 401, 403, 429, and CORS/network failures
- **storage helpers**: verify get/set/clear behavior using a mocked `localStorage`

Error handling tests must cover:
- 401 → rejects with `{ status: 401 }`
- 403 → rejects with `{ status: 403 }`
- 429 → rejects with `{ status: 429 }`
- network/preflight failure (rejected fetch Promise) → rejects with `{ status: 429 }`
- generic non-ok status (e.g. 500) → rejects with message `"API error: 500"`

Unit tests must not make live API calls. Use `vi.stubGlobal('fetch', ...)` for mocking.

### 18. Technical Stack
- React
- JavaScript and JSX
- Vite
- Tailwind CSS
- CoinGecko Demo API
- browser localStorage
- Vitest (unit tests only)

### 19. Success Criteria
The project is successful if the app:
- loads and prompts for the API key when missing,
- displays a grid of tracked coin cards with live market data,
- refreshes card data at a dynamic interval (20 s base + 2 s per tracked coin),
- allows adding coins from the predefined list via a listbox dropdown,
- allows removing any coin immediately,
- persists the tracked list and API key across reloads,
- shows a correct empty state when no coins are tracked,
- shows a rate limit modal with 30-second auto-dismiss on HTTP 429 or CORS preflight failure,
- has passing unit tests for the adapter, error handling, storage, and core logic.

### 20. Build Priorities
1. project setup (Vite + React + Tailwind)
2. predefined coin list and localStorage helpers
3. API key prompt flow
4. CoinGecko market data fetch and adapter (including 429 and CORS preflight error handling)
5. coin card component
6. grid layout and add/remove flow
7. dynamic polling interval (BASE_POLL_INTERVAL + trackedIds.length × EXTRA_INTERVAL_PER_COIN)
8. rate limit modal (RateLimitModal.jsx) with 30-second auto-dismiss
9. empty state
10. unit tests (including 429 and preflight failure cases)
