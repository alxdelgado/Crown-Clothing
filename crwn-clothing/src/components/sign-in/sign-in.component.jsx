import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component'; 
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils'; 

import './sign-in.styles.scss'; 

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''})

    const { email, password } = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        emailSignInStart(email, password);
    } 

    const handleChange = (e) => {
        const { value, name } = e.target; 
        
        setCredentials({ ...userCredentials, [name]: value });
    }


    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form className='sign-in-form' onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email'
                    handleChange={handleChange} 
                    value={email}
                    label='email' 
                    required 
                    />

                <FormInput 
                    name='password' 
                    type='password' 
                    handleChange={handleChange} 
                    value={password}
                    label='password'
                    required 
                    />
                
                <div className='buttons'>
                <CustomButton type='submit'> Sign In </CustomButton> 
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                {''}
                Sign In With Google{''}
                </CustomButton> 
                </div>
            </form>

        </div>
    )
};

export default SignIn;