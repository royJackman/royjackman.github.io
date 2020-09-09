import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'
import Homepage from './components/homepage/Homepage'
import Resume from './components/resume/Resume'
import * as serviceWorker from './serviceWorker'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = (
  <Router basename={`${process.env.PUBLIC_URL}/`}>
    <Header />
    <div className="switch">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/resume' component={Resume} />
      </Switch>
    </div>
    <Footer />
  </Router>
)

ReactDOM.render(router, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
