import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    },
    onSubmit: values =>{
      setTimeout(() => {
        alert('Login Successful')
      }, 1000);
      console.log('form:', values);

    },
    validate: values => {
      let errors = {};
      if(!values.email){
        errors.email = 'Field Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          values.email
        )
      ) {
        errors.email = 'Invalid email address';
      };
      if(!values.password) errors.password = 'Field Required';
      return errors;
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input type="text" placeholder="Enter your email" name="email" id="emailField" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div style={{color:'red'}} id={'emailError'}>{formik.errors.email}</div>: null}
        <div>Password</div>
        <input type="text" placeholder="Enter your password" name="password" id="pswField" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div style={{color:'red'}} id={'pswError'}>{formik.errors.password}</div>: null}
        <button type="submit" id="submitBtn">Submit</button>
        <p>
          The app is ready! You can proceed with the task instructions. TODO:
          build you form here.
        </p>
      </form>
    </div>
  );
}

export default App;
