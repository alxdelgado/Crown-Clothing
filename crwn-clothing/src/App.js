import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'; 

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'; 
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'; 
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; 
import { setCurrentUser } from './redux/user/user.actions';  

class App extends React.Component {

  unsubscribeFromAuth = null;

  // Lifecycle method handling our user authentication
  componentDidMount() {

    const { setCurrentUser } = this.props; 

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth); 

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id, 
              ...snapShot.data() 
          });
          // console.log(this.state) 
        }); 
      } else {
        setCurrentUser(userAuth); 
      }
    })
  };

  // Will log the user out of the app 
  componentWillUnmount() {
    this.unsubscribeFromAuth(); 
  }

  // Returns the indivdidual pages to our application. 
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) // dispatch() method is a way for redux to know that whatever you are passing is going to be an action object that it's going to pass to every reducer. 
});

export default connect(null, mapDispatchToProps)(App);
