import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./reduxStore"
import './scss/main.scss'
// Actions
import { loadUser } from "./actions/authActions";

// Components
import Nav from './component/Nav'
import Landing from './pages/Landing'
import SignIn from './pages/SignIn'
import Footer from './component/Footer'
import Header from './component/Header'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import NewOrg from './pages/NewOrg';
import ProtectedRoute from './component/ProtectedRoute'
import Success from './pages/Success'


class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }
  
  render(){
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Router>
            <Nav />
            <div>
            <Switch>
              <Route exact path="/" component={Landing}  />
              <Route path="/login" component={SignIn} />
              <Route path="/register" component={Register} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <ProtectedRoute path="/teamDash" />
              <ProtectedRoute path="/userUpdate" />
              <Route path="/createCompany" component={NewOrg} />
              <Route path="/success" component={Success} />
            </Switch>
            </div>
          </Router>
          <Footer />
        </div>
      </Provider>
    );
  }
}


export default App;
