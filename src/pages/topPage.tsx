import React, { FC } from 'react';
// ブラウザルーターをルータで扱う。
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopHeader from '../components/topPage/topHeader';
import TopMain from '../components/topPage/topMain';
import ResultPage from './resultPage';

const TopPage: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <TopHeader />
          <TopMain />
        </Route>
        <Route path='/switch/:keyword' exact>
          <ResultPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default TopPage;
