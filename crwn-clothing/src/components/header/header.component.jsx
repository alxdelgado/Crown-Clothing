import React from 'react'; 

import { Link } from 'react-router-dom';

import { connect } from 'react-redux'; // higher order component that lets us modify our component to have access to things related to redux. 

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'; 

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss'; 

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }

            <CartIcon />
            <CartDropdown />
        </div> 
    </div>
);

const mapStateToProps = state => ({ // 'state' is the top level root-reducer
    currentUser: state.user.currentUser // pass the currentUser prop and the value is referencing the root-reducer which takes the value 'userReducer' and from there we get the currentUser value (located in userReducer). 
});

export default connect(mapStateToProps)(Header); // connect method = returns another juiced up header component. 

