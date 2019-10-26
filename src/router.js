import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LiarList from './routes/LiarList';

const RouterConfig = ({ history }) => ( 
    <Router history={history}>
      <div>
        <Route path="/" component={IndexPage} exact/>
        <Route path="/LiarList" component={LiarList} />
      </div>
    </Router>
    )

export default RouterConfig;