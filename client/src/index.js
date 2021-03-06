import 'babel-polyfill';
import './global-css/normalize.css';
document.title = 'Swello';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './components/layout/AppContainer';
import MapContainer from './components/map/MapContainer';
import FullContainer from './components/full-forecast/FullContainer';
import Error from './components/common/Error';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { getStarred } from './actions';
// import appHistory from './appHistory';
// import redirectBrowsers from './redirectBrowsers';
// redirectBrowsers();

const store = configureStore();

store.dispatch(getStarred()); // request starred items from localStorage


render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Redirect from="/" to="map"/>
      <Route path="/" component={AppContainer}>
        <Route path="/drawmap" component={MapContainer}/>
        <Route path="/map" component={MapContainer}/>
        <Route path="/map/mini/:lat/:long(/:zoneId)" component={MapContainer}/>
        <Route path="/map/favorite/:favoriteId" component={MapContainer}/>
        <Route path="/full/:lat/:long(/:zoneId)" component={FullContainer}/>
        <Route path="/favorite/:favoriteId" component={FullContainer}/>
      </Route>
      <Route path="/error" component={Error}/>
    </Router>
  </Provider>,
  document.body
);
