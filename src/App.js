import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
// import Profile from './Profile';
// import Login from './Login';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }
  loginHandler = (user) => {
    this.setState({
      user,
    })
  }
  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }
  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              <BestBooks />
              {/* TODO(Done): if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {/* {this.state.user ? <BestBooks /> : <Login onLoginSubmit={this.loginHandler} handleFormInput={this.formInputHandler} />} */}
            </Route>
            {/* TODO(Done): add a route with a path of '/profile' that renders a `Profile` component */}
            {/* <Route path="/profile">
            {this.state.user ? <Profile user={this.state.user} /> : <h3>No Profile Found </h3>} */}
            {/* </Route> */}
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}
export default App;
