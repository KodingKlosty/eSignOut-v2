import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './scss/main.scss'

// Components
import Nav from './component/Nav'
import Landing from './pages/Landing'
import SignIn from './pages/SignIn'
import Footer from './component/Footer'
import Header from './component/Header'
import Register from './pages/Register'


function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}  />
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
