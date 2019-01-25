import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path={'/'} exact component={Landing} />
          <Redirect to={'/'} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
