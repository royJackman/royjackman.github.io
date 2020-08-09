import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
