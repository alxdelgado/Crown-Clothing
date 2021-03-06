import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect'

import './App.css';

// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component'; 
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import CheckoutPage from './pages/checkout/checkout.component';  
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; 
import { setCurrentUser } from './redux/user/user.actions'; 
import { selectCurrentUser } from './redux/user/user.selector'; 

import ErrorBoundary from './components/error-boundary/error-boundary.component'; 

// Lazy Loading 
const HomePage = lazy(() => import ('./pages/homepage/homepage.component')); 
const ShopPage = lazy(() => import ('./pages/shop/shop.component')); 
const SignInAndSignUpPage = lazy(() => import ('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')); 
const CheckoutPage = lazy(() => import ('./pages/checkout/checkout.component')); 


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
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/signin' render={() => 
                this.props.currentUser ? (
                  <Redirect to='/' />
                  ) : (
                    <SignInAndSignUpPage />
                  )
                } 
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) // dispatch() method is a way for redux to know that whatever you are passing is going to be an action object that it's going to pass to every reducer. 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
