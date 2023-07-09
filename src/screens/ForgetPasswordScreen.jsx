// import React from 'react'
// import FormContainer from '../Components/FormContainer'
// import { Button } from 'react-bootstrap'

// const ForgetPasswordScreen = () => {
//   return (
//     <FormContainer>
//         <h1>Forget Password </h1>
//         <p class='bg-secondary'>Enter your email address and we'll send you a link to reset your password.</p>
//         <form className='text-center'>
//             <div class="form-group">
//                 <input type="email" placeholder="Enter email address here..." class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//                 <small id="emailHelp" class="form-text text-danger text-decoration-underline">*We'll never share your email with anyone else. Within 24h we will contact with you for updated password</small>
//             </div>
//                 <Button type="submit" class="btn btn-primary mt-4">Submit</Button>
//         </form>


//     </FormContainer>
//   )
// }

// export default ForgetPasswordScreen

import React, { useState } from 'react';
import axios from 'axios';
import FormContainer from '../Components/FormContainer';
import { Button } from 'react-bootstrap';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/forget-password', { email });
      console.log(response.data); // Logs the server response
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormContainer>
      <h1>Forget Password </h1>
      <p className='bg-secondary'>Enter your email address and we'll send you a link to reset your password.</p>
      <form className='text-center' onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Enter email address here..." 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            onChange={e => setEmail(e.target.value)} 
          />
          <small id="emailHelp" className="form-text text-danger text-decoration-underline">*We'll never share your email with anyone else. Within 24h we will contact with you for updated password</small>
        </div>
        <Button type="submit" className="btn btn-primary mt-4">Submit</Button>
      </form>
    </FormContainer>
  )
}

export default ForgetPasswordScreen;

