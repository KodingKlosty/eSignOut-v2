import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./reduxStore"
import './scss/main.scss'

// Components
import Nav from './component/Nav'
import Landing from './pages/Landing'
import SignIn from './pages/SignIn'
import Footer from './component/Footer'
import Header from './component/Header'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}  />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
