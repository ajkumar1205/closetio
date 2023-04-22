import React from 'react';
import { useState } from 'react';
import FormField from '../../components/FormField';
import { Link } from 'react-router-dom';
import Submit from '../../components/Submit';

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event){
    setUsername(event.target.value);
  }

  function handlePasswordChange(event){
    setPassword(event.target.value);
  }

  function handleFormSubmit(event){
    event.preventDefault();
    console.log({
      username,
      password
    })
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
        <div className="header">
            <h1 className="create">Login</h1>
        </div>
        <FormField lable="Username" type="text" placeholder="Enter Username" handler={handleUsernameChange} value={username} />
        <FormField lable="Password" type="password" placeholder="Enter Password" handler={handlePasswordChange} value={password} />
        <Submit/>
        <div className="det1">
            Haven't Registered Yet? <Link to='/signup'>Signup</Link>
        </div>
    </form>
  )
}

export default LoginForm;