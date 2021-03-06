import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../containers/HomeComponent/HomeComponent';
import Categories from '../containers/Categories/Categories';
import Single from '../containers/Single/Single';
import Error404 from '../components/Errors/Error404';

const AppRouter = () => (
  <Switch>
    <Route path="/recipe/:id" component={Single} />
    <Route path="/category/:categoryName" component={Categories} />
    <Route exact path="/" component={Home} />
    <Route path="*" component={Error404} />
  </Switch>
);

export default AppRouter;
