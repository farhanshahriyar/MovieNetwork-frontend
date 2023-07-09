import React, { useContext, useState } from 'react';
import axios from 'axios';
import FormContainer from '../Components/FormContainer';
import { Button } from 'react-bootstrap';
import { Context } from '../Auth';
import { toast } from 'react-hot-toast';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await resetPassword(email);
      toast.success("Email sent successfully! Please check your email spam folder");
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

