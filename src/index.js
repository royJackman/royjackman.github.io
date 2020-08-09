import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import Header from './components/ui/header';
import Footer from './components/ui/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = (
  <Router>
    <Header />
    <div className="switch">
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </div>
    <Footer />
  </Router>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
