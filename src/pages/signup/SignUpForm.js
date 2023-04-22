import React from 'react'
import { useState } from 'react'
import FormField from '../../components/FormField'
import SkinToneSelector from './SkinToneSelector'
import BodyShapeSelector from './BodyShapeSelector'
import GenderSelector from './GenderSelector'
import Submit from '../../components/Submit'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [skinTone, setSkinTone] = useState('');
  const [bodyShape, setBodyShape] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(25);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleMobileNumberChange(event) {
    setMobileNumber(event.target.value);
  }

  function handleSkinToneChange(event) {
    setSkinTone(event.target.value);
  }

  function handleBodyShapeChange(event) {
    setBodyShape(event.target.value);
  }

  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      email,
      password,
      username,
      firstName,
      lastName,
      mobileNumber,
      skinTone,
      bodyShape,
      gender,
      age
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="header">
        <h1 className="create">Create Account</h1>
      </div>
      <FormField lable="User Name" type="text" placeholder="Enter User Name"  handler={handleUsernameChange} value={username} />
      <div className="slider">
        <lable className="rs">Age</lable>
        <input type="range" min="0" max="100" value={age} onChange={handleAgeChange}/>
        <p id="rangeValue">{age}</p>
      </div>
      <FormField lable="First Name" type="text" placeholder="John" handler={handleFirstNameChange} value={firstName}/>
      <FormField lable="Last Name" type="text" placeholder="Doe" handler={handleLastNameChange} value={lastName} />
      <GenderSelector handler={handleGenderChange} />
      <FormField lable="Mobile No." type="number" placeholder="Enter Mobile No." handler={handleMobileNumberChange} value={mobileNumber} />
      <FormField lable="Email" type="email" placeholder="Enter Email" handler={handleEmailChange} value={email}/>
      <FormField lable="Password" type="password" placeholder="Enter Password" handler={handlePasswordChange} value={password} />
      <SkinToneSelector handler={handleSkinToneChange} />
      <BodyShapeSelector handler={handleBodyShapeChange} />
      <Submit />
      <div class="det1">Already a User? <Link to='/login'>Login</Link></div>
    </form>
  )
}

export default SignUpForm