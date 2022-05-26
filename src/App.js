import './App.css';
import { useState } from 'react';

import FormInputs from './components/FormInputs';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character",
      label: "Username",
      required: "true",
      pattern: "^[A-Za-z0-9]{3,16}$"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter valid email",
      label: "Email",
      required: "true"
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "8-20 characters. Should include a letter, number and special character",
      label: "Password",
      pattern: `^(?=.*[0,9]d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$`,
      required: "true"
    },
    {
      id: 5,
      name: "confirm password",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match.",
      label: "Password",
      pattern: values.password,
      required: "true"
    }
  ]



const handleSubmit = (e) => {
  e.preventDefault()
}

const onChange = (e) => {
  setValues({...values,[e.target.name]: e.target.value})
}
console.log(values)
  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
    <h1>Register</h1>
    {inputs.map((input) => (
      <FormInputs key={input.id} {...input} value={values[input.name]} onChange={onChange} />
    ))}
      <button>Submit</button>
    </form>
    
    </div>
  );
}

export default App;
