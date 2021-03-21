import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './configureStore';
import { Home } from './components';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
