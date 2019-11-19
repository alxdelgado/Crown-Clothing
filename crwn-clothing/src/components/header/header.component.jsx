import React from 'react'; 

import { connect } from 'react-redux'; // higher order component that lets us modify our component to have access to things related to redux. 
import { createStructuredSelector } from 'reselect'; 

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'; 
import { selectCartHidden } from '../../redux/cart/cart.selectors'; 
import { selectCurrentUser } from '../../redux/user/user.selector'; 

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            
            {
                currentUser ?
                <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }

            <CartIcon />
            {hidden ? null: <CartDropdown />}
        </OptionsContainer> 
    </HeaderContainer>
);

const mapStateToProps = (state) => createStructuredSelector({ // 'state' is the top level root-reducer
    currentUser: selectCurrentUser, // pass the currentUser prop and the value is referencing the root-reducer which takes the value 'userReducer' and from there we get the currentUser value (located in userReducer).
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header); // connect method = returns another juiced up header component. 

