import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DownloadPage from './downloadPage';
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
        <Route path='/search/:keyword' exact>
          <ResultPage />
        </Route>
        <Route path='/download/:keyword' exact>
          <DownloadPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default TopPage;
