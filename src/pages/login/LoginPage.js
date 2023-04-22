import React from 'react'
import RightImage from '../../components/RightImage';

import Logo from '../../components/Logo';
import LoginForm from './LoginForm';


const AuthPage = () => {

  return (
    <div class="container">
        <div class="left">
            <Logo/>
            <LoginForm/>
        </div>
        <RightImage/>
    </div>
  )
}

export default AuthPage;