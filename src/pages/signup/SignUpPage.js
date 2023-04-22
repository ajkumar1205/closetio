import React from 'react'
import SignUpForm from './SignUpForm'
import Logo from '../../components/Logo'
import RightImage from '../../components/RightImage'

const SignUpPage = () => {
  return (
    <div class="container">
        <div class="left">
            <Logo/>
            <SignUpForm/>
        </div>
        <RightImage/>
    </div>
  )
}

export default SignUpPage