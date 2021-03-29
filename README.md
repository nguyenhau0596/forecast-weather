# forecast-weather
The web application allows user to search for a location and see its 5 days forecast weather.

## Live demo
http://sentra.fun/

## Setup
- Setup proxy server. Refer https://github.com/nguyenhau0596/metaweather-proxy
- Clone repo
- Install dependencies: `npm install`
- Setup server API in `.env`
- Start dev server: `npm start`
- Run test: `npm run test`
- Build: `npm run build`

## Project structure
```
├───public
└───src
    ├───components
    ├───configs
    ├───constants
    ├───pages
    │   └───Home
    ├───redux  
    ├───services
    ├───styles
    └───utils
```

## Project workflow
- On first load, fetch and show data for default location.
- When user searchs for location, call API to get list of matched locations and show them on selection input.
- When user selects a location in above result, call API to fetch and show the forecast weather.

## Tech stack
- `react`: library for building user interfaces
- `axios`: fetching API
- `react-bootstrap`, `bootstrap`: built UI components
- `react-select`: built select input
- `react-redux`, `redux-saga`, `immutable`, `reselect`: state management and its supporting libs
- `moment`: date utilities
- `react-router-dom`: routing react pages

## Future improvements
- Detect user location and show its data on first load.
- Handle page not found.
- Need more unit tests.
- Restructure redux state by module/page when application grows.
