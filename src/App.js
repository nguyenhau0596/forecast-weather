import { Route, HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ROUTES } from 'routes';
import reducer from 'redux/reducers';
import saga from 'redux/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(saga);

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          {ROUTES.map((route, idx) => <Route
            path={route.path}
            extract={route.extract}
            component={route.component}
            key={idx}
          />)}
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
