import React, { useContext } from 'react';
import { useState } from 'react';
import FormField from '../../components/FormField';
import { Link } from 'react-router-dom';
import Submit from '../../components/Submit';
import AuthContext from '../../utils/UserProviderContext';

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let {loginUser} = useContext(AuthContext)

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
        <FormField lable="Username" type="text" placeholder="Enter Username" handler={handleUsernameChange} value={username} name ="username"/>
        <FormField lable="Password" type="password" placeholder="Enter Password" handler={handlePasswordChange} value={password} name="password" />
        <Submit clickHandler={loginUser}/>
        <div className="det1">
            Haven't Registered Yet? <Link to='/signup'>Signup</Link>
        </div>
    </form>
  )
}

export default LoginForm;