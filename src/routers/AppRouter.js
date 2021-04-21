import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Categories from '../components/Categories/Categories';
import Single from '../components/Single/Single';
import Error404 from '../components/Errors/Error404';

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/recipe/:id" component={Single} />
      <Route exact path="/category/:categoryName" component={Categories} />
      <Route exact path="/" component={Home} />
      <Route path="*" component={Error404} />
    </Switch>
  </Router>
);

export default AppRouter;
