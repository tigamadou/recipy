import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../components/Home/Home';
import Categories from '../components/Categories/Categories';
import Single from '../components/Single/Single';
import Error404 from '../components/Errors/Error404';

const AppRouter = () => (
  <Switch>
    <Route exact path="/recipe/:id" component={Single} />
    <Route exact path="/category/:categoryName" component={Categories} />
    <Route exact path="/" component={Home} />
    <Route path="*" component={Error404} />
  </Switch>
);

export default AppRouter;
