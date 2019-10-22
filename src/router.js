import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

const RouterConfig = ({ history }) => ( 
    <Router history={history}>
      <Route path="/" component={IndexPage} />
    </Router>
    )

export default RouterConfig;